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







export const useAuthStore = create((set, get) => ({
   user: null,
   authLoading: true,










   checkAuth: () => {
    const unsubscribe = onAuthStateChanged (auth, (currentUser) => {
        set({user: currentUser})


        // JWT create
      const sendToken = async () => {
        const user = { email: currentUser?.email };
        try {
          await axios.post(`${API_LINK}/jwt`, user, { withCredentials: true });
        } catch (err: any) {
          Swal.fire({ title: err.message, icon: "error" });
        } finally {
          set({ loading: false });
        }
      };

      // JWT delete
      const deleteToken = async () => {
        try {
          await axios.delete(`${API_LINK}/logout`, { withCredentials: true });
        } catch (err: any) {
          Swal.fire({ title: err.message, icon: "error" });
        } finally {
          set({ loading: false });
        }
      };

      // 👇 যেটা দরকার সেটা চালু করো
      // if (currentUser?.email) sendToken();
      // else deleteToken();

      set({ loading: false }); // TEMP: remove this if token logic is active
    })

    return unsubscribe;
   }
}))