import { Leaf, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const socials = [
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "YouTube", href: "#", icon: Youtube },
  { name: "Twitter", href: "#", icon: Twitter },
];

export const Footer = () => {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-green-500" />
              <span className="font-bold text-lg">BemEstar Digital</span>
            </a>
            <p className="text-muted-foreground text-center md:text-left text-sm">Sua jornada para uma vida mais plena começa aqui.</p>
          </div>
          <div className="col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-3">Produto</h4>
              <ul className="space-y-2">
                <li><a href="#planos" className="text-muted-foreground hover:text-foreground text-sm">Preços</a></li>
                <li><a href="#materiais" className="text-muted-foreground hover:text-foreground text-sm">Materiais</a></li>
                <li><a href="#depoimentos" className="text-muted-foreground hover:text-foreground text-sm">Depoimentos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#sobre" className="text-muted-foreground hover:text-foreground text-sm">Sobre Nós</a></li>
                <li><a href="#contato" className="text-muted-foreground hover:text-foreground text-sm">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm">Termos de Serviço</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground order-2 sm:order-1">
            &copy; {new Date().getFullYear()} BemEstar Digital. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4 order-1 sm:order-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};