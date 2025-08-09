import { Leaf } from "lucide-react";

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
          <div className="col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center md:text-left">
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
            <div>
              <h4 className="font-semibold mb-3">Social</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm">Instagram</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm">Facebook</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BemEstar Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};