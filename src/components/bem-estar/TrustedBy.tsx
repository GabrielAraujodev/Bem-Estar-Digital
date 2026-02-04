import { motion } from "framer-motion";

const logos = [
  { name: "UNIMED", color: "text-emerald-500" },
  { name: "BRADESCO", color: "text-red-500" },
  { name: "NATURA", color: "text-orange-400" },
  { name: "MAGALU", color: "text-blue-500" },
  { name: "VIVO", color: "text-purple-500" },
  { name: "ITAÚ", color: "text-orange-600" },
];

export const TrustedBy = () => {
  return (
    <section id="sobre" className="py-24 bg-black border-y border-white/5 overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-16 opacity-30">
            <div className="h-[1px] w-12 bg-white" />
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-white">
              Authorized Network
            </p>
            <div className="h-[1px] w-12 bg-white" />
          </div>

          <div className="relative w-full">
            <div className="flex overflow-x-hidden group">
              <div className="flex animate-marquee whitespace-nowrap gap-24 items-center py-4">
                {[...logos, ...logos, ...logos].map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex items-center gap-4 cursor-default group/brand"
                  >
                    <span className={`text-4xl md:text-6xl font-black tracking-tighter transition-all duration-700 ${logo.color} opacity-20 grayscale group-hover/brand:opacity-100 group-hover/brand:grayscale-0 group-hover/brand:scale-105`}>
                      {logo.name}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-white/5 group-hover/brand:bg-emerald-500/50 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Edge Fades */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};