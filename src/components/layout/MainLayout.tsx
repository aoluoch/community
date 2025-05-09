import { useLocation, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "@/components/shared/BackToTop";

export default function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`flex-1 ${isHomePage ? "" : "pt-16"}`}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </div>
  );
}
