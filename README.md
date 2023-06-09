Технології які були вибрані для розробки:

- Typescript
- React.js
- Redux
- Next.js
- Material UI

Архітектуру додатку розділено максимально по шарам, які мають свою зону відповідальності. Дизайн простий, більшу увагу приділено коду. Основні моменти:

- Контейнери працюють з редаксов і передають дані компонентам.
- На сторінці **course/id** використовується SSR. Це потрібно для SEO. Наразі встановлюється title і description.
- Дані які додаток отримує від API, оброблюються за допомогою утіліт, які приводять їх до потрібного формату компонентів.
- Додана можливість зробити мультимовність за допомогою i18next. У папці lang можно додати потрібну мову.
- Стилі компонентів Material UI зберігаються у папці theme. Також це основний файл для стилів самого додатку.
- Адаптив під мобільну версію.
- Обробка помилок від API.

💡 **Опис**

Застосунок для навчання. Додаток містить дві сторінки:

- сторінка з курсами;
- сторінка з переглядом курсу;

Детально про сторінки:

- В стрічці з курсами відображаються останні 10 курсів + пагінація. Курс містить:
  - фото курсу
  - заголовок курсу
  - кількість уроків, навички та рейтинг
  - при ховері відтворювати відео без звуку.
- На сторінці з переглядом курсу відображається перше відео з даного курсу. Деталі про курс та список уроків:
  - при кліку на урок (якщо він не заблокований) для перегляду відкриється поточне відео, користувач розуміє, який урок з курсу переглядає
  - зберігається прогрес перегляду відео та уроку курсу (локально)
  - якщо урок заблокований, то користувач це бачить
  - зміна швидкості програвання відео через клавіатуру (інформація біля відео як цим користуватись).
