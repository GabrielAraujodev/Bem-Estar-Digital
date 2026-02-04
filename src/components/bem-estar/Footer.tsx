import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const socials = [
  { name: 'Instagram', href: '#', icon: <Instagram className="h-5 w-5" /> },
  { name: 'Facebook', href: '#', icon: <Facebook className="h-5 w-5" /> },
  { name: 'YouTube', href: '#', icon: <Youtube className="h-5 w-5" /> },
  { name: 'X', href: '#', icon: <Twitter className="h-5 w-5" /> },
];

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/5">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-12">

          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight text-white">
                Bem-Estar <span className="text-emerald-400 italic font-medium">Digital</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Sua jornada para o equilíbrio emocional e performance mental começa aqui. O mindfulness brasileiro para uma vida sem limites.
            </p>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 text-zinc-400 hover:text-emerald-400 hover:bg-emerald-500/10 border border-white/5 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3">
            <div className="md:grid md:grid-cols-3 md:gap-8 lg:ml-auto lg:w-full">

              <div>
                <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6">Navegação</h3>
                <ul className="space-y-4">
                  <li><a href="#home" className="text-sm text-zinc-500 hover:text-emerald-400 transition-colors">Início</a></li>
                  <li><a href="#sessoes" className="text-sm text-zinc-500 hover:text-emerald-400 transition-colors">Sessões</a></li>
                  <li><a href="#planos" className="text-sm text-zinc-500 hover:text-emerald-400 transition-colors">Planos</a></li>
                  <li><a href="#depoimentos" className="text-sm text-zinc-500 hover:text-emerald-400 transition-colors">Depoimentos</a></li>
                </ul>
              </div>

              <div className="mt-12 md:mt-0">
                <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6">Prática</h3>
                <ul className="space-y-4">
                  <li><a href="#sobre" className="text-sm text-zinc-500 hover:text-emerald-400 transition-colors">Metodologia</a></li>
                  <li><a href="#materiais" className="text-sm text-zinc-500 hover:text-emerald-400 transition-colors">Materiais Free</a></li>
                  <li><a href="#faq" className="text-sm text-zinc-500 hover:text-emerald-400 transition-colors">Ajuda & FAQ</a></li>
                  <li><a href="#equipe" className="text-sm text-zinc-500 hover:text-emerald-400 transition-colors">Especialistas</a></li>
                </ul>
              </div>

              <div className="mt-12 md:mt-0">
                <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6">Contato</h3>
                <ul className="space-y-4">
                  <li className="text-sm text-zinc-500 font-medium">contato@bemestardigital.com</li>
                  <li className="text-sm text-zinc-500">+55 (11) 99999-8888</li>
                  <li className="mt-6 pt-6 border-t border-white/5">
                    <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-1">Status do Sistema</p>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] text-zinc-500 font-bold">Operacional</span>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-600">
            &copy; {new Date().getFullYear()} Bem-Estar <span className="text-emerald-500/50">Digital</span>. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-600 hover:text-zinc-400 transition-colors">Privacidade</a>
            <a href="#" className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-600 hover:text-zinc-400 transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};