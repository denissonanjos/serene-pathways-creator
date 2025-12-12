import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { PainPointsSection } from "@/components/landing/PainPointsSection";
import { AwarenessSection } from "@/components/landing/AwarenessSection";
import { ImmersionSection } from "@/components/landing/ImmersionSection";
import { LearningsSection } from "@/components/landing/LearningsSection";
import { MeetingsSection } from "@/components/landing/MeetingsSection";
import { BonusSection } from "@/components/landing/BonusSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { FooterSection } from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <>
      {/* Fixed Header */}
      <Header />
      
      <main className="min-h-screen">
        {/* ATENÇÃO - Hero Section */}
        <HeroSection />
        
        {/* INTERESSE - Identificação com as dores */}
        <PainPointsSection />
        
        {/* INTERESSE - Virada de consciência */}
        <section id="sobre">
          <AwarenessSection />
        </section>
        
        {/* DESEJO - Apresentação da imersão */}
        <ImmersionSection />
        
        {/* DESEJO - O que vai aprender */}
        <section id="aprendizados">
          <LearningsSection />
        </section>
        
        {/* DESEJO - Estrutura dos 4 encontros */}
        <MeetingsSection />
        
        {/* DESEJO - Bônus */}
        <BonusSection />
        
        {/* DESEJO - Garantia */}
        <GuaranteeSection />
        
        {/* AÇÃO - Investimento + CTA */}
        <PricingSection />
        
        {/* FAQ */}
        <FAQSection />
        
        {/* AÇÃO - CTA final emocional */}
        <FinalCTASection />
        
        {/* Rodapé com aviso ético */}
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
