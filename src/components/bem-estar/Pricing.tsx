import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { BookingModal } from "./BookingModal";
import { motion } from "framer-motion";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
}

const plans: Plan[] = [
  {
    name: "Plano Essencial",
    price: "R$29,90",
    description: "Perfeito para começar sua jornada de mindfulness.",
    features: [
      "Acesso a todas as meditações básicas",
      "Exercícios de respiração guiados",
      "Trilhas sonoras Binaurais",
      "Dashboard de progresso simples",
    ],
    buttonText: "Assinar Essencial",
    highlighted: false,
  },
  {
    name: "Plano Premium",
    price: "R$79,90",
    description: "Acelere seu progresso com recursos exclusivos.",
    features: [
      "Todos os benefícios do Plano Essencial",
      "Cursos aprofundados de Neurociência",
      "Sessões de meditação ao vivo",
      "Algoritmo de IA personalizado",
      "Suporte prioritário via WhatsApp",
    ],
    buttonText: "Assinar Premium",
    highlighted: true,
  },
  {
    name: "Plano Master",
    price: "R$149,90",
    description: "A experiência completa para alta performance.",
    features: [
      "Todos os benefícios do Plano Premium",
      "Sessões individuais Mensais",
      "Plano de Bio-hacking personalizado",
      "Acesso antecipado Gold Lab",
      "Kit de boas-vindas físico",
    ],
    buttonText: "Assinar Master",
    highlighted: false,
  },
];

export const Pricing = () => {
  return (
    <section id="planos" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4 block"
          >
            Investimento no seu Futuro
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Escolha o Seu <span className="text-emerald-400">Nível</span> de Paz
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Dialog>
                <Card className={`group relative flex flex-col h-full bg-zinc-900 border-white/5 transition-all duration-300 hover:border-emerald-500/30 overflow-hidden ${plan.highlighted ? "ring-2 ring-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.1)]" : "shadow-xl"}`}>

                  {plan.highlighted && (
                    <div className="absolute top-0 right-0 py-2 px-6 bg-emerald-500 text-black font-bold text-[10px] uppercase tracking-widest rounded-bl-xl flex items-center gap-2">
                      <Zap className="h-3 w-3 fill-black" /> Recomendado
                    </div>
                  )}

                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-2xl text-white font-bold tracking-tight mb-2">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-zinc-500 leading-relaxed text-sm">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-8 pt-4 flex-grow">
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-4xl font-black text-white">{plan.price}</span>
                      <span className="text-zinc-500 text-sm">/mês</span>
                    </div>

                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-emerald-400" />
                          </div>
                          <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="p-8 pt-4">
                    <DialogTrigger asChild>
                      <Button
                        className={`w-full h-14 rounded-xl font-bold transition-all duration-300 ${plan.highlighted ? "bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]" : "bg-white/5 text-white hover:bg-white/10 border border-white/10"}`}
                      >
                        {plan.buttonText}
                      </Button>
                    </DialogTrigger>
                  </CardFooter>
                </Card>
                <BookingModal plan={plan} />
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};