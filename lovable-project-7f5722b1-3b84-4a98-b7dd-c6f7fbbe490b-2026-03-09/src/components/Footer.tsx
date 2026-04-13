const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span>Внутренний AI-проект компании</span>
      <div className="flex items-center gap-6">
        <a href="/faq" className="hover:text-primary transition-colors duration-200">
          FAQ
        </a>
        <a href="mailto:ai@company.com" className="hover:text-primary transition-colors duration-200">
          Вопросы: ai@company.com
        </a>
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors duration-200"
        >
          Telegram-бот
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
