import { Calendar, ArrowRight } from "lucide-react";

const meetings = [
  {
    number: 1,
    title: "Compreendendo o Sistema",
    description: "Você vai entender como a ansiedade funciona no seu cérebro e por que seu corpo reage da forma que reage. Vamos desmistificar o que você sente.",
    color: "bg-blush-soft",
  },
  {
    number: 2,
    title: "Mapeando Seus Gatilhos",
    description: "Identificação dos padrões de pensamento, situações e memórias que ativam sua resposta de ansiedade. Seu mapa pessoal começa aqui.",
    color: "bg-lavender",
  },
  {
    number: 3,
    title: "Ferramentas de Regulação",
    description: "Técnicas práticas de TCC para acalmar o sistema nervoso. Você sairá deste encontro com um kit de ferramentas para usar no dia a dia.",
    color: "bg-sage",
  },
  {
    number: 4,
    title: "Integração e Caminho",
    description: "Consolidação de todo o aprendizado e criação do seu plano pessoal de cuidado contínuo. Você não estará mais sozinha.",
    color: "bg-nude",
  },
];

export const MeetingsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Calendar className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">Estrutura da Imersão</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            4 Encontros Transformadores
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Cada encontro foi pensado para te levar mais perto da sua paz interior
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {/* Meetings */}
          <div className="space-y-8 md:space-y-12">
            {meetings.map((meeting, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full ${meeting.color} flex items-center justify-center shadow-soft`}>
                    <span className="font-serif text-2xl font-bold text-foreground">
                      {meeting.number}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 max-w-md ${index % 2 === 1 ? "md:text-right" : ""}`}>
                  <div className="card-therapeutic">
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">
                      {meeting.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {meeting.description}
                    </p>
                  </div>
                </div>

                {/* Arrow (hidden on mobile) */}
                {index < meetings.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 -bottom-6 -translate-x-1/2 z-20">
                    <ArrowRight className="w-5 h-5 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
