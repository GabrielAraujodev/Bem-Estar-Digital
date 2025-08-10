import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const socials = [
  { name: 'Instagram', href: '#', icon: <Instagram className="h-6 w-6" /> },
  { name: 'Facebook', href: '#', icon: <Facebook className="h-6 w-6" /> },
  { name: 'YouTube', href: '#', icon: <Youtube className="h-6 w-6" /> },
  { name: 'X', href: '#', icon: <Twitter className="h-6 w-6" /> },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h2 className="text-2xl font-bold text-emerald-400">Paz Interior</h2>
            <p className="text-gray-400 text-base">
              Sua jornada para o bem-estar começa aqui. Meditação e mindfulness ao seu alcance.
            </p>
            <div className="flex space-x-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Navegação</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#home" className="text-base text-gray-400 hover:text-white">Início</a></li>
                  <li><a href="#sessoes" className="text-base text-gray-400 hover:text-white">Sessões</a></li>
                  <li><a href="#planos" className="text-base text-gray-400 hover:text-white">Planos</a></li>
                  <li><a href="#depoimentos" className="text-base text-gray-400 hover:text-white">Depoimentos</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Política de Privacidade</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Termos de Serviço</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contato</h3>
                <ul className="mt-4 space-y-4">
                  <li className="text-base text-gray-400">contato@pazinterior.com</li>
                  <li className="text-base text-gray-400">+55 (11) 99999-8888</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} Paz Interior. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};