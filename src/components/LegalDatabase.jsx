import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Plus,
  X,
  ChevronRight,
  Tag,
  BookOpen,
  ExternalLink,
  AlertCircle,
  FileText,
  CheckCircle,
} from "lucide-react";
import { legalTopics, categories } from "../data/legalData";

function LegalCard({ topic }) {
  const [expanded, setExpanded] = useState(false);

  const categoryColors = {
    tránsito: "bg-blue-100 text-blue-700",
    alquiler: "bg-amber-100 text-amber-700",
    trabajo: "bg-emerald-100 text-emerald-700",
    familia: "bg-rose-100 text-rose-700",
    salud: "bg-purple-100 text-purple-700",
    educación: "bg-cyan-100 text-cyan-700",
  };

  return (
    <motion.div layout className="card p-5 group">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`tag text-xs font-semibold ${categoryColors[topic.category] || "bg-slate-100 text-slate-600"}`}
            >
              {topic.category}
            </span>
          </div>
          <h3 className="font-bold text-[#0B3C5D] text-base leading-tight mb-2">
            {topic.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
            {topic.summary}
          </p>
        </div>
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-[#0B3C5D]/10 transition-colors">
          <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-[#0B3C5D] transition-colors" />
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-3">
        {topic.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-slate-700 text-sm leading-relaxed mb-3">
                {topic.fullText}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Fuente: {topic.source}</span>
              </div>
              <a
                href={topic.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-[#0B3C5D] hover:text-[#0a3454] transition-colors"
              >
                Ver en IMPO
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
        <span className="text-xs text-slate-400 font-medium">
          {topic.source.split("·")[0].trim()}
        </span>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-semibold text-[#0B3C5D] hover:text-[#0a3454] transition-colors"
        >
          {expanded ? "Ver menos" : "Ver más"}
          <ChevronRight
            className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? "rotate-90" : ""}`}
          />
        </button>
      </div>
    </motion.div>
  );
}

function AddInfoModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "",
    summary: "",
    source: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B3C5D]/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0B3C5D]/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#0B3C5D]" />
            </div>
            <div>
              <h3 className="font-bold text-[#0B3C5D] text-base">
                Agregar información legal
              </h3>
              <p className="text-slate-500 text-xs">
                Colaborá con la comunidad
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors text-slate-500"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle className="w-8 h-8 text-emerald-500" />
            </motion.div>
            <h4 className="font-bold text-[#0B3C5D] text-lg mb-2">
              ¡Gracias por contribuir!
            </h4>
            <p className="text-slate-500 text-sm">
              Tu aporte será revisado por nuestro equipo antes de publicarse.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-1.5">
                Título del tema legal *
              </label>
              <input
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="input-field"
                placeholder="Ej: Derechos del consumidor en e-commerce"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-1.5">
                Categoría *
              </label>
              <select
                required
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="input-field"
              >
                <option value="">Seleccioná una categoría</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-1.5">
                Descripción simple *
              </label>
              <textarea
                required
                rows={3}
                value={form.summary}
                onChange={(e) => setForm({ ...form, summary: e.target.value })}
                className="input-field resize-none"
                placeholder="Explicá el tema en lenguaje claro y accesible..."
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-1.5">
                Fuente legal
              </label>
              <input
                value={form.source}
                onChange={(e) => setForm({ ...form, source: e.target.value })}
                className="input-field"
                placeholder="Ej: Ley 18.412, Art. 5 · IMPO"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-1.5">
                Tu email (opcional)
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input-field"
                placeholder="para notificarte cuando se apruebe"
              />
            </div>

            <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-amber-700 text-xs leading-relaxed">
                La información enviada será revisada por nuestro equipo antes de
                publicarse. Solo se aceptan fuentes verificables.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary flex-1 justify-center"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn-primary flex-1 justify-center"
              >
                Enviar aporte
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function LegalDatabase() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredTopics = legalTopics.filter((topic) => {
    const matchesSearch =
      !search ||
      topic.title.toLowerCase().includes(search.toLowerCase()) ||
      topic.summary.toLowerCase().includes(search.toLowerCase()) ||
      topic.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      !activeCategory || topic.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const categoryColors = {
    tránsito: "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200",
    alquiler: "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200",
    trabajo:
      "bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200",
    familia: "bg-rose-100 text-rose-700 border-rose-200 hover:bg-rose-200",
    salud:
      "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200",
    educación: "bg-cyan-100 text-cyan-700 border-cyan-200 hover:bg-cyan-200",
  };

  return (
    <>
      <section id="base-legal" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] text-xs font-semibold uppercase tracking-wide mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                Base de datos legal
              </div>
              <h2 className="section-title mb-2">
                Leyes explicadas para todos
              </h2>
              <p className="section-subtitle">
                Buscá por tema o usá los filtros rápidos para encontrar lo que
                necesitás.
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="btn-accent text-sm flex-shrink-0 self-start md:self-end"
            >
              <Plus className="w-4 h-4" />
              Agregar Info
            </button>
          </motion.div>

          {/* Search & filters */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 space-y-4"
          >
            {/* Search bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field pl-12 py-4 text-base shadow-sm"
                placeholder="Buscar en la base de datos legal..."
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300 transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-slate-600" />
                </button>
              )}
            </div>

            {/* Category tags */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`tag border font-semibold text-sm px-4 py-1.5 ${
                  !activeCategory
                    ? "bg-[#0B3C5D] text-white border-[#0B3C5D]"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setActiveCategory(activeCategory === cat ? null : cat)
                  }
                  className={`tag border font-semibold text-sm px-4 py-1.5 capitalize ${
                    activeCategory === cat
                      ? "bg-[#0B3C5D] text-white border-[#0B3C5D]"
                      : `${categoryColors[cat] || "bg-white text-slate-600 border-slate-200"} border`
                  }`}
                >
                  <Tag className="w-3 h-3" />
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <AnimatePresence mode="wait">
            {filteredTopics.length > 0 ? (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filteredTopics.map((topic, i) => (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <LegalCard topic={topic} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 rounded-2xl bg-slate-200 flex items-center justify-center mx-auto mb-5">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="font-bold text-[#0B3C5D] text-xl mb-2">
                  Sin resultados
                </h3>
                <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">
                  No encontramos nada para "{search}". Intentá con otras
                  palabras o explorá todas las categorías.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSearch("");
                      setActiveCategory(null);
                    }}
                    className="btn-secondary text-sm"
                  >
                    Limpiar filtros
                  </button>
                  <button
                    onClick={() => setShowModal(true)}
                    className="btn-accent text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    Agregar esta información
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && <AddInfoModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  );
}
