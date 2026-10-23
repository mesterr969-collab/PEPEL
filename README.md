# ПЕПЕЛ / PEPEL

**Неофициальный desktop toolkit для Rust · Windows x64**

ПЕПЕЛ объединяет инструменты подготовки к вайпу: каталог серверов, Rust+ pairing, рейд-калькулятор, заметки и чек-лист, разбор фото базы, плавильни, электрические схемы и справочник монументов.

> Независимый фанатский проект. ПЕПЕЛ не связан с Facepunch Studios и не является официальным продуктом Rust.

## Скачать

Открой [GitHub Releases](https://github.com/mesterr969-collab/PEPEL/releases/latest) и скачай ZIP-файл для Windows x64 после публикации первого релиза. Полный ZIP нужно прикреплять к релизу, а не помещать в Git-историю.

## Возможности

- **Каталог серверов:** поиск, фильтры и переход к подключению.
- **Rust+:** вход через официальную страницу Steam/Facepunch и pairing с сервером.
- **Рейд-калькулятор:** сравнение способов рейда и необходимых ресурсов.
- **Стол рейдера:** заметки, чек-лист, плавильни и инструменты подготовки.
- **Разбор фото базы:** ручное планирование по видимым слоям; скрытые комнаты нельзя достоверно определить по одному скриншоту.
- **Электричество:** схемы и справочные инструкции.
- **Монументы / РТ:** материалы и подсказки по лут-маршрутам.
- **Локальное хранение:** заметки и часть настроек остаются на компьютере.

Некоторые функции требуют интернета и могут зависеть от доступности сторонних сервисов и настроек Rust-сервера.

## Установка Windows

1. Открой [последний релиз](https://github.com/mesterr969-collab/PEPEL/releases/latest).
2. Скачай архив PEPEL-2.4.7-Windows-x64.zip.
3. Распакуй ZIP полностью в отдельную папку.
4. Запусти PEPEL.exe из распакованной папки. Не отделяй EXE от остальных файлов.
5. Для Rust+ используй только официальную страницу Steam/Facepunch. Никому не отправляй Player Token, pairing JSON или приватные данные из логов.

У текущей сборки может не быть цифровой подписи издателя. Перед запуском проверь источник архива.

## Разработка

Полная runtime-часть лежит в `src/` внутри архива `PEPEL-GITHUB-PUBLISH-KIT.zip`. В текущем репозитории опубликованы README, документация, сайт и манифест, но перед сборкой нужно скопировать полный каталог `src/` из набора публикации в клон этого репозитория (инструкция ниже). Это извлечённая исходная база версии 2.4.7, а не полный первоначальный репозиторий разработки.

Требуется установленный Node.js. Для полноценной проверки Electron/Rust+ рекомендуется Windows.

### Добавить исходный код

1. Скачай и распакуй приложенный в переписке архив `PEPEL-GITHUB-PUBLISH-KIT.zip`.
2. Открой папку `PEPEL` внутри архива.
3. Скопируй `src/`, `scripts/`, `assets/` и `package.json` в папку клонированного репозитория. Не копируй `docs/`, чтобы не перезаписать сайт уже в репозитории.
4. Через GitHub Desktop сделай commit и нажми **Push origin**.
5. После отправки `src/main.js`, `src/app.js` и `src/data/monuments.json` проверка GitHub Actions начнёт запускать `npm run check`.

```bash
npm install
npm run check
npm start
```

Сборка Windows ZIP (требует Windows и доступа к загрузке пакетов):

```bash
npm run dist:win
```

Проверь сборку на чистой Windows-машине перед выпуском, особенно Steam/Rust+, обновления и сетевые функции.

## Автообновление

В настройках PEPEL укажи публичный репозиторий mesterr969-collab/PEPEL. Приложение проверяет последний GitHub Release и ищет ZIP, имя которого начинается с PEPEL.

Для каждой новой версии:
- создай tag, например v2.4.8;
- приложи полный ZIP, включающий PEPEL-win32-x64/ и PEPEL.exe внутри;
- назови файл, например PEPEL-2.4.8-Windows-x64.zip;
- проверь установку обновления на тестовой копии.

## Безопасность и конфиденциальность

- Не публикуй пароль Steam, Player Token, pairing JSON или файлы из %APPDATA%.
- Удаляй SteamID, приватные IP и токены из логов/скриншотов перед публикацией issue.
- Доступность Rust+ и сетевых функций зависит от внешних сервисов и сервера.
- См. Security Policy (SECURITY.md) и Third-party notices (THIRD-PARTY-NOTICES.md).

## Поддержка

Для ошибок и идей используй [Issues](https://github.com/mesterr969-collab/PEPEL/issues). Не публикуй рабочие токены или pairing-данные.

## English summary

PEPEL is an unofficial Windows x64 helper toolkit for Rust. It includes server browsing, Rust+ pairing, a raid calculator, notes/checklists, furnace helpers, electrical references, monument information, and manual planning from base screenshots.

Download the latest ZIP from [GitHub Releases](https://github.com/mesterr969-collab/PEPEL/releases/latest), extract the complete archive, and run PEPEL.exe from the extracted folder. Never share your Steam password, Player Token, or pairing JSON.

PEPEL is not affiliated with Facepunch Studios or Rust. Third-party service availability may vary. No open-source license has been selected yet; see LICENSE-NOTE.md before reusing or redistributing code.