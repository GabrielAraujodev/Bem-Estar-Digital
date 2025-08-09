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

interface Plan {
  name: string;
  price: string;
  description: string;
}

interface Session {
    title: string;
    description:string;
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
        `Olá! Gostaria de agendar uma sessão para ${item ? item.name : 'o plano de bem-estar'}.`
      );
      // IMPORTANTE: Substitua pelo número de WhatsApp do seu negócio.
      const businessWhatsappNumber = "5511999999999"; 
      window.open(`https://wa.me/${businessWhatsappNumber}?text=${message}`, "_blank");
    } else {
      showError("Por favor, insira um número de WhatsApp válido.");
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Agende sua Sessão</DialogTitle>
        <DialogDescription>
          {item
            ? `Você selecionou ${item.name}. Preencha seu WhatsApp para agendarmos.`
            : "Preencha seu WhatsApp para agendarmos sua sessão inicial."}
        </DialogDescription>
      </DialogHeader>
      {item && (
        <div className="my-4">
          <div className="p-4 bg-muted rounded-lg border">
            <h4 className="font-semibold">{item.name}</h4>
            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
            {item.price && <p className="text-lg font-bold mt-2">{session ? item.price : `${item.price}/mês`}</p>}
          </div>
        </div>
      )}
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="whatsapp" className="text-right">
            WhatsApp
          </Label>
          <Input
            id="whatsapp"
            placeholder="(XX) XXXXX-XXXX"
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button onClick={handleSchedule} className="w-full">Agendar Sessão via WhatsApp</Button>
      </DialogFooter>
    </DialogContent>
  );
};