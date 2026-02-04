import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Preciso ter experiência com meditação para começar?",
    answer:
      "Não, de forma alguma! Nossos programas são desenhados para todos os níveis, desde iniciantes completos até praticantes experientes. Oferecemos guias passo a passo para ajudar você a começar sua jornada.",
  },
  {
    question: "Quanto tempo preciso dedicar por dia?",
    answer:
      "A beleza do Bem-Estar Digital é a flexibilidade. Temos sessões curtas de 5 a 10 minutos que se encaixam em qualquer rotina, além de práticas mais longas para quando você tiver mais tempo. O importante é a consistência, não a duração.",
  },
  {
    question: "Quais são os benefícios que posso esperar?",
    answer:
      "Com a prática regular, nossos usuários relatam uma redução significativa no estresse e na ansiedade, melhora na qualidade do sono, aumento do foco e da concentração, e um maior sentimento de calma e bem-estar geral.",
  },
  {
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer:
      "Sim, você tem total controle sobre sua assinatura. É possível cancelar a qualquer momento, sem taxas ou burocracia. Seu acesso continuará ativo até o final do período de faturamento atual.",
  },
  {
    question: "Como funcionam as sessões individuais do Plano Master?",
    answer:
      "As sessões individuais são agendadas diretamente com um de nossos especialistas. Nelas, você receberá orientação personalizada para seus objetivos, sejam eles lidar com a ansiedade, melhorar o foco ou aprofundar sua prática de mindfulness.",
  },
];

export const Faq = () => {
  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Dúvidas <span className="text-emerald-400">Comuns</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-zinc-400"
          >
            Tudo o que você precisa saber para começar sua jornada com segurança.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-1 rounded-3xl bg-zinc-900 border border-white/5 overflow-hidden"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="px-8 border-white/5 last:border-0">
                <AccordionTrigger className="text-left font-bold text-lg text-white hover:text-emerald-400 hover:no-underline py-6 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-500 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};