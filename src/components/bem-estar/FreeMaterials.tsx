import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Headphones, Video, Download } from "lucide-react";
import { motion } from "framer-motion";

const materials = [
  {
    icon: <BookOpen className="h-6 w-6 text-emerald-400" />,
    title: "E-book: Introdução ao Mindfulness",
    description: "Um guia completo para iniciantes sobre como praticar a atenção plena no dia a dia.",
    type: "PDF",
  },
  {
    icon: <Headphones className="h-6 w-6 text-violet-400" />,
    title: "Áudio: Meditação Guiada",
    description: "Uma sessão de 10 minutos para acalmar a mente e relaxar o corpo.",
    type: "MP3",
  },
  {
    icon: <Video className="h-6 w-6 text-blue-400" />,
    title: "Vídeo: Yoga para Estresse",
    description: "Uma prática suave de yoga para liberar a tensão e encontrar o equilíbrio.",
    type: "MP4",
  },
];

export const FreeMaterials = () => {
  return (
    <section id="materiais" className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="container px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Sua Caixa de <span className="text-emerald-400">Ferramentas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Acesse recursos exclusivos de alta qualidade para começar sua jornada sem custo algum.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <motion.div
              key={material.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full bg-zinc-900 border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden flex flex-col shadow-2xl">
                <CardHeader className="p-8 pb-4">
                  <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-500">
                    {material.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 py-1 px-2 bg-white/5 rounded-md group-hover:bg-emerald-500/10 group-hover:text-emerald-400/80 transition-colors">
                      {material.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-white font-bold tracking-tight group-hover:text-emerald-300 transition-colors">
                    {material.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-grow flex flex-col">
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                    {material.description}
                  </p>
                  <Button className="w-full bg-emerald-500 text-black font-bold h-12 rounded-xl hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all flex items-center gap-2 group/btn">
                    Baixar Agora <Download className="h-4 w-4 group-hover/btn:translate-y-0.5 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};