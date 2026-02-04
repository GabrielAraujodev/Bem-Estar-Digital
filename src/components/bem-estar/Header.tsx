import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowUpRight } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { BookingModal } from "./BookingModal";
import { motion, useScroll, useSpring } from "framer-motion";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#home" },
    { label: "Metodologia", href: "#sobre" },
    { label: "Sessões", href: "#sessoes" },
    { label: "Planos", href: "#planos" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-emerald-500 origin-left z-[60]"
        style={{ scaleX }}
      />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-black/95 border-b border-white/5 py-4"
          : "bg-transparent py-8"
          }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group relative"
          >
            <span className="font-black text-2xl tracking-tighter text-white">
              BEM-ESTAR <span className="text-emerald-500 italic">DIGITAL</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group relative py-2"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors duration-300">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right group-hover:origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-white transition-colors">
              Login
            </button>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="bg-white text-black hover:bg-emerald-500 hover:text-black font-black text-xs uppercase tracking-widest px-8 h-12 rounded-full transition-all group shadow-2xl"
                >
                  Get Started <ArrowUpRight className="h-4 w-4 ml-2 group-hover:rotate-45 transition-transform" />
                </Button>
              </DialogTrigger>
              <BookingModal />
            </Dialog>
          </div>

          {/* Mobile Menu Toggle */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-l border-white/5 text-white w-full sm:max-w-md p-0">
              <div className="flex flex-col h-full p-12">
                <div className="mb-12">
                  <span className="font-black text-2xl tracking-tighter text-white">
                    MENU.
                  </span>
                </div>
                <nav className="flex flex-col gap-8">
                  {navLinks.map((link, i) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-4xl font-black tracking-tight hover:text-emerald-400 transition-colors uppercase"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="mt-auto pt-12 border-t border-white/5">
                  <Button className="w-full bg-emerald-500 text-black font-black h-16 rounded-2xl text-lg mb-4">
                    Começar Agora
                  </Button>
                  <p className="text-center text-xs text-zinc-600 font-bold uppercase tracking-widest">
                    © 2026 Bem-Estar Digital
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </>
  );
};