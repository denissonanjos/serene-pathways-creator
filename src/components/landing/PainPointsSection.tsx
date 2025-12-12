import { AlertCircle, Brain, Cloud, Moon, Heart, Zap } from "lucide-react";

const painPoints = [
  {
    icon: Moon,
    text: "Acorda cansada antes mesmo de começar o dia",
  },
  {
    icon: Brain,
    text: "Mente que não para, sempre antecipando o pior",
  },
  {
    icon: AlertCircle,
    text: "Sensação constante de que algo ruim vai acontecer",
  },
  {
    icon: Cloud,
    text: "Dificuldade para relaxar, mesmo nos momentos de descanso",
  },
  {
    icon: Zap,
    text: "Corpo tenso, coração acelerado, falta de ar",
  },
  {
    icon: Heart,
    text: "Culpa por não conseguir 'simplesmente se acalmar'",
  },
];

export const PainPointsSection = () => {
  return (
    <section className="section-padding bg-nude-light">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Você se identifica com isso?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Se você vive assim, saiba que não está sozinha. E mais importante: 
            <span className="text-primary-deep font-medium"> isso tem explicação.</span>
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blush-soft flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <point.icon className="w-6 h-6 text-primary-deep" />
              </div>
              <p className="text-foreground leading-relaxed pt-2">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Empathy Statement */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic text-lg">
            "Não é frescura. Não é falta de força. É o seu sistema nervoso 
            <span className="text-primary-deep font-medium"> pedindo ajuda.</span>"
          </p>
        </div>
      </div>
    </section>
  );
};
