# Меню ресторана "Любимый муж"

Этот репозиторий содержит HTML-файл с меню ресторана и серверную функцию для отправки заказа в Telegram через Vercel.

## Как опубликовать меню на GitHub Pages

1. **Создайте новый репозиторий на GitHub** (например, `menu` или `restaurant-menu`).
2. **Загрузите в репозиторий файлы**: `index.html`, `README.md`, папку `api` и ваши изображения (например, фото блюд).
3. В настройках репозитория перейдите в раздел **Pages** (или "Pages" в настройках).
4. В разделе **"Source"** выберите ветку `main` (или `master`) и папку `/root` (или `/`).
5. Сохраните настройки. Через минуту сайт будет доступен по ссылке вида:
   
   `https://<ваш-логин>.github.io/<имя-репозитория>/index.html`

## Как развернуть серверную функцию на Vercel

1. Установите [Vercel CLI](https://vercel.com/docs/cli) и выполните вход:  
   `npm i -g vercel`
2. В корне проекта выполните команду:  
   `vercel`
3. Следуйте инструкциям в терминале для деплоя (выберите "Yes" для создания нового проекта, если нужно).
4. После деплоя зайдите в настройки проекта на [vercel.com](https://vercel.com/dashboard), откройте раздел **Environment Variables** и добавьте:
   - `TELEGRAM_BOT_TOKEN` — токен вашего Telegram-бота
   - `TELEGRAM_CHAT_ID` — ID чата для заказов
5. После этого функция будет доступна по адресу:
   
   `https://<ваш-проект>.vercel.app/api/order`

## Как работает заказ

- В меню (index.html) пользователь выбирает блюда и нажимает "Заказать".
- Заказ отправляется POST-запросом на `/api/order`.
- Серверная функция отправляет заказ в Telegram.

## Как добавить и использовать фото блюд

1. **Загрузите фото** в репозиторий (через GitHub или Vercel).
2. Используйте относительный путь в HTML, например:
   ```html
   <img src="shakshuka.webp" alt="Шакшука">
   ```

## Как обновлять меню

1. Вносите изменения в файл `index.html` локально или через веб-интерфейс GitHub.
2. Загружайте обновлённый файл в репозиторий (через git push или "Upload file" на сайте GitHub).
3. Изменения появятся на сайте через несколько секунд.

---

Если нужна помощь с деплоем, переменными окружения или интеграцией — напишите! 
