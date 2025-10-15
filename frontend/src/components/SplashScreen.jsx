import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-slate-200 text-white z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
    >
      <motion.img
        src="/icono-nicaxplora.png"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-40 h-30 mb-4"
      />
      <h1 className="text-3xl font-semibold text-[#21441E] mt-2">NicaXplora</h1>
      <p className="text-lg text-[#21441E] mt-2">Descubre. Conecta. Explora.</p>
    </motion.div>
  );
}