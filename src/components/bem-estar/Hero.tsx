import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { BookingModal } from "./BookingModal";

export const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="https://videos.pexels.com/video-files/4784833/4784833-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 container text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Encontre seu Equilíbrio com o <span className="text-emerald-400">Bem-Estar Digital</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
          Sua jornada para uma vida mais calma, focada e feliz começa aqui. Meditações guiadas, exercícios de respiração e muito mais.
        </p>
        <div className="mt-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="text-lg px-8 py-6">Comece Agora</Button>
            </DialogTrigger>
            <BookingModal />
          </Dialog>
        </div>
      </div>
    </section>
  );
};