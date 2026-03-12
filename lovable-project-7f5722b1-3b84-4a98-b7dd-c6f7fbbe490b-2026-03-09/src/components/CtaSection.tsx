import AnimatedSection from "./AnimatedSection";
import { Send } from "lucide-react";

const CtaSection = () => (
  <section id="cta" className="py-20 md:py-28 section-alt relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Давай строить будущее вместе
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-10 text-lg">
          AI-трансформация — это не проект «для кого-то». Это движение, частью которого можешь стать ты.
        </p>
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 gradient-accent text-accent-foreground font-semibold text-lg px-10 py-4 rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
        >
          <Send size={20} />
          Войти в AI-бот
        </a>
        <p className="mt-4 text-muted-foreground text-sm">
          Сделай первый шаг сегодня.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default CtaSection;
