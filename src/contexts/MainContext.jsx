import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { ContextProvider } from "./ContextProvider";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";
import axios from "axios";

const API_LINK = import.meta.env.VITE_API_LINK;

const MainContext = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin user with email and password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user displayname and photo
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // signin user with google (only gmail account)
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // signout user
  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // send credentials to create jwt token
      const sendToken = async () => {
        const user = { email: currentUser?.email };
        try {
          await axios.post(`${API_LINK}/jwt`, user, { withCredentials: true });
        } catch (err) {
          Swal.fire({
            title: err.message,
            icon: "error",
          });
        } finally {
          setLoading(false);
        }
      };

      // delete jwt token
      const deleteToken = async () => {
        try {
          await axios.delete(`${API_LINK}/logout`, { withCredentials: true });
        } catch (err) {
          Swal.fire({
            title: err.message,
            icon: "error",
          });
        } finally {
          setLoading(false);
        }
      };

      // TODO: uncomment when necessary to create or delete jwt token
      // if (currentUser?.email) sendToken();
      // else deleteToken();

      // TODO: delete setLoading when uncommented sendToken();
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    name: "Quantum Devs",
    isDark,
    setIsDark,
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signInUser,
    updateUser,
    googleSignIn,
    signOutUser,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

MainContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContext;
