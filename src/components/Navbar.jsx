import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Scale, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Consultar", href: "/#consultar" },
  { label: "Base Legal", href: "/base-legal" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isLightPage =
    location.pathname.includes("base-legal") ||
    location.pathname.includes("login") ||
    location.pathname.includes("registro");

  const isTransparent = !scrolled && !isLightPage;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const textColor = isTransparent ? "text-white" : "text-slate-900";
  const subTextColor = isTransparent ? "text-white/60" : "text-slate-500";

  return (
    <>
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 right-0 z-50 h-8 bg-[#072540] flex items-center justify-center px-4">
        <span className="text-white/50 text-[11px] hidden sm:inline">
          Plataforma oficial de consulta legal · Uruguay
        </span>
        <span className="text-white/50 text-[11px] sm:hidden">
          Consulta legal · Uruguay
        </span>
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent py-5"
            : "bg-white/90 backdrop-blur-xl py-3 border-b border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 rounded-[10px] bg-[#0B3C5D] flex items-center justify-center shadow-md">
              <Scale className="w-[18px] h-[18px] text-white" />
            </div>

            <div className="flex flex-col leading-none">
              <span className={`font-bold text-[17px] transition ${textColor}`}>
                Ley Clara
              </span>
              <span
                className={`text-[9px] uppercase tracking-[0.14em] ${subTextColor}`}
              >
                Uruguay
              </span>
            </div>
          </Link>

          {/* LINKS DESKTOP */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.href || location.hash === link.href;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-[13.5px] rounded-lg transition font-medium ${
                    isTransparent
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : isActive
                        ? "text-[#0B3C5D] bg-slate-100"
                        : "text-slate-600 hover:text-[#0B3C5D] hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* AUTH DESKTOP */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/login"
              className={`px-4 py-2 text-[13.5px] font-semibold rounded-lg ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-[#0B3C5D] hover:bg-slate-100"
              }`}
            >
              Iniciar sesión
            </Link>

            <Link
              to="/registro"
              className={`px-4 py-2 text-[13.5px] font-bold rounded-lg transition ${
                isTransparent
                  ? "bg-white text-[#0B3C5D]"
                  : "bg-[#0B3C5D] text-white hover:bg-[#0d4470]"
              }`}
            >
              Registrarse
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden w-9 h-9 flex items-center justify-center rounded-lg ${
              isTransparent ? "text-white" : "text-slate-700"
            }`}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[88px] left-0 right-0 z-30 bg-white border-b shadow-xl md:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-50"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t flex flex-col gap-2">
                <Link
                  to="/login"
                  className="btn-secondary text-sm justify-center"
                >
                  Iniciar sesión
                </Link>
                <Link
                  to="/registro"
                  className="btn-primary text-sm justify-center"
                >
                  Registrarse
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
