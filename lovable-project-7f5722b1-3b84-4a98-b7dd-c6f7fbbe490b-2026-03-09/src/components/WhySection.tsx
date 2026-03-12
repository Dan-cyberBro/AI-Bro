import AnimatedSection from "./AnimatedSection";
import SectionCard from "./SectionCard";
import { TrendingUp, Lightbulb, Users, Rocket } from "lucide-react";

const cards = [
  { icon: <TrendingUp size={28} />, title: "AI меняет рынок", text: "Компании, которые быстро внедряют AI, растут быстрее и эффективнее." },
  { icon: <Lightbulb size={28} />, title: "У нас внутри много идей", text: "В команде огромный потенциал, который часто остаётся нереализованным." },
  { icon: <Users size={28} />, title: "Каждый может повлиять", text: "Инициатива больше не только «сверху». Мы создаём систему для участия каждого." },
  { icon: <Rocket size={28} />, title: "Это шанс для роста", text: "AI-проекты — это новые навыки, новые роли и новые возможности." },
];

const WhySection = () => (
  <section id="why" className="py-20 md:py-28 section-alt">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Почему мы запускаем AI-движение
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-14 text-lg">
          AI уже меняет правила игры. Мы хотим быть среди тех, кто создаёт будущее, а не догоняет его.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6">
        {cards.map((c, i) => (
          <SectionCard key={c.title} {...c} delay={i * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
