import { motion } from "framer-motion";
import { Send } from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
    {/* Animated glow blobs */}
    <div className="hero-glow hero-glow-1" />
    <div className="hero-glow hero-glow-2" />
    <div className="hero-glow hero-glow-3" />

    <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground mb-6">
            AI-революция{" "}
            <span className="gradient-text">начинается<br />с&nbsp;нас!</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Мы запускаем внутреннее AI-движение. Предлагай идеи, участвуй в
            проектах, получай поддержку и развивайся вместе с компанией.
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-3 gradient-accent text-accent-foreground font-semibold text-lg px-8 py-4 rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
          >
            <Send size={20} />
            Присоединиться в Telegram
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Это займёт меньше 1 минуты
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="hidden md:block"
        >
          <img
            src={heroImg}
            alt="Команда и AI"
            className="w-full max-w-lg mx-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
