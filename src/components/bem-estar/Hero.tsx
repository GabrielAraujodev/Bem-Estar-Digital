import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { BookingModal } from "./BookingModal";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const AnimatedShape = ({ className, delay = 0 }: { className: string, delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 1.5,
      delay,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    }}
  >
    <Leaf className="h-full w-full" />
  </motion.div>
);

export const Hero = () => {
  return (
    <section id="home" className="relative bg-gray-50 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <AnimatedShape className="absolute top-[10%] left-[5%] h-16 w-16 text-emerald-100" delay={0} />
        <AnimatedShape className="absolute top-[20%] right-[10%] h-12 w-12 text-emerald-100" delay={0.5} />
        <AnimatedShape className="absolute bottom-[15%] left-[20%] h-20 w-20 text-emerald-100" delay={1} />
        <AnimatedShape className="absolute bottom-[25%] right-[25%] h-8 w-8 text-emerald-100" delay={1.5} />
      </div>
      <div className="container text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          Encontre seu Equilíbrio no Mundo Digital
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
        >
          Sessões de meditação, mindfulness e desenvolvimento pessoal para uma vida mais calma, focada e feliz.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex justify-center gap-4"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-8 py-6">
                Comece sua Jornada
              </Button>
            </DialogTrigger>
            <BookingModal />
          </Dialog>
          <Button size="lg" variant="outline" asChild>
            <a href="#planos">Ver Planos</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};