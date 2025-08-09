import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section id="faq" className="py-12 lg:py-24 bg-white">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Perguntas Frequentes</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tudo o que você precisa saber para começar sua jornada.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left font-semibold text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};