# AI-Bro

Лендинг для внутреннего AI-движения компании. Мотивирует сотрудников присоединиться к Telegram-боту, предлагать идеи и участвовать в AI-проектах.

## Стек

- **Фронтенд:** React 18 + TypeScript + Vite
- **Стили:** Tailwind CSS + shadcn/ui (Radix UI)
- **Анимации:** Framer Motion
- **Роутинг:** React Router DOM v6
- **Данные:** TanStack React Query
- **Тесты:** Vitest + Testing Library
- **Линтинг:** ESLint 9
- **Скрипты:** Python 3 (`ask_ai.py` — утилита для генерации идей через OpenAI API)

## Структура репозитория

```
AI-Bro/
├── lovable-project-.../        # Основной фронтенд (сгенерирован через Lovable)
│   ├── src/
│   │   ├── components/         # Секции лендинга (HeroSection, WhySection, …)
│   │   │   └── ui/             # shadcn/ui примитивы (не модифицировать напрямую)
│   │   ├── pages/              # Index.tsx, NotFound.tsx
│   │   ├── hooks/              # use-mobile, use-toast
│   │   ├── lib/                # utils.ts (cn helper)
│   │   └── assets/             # Картинки (hero-illustration.png)
│   └── package.json
├── ask_ai.py                   # Python-утилита для запросов к OpenAI
├── CLAUDE.md                   # Инструкции для Claude Code
├── .env                        # Переменные окружения (НЕ коммитить)
└── README.md
```

Репозиторий — монорепо: фронтенд Lovable живёт во вложенной папке со своим `package.json`, в корне — общие файлы и вспомогательные Python-скрипты.

## Быстрый старт

### Фронтенд

```sh
cd lovable-project-7f5722b1-3b84-4a98-b7dd-c6f7fbbe490b-2026-03-09
npm install
npm run dev
```

Доступные скрипты:

| Команда | Что делает |
|---|---|
| `npm run dev` | Запустить dev-сервер Vite |
| `npm run build` | Production-сборка |
| `npm run build:dev` | Сборка в development-режиме |
| `npm run preview` | Превью production-сборки |
| `npm run lint` | Проверить код ESLint |
| `npm test` | Прогнать тесты (Vitest) |
| `npm run test:watch` | Тесты в watch-режиме |

### Python-утилита

```sh
python3 ask_ai.py
```

Требует `OPENAI_API_KEY` в `.env`.

## Переменные окружения

Создайте `.env` в корне:

```
OPENAI_API_KEY=sk-...
```

**Важно:** `.env` уже в `.gitignore` — не коммитьте ключи.

## Конвенции

- **Коммиты:** на английском, императивный стиль (`Add feature`, `Fix bug`), без префиксов типа `feat/`, `fix/`.
- **Ветки:** `claude/<name>` для веток, созданных через Claude Code.
- **Компоненты:** PascalCase, один компонент — один файл (`.tsx`).
- **UI-компоненты:** `components/ui/` — автогенерированные shadcn/ui, обновляются через CLI.
- **Стили:** Tailwind utility-классы, кастомные классы в `App.css` / `index.css` (`gradient-text`, `hero-glow`, `section-alt`, …).
- **Язык интерфейса:** русский.

## Деплой

Перед публикацией на свой домен не забудьте:

- Обновить OG-метатеги в `index.html` (`og:image`, `twitter:image`, `og:title`, `og:description`).
- Поменять `<html lang="en">` → `<html lang="ru">`.
- Заполнить ссылку на Telegram-бот в `TelegramDialog` / CTA.

## Для Claude Code

См. [CLAUDE.md](CLAUDE.md) — там описаны правила работы с кодовой базой, ограничения и подсказки для эффективной работы AI-ассистента в этом репозитории.
