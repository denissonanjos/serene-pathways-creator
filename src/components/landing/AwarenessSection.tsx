import { Shield, AlertTriangle, Lightbulb } from "lucide-react";
import decorativeShape from "@/assets/decorative-shape.png";

export const AwarenessSection = () => {
  return (
    <section className="section-padding bg-lavender-soft relative overflow-hidden">
      {/* Decorative Element */}
      <img 
        src={decorativeShape} 
        alt="" 
        className="absolute -right-32 top-0 w-64 h-64 opacity-30 animate-float"
        aria-hidden="true"
      />
      
      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-accent-foreground/10 mb-6">
            <Lightbulb className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">Entenda o que está acontecendo</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Por que você sente isso?
            <span className="block text-primary-deep mt-2">O Sistema de Ameaça Ativado</span>
          </h2>
        </div>

        {/* Explanation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* What's Happening */}
          <div className="card-therapeutic">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                O que está acontecendo
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Seu cérebro desenvolveu um <strong className="text-foreground">sistema de alerta</strong> que foi 
              projetado para te proteger de perigos reais. O problema é que, na vida moderna, esse sistema 
              pode ficar <strong className="text-foreground">ativado constantemente</strong> — mesmo quando não há perigo real.
            </p>
          </div>

          {/* The Solution */}
          <div className="card-therapeutic">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-sage flex items-center justify-center">
                <Shield className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                A boa notícia
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Assim como esse sistema foi <strong className="text-foreground">aprendido</strong>, ele pode ser 
              <strong className="text-foreground"> regulado</strong>. Com as ferramentas certas, você pode 
              aprender a <strong className="text-foreground">desligar esse modo de alerta</strong> e recuperar 
              sua paz interior.
            </p>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card text-center">
          <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
            "Ansiedade não é quem você é. 
            <span className="block mt-2 text-primary-deep font-semibold">
              É um sistema que pode ser compreendido e regulado."
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
