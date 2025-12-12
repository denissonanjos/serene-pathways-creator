import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToCTA = () => {
    document.getElementById("investimento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 container-narrow section-padding text-center">
        <div className="animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blush-soft border border-primary/20 mb-8">
            <Heart className="w-4 h-4 text-primary-deep" />
            <span className="text-sm font-medium text-foreground">Grupo Terapêutico Online</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-6 text-balance">
            Imersão Anamnese
            <span className="block mt-2 text-primary-deep">
              Desligue o Sistema da Ansiedade
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animation-delay-200 animate-fade-up">
            Você já acordou cansada... antes mesmo de abrir os olhos? Como se sua mente já estivesse em funcionamento, 
            lembrando de tudo o que pode dar errado?
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animation-delay-400 animate-fade-up">
            <Button 
              variant="cta" 
              size="xl" 
              onClick={scrollToCTA}
              className="group"
            >
              <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
              Quero desligar o sistema da ansiedade
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="mt-8 text-sm text-muted-foreground animation-delay-600 animate-fade-up">
            Método baseado em Terapia Cognitivo-Comportamental (TCC)
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
