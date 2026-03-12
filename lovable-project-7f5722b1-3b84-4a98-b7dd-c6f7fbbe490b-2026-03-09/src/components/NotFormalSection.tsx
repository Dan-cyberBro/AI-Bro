import AnimatedSection from "./AnimatedSection";
import { CheckCircle2, Eye, Vote, Wrench, Database } from "lucide-react";

const points = [
  { icon: <CheckCircle2 size={22} />, text: "Идеи действительно рассматриваются" },
  { icon: <Eye size={22} />, text: "Прозрачный процесс отбора" },
  { icon: <Vote size={22} />, text: "Возможность голосования" },
  { icon: <Wrench size={22} />, text: "Поддержка на этапе реализации" },
  { icon: <Database size={22} />, text: "Каждый опыт сохраняется — все эксперименты попадают в общую базу знаний" },
];

const NotFormalSection = () => (
  <section className="py-20 md:py-28 section-dark">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Это не формальность
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-14 text-lg">
          Мы строим реальный процесс, а не просто собираем предложения.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
        {points.map((p, i) => (
          <AnimatedSection key={p.text} delay={i * 0.1}>
            <div className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border card-hover">
              <div className="text-primary shrink-0">{p.icon}</div>
              <span className="font-medium text-foreground text-sm">{p.text}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default NotFormalSection;
