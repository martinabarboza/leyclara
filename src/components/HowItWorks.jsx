import { motion } from "framer-motion";
import { MessageCircle, FileText, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Hacé tu pregunta",
    description:
      "Escribí lo que querés saber en tus propias palabras. No importa si no conocés los términos legales correctos.",
    example: '"¿Puedo trabajar desde casa si mi contrato no lo dice?"',
    color: "from-[#0B3C5D] to-[#1a5a8a]",
    lightColor: "bg-[#0B3C5D]/10",
    textColor: "text-[#0B3C5D]",
  },
  {
    number: "02",
    icon: FileText,
    title: "Recibí una explicación clara",
    description:
      "En segundos, obtenés una respuesta en lenguaje simple con la fuente legal, un ejemplo real y qué hacer en cada caso.",
    example: "Explicación · Ejemplo real · Pasos a seguir · Fuente oficial",
    color: "from-cyan-500 to-cyan-600",
    lightColor: "bg-cyan-50",
    textColor: "text-cyan-700",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Actuá con confianza",
    description:
      "Con la información correcta en tus manos, sabés qué decir, cómo reclamar y a quién acudir cuando lo necesitás.",
    example: "Conocé tus derechos y actúa con seguridad",
    color: "from-emerald-500 to-emerald-600",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-700",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wide mb-4">
            Simple y rápido
          </div>
          <h2 className="section-title mb-4">¿Cómo funciona Ley Clara?</h2>
          <p className="section-subtitle">
            En tres pasos simples, pasás de tener una duda a tener una respuesta
            clara y accionable.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connector lines (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[33%] right-[33%] h-0.5 bg-gradient-to-r from-[#0B3C5D]/20 via-cyan-300/50 to-emerald-300/50 z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Step icon */}
                <div className={`relative mb-8`}>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-500">
                      {i + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="card p-6 w-full text-left">
                  <div
                    className={`text-xs font-bold ${step.textColor} mb-3 uppercase tracking-widest`}
                  >
                    Paso {step.number}
                  </div>
                  <h3 className="text-[#0B3C5D] font-bold text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className={`${step.lightColor} rounded-xl px-4 py-3`}>
                    <p
                      className={`text-xs font-medium ${step.textColor} italic`}
                    >
                      {step.example}
                    </p>
                  </div>
                </div>

                {/* Arrow (mobile) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4 text-slate-300">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#consultar"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("consultar")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary inline-flex"
          >
            Probar ahora — es gratis
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
