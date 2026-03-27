import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import LegalDatabase from "../components/LegalDatabase";

export default function LegalBasePage() {
  return (
    <main className="pt-20">
      {/* Page header */}
      <div className="bg-[#0B3C5D] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                Base de Datos Legal
              </h1>
              <p className="text-white/60 mt-1">
                Leyes uruguayas explicadas en lenguaje claro
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <LegalDatabase />
    </main>
  );
}
