import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, BrainCircuit, Moon, Users } from "lucide-react";

const sessions = [
  {
    icon: <HeartPulse className="h-10 w-10 text-rose-500" />,
    title: "Bem-Estar Emocional",
    description: "Aprenda a lidar com suas emoções e a cultivar a autocompaixão.",
    duration: "Sessões de 15 min",
    price: "R$14,99/mês",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-blue-500" />,
    title: "Foco e Concentração",
    description: "Treine sua mente para se manter presente e produtivo no dia a dia.",
    duration: "Sessões de 10 min",
    price: "R$9,99/mês",
  },
  {
    icon: <Moon className="h-10 w-10 text-indigo-500" />,
    title: "Sono Reparador",
    description: "Relaxe corpo e mente para ter noites de sono mais tranquilas e profundas.",
    duration: "Sessões de 20 min",
    price: "R$19,99/mês",
  },
  {
    icon: <Users className="h-10 w-10 text-amber-500" />,
    title: "Conexão Social",
    description: "Desenvolva empatia e melhore seus relacionamentos interpessoais.",
    duration: "Sessões de 12 min",
    price: "R$12,99/mês",
  },
];

export const Sessions = () => {
  return (
    <section id="materiais" className="py-12 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Sessões Incríveis para Você</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossos programas e encontre o caminho ideal para o seu bem-estar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sessions.map((session) => (
            <Card key={session.title} className="flex flex-col text-center items-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                {session.icon}
                <CardTitle className="mt-4">{session.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{session.description}</p>
              </CardContent>
              <div className="mt-4">
                <p className="font-semibold">{session.duration}</p>
                <p className="text-lg font-bold text-emerald-600">{session.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};