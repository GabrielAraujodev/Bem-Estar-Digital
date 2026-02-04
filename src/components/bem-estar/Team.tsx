import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const team = [
  {
    name: "Dr. Carlos Oliveira",
    specialty: "Psicólogo e Especialista em Mindfulness",
    bio: "Pioneiro no uso de realidade virtual para tratamento de ansiedade.",
    avatar: "https://i.pravatar.cc/150?img=60",
  },
  {
    name: "Ana Souza",
    specialty: "Instrutora de Meditação e Yoga",
    bio: "Formada na Índia com foco em técnicas de respiração e presença.",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Roberta Mendes",
    specialty: "Coach de Bem-Estar e Biohacking",
    bio: "Especialista em optimização de sono e performance mental através de dados.",
    avatar: "https://i.pravatar.cc/150?img=31",
  },
];

export const Team = () => {
  return (
    <section id="equipe" className="py-24 bg-[#0a0a0a]">
      <div className="container px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Nossos <span className="text-emerald-400">Especialistas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Mentoria de alto nível para guiar cada passo da sua evolução mental.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group text-center bg-zinc-900 border-white/5 hover:border-emerald-500/20 transition-all duration-300 py-6">
                <CardHeader className="items-center pb-2">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-emerald-500 rounded-full blur-[15px] opacity-0 group-hover:opacity-20 transition-opacity" />
                    <Avatar className="h-32 w-32 border-2 border-white/10 group-hover:border-emerald-500/30 transition-all">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-emerald-500/20 text-emerald-400 text-2xl">{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl text-white font-bold tracking-tight">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-400 text-sm font-medium mb-4 uppercase tracking-wider">{member.specialty}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-[240px] mx-auto group-hover:text-zinc-400 transition-colors">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};