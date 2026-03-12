import AnimatedSection from "./AnimatedSection";
import { Cog, Package, Zap, HeadphonesIcon, Globe, BarChart3 } from "lucide-react";

const topics = [
  { icon: <Cog size={24} />, title: "AI в операционных процессах", text: "Оптимизация внутренних процессов с помощью AI." },
  { icon: <Package size={24} />, title: "AI в продукте", text: "Интеграция AI-функций в наши продукты." },
  { icon: <Zap size={24} />, title: "Автоматизация рутины", text: "Освобождение времени от повторяющихся задач." },
  { icon: <HeadphonesIcon size={24} />, title: "Улучшение клиентского опыта", text: "Персонализация и ускорение обслуживания." },
  { icon: <Globe size={24} />, title: "Новые цифровые сервисы", text: "Создание принципиально новых предложений." },
  { icon: <BarChart3 size={24} />, title: "Внутренние инструменты и аналитика", text: "Умные дашборды и системы принятия решений." },
];

const TopicsSection = () => (
  <section id="topics" className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14">
          Где мы хотим применять AI уже сейчас
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {topics.map((t, i) => (
          <AnimatedSection key={t.title} delay={i * 0.08}>
            <div className="bg-card rounded-xl p-5 border border-border card-hover h-full flex items-start gap-4">
              <div className="text-primary shrink-0 mt-0.5">{t.icon}</div>
              <div>
                <h3 className="font-bold text-foreground mb-1 text-sm">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.text}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TopicsSection;
