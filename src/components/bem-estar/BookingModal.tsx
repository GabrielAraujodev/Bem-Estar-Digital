import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { showError } from "@/utils/toast";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface Plan {
  name: string;
  price: string;
  description: string;
}

interface Session {
  title: string;
  description: string;
  price: string;
  duration: string;
}

interface BookingModalProps {
  plan?: Plan;
  session?: Session;
}

export const BookingModal = ({ plan, session }: BookingModalProps) => {
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const item = plan
    ? { name: plan.name, description: plan.description, price: plan.price }
    : session
      ? { name: session.title, description: session.description, price: session.price }
      : null;

  const handleSchedule = () => {
    if (whatsappNumber.replace(/\D/g, '').length >= 10) {
      const message = encodeURIComponent(
        `Olá! Gostaria de agendar uma sessão para ${item ? item.name : 'o plano de bem-estar'}. meu WhatsApp é: ${whatsappNumber}`
      );
      // IMPORTANTE: Substitua pelo número de WhatsApp do seu negócio.
      const businessWhatsappNumber = "5511999999999";
      window.open(`https://wa.me/${businessWhatsappNumber}?text=${message}`, "_blank");
    } else {
      showError("Por favor, insira um número de WhatsApp válido.");
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px] bg-[#0a0a0a] border-white/10 text-white overflow-hidden p-0 rounded-[2rem]">
      <div className="p-8">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl font-black tracking-tight text-white">Agende sua <span className="text-emerald-400">Jornada</span></DialogTitle>
          <DialogDescription className="text-zinc-500 font-medium">
            {item
              ? `Você selecionou ${item.name}. Preencha os dados abaixo para receber o link de acesso.`
              : "Preencha seu WhatsApp para agendarmos sua sessão inicial personalizada."}
          </DialogDescription>
        </DialogHeader>

        {item && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-zinc-900 border border-white/5 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 h-full w-1 bg-emerald-500 opacity-20" />
            <h4 className="font-bold text-white text-lg tracking-tight mb-1">{item.name}</h4>
            <p className="text-xs text-zinc-500 mb-4">{item.description}</p>
            {item.price && (
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-emerald-400">{item.price}</span>
                <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest">{session ? '' : '/ mês'}</span>
              </div>
            )}
          </motion.div>
        )}

        <div className="space-y-6 mb-8">
          <div className="space-y-3">
            <Label htmlFor="whatsapp" className="text-xs font-black uppercase tracking-[0.2em] text-white/40 ml-1">
              WhatsApp de Contato
            </Label>
            <Input
              id="whatsapp"
              placeholder="(XX) XXXXX-XXXX"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              className="h-14 bg-zinc-900 border-white/10 rounded-xl focus:border-emerald-500/50 focus:ring-emerald-500/20 text-white placeholder:text-zinc-700 font-medium"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl mb-8">
          <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
          <p className="text-[10px] text-emerald-400/80 font-medium leading-tight">
            Seus dados estão protegidos por criptografia de ponta a ponta conforme a LGPD.
          </p>
        </div>

        <DialogFooter>
          <Button
            onClick={handleSchedule}
            className="w-full h-14 bg-emerald-500 text-black hover:bg-emerald-400 font-black text-lg rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all flex items-center justify-center gap-2 group"
          >
            Confirmar e Prosseguir <MessageCircle className="h-5 w-5 fill-black group-hover:scale-110 transition-transform" />
          </Button>
        </DialogFooter>
      </div>
    </DialogContent>
  );
};