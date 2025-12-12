import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Preciso ter diagnóstico de ansiedade para participar?",
    answer: "Não. A imersão é para qualquer mulher que sinta ansiedade recorrente e deseje compreender melhor suas emoções. Não é necessário ter diagnóstico formal.",
  },
  {
    question: "É terapia em grupo?",
    answer: "É um grupo terapêutico educativo, com base em Terapia Cognitivo-Comportamental (TCC). Você terá espaço para compartilhar, mas também pode participar apenas ouvindo. Não substitui terapia individual.",
  },
  {
    question: "Como funcionam os encontros?",
    answer: "São 4 encontros online ao vivo, com duração aproximada de 1h30 cada. Você receberá o link de acesso por e-mail antes de cada encontro.",
  },
  {
    question: "E se eu não puder assistir ao vivo?",
    answer: "Todas as gravações ficam disponíveis por 60 dias após o término da imersão. Porém, recomendamos fortemente a participação ao vivo para maior aproveitamento.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer: "Sim! Você pode parcelar em até 12x no cartão de crédito. Também aceitamos Pix e boleto à vista.",
  },
  {
    question: "A garantia é real?",
    answer: "Sim, totalmente. Se após o primeiro encontro você sentir que não é para você, basta enviar um e-mail solicitando o reembolso. Devolvemos 100% do valor, sem perguntas.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-nude-light">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary-deep font-semibold text-sm uppercase tracking-wider mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Perguntas Frequentes
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-soft overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blush-soft/30 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-deep flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
