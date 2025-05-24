import { create } from "zustand";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import type { User } from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";
import Swal from "sweetalert2";
import { publicAxios } from "../lib/axios";

const API_LINK = import.meta.env.VITE_API_LINK as string;

const googleProvider = new GoogleAuthProvider();

interface AuthResponse {
  message: string;
  isSuccess: boolean;
}

interface LoginData {
  email: string;
  password: string;
}

interface SignupData extends LoginData {
  fullName?: string;
  name?: string;
  image?: string;
  robot?: boolean;
}

interface UpdateUserData {
  fullName?: string;
  image?: string;
}

interface AuthState {
  user: User | null;
  authLoading: boolean;
  signup: (data: SignupData) => Promise<AuthResponse | void>;
  login: (data: LoginData) => Promise<AuthResponse>;
  logout: () => Promise<AuthResponse>;
  googleSignin: () => Promise<AuthResponse>;
  updateUser: (data: UpdateUserData) => Promise<AuthResponse>;
  checkAuth: () => () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  authLoading: true,

  signup: async (data) => {
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const firebaseUser = credential.user;
      set({ user: firebaseUser });

      await updateProfile(auth.currentUser!, {
        displayName: data.fullName,
        photoURL: data.image,
      });

      const { data: userData } = await publicAxios.post("auth/users", {
        name: data.name,
        email: data.email,
        image: data.image,
        isRobot: !data.robot,
        isBlock: false,
      });

      if (userData?.insertedId) return { message: "success", isSuccess: true };
      // eslint-disable-next-line
    } catch (error: any) {
      console.error("Signup error:", error.message);
      set({ user: null });
      return { message: "unsuccess", isSuccess: false };
    } finally {
      set({ authLoading: false });
    }
  },

  login: async (data) => {
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      set({ user: credential.user });
      return { message: "success", isSuccess: true };
      // eslint-disable-next-line
    } catch (error: any) {
      console.error("Login error:", error.message);
      set({ user: null });
      return { message: "unsuccess", isSuccess: false };
    } finally {
      set({ authLoading: false });
    }
  },

  googleSignin: async () => {
    try {
      const credential = await signInWithPopup(auth, googleProvider);
      const firebaseUser = credential.user;
      set({ user: firebaseUser });

      await publicAxios.post("auth/users", {
        name: firebaseUser?.displayName,
        email: firebaseUser.email,
        image: firebaseUser?.photoURL,
        isRobot: false,
        isBlock: false,
      });

      // TODO: 👇 make the return conditional
      return { message: "success", isSuccess: true };
      // eslint-disable-next-line
    } catch (error: any) {
      console.error("Google Signin error:", error.message);
      set({ user: null });
      return { message: "unsuccess", isSuccess: false };
    } finally {
      set({ authLoading: false });
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
      set({ user: null });
      return { message: "Logged out successfully", isSuccess: true };
      // eslint-disable-next-line
    } catch (error: any) {
      console.error("Logout error:", error.message);
      return {
        message: "An error occurred while logging out.",
        isSuccess: false,
      };
    } finally {
      set({ authLoading: false });
    }
  },

  updateUser: async (data) => {
    try {
      await updateProfile(auth.currentUser!, {
        displayName: data.fullName,
        photoURL: data.image,
      });
      return { message: "success", isSuccess: true };
      // eslint-disable-next-line
    } catch (error: any) {
      console.error("Update user error:", error.message);
      return { message: "unsuccess", isSuccess: false };
    } finally {
      set({ authLoading: false });
    }
  },

  checkAuth: () => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      set({ user: currentUser });

      const sendToken = async () => {
        try {
          await axios.post(
            `${API_LINK}/jwt`,
            { email: currentUser?.email },
            {
              withCredentials: true,
            }
          );
          // eslint-disable-next-line
        } catch (err: any) {
          Swal.fire({ title: err.message, icon: "error" });
        } finally {
          set({ authLoading: false });
        }
      };

      const deleteToken = async () => {
        try {
          await axios.delete(`${API_LINK}/logout`, { withCredentials: true });
          // eslint-disable-next-line
        } catch (err: any) {
          Swal.fire({ title: err.message, icon: "error" });
        } finally {
          set({ authLoading: false });
        }
      };

      // TODO: 👇 Uncomment the lines below for real JWT handling
      // if (currentUser?.email) sendToken();
      // else deleteToken();

      set({ authLoading: false }); // TEMP
    });

    return unsubscribe;
  },
}));
