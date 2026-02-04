import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    title: "35 anos, Analista de Marketing",
    quote: "O Bem-Estar Digital mudou minha rotina. Estou mais calma, focada e feliz. Recomendo para todos que buscam uma vida mais equilibrada.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "João Pereira",
    title: "42 anos, Empresário",
    quote: "Com a correria do dia a dia, não tinha tempo para mim. As meditações rápidas me ajudaram a controlar o estresse e a tomar decisões melhores.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Ana Costa",
    title: "28 anos, Estudante",
    quote: "A ansiedade antes das provas era um grande problema. As técnicas de respiração e foco me ajudaram a ter um desempenho muito melhor nos estudos.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Vidas <span className="text-emerald-400">Transformadas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Histórias reais de pessoas que redescobriram o equilíbrio na era digital.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-zinc-900 border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                <CardContent className="pt-8 pb-8 px-8 flex flex-col h-full">
                  <div className="mb-6 h-10 w-10 bg-emerald-500/10 rounded-full flex items-center justify-center">
                    <Quote className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="text-zinc-300 italic mb-8 flex-grow leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center mt-auto">
                    <Avatar className="h-12 w-12 border border-white/10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-emerald-500/20 text-emerald-400">{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-bold text-white tracking-tight">{testimonial.name}</p>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};