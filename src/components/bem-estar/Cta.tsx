import { Button } from "@/components/ui/button";

export const Cta = () => {
  // IMPORTANTE: Substitua pelo número de WhatsApp do seu negócio.
  const businessWhatsappNumber = "5511999999999"; 
  const message = encodeURIComponent("Olá! Tenho uma pergunta sobre os serviços de Bem-Estar Digital.");
  const whatsappUrl = `https://wa.me/${businessWhatsappNumber}?text=${message}`;

  return (
    <section id="cta" className="bg-emerald-600 text-white">
      <div className="container py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Pronto para Começar sua Transformação?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-emerald-100">
          Junte-se a milhares de pessoas que já estão vivendo com mais calma, foco e felicidade.
        </p>
        <Button asChild size="lg" variant="secondary" className="mt-8 font-bold text-lg px-8 py-6">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Fale Conosco
          </a>
        </Button>
      </div>
    </section>
  );
};