'use client'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useVerify } from '@/hooks';

const contextClass = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

export default function Setup() {
    useVerify();
    
    return  <ToastContainer
    toastClassName={(context) =>
      contextClass[context?.type || "default"] +
      " relative flex p-1 min-h-10 rounded-lg justify-between overflow-hidden cursor-pointer"
    }
    bodyClassName={() => "text-sm font-white font-med block p-3"}
    position="top-right"
    autoClose={4000}
  />
}