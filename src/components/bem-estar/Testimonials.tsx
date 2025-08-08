import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    title: "35 anos, Analista de Marketing",
    quote: "O BemEstar Digital mudou minha rotina. Estou mais calma, focada e feliz. Recomendo para todos que buscam uma vida mais equilibrada.",
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
    <section id="blog" className="py-12 lg:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">O que nossos clientes dizem</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas com o BemEstar Digital.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="pt-6">
                <p className="italic">"{testimonial.quote}"</p>
                <div className="flex items-center mt-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};