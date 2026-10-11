# SuluSystems — редизайн лендинга

Редизайн https://sulusystems.kz/: композиция Swiss (сетка 12 колонок, главы 01–09 со шкалами),
оригинальная палитра SuluSystems, 3D на Three.js и анимации GSAP / Motion.
Стек: React + Vite + Tailwind v4 + shadcn/ui.

**Сайт:** https://shadowgod1.github.io/landing-redisign-sulu/

## Разработка

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # сборка в dist/ (относительные пути, работает из любой подпапки)
```

## Публикация

Готовая сборка лежит в ветке `gh-pages`; GitHub Pages раздаёт её
(Settings → Pages → Deploy from a branch → `gh-pages` / `/ (root)`).

Форма демо отправляет заявку на `/api/leads`, как оригинальный сайт, — на GitHub Pages этого адреса нет,
поэтому заявки уходят только при размещении на sulusystems.kz.
