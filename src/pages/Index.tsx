import { Header } from "@/components/bem-estar/Header";
import { Hero } from "@/components/bem-estar/Hero";
import { TrustedBy } from "@/components/bem-estar/TrustedBy";
import { Sessions } from "@/components/bem-estar/Sessions";
import { Testimonials } from "@/components/bem-estar/Testimonials";
import { HowItWorks } from "@/components/bem-estar/HowItWorks";
import { Pricing } from "@/components/bem-estar/Pricing";
import { Team } from "@/components/bem-estar/Team";
import { Cta } from "@/components/bem-estar/Cta";
import { Footer } from "@/components/bem-estar/Footer";
import { AnimatedSection } from "@/components/bem-estar/AnimatedSection";
import { FreeMaterials } from "@/components/bem-estar/FreeMaterials";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <AnimatedSection>
          <TrustedBy />
        </AnimatedSection>
        <AnimatedSection>
          <Sessions />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <HowItWorks />
        </AnimatedSection>
        <AnimatedSection>
          <FreeMaterials />
        </AnimatedSection>
        <AnimatedSection>
          <Pricing />
        </AnimatedSection>
        <AnimatedSection>
          <Team />
        </AnimatedSection>
        <AnimatedSection>
          <Cta />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;