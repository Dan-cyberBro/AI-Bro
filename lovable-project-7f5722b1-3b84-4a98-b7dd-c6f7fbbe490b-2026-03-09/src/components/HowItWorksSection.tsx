import AnimatedSection from "./AnimatedSection";
import { MessageCircle, ClipboardList, Lightbulb, Rocket } from "lucide-react";

const steps = [
  { icon: <MessageCircle size={28} />, title: "Зайди в бот", text: "Перейди по ссылке и начни диалог." },
  { icon: <ClipboardList size={28} />, title: "Ответь на пару вопросов", text: "Расскажи о своих интересах и готовности участвовать." },
  { icon: <Lightbulb size={28} />, title: "Предложи идею или выбери проект", text: "Можно создать инициативу или присоединиться к существующей." },
  { icon: <Rocket size={28} />, title: "Получай поддержку", text: "Голосование, отбор, менторы и ресурсы." },
];

const HowItWorksSection = () => (
  <section id="how" className="py-20 md:py-28 section-alt">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Как это работает
        </h2>
        <p className="text-muted-foreground text-lg mb-14">
          Просто. Быстро. Прозрачно.
        </p>
      </AnimatedSection>

      <div className="relative grid md:grid-cols-4 gap-8">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-primary/30 glow-line" />

        {steps.map((step, i) => (
          <AnimatedSection key={step.title} delay={i * 0.15}>
            <div className="relative flex flex-col items-center text-center">
              <div className="relative z-10 w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4">
                {step.icon}
              </div>
              <span className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                Шаг {i + 1}
              </span>
              <h3 className="text-base font-bold text-foreground mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
