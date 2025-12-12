import { Button } from "@/components/ui/button";
import { Check, Sparkles, CreditCard } from "lucide-react";

const included = [
  "4 encontros ao vivo de grupo terapêutico",
  "Método baseado em TCC",
  "Workbook da Anamnese",
  "Áudio de relaxamento guiado",
  "Acesso ao grupo de apoio por 30 dias",
  "Gravação dos encontros por 60 dias",
  "Garantia incondicional de 7 dias",
];

export const PricingSection = () => {
  return (
    <section id="investimento" className="section-padding bg-nude-light">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary-deep font-semibold text-sm uppercase tracking-wider mb-4">
            Investimento
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Comece sua transformação
          </h2>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative bg-card rounded-3xl p-8 md:p-10 shadow-elevated border border-primary/20 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blush-soft rounded-full opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-lavender rounded-full opacity-30" />

            <div className="relative z-10">
              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-muted-foreground mb-2">Por apenas</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg text-muted-foreground">R$</span>
                  <span className="font-serif text-6xl md:text-7xl font-bold text-foreground">249</span>
                  <span className="text-2xl text-muted-foreground">,90</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  ou 12x de R$ 24,58
                </p>
              </div>

              {/* Included Items */}
              <div className="space-y-4 mb-8">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-deep flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-card" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant="cta" 
                size="xl" 
                className="w-full group"
                onClick={() => window.open("#", "_blank")}
              >
                <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                Quero participar da imersão
              </Button>

              {/* Payment Methods */}
              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
                <CreditCard className="w-4 h-4" />
                <span>Cartão de crédito, Pix ou boleto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
