import { Card, CardTitle } from "@/components/ui/card";
import { HeartPulse, BrainCircuit, Moon, Users, ArrowRight } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { BookingModal } from "./BookingModal";
import { motion } from "framer-motion";

const sessions = [
  {
    icon: <HeartPulse className="h-8 w-8 text-emerald-400" />,
    title: "EQUILÍBRIO EMOCIONAL",
    description: "Cultive autocompaixão e equilíbrio através de técnicas guiadas de neuro-performance.",
    duration: "15 min",
    price: "R$ 14,90",
    color: "emerald",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-violet-400" />,
    title: "FOCO & PRESENÇA",
    description: "Treine sua mente para o alto desempenho, eliminando ruídos mentais.",
    duration: "10 min",
    price: "R$ 9,90",
    color: "violet",
  },
  {
    icon: <Moon className="h-8 w-8 text-blue-400" />,
    title: "SONO REGENERATIVO",
    description: "Desconecte-se do mundo e prepare seu sistema nervoso para um descanso real.",
    duration: "20 min",
    price: "R$ 19,90",
    color: "blue",
  },
  {
    icon: <Users className="h-8 w-8 text-amber-400" />,
    title: "CONEXÃO HUMANA",
    description: "Fortaleça seus laços interpessoais desenvolvendo presença consciente.",
    duration: "12 min",
    price: "R$ 12,90",
    color: "amber",
  },
];

export const Sessions = () => {
  return (
    <section id="sessoes" className="py-32 bg-black relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-emerald-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              Protocolos de Elite
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight"
            >
              PRÁTICAS QUE <br /> <span className="text-zinc-700">MOLDAM O CÉREBRO.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-lg max-w-sm mb-2"
          >
            Nossa metodologia combina sabedoria milenar com as mais recentes descobertas da neurociência.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sessions.map((session, index) => (
            <Dialog key={session.title}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group relative bg-zinc-900 border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden p-8 min-h-[320px] flex flex-col justify-between rounded-[2.5rem]">

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-12">
                        <div className={`p-5 rounded-2xl bg-black/50 border border-white/5 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all duration-500`}>
                          {session.icon}
                        </div>
                        <span className="text-[10px] font-black tracking-widest text-zinc-600 uppercase pt-2">
                          {session.duration}
                        </span>
                      </div>

                      <CardTitle className="text-3xl font-black text-white tracking-tighter mb-4 group-hover:text-emerald-400 transition-colors">
                        {session.title}
                      </CardTitle>

                      <p className="text-zinc-500 text-sm leading-relaxed max-w-xs group-hover:text-zinc-400 transition-colors">
                        {session.description}
                      </p>
                    </div>

                    <div className="relative z-10 flex items-end justify-between mt-8">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1">Acesso Único</span>
                        <span className="text-2xl font-black text-white tracking-tighter">{session.price}</span>
                      </div>

                      <div className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-500">
                        <ArrowRight className="h-5 w-5 text-white group-hover:text-black transition-colors" />
                      </div>
                    </div>

                    {/* Pro Max Hover Visual */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Card>
                </motion.div>
              </DialogTrigger>
              <BookingModal session={session} />
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};