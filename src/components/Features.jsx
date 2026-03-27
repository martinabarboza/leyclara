import { motion } from "framer-motion";
import {
  MessageSquare,
  Shield,
  AlertTriangle,
  Zap,
  BookOpen,
  Users,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    color: "cyan",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    title: "Lenguaje Natural",
    description:
      "Preguntá como hablás. No necesitás saber términos legales ni cómo está redactada la ley.",
    detail:
      "Nuestra plataforma interpreta tu pregunta cotidiana y la traduce en respuestas legales comprensibles.",
  },
  {
    icon: Shield,
    color: "emerald",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    title: "Fuentes Oficiales",
    description:
      "Toda la información proviene del IMPO, el Parlamento y las leyes vigentes de Uruguay.",
    detail:
      "Cada respuesta viene con su fuente oficial para que puedas verificar y profundizar cuando quieras.",
  },
  {
    icon: AlertTriangle,
    color: "amber",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    title: "Reportar Violaciones",
    description:
      "Te guiamos paso a paso para saber cómo denunciar cuando no se respetan tus derechos.",
    detail:
      "Desde dónde ir hasta qué documentos llevar. Un proceso claro y sin burocracia confusa.",
  },
  {
    icon: Zap,
    color: "violet",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    title: "Respuestas Rápidas",
    description:
      "Sin esperas ni formularios. Tu consulta procesada en segundos con información actualizada.",
    detail: "La información más relevante de forma directa y sin rodeos.",
  },
  {
    icon: BookOpen,
    color: "blue",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Base Legal Completa",
    description:
      "Explorá nuestra base de datos con cientos de leyes explicadas en lenguaje claro.",
    detail:
      "Organizadas por categorías: trabajo, familia, tránsito, alquiler y mucho más.",
  },
  {
    icon: Users,
    color: "rose",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    title: "Para Todos",
    description:
      "Gratis, en español, accesible desde cualquier dispositivo. La ley es de todos.",
    detail:
      "Sin registro obligatorio. Sin pagos. Sin letra chica. Solo información legal clara.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] text-xs font-semibold uppercase tracking-wide mb-4">
            Características
          </div>
          <h2 className="section-title mb-4">
            Todo lo que necesitás saber sobre tus derechos
          </h2>
          <p className="section-subtitle">
            Ley Clara es más que una búsqueda de leyes. Es una plataforma
            diseñada para darte poder a través del conocimiento.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 group cursor-default"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                </div>
                <h3 className="text-[#0B3C5D] font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  {feature.description}
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {feature.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
