# Публикация ПЕПЕЛ на GitHub

Репозиторий: https://github.com/mesterr969-collab/PEPEL

## Что уже настроено в репозитории

- README с описанием проекта на русском и английском;
- .gitignore, правила безопасности, заметки к релизу и third-party notices;
- статический сайт в папке docs;
- workflow проверки документации/исходников;
- workflow развёртывания GitHub Pages.

## 1. Включить сайт (нужно один раз вручную)

1. Открой https://github.com/mesterr969-collab/PEPEL/settings/pages
2. В **Build and deployment** выбери **Source: GitHub Actions**.
3. Сохрани настройку.
4. Открой https://github.com/mesterr969-collab/PEPEL/actions/workflows/pages.yml и нажми **Run workflow** либо создай новый commit в docs.

Workflow уже настроен на публикацию папки docs. Сейчас он завершится ошибкой, пока Pages не активирован в настройках репозитория.

После успешного деплоя сайт будет по адресу:
https://mesterr969-collab.github.io/PEPEL/

## 2. Добавить runtime исходники

В проектном наборе из переписки скачай и распакуй `PEPEL-GITHUB-PUBLISH-KIT.zip`. Скопируй содержимое папки `PEPEL` в локальный клон репозитория. Если используешь GitHub Desktop, клонируй:
https://github.com/mesterr969-collab/PEPEL.git

Убедись, что в корне клона находятся `package.json`, `README.md`, `src/`, `scripts/`, `.github/` и `docs/`. Существующий README и `docs/` можно оставить; если Windows спросит о замене файлов, не заменяй docs целиком — на GitHub уже лежит актуальная страница сайта.

В текущем репозитории часть runtime-файлов Electron отсутствует, потому что доступные GitHub-действия здесь могут создавать текстовые файлы, но не загружать каталоги из локального ZIP как целое. До копирования `src/main.js`, `src/app.js`, `src/app.css` и `src/data/monuments.json` проект в GitHub не является полной воспроизводимой копией приложения.

## 3. Опубликовать ZIP приложения (нужно один раз вручную)

1. Скачай архив Windows x64 из переписки: `PEPEL-2.4.7-Windows-x64.zip`.
2. Открой https://github.com/mesterr969-collab/PEPEL/releases/new
3. Tag: `v2.4.7)
4. Release title: `PEPEL 2.4.7 — Windows x64`
5. Прикрепи `PEPEL-2.4.7-Windows-x64.zip` в разделе assets.
6. Добавь текст из `RELEASE-NOTES-v2.4.7.md` и нажми **Publish release**.

Архив должен содержать папку `PEPEL-win32-x64/` и файл `PEPEL.exe` внутри этой папки. Не загружай EXE отдельно от файлов Electron. Обновлятор текущей версии ищет ZIP с именем, начинающимся на `PEPEL`.

## 4. Проверка перед публичным анонсом

- Windows: запустить PEPEL.exe из распакованного ZIP;
- проверить серверы, Rust+ и pairing на своём тестовом сервере;
- проверить загрузку и применение обновления из Releases;
- проверить, что логи и скриншоты не содержат Player Token, pairing JSON или других секретов.

Не добавляй пользовательские данные, токены, Steam credentials, файлы профиля приложения или `node_modules/` в Git.
