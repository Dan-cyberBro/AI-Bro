import AnimatedSection from "./AnimatedSection";
import { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  title: string;
  text: string;
  delay?: number;
}

const SectionCard = ({ icon, title, text, delay = 0 }: Props) => (
  <AnimatedSection delay={delay}>
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover h-full">
      {icon && <div className="text-primary mb-4">{icon}</div>}
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
    </div>
  </AnimatedSection>
);

export default SectionCard;
