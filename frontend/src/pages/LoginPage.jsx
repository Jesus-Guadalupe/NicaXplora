import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoginComp from "../components/LoginComp";
import SplashScreen from "../components/SplashScreen";

const LoginPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <SplashScreen key="splash" onFinish={() => setLoading(false)} />
      ) : (
        // animación de entrada para el componente de login
        <motion.div
          key="login"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="min-h-screen flex items-center justify-center bg-gray-100"
        >
          <LoginComp />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginPage;