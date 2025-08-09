import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const team = [
  {
    name: "Dr. Carlos Oliveira",
    specialty: "Psicólogo e especialista em mindfulness",
    avatar: "https://i.pravatar.cc/150?img=60",
  },
  {
    name: "Ana Souza",
    specialty: "Instrutora de meditação e yoga",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Roberta Mendes",
    specialty: "Coach de bem-estar e desenvolvimento pessoal",
    avatar: "https://i.pravatar.cc/150?img=31",
  },
];

export const Team = () => {
  return (
    <section id="equipe" className="py-12 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Nossa Equipe</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os especialistas que irão guiar você nesta jornada.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="text-center">
              <CardHeader className="items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{member.specialty}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};