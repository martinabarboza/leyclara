import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  ShieldCheck,
  Building2,
  FileText,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
};

const trustBadges = [
  { icon: ShieldCheck, label: "Verificado por IMPO" },
  { icon: Building2, label: "Fuentes del Parlamento" },
  { icon: FileText, label: "200+ leyes documentadas" },
];

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#0B3C5D]"
      style={{ paddingTop: 32 }}
    >
      {/* ── Rich background ───────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Fine grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {/* Top radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(6,182,212,.18) 0%, transparent 70%)",
          }}
        />
        {/* Bottom-left accent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at -10% 110%, rgba(52,211,153,.12) 0%, transparent 60%)",
          }}
        />
        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Decorative ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-white/[0.05]"
        />
        <div className="absolute -top-16 -right-16 w-[450px] h-[450px] rounded-full border border-white/[0.04]" />
        {/* Floating ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.055, y: [0, -14, 0] }}
          transition={{
            opacity: { duration: 1.5, delay: 1 },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-28 right-[7%] text-[180px] select-none hidden xl:block"
        >
          ⚖️
        </motion.div>
      </div>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 lg:py-36">
          <div className="max-w-3xl">
            {/* Eyebrow badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.15] bg-white/[0.07] backdrop-blur-sm">
                <span className="text-sm">🇺🇾</span>
                <span className="text-[11.5px] font-semibold text-white/70 tracking-[0.04em]">
                  Servicio ciudadano · Uruguay
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-medium text-white/35 tracking-wide">
                  Activo
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-bold text-white leading-[1.04] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.4rem,5.5vw,4.2rem)" }}
            >
              Leyes Uruguayas, <br className="hidden sm:block" />
              <span className="relative inline-block mt-1">
                <span
                  style={{
                    background:
                      "linear-gradient(135deg,#67e8f9 0%,#6ee7b7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Simplificadas
                </span>
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{
                    delay: 0.9,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full origin-left"
                  style={{
                    background: "linear-gradient(90deg,#67e8f9,#6ee7b7)",
                  }}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[1.15rem] md:text-[1.3rem] text-white/60 leading-relaxed mb-10 max-w-xl font-light"
            >
              Entendé tus derechos y obligaciones en lenguaje claro, sin jerga
              legal.{" "}
              <em className="not-italic text-white/80 font-medium">
                Porque la ley es para todos.
              </em>
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <button
                onClick={() => scrollTo("consultar")}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-[14px] bg-white text-[#0B3C5D] font-bold text-[15px] rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  boxShadow:
                    "0 2px 8px rgba(0,0,0,.14),0 8px 24px rgba(0,0,0,.09)",
                }}
              >
                Empezar a Preguntar
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollTo("base-legal")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-[14px] text-white font-semibold text-[15px] rounded-xl border border-white/[0.18] bg-white/[0.07] hover:bg-white/[0.13] transition-all duration-200 backdrop-blur-sm"
              >
                <BookOpen className="w-4 h-4" />
                Explorar Base Legal
              </button>
            </motion.div>

            {/* Divider + trust */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <div className="h-px w-48 bg-white/10 mb-7" />
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {trustBadges.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="w-[15px] h-[15px] text-emerald-400/80" />
                    <span className="text-[12.5px] text-white/45 font-medium">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Stats strip ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="relative z-10 border-t border-white/[0.08]"
        style={{ background: "rgba(7,37,64,0.6)", backdropFilter: "blur(8px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0">
            {[
              { value: "200+", label: "Leyes explicadas" },
              { value: "100%", label: "Gratuito" },
              { value: "IMPO", label: "Fuentes oficiales" },
              { value: "24 / 7", label: "Siempre disponible" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col px-6 py-1 ${i > 0 ? "border-l border-white/[0.08]" : ""}`}
              >
                <span className="text-[1.35rem] font-bold text-white tracking-tight leading-none">
                  {s.value}
                </span>
                <span className="text-[10.5px] text-white/35 font-semibold uppercase tracking-[0.1em] mt-1.5">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.button
        onClick={() => scrollTo("consultar")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-24 right-10 hidden xl:flex flex-col items-center gap-1.5 text-white/20 hover:text-white/45 transition-colors"
      >
        <span
          className="text-[9px] font-bold uppercase tracking-[0.18em]"
          style={{ writingMode: "vertical-rl" }}
        >
          Explorar
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
        >
          <path d="M0 64L480 20L960 42L1440 0V64H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
