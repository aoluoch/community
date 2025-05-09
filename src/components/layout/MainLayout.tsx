import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "../shared/BackToTop";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
