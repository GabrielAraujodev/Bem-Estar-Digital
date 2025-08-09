import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="public/4782135-hd_1920_1080_25fps (1).mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <div className="container relative z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Encontre a Paz Interior no Mundo Digital.
        </h1>
        <h2 className="text-2xl md:text-4xl font-light mt-2">
          Meditação e Mindfulness para Brasileiros
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
          Reduza o estresse, melhore o foco e aumente sua qualidade de vida com nossos programas personalizados.
        </p>
        <Button size="lg" className="mt-8 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-8 py-6">
          Experimente Grátis por 7 Dias
        </Button>
      </div>
    </section>
  );
};