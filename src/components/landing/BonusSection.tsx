import { Gift, FileText, Headphones, Users } from "lucide-react";

const bonuses = [
  {
    icon: FileText,
    title: "Workbook da Anamnese",
    description: "Material exclusivo para você construir seu mapa emocional pessoal",
    value: "R$ 97",
  },
  {
    icon: Headphones,
    title: "Áudio de Relaxamento",
    description: "Meditação guiada para regulação do sistema nervoso",
    value: "R$ 47",
  },
  {
    icon: Users,
    title: "Grupo de Apoio",
    description: "Acesso ao grupo exclusivo de participantes por 30 dias",
    value: "R$ 97",
  },
];

export const BonusSection = () => {
  return (
    <section className="section-padding bg-lavender-soft">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Gift className="w-4 h-4 text-primary-deep" />
            <span className="text-sm font-medium text-primary-deep">Bônus Exclusivos</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Você também vai receber
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Materiais complementares para potencializar sua jornada
          </p>
        </div>

        {/* Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-card p-8 shadow-soft hover:shadow-card transition-all duration-300 group"
            >
              {/* Decorative corner */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blush-soft rounded-full opacity-50" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blush-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <bonus.icon className="w-7 h-7 text-primary-deep" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {bonus.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {bonus.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground line-through">{bonus.value}</span>
                  <span className="text-sm font-semibold text-primary-deep">GRÁTIS</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Valor total dos bônus: <span className="line-through">R$ 241</span>
            <span className="ml-2 text-primary-deep font-semibold">Incluídos na imersão!</span>
          </p>
        </div>
      </div>
    </section>
  );
};
