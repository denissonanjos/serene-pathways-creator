import { Heart } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-foreground text-card py-12 px-4">
      <div className="container-narrow">
        {/* Ethical Disclaimer */}
        <div className="bg-card/5 rounded-2xl p-6 mb-10">
          <h3 className="font-serif text-lg font-semibold text-card mb-3">
            Aviso Importante
          </h3>
          <p className="text-card/80 text-sm leading-relaxed">
            Esta imersão é um programa educativo e de apoio emocional em grupo. 
            <strong className="text-card"> Não substitui acompanhamento psicológico ou psiquiátrico individual.</strong> 
            {" "}Se você está em crise ou sente que precisa de ajuda profissional urgente, 
            procure um profissional de saúde mental ou ligue para o CVV (188). 
            Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>

        {/* Footer Content */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-primary" />
            <span className="font-serif text-xl text-card">Imersão Anamnese</span>
          </div>
          
          <p className="text-card/60 text-sm mb-6">
            Desligue o Sistema da Ansiedade
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-card/60 mb-8">
            <a href="#" className="hover:text-card transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-card transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-card transition-colors">
              Contato
            </a>
          </div>

          <p className="text-card/40 text-xs">
            © {new Date().getFullYear()} Imersão Anamnese. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
