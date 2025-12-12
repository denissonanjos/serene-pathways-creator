import { BookOpen, Brain, Heart, Compass, Sparkles, Shield } from "lucide-react";

const learnings = [
  {
    icon: Brain,
    title: "Entender o sistema de ameaça",
    description: "Compreenda como a ansiedade funciona no seu cérebro e por que ela se manifesta dessa forma",
  },
  {
    icon: Shield,
    title: "Identificar gatilhos",
    description: "Reconheça os padrões de pensamento e situações que ativam sua resposta de alerta",
  },
  {
    icon: Heart,
    title: "Acolher suas emoções",
    description: "Aprenda a lidar com suas emoções sem julgamento, com compaixão e autovalidação",
  },
  {
    icon: Compass,
    title: "Técnicas de regulação",
    description: "Ferramentas práticas de TCC para acalmar o sistema nervoso quando a ansiedade aparecer",
  },
  {
    icon: Sparkles,
    title: "Ressignificar experiências",
    description: "Transforme sua relação com a ansiedade, de inimiga para sinalizadora",
  },
  {
    icon: BookOpen,
    title: "Criar seu mapa pessoal",
    description: "Desenvolva uma anamnese pessoal para compreender sua história e padrões únicos",
  },
];

export const LearningsSection = () => {
  return (
    <section className="section-padding bg-nude-light">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-deep font-semibold text-sm uppercase tracking-wider mb-4">
            Sua Transformação
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            O que você vai aprender
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conhecimentos e ferramentas para uma nova relação com você mesma
          </p>
        </div>

        {/* Learnings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learnings.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-lavender flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
