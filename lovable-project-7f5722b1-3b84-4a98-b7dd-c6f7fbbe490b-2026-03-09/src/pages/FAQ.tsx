import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Send, ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqItems = [
  {
    q: "Что такое AI-движение?",
    a: "AI-движение — это внутренняя инициатива компании, где каждый сотрудник может предложить идею по внедрению искусственного интеллекта в рабочие процессы. Мы создаём экосистему, в которой идеи превращаются в реальные продукты.",
  },
  {
    q: "Кто может участвовать?",
    a: "Любой сотрудник компании, вне зависимости от отдела и должности. Нам важна ваша экспертиза в бизнес-процессах — именно вы лучше всех знаете, где AI может быть полезен.",
  },
  {
    q: "Нужно ли уметь программировать?",
    a: "Нет! Для участия не нужны технические навыки. Вы предлагаете идею и описываете проблему, а команда экспертов и менторов поможет с технической реализацией. Если вы хотите прокачать навыки — мы предоставим обучение.",
  },
  {
    q: "Как предложить идею?",
    a: "Присоединитесь к нашему Telegram-боту, ответьте на несколько вопросов о вашей идее, и она автоматически попадёт на рассмотрение. Весь процесс занимает меньше 5 минут.",
  },
  {
    q: "Что происходит после подачи идеи?",
    a: "Ваша идея проходит экспертную оценку. Если она перспективна — вам назначают ментора, формируется команда, и начинается разработка прототипа. Вы участвуете на каждом этапе.",
  },
  {
    q: "Какие ресурсы и поддержка доступны?",
    a: "Участникам доступны: менторы из числа ведущих специалистов, доступ к AI-инструментам и платформам, обучающие материалы, еженедельные встречи с экспертами, а также база знаний с кейсами реализованных проектов.",
  },
  {
    q: "Есть ли гранты или бюджеты на проекты?",
    a: "Да. Перспективные проекты получают внутреннее финансирование на инструменты, API и инфраструктуру. Размер гранта зависит от масштаба и потенциального влияния проекта на бизнес.",
  },
  {
    q: "Сколько времени это занимает?",
    a: "Подача идеи — 5 минут. Участие в проекте гибкое: от нескольких часов в неделю до полноценной вовлечённости. Мы понимаем, что у вас есть основные задачи, и уважаем ваше время.",
  },
  {
    q: "Можно ли участвовать в нескольких проектах?",
    a: "Да, вы можете быть автором одной идеи и помогать в реализации другой. Главное — реально оценивать свои временные ресурсы. Мы рекомендуем начинать с одного проекта.",
  },
  {
    q: "Как связаться с менторами?",
    a: "После подачи идеи вам назначается ментор, с которым можно связаться напрямую через корпоративный мессенджер. Также проводятся еженедельные открытые сессии, где можно задать вопросы любому эксперту.",
  },
  {
    q: "Это официальная инициатива компании?",
    a: "Да, AI-движение полностью поддерживается руководством. Это не хобби-проект — это стратегическое направление развития, и ваш вклад реально учитывается.",
  },
  {
    q: "Что если моя идея не пройдёт отбор?",
    a: "Это не конец! Вы получите обратную связь от экспертов с рекомендациями по доработке. Многие успешные проекты начинались со второй или третьей итерации. Мы поощряем настойчивость.",
  },
];

const FAQ = () => (
  <>
    <Navbar />
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <AnimatedSection>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            На главную
          </a>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Часто задаваемые{" "}
            <span className="gradient-text">вопросы</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-12">
            Собрали ответы на самые популярные вопросы об AI-движении. Не нашли
            свой? Напишите нам на{" "}
            <a
              href="mailto:ai@company.com"
              className="text-primary hover:underline"
            >
              ai@company.com
            </a>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-border"
              >
                <AccordionTrigger className="text-left text-base md:text-lg text-foreground hover:text-primary hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Готов присоединиться к AI-движению?
            </p>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 gradient-accent text-accent-foreground font-semibold text-lg px-10 py-4 rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
            >
              <Send size={20} />
              Присоединиться в Telegram
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
    <Footer />
  </>
);

export default FAQ;
