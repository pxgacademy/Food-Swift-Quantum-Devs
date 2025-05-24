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

