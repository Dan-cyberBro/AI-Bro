import AnimatedSection from "./AnimatedSection";
import SectionCard from "./SectionCard";
import { Sparkles, Brain, HeartHandshake, FolderKanban, BadgeDollarSign, BookOpen } from "lucide-react";

const cards = [
  { icon: <Sparkles size={28} />, title: "От идеи — к своему продукту", text: "Лучшие инициативы становятся AI-продуктами. Их авторы возглавляют направление и становятся кофаундерами того, что сами придумали." },
  { icon: <Brain size={28} />, title: "AI-навыки", text: "Практика работы с AI-инструментами, а не просто теория." },
  { icon: <HeartHandshake size={28} />, title: "Менторство", text: "Поддержка от экспертов и лидеров внутри компании." },
  { icon: <FolderKanban size={28} />, title: "Участие в проектах", text: "Можно присоединиться к инициативам, которые тебе интересны." },
  { icon: <BadgeDollarSign size={28} />, title: "Корпоративный грант", text: "Лучшие идеи получат ресурсы на реализацию." },
  { icon: <BookOpen size={28} />, title: "Живой репозиторий AI-практик", text: "Все применения AI собраны в одном месте. Смотри, что работает у коллег, бери и адаптируй под себя." },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-20 md:py-28 section-alt">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14">
          Что ты получаешь
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <SectionCard key={c.title} {...c} delay={i * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
