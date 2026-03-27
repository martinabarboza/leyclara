import { motion } from "framer-motion";
import { ArrowRight, Scale, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-[#0B3C5D] px-8 py-16 md:px-16 md:py-20 text-center"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-cyan-400 blur-[80px]"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
              transition={{ duration: 10, repeat: Infinity, delay: 2 }}
              className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-emerald-400 blur-[80px]"
            />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              100% gratuito para todos los uruguayos
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              ¿Tenés dudas legales?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
              No esperes a que sea urgente. Conocé tus derechos hoy, en lenguaje
              que todos podemos entender.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#consultar"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("consultar")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0B3C5D] font-bold text-base rounded-xl hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Empezar ahora
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/registro"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold text-base rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <Scale className="w-5 h-5" />
                Crear cuenta gratuita
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-white/10">
              {[
                { icon: "🔒", text: "Sin datos personales" },
                { icon: "📋", text: "Fuentes oficiales IMPO" },
                { icon: "🇺🇾", text: "Para Uruguay" },
                { icon: "⚡", text: "Respuesta inmediata" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-white/60 text-sm"
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
