import AnimatedSection from "./AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Анна К.",
    role: "Менеджер продукта",
    text: "Я не умела программировать, но предложила идею автоматизации отчётов. Через месяц у нас был рабочий прототип. AI-движение дало мне менторов и уверенность.",
  },
  {
    name: "Дмитрий Л.",
    role: "Аналитик данных",
    text: "Благодаря AI-движению я вырос из аналитика в лида AI-проекта. Здесь ценят не должность, а идеи и желание действовать.",
  },
  {
    name: "Мария С.",
    role: "HR-специалист",
    text: "Наш HR-бот на AI обрабатывает 80% типовых вопросов. Идея родилась в рамках движения, а теперь это часть ежедневной работы компании.",
  },
  {
    name: "Алексей В.",
    role: "Инженер",
    text: "Я всегда хотел попробовать ML, но не знал, с чего начать. Здесь дали и задачу, и инструменты, и поддержку. Лучший опыт в карьере.",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 section-alt">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Что говорят участники
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-14 text-lg">
          Реальные истории людей, которые уже стали частью AI-движения.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="relative p-6 rounded-2xl bg-card border border-border card-hover h-full flex flex-col">
              <Quote
                size={24}
                className="text-primary/30 mb-3 shrink-0"
              />
              <p className="text-foreground/90 text-base leading-relaxed mb-6 flex-1">
                {t.text}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center text-accent-foreground font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
