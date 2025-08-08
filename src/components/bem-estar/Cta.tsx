import { Button } from "@/components/ui/button";

export const Cta = () => {
  return (
    <section id="contato" className="py-12 lg:py-24 bg-emerald-500 text-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Pronto para começar sua jornada de bem-estar digital?</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-emerald-100">
          Entre em contato conosco e descubra como podemos te ajudar.
        </p>
        <Button size="lg" variant="secondary" className="mt-8 font-bold text-lg px-8 py-6">
          Fale Conosco
        </Button>
      </div>
    </section>
  );
};