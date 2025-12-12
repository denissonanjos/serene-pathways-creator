import { ShieldCheck } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-sage/50">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-sage flex items-center justify-center">
                <ShieldCheck className="w-12 h-12 text-foreground" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Garantia de 7 dias
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Se após o primeiro encontro você sentir que a imersão não é para você, 
                basta nos enviar um e-mail e devolveremos 100% do seu investimento. 
                <strong className="text-foreground"> Sem perguntas, sem burocracia.</strong>
              </p>
              <p className="text-sm text-muted-foreground italic">
                Acreditamos na transformação que esse processo pode proporcionar. 
                Por isso, você não corre nenhum risco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
