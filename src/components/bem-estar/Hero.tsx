import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black"
    >
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-bg z-[1]" />

      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0 opacity-30 scale-110"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(4px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
      </motion.div>

      {/* Animated Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/10 rounded-full blur-[160px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-violet-500/10 rounded-full blur-[160px] animate-pulse delay-1000 pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          style={{ opacity }}
          className="flex flex-col items-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 py-2 px-6 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 group cursor-default"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 group-hover:text-emerald-400 transition-colors">
              Nova Experiência de Mindfulness
            </span>
          </motion.div>

          {/* Heading */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white leading-[0.85] mb-8"
            >
              PAZ <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">DIGITAL.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-xl md:text-2xl font-medium text-zinc-500 max-w-2xl mx-auto leading-relaxed"
            >
              A primeira plataforma de alta performance mental <br className="hidden md:block" />
              <span className="text-white">focada em neurociência brasileira.</span>
            </motion.p>
          </div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex flex-col sm:flex-row items-center gap-6"
          >
            <Button
              size="lg"
              className="group h-16 bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xl px-12 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center gap-3"
            >
              Começar Agora <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <button className="flex items-center gap-3 text-white/60 hover:text-white transition-all group py-4">
              <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-colors">
                <Play className="h-4 w-4 fill-white" />
              </div>
              <span className="font-bold text-sm tracking-widest uppercase">Ver Trailer</span>
            </button>
          </motion.div>

          {/* Scroll Down Hint */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20"
          >
            <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};