import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export const Cta = () => {
  const businessWhatsappNumber = "5511999999999";
  const message = encodeURIComponent("Olá! Estou pronto para começar minha jornada de Bem-Estar Digital.");
  const whatsappUrl = `https://wa.me/${businessWhatsappNumber}?text=${message}`;

  return (
    <section id="cta" className="relative py-24 bg-black overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16,185,129,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-emerald-600 to-emerald-800 p-12 md:p-20 text-center shadow-[0_0_80px_rgba(16,185,129,0.2)]"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8"
          >
            Pronto para <br /> Dominar sua <span className="text-black/40">Mente?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-emerald-50 mb-12 font-medium leading-relaxed"
          >
            Junte-se à elite que prioriza o equilíbrio emocional para performar no mais alto nível. Sua nova vida começa com um clique.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-black text-lg px-10 py-8 rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95 group">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Falar com Especialista <MessageCircle className="h-5 w-5 fill-emerald-700" />
              </a>
            </Button>

            <Button variant="link" className="text-white hover:text-emerald-200 font-bold transition-all group">
              Explorar Sessões Gratuitas <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};