import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Headphones, Video } from "lucide-react";

const materials = [
  {
    icon: <BookOpen className="h-8 w-8 text-emerald-500" />,
    title: "E-book: Introdução ao Mindfulness",
    description: "Um guia completo para iniciantes sobre como praticar a atenção plena no dia a dia.",
    link: "#",
  },
  {
    icon: <Headphones className="h-8 w-8 text-emerald-500" />,
    title: "Áudio: Meditação Guiada",
    description: "Uma sessão de 10 minutos para acalmar a mente e relaxar o corpo.",
    link: "#",
  },
  {
    icon: <Video className="h-8 w-8 text-emerald-500" />,
    title: "Vídeo: Yoga para Aliviar o Estresse",
    description: "Uma prática suave de yoga para liberar a tensão e encontrar o equilíbrio.",
    link: "#",
  },
];

export const FreeMaterials = () => {
  return (
    <section id="materiais" className="py-12 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Materiais Gratuitos</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Acesse nossos recursos gratuitos e comece sua jornada de bem-estar hoje mesmo.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {materials.map((material) => (
            <Card key={material.title} className="flex flex-col text-center items-center">
              <CardHeader className="items-center">
                {material.icon}
                <CardTitle className="mt-4">{material.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground flex-grow">{material.description}</p>
                <Button asChild className="mt-4 w-full bg-emerald-500 hover:bg-emerald-600">
                  <a href={material.link}>Acessar Agora</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};