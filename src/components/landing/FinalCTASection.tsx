import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush-soft/50 via-transparent to-lavender/30" />
      
      <div className="container-narrow relative z-10">
        <div className="text-center">
          {/* Emotional Appeal */}
          <div className="w-16 h-16 mx-auto rounded-full bg-blush-soft flex items-center justify-center mb-8 animate-pulse-soft">
            <Heart className="w-8 h-8 text-primary-deep" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Você merece se sentir em paz
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Imagine acordar sem aquela sensação de peso no peito. 
            Imagine ter clareza sobre o que você sente — e ferramentas para lidar com isso. 
            <span className="block mt-4 text-foreground font-medium">
              Esse caminho começa aqui.
            </span>
          </p>

          {/* CTA Button */}
          <Button 
            variant="cta" 
            size="xl" 
            className="group"
            onClick={() => document.getElementById("investimento")?.scrollIntoView({ behavior: "smooth" })}
          >
            Iniciar minha jornada de clareza emocional
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trust statement */}
          <p className="mt-8 text-sm text-muted-foreground max-w-md mx-auto">
            Você não precisa continuar enfrentando isso sozinha. 
            Estamos aqui para caminhar ao seu lado.
          </p>
        </div>
      </div>
    </section>
  );
};
