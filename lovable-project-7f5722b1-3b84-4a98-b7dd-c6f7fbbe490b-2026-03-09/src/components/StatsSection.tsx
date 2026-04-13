import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 150, suffix: "+", label: "Участников движения" },
  { value: 42, suffix: "", label: "Запущенных проектов" },
  { value: 300, suffix: "+", label: "Поданных идей" },
  { value: 18, suffix: "", label: "Экспертов-менторов" },
];

const useCountUp = (end: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);

  return count;
};

const StatCard = ({ item, delay }: { item: StatItem; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(item.value, 1800, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatedSection delay={delay}>
      <div
        ref={ref}
        className="text-center p-6 rounded-2xl bg-secondary/40 border border-border hover:border-primary/30 transition-all duration-300"
      >
        <p className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
          {count}
          {item.suffix}
        </p>
        <p className="text-muted-foreground text-sm md:text-base">
          {item.label}
        </p>
      </div>
    </AnimatedSection>
  );
};

const StatsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          AI-движение в цифрах
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 text-lg">
          Вместе мы уже добились многого — и это только начало.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((item, i) => (
          <StatCard key={item.label} item={item} delay={i * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
