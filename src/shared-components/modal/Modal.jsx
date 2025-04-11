import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // TODO: make it true
      setShowModal(false);
    }, 2000); // ২ সেকেন্ড পর মডাল দেখাবে

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = () => {
    setShowModal(false);
    // navigate page
  };

  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center"
      >
        {/* Modal Content */}
        <h2 className="text-3xl font-bold text-gray-900">
          🍕 Get 50% Off on Your First Order!
        </h2>
        <p className="text-gray-600 mt-2">
          Order delicious meals from your favorite restaurants. Limited time
          offer!
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-red-600 transition"
            onClick={handleNavigate}
          >
            View Deals
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
            onClick={handleClose}
          >
            Maybe Later
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
