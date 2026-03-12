import AnimatedSection from "./AnimatedSection";
import { Bot, User } from "lucide-react";

const messages = [
  { from: "bot", text: "Привет! Я — AI-Movement бот. Какую проблему клиентов ты видишь чаще всего?" },
  { from: "user", text: "Консультанты тратят часы на ручной анализ данных перед внедрением" },
  { from: "bot", text: "Интересно! Это похоже на задачу для AI-ассистента. Давай оформим это в идею продукта — я задам пару вопросов 👇" },
  { from: "user", text: "Давай!" },
];

const TelegramDialog = () => (
  <section className="py-20 md:py-28 relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Как это выглядит
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12 text-lg">
          Просто напиши боту — и он поможет превратить проблему в идею продукта
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="max-w-md mx-auto bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-border bg-secondary/40">
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
              <Bot size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground leading-tight">AI-Movement Bot</p>
              <p className="text-xs text-muted-foreground">online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-3 p-5">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${msg.from === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                    msg.from === "bot"
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {msg.from === "bot" ? <Bot size={14} /> : <User size={14} />}
                </div>
                <div
                  className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed max-w-[80%] ${
                    msg.from === "bot"
                      ? "bg-secondary text-secondary-foreground rounded-bl-md"
                      : "gradient-accent text-accent-foreground rounded-br-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TelegramDialog;
