import { CheckCircle } from "lucide-react";

const onboardingSteps = [
  "Cadastro rápido",
  "Escolha seu plano",
  "Plano Personalizado",
  "Avaliação mensal de progresso",
  "Adaptação das sessões",
];

const weeklyActivities = [
  "Participe de sessões guiadas",
  "Baixe exercícios práticos",
  "Suporte Contínuo",
  "Chat 24/7",
  "Comunidade online",
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-12 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Como Funciona</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comece sua jornada de bem-estar em poucos passos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Começando</h3>
            <ul className="space-y-4">
              {onboardingSteps.map((step) => (
                <li key={step} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Sessões Semanais</h3>
            <ul className="space-y-4">
              {weeklyActivities.map((activity) => (
                <li key={activity} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};