import { CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const onboardingSteps = [
  { title: "Cadastro Rápido", description: "Inicie em segundos com sua conta preferida." },
  { title: "Perfil Personalizado", description: "Conte-nos sobre seus objetivos e rotina." },
  { title: "Jornada Adaptativa", description: "Receba recomendações baseadas no seu humor." },
  { title: "Suporte 24/7", description: "IA e especialistas sempre disponíveis para você." },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="container px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Sua Transformação em <br /><span className="text-emerald-400">4 Passos Simples</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Uma metodologia validada por neurocientistas brasileiros para resultados reais.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {onboardingSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-5xl font-black text-white/5 group-hover:text-emerald-500/10 transition-colors">
                    0{index + 1}
                  </span>
                  <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {step.description}
                </p>

                <div className="mt-8 flex items-center text-emerald-400 text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  Saiba mais <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};