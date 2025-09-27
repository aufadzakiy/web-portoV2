"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertTriangle } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "error";
  title: string;
  message: string;
}

const Modal = ({ isOpen, onClose, type, title, message }: ModalProps) => {
  const Icon = type === "success" ? CheckCircle : AlertTriangle;
  const iconColor = type === "success" ? "text-green-500" : "text-red-500";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-white rounded-2xl shadow-xl w-full max-w-md m-4 p-8 text-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="flex justify-center items-center mb-6">
              <div className={`p-3 rounded-full bg-gray-100 ${iconColor}`}>
                <Icon size={48} />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600 mb-8">{message}</p>

            <button
              onClick={onClose}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Close
            </button>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
