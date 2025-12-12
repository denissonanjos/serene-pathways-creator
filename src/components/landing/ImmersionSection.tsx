import { Users, Video, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Grupo Terapêutico",
    description: "Conexão com outras mulheres que entendem o que você sente",
  },
  {
    icon: Video,
    title: "100% Online",
    description: "Participe do conforto da sua casa, sem deslocamento",
  },
  {
    icon: Clock,
    title: "4 Encontros",
    description: "Jornada estruturada com encontros semanais ao vivo",
  },
  {
    icon: Heart,
    title: "Acolhimento Real",
    description: "Ambiente seguro, ético e livre de julgamentos",
  },
];

export const ImmersionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-deep font-semibold text-sm uppercase tracking-wider mb-4">
            Conheça a Imersão
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Imersão Anamnese
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Uma jornada de autoconhecimento e regulação emocional, baseada em 
            <strong className="text-foreground"> Terapia Cognitivo-Comportamental (TCC)</strong>, 
            criada especialmente para mulheres que desejam compreender e acolher sua ansiedade.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-blush-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-primary-deep" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Who Is It For */}
        <div className="bg-nude rounded-3xl p-8 md:p-12">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
            Para quem é essa imersão?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "Mulheres que sentem ansiedade recorrente",
              "Quem quer entender por que se sente assim",
              "Quem busca ferramentas práticas e acolhedoras",
              "Quem deseja fazer parte de um grupo de apoio",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-deep flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-card" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
