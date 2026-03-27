import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Bot,
  User,
  AlertCircle,
  BookOpen,
  ArrowRight,
  Lightbulb,
  Scale,
} from "lucide-react";
import { chatExamples, legalTopics } from "../data/legalData";

function TypingIndicator() {
  return (
    <div className="flex items-end gap-3">
      <div className="w-8 h-8 rounded-full bg-[#0B3C5D] flex items-center justify-center flex-shrink-0">
        <Scale className="w-4 h-4 text-white" />
      </div>
      <div className="bg-slate-100 rounded-2xl rounded-bl-sm px-4 py-3">
        <div className="flex gap-1.5 items-center h-5">
          {[0, 0.2, 0.4].map((delay) => (
            <motion.div
              key={delay}
              className="w-2 h-2 rounded-full bg-slate-400"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ResponseCard({ response }) {
  if (!response) return null;

  const keywords = response?.keywords || [];
  const explanation = response?.explanation || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(11,60,93,0.08)]"
    >
      {/* Explanation */}
      <div className="p-4 border-b border-slate-100">
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#0B3C5D]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4 text-[#0B3C5D]" />
          </div>

          <div>
            <p className="text-xs font-semibold text-[#0B3C5D] uppercase tracking-wide mb-1.5">
              Explicación simple
            </p>

            <p className="text-slate-700 text-sm leading-relaxed">
              {keywords.length > 0
                ? explanation
                    .split(new RegExp(`(${keywords.join("|")})`, "gi"))
                    .map((part, i) =>
                      keywords.some(
                        (k) => k.toLowerCase() === part.toLowerCase(),
                      ) ? (
                        <mark
                          key={i}
                          className="bg-cyan-100 text-cyan-800 px-0.5 rounded font-medium not-italic"
                        >
                          {part}
                        </mark>
                      ) : (
                        part
                      ),
                    )
                : explanation}
            </p>
          </div>
        </div>
      </div>

      {/* Example */}
      {response.example ? (
        <div className="p-4 border-b border-slate-100 bg-emerald-50/50">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs">💡</span>
            </div>

            <div>
              <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1.5">
                Ejemplo real
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                {response.example}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {/* What to do */}
      {response.whatToDo ? (
        <div className="p-4 border-b border-slate-100 bg-amber-50/50">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertCircle className="w-4 h-4 text-amber-600" />
            </div>

            <div>
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1.5">
                Qué hacer si no se cumple
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                {response.whatToDo}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {/* Source */}
      <div className="p-3.5 bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-xs text-slate-500 font-medium">
            Fuente: {response.source || "Sin fuente"}
          </span>
        </div>

        <a
          href="https://www.impo.com.uy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-semibold text-[#0B3C5D] hover:text-[#0a3454] transition-colors"
        >
          Ver fuente
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content:
        "¡Hola! Soy tu asistente legal para Uruguay. Haceme cualquier pregunta sobre leyes, derechos o trámites, y te respondo en lenguaje claro.",
      isText: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [exampleIndex, setExampleIndex] = useState(0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const isAutoScroll = useRef(true);

  const handleScroll = () => {
    const el = chatContainerRef.current;
    if (!el) return;

    const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80;

    isAutoScroll.current = isAtBottom;
  };

  useEffect(() => {
    if (!isAutoScroll.current) return;

    const el = chatContainerRef.current;
    if (!el) return;

    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
  }, [messages, isTyping]);

  const handleSubmit = async (question = input) => {
    if (!question.trim() || isTyping) return;

    const userMessage = { type: "user", content: question, isText: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    await new Promise((res) => setTimeout(res, 1200 + Math.random() * 600));

    /* const example = chatExamples[exampleIndex % chatExamples.length];
    setExampleIndex((i) => i + 1); 
    const q = question.toLowerCase();
*/

    const q = question.toLowerCase();

    const example = chatExamples.find(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        q.includes(item.question.toLowerCase()) ||
        item.response.keywords.some((kw) => q.includes(kw.toLowerCase())),
    );

    const topic = legalTopics.find(
      (item) =>
        item.tags.some((tag) => q.includes(tag.toLowerCase())) ||
        q.includes(item.category.toLowerCase()) ||
        q.includes(item.title.toLowerCase()),
    );

    let finalResponse;

    if (example?.response) {
      finalResponse = example.response;
    } else if (topic) {
      finalResponse = {
        explanation: topic.summary,
        example: topic.fullText || "",
        whatToDo:
          "Podés consultar más información en fuentes oficiales o asesorarte legalmente.",
        source: topic.source,
        keywords: topic.tags || [],
      };
    } else {
      finalResponse = {
        explanation:
          "No encontré una coincidencia exacta, pero podés preguntar sobre tránsito, alquiler, trabajo o familia.",
        example: "",
        whatToDo: "",
        source: "Ley Clara (demo)",
        keywords: [],
      };
    }
    /* setIsTyping(false);
    setMessages((prev) => [
      ...prev,
      { type: "ai", content: example.response, isText: false },
    ]); */

    setIsTyping(false);
    setMessages((prev) => [
      ...prev,
      { type: "ai", content: finalResponse, isText: false },
    ]);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const quickQuestions = [
    "¿Puedo llevar a mi perro al parque?",
    "¿Mi casero puede subir el alquiler sin avisar?",
    "¿Cuántos días de licencia por paternidad tengo?",
  ];

  return (
    <section id="consultar" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-semibold uppercase tracking-wide mb-5">
              <Bot className="w-3.5 h-3.5" />
              Consulta inteligente
            </div>
            <h2 className="section-title mb-4">
              Preguntá como si le hablaras a un amigo
            </h2>
            <p className="section-subtitle mb-8">
              Sin formularios complicados. Sin tecnicismos. Solo hacé tu
              pregunta y recibís una respuesta clara con pasos concretos.
            </p>

            {/* Quick questions */}
            <div>
              <p className="text-sm font-semibold text-slate-500 mb-3">
                Preguntas frecuentes:
              </p>
              <div className="flex flex-col gap-2">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSubmit(q)}
                    disabled={isTyping}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-white hover:border-[#0B3C5D]/30 hover:bg-slate-50 text-left text-sm text-slate-700 font-medium transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0B3C5D] transition-colors flex-shrink-0" />
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Chat */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col h-[600px] rounded-2xl border border-slate-200 overflow-hidden shadow-[0_4px_24px_rgba(11,60,93,0.1)]"
          >
            {/* Chat header */}
            <div className="px-5 py-4 bg-[#0B3C5D] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Asistente Ley Clara
                </p>
                <p className="text-white/50 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Activo · Respuestas basadas en leyes uruguayas
                </p>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={chatContainerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50"
            >
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-end gap-2 ${msg.type === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs ${
                        msg.type === "user"
                          ? "bg-slate-300 text-slate-600"
                          : "bg-[#0B3C5D] text-white"
                      }`}
                    >
                      {msg.type === "user" ? (
                        <User className="w-3.5 h-3.5" />
                      ) : (
                        <Scale className="w-3.5 h-3.5" />
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={`max-w-[85%] ${msg.type === "user" ? "" : "flex-1"}`}
                    >
                      {msg.isText ? (
                        <div
                          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                            msg.type === "user"
                              ? "bg-[#0B3C5D] text-white rounded-br-sm"
                              : "bg-white text-slate-700 rounded-bl-sm border border-slate-200 shadow-sm"
                          }`}
                        >
                          {msg.content}
                        </div>
                      ) : (
                        <ResponseCard response={msg.content} />
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && <TypingIndicator />}
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-200">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Escribí tu consulta legal..."
                  className="input-field flex-1 text-sm py-3"
                  disabled={isTyping}
                />
                <button
                  onClick={() => handleSubmit()}
                  disabled={!input.trim() || isTyping}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#0B3C5D] text-white hover:bg-[#0a3454] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center">
                Respuestas basadas en fuentes oficiales del Uruguay · No
                reemplaza asesoramiento legal profesional
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
