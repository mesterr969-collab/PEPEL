# Публикация ПЕПЕЛ на GitHub

1. Создай публичный репозиторий `PEPEL`.
2. Распакуй комплект `PEPEL-GITHUB-PUBLISH-KIT.zip` и скопируй содержимое папки `PEPEL` в корень клонированного репозитория.
3. Убедись, что `README.md`, `.gitignore`, `package.json`, `.github/`, `docs/` и `src/` лежат в корне.
4. Commit и push через GitHub Desktop.
5. Создай Release с тегом `v2.4.7`, названием `PEPEL 2.4.7 — Windows x64` и приложи `PEPEL-2.4.7-Windows-x64.zip` как бинарный asset.
6. Чтобы включить GitHub Pages, открой Settings → Pages, выбери Deploy from a branch, `main`, папку `/docs`.

Не добавляй в git `node_modules`, `dist`, файлы авторизации Steam, Player Token, pairing JSON или личные настройки. Не добавляй лицензию, пока не решишь, какие права на повторное использование хочешь предоставить.

## Проверка перед релизом

- Проверь `npm run check`.
- Проверь запуск и удаление приложения на чистой Windows.
- Проверь серверный каталог и Rust+ на реальном сервере.
- Проверь GitHub Releases updater на тестовой версии до широкого распространения.
