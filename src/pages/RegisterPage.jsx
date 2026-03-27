import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Scale,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Mail,
  Lock,
  User,
  CheckCircle,
} from "lucide-react";

const perks = [
  "Guardá tus consultas favoritas",
  "Recibí actualizaciones legales",
  "Acceso a contenido exclusivo",
];

export default function RegisterPage() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    navigate("/");
  };

  const passwordStrength = () => {
    const p = form.password;
    if (!p) return null;
    if (p.length < 6)
      return { label: "Muy corta", color: "bg-red-400", width: "25%" };
    if (p.length < 8)
      return { label: "Débil", color: "bg-amber-400", width: "50%" };
    if (p.length < 12)
      return { label: "Buena", color: "bg-cyan-400", width: "75%" };
    return { label: "Excelente", color: "bg-emerald-400", width: "100%" };
  };

  const strength = passwordStrength();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#0B3C5D]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-emerald-400/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#0B3C5D] font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_24px_rgba(11,60,93,0.1)] overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#0B3C5D] to-[#1a5a8a] px-8 py-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-white font-bold text-xl">
                  Crear cuenta gratis
                </h1>
                <p className="text-white/60 text-sm">Únete a Ley Clara hoy</p>
              </div>
            </div>
            {/* Perks */}
            <div className="flex flex-col gap-2">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="px-8 py-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-1.5">
                  Nombre completo
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-field pl-10"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="input-field pl-10"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-1.5">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type={showPass ? "text" : "password"}
                    required
                    minLength={6}
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    className="input-field pl-10 pr-11"
                    placeholder="Mínimo 6 caracteres"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPass ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {/* Strength bar */}
                {strength && (
                  <div className="mt-2">
                    <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: strength.width }}
                        className={`h-full rounded-full ${strength.color} transition-all`}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Contraseña: {strength.label}
                    </p>
                  </div>
                )}
              </div>

              {/* Terms */}
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 accent-[#0B3C5D]"
                />
                <span className="text-sm text-slate-600 leading-relaxed">
                  Acepto los{" "}
                  <a
                    href="#"
                    className="text-[#0B3C5D] font-semibold hover:underline"
                  >
                    Términos de uso
                  </a>{" "}
                  y la{" "}
                  <a
                    href="#"
                    className="text-[#0B3C5D] font-semibold hover:underline"
                  >
                    Política de privacidad
                  </a>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creando cuenta...
                  </>
                ) : (
                  <>
                    Crear cuenta gratuita
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-xs text-slate-400 font-medium">
                o también
              </span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            {/* Guest */}
            <button
              onClick={() => navigate("/")}
              className="btn-secondary w-full justify-center text-sm"
            >
              Continuar como invitado
            </button>

            {/* Login link */}
            <p className="text-center text-sm text-slate-500 mt-5">
              ¿Ya tenés cuenta?{" "}
              <Link
                to="/login"
                className="text-[#0B3C5D] font-semibold hover:underline"
              >
                Iniciá sesión
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
