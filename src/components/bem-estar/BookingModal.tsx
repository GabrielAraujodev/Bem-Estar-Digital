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

interface Plan {
  name: string;
  price: string;
  description: string;
}

interface BookingModalProps {
  plan?: Plan;
}

export const BookingModal = ({ plan }: BookingModalProps) => {
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const handleSchedule = () => {
    if (whatsappNumber.replace(/\D/g, '').length >= 10) {
      const message = encodeURIComponent(
        `Olá! Gostaria de agendar uma sessão para o ${plan ? plan.name : 'plano de bem-estar'}.`
      );
      // IMPORTANTE: Substitua pelo número de WhatsApp do seu negócio.
      const businessWhatsappNumber = "5511999999999"; 
      window.open(`https://wa.me/${businessWhatsappNumber}?text=${message}`, "_blank");
    } else {
      alert("Por favor, insira um número de WhatsApp válido.");
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Agende sua Sessão</DialogTitle>
        <DialogDescription>
          {plan
            ? `Você selecionou o ${plan.name}. Preencha seu WhatsApp para agendarmos.`
            : "Preencha seu WhatsApp para agendarmos sua sessão inicial."}
        </DialogDescription>
      </DialogHeader>
      {plan && (
        <div className="my-4">
          <div className="p-4 bg-muted rounded-lg border">
            <h4 className="font-semibold">{plan.name}</h4>
            <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
            <p className="text-lg font-bold mt-2">{plan.price}/mês</p>
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