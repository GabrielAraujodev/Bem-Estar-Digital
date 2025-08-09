import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { BookingModal } from "./BookingModal";

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
      "Exercícios de respiração",
      "Trilhas sonoras relaxantes",
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
      "Cursos aprofundados de mindfulness",
      "Sessões de meditação ao vivo",
      "Conteúdo para sono e foco",
      "Suporte prioritário",
    ],
    buttonText: "Assinar Premium",
    highlighted: true,
  },
  {
    name: "Plano Master",
    price: "R$149,90",
    description: "A experiência completa para uma transformação de vida.",
    features: [
      "Todos os benefícios do Plano Premium",
      "Sessões individuais com nossos especialistas",
      "Plano de desenvolvimento pessoal",
      "Acesso antecipado a novos conteúdos",
    ],
    buttonText: "Assinar Master",
    highlighted: false,
  },
];

export const Pricing = () => {
  return (
    <section id="planos" className="py-12 lg:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Planos e Preços</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta às suas necessidades e comece a transformar sua vida hoje.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <Dialog key={plan.name}>
              <Card className={`flex flex-col h-full ${plan.highlighted ? "border-2 border-emerald-500 shadow-xl" : ""}`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col items-center">
                  <p className="text-4xl font-bold mb-2">{plan.price}<span className="text-lg font-normal text-muted-foreground">/mês</span></p>
                  <ul className="mt-6 space-y-3 text-left w-full">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <DialogTrigger asChild>
                    <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>{plan.buttonText}</Button>
                  </DialogTrigger>
                </CardFooter>
              </Card>
              <BookingModal plan={plan} />
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};