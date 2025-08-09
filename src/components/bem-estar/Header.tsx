import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Leaf } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { BookingModal } from "./BookingModal";

export const Header = () => {
  const navLinks = [
    { label: "Início", href: "#home" },
    { label: "Sessões", href: "#sessoes" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Materiais", href: "#materiais" },
    { label: "Planos", href: "#planos" },
    { label: "Equipe", href: "#equipe" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-emerald-500" />
          <span className="font-bold text-lg text-emerald-600">
            Bem-Estar Digital
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Agende sua Sessão</Button>
            </DialogTrigger>
            <BookingModal />
          </Dialog>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
               <Dialog>
                <DialogTrigger asChild>
                  <Button>Agende sua Sessão</Button>
                </DialogTrigger>
                <BookingModal />
              </Dialog>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};