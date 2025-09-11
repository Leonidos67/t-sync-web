// Система переводов для T-Sync
const translations = {
    RU: {
        // Help Center
        'help-breadcrumb-home': 'Главная',
        'help-breadcrumb-help': 'Справочный центр',
        'help-center-title': 'Справочный центр',
        'help-center-subtitle': 'Начните с основ или изучите расширенные функции, чтобы стать экспертом T-Sync.',
        'help-popular-topics': 'НАШИ СЕРВИСЫ',
        'help-card-getting-started-title': 'Начало работы',
        'help-card-getting-started-desc': 'Создайте аккаунт, настройте профиль и изучите основы платформы',
        'help-card-rooms-title': 'Комнаты и тренировки',
        'help-card-rooms-desc': 'Создавайте тренировки, управляйте командами и отслеживайте прогресс',
        'help-card-settings-title': 'Настройки',
        'help-card-settings-desc': 'Персонализируйте интерфейс и управляйте аккаунтом',
        'help-nav-1': '#1. Начало работы',
        'help-nav-1-intro': '📍 Введение',
        'help-nav-1-steps': '👣 Первые шаги',
        'help-nav-2': '#2. Рабочее пространство',
        'help-nav-2-intro': '📍 Введение',
        'help-nav-2-navigation': '🔎 Навигация',
        'help-nav-2-zones': '📁 Создание и удаление зоны',
        'help-nav-3': '#3. Комнаты и тренировки',
        'help-nav-3-intro': '📍 Введение',
        'help-nav-3-all': '🧩 Все о комнатах и тренировках',
        'help-nav-3-actions': '✏️ Действия',
        'help-nav-4': '#4. Совместная работа',
        'help-nav-4-intro': '📍 Введение',
        'help-nav-4-permissions': '📣 Совместное использование и разрешения',
        'help-nav-4-members': '🔨 Управление участниками',
        'help-nav-4-collab': '💼 Совместная работа',
        'help-nav-5': '#5. Ии-ассистент',
        'help-nav-5-what': '🤖 Что такое T-Sync AI?',
        'help-nav-5-notes': '🪄 Заметки с ИИ (бета)',
        'help-nav-5-answers': '🎙️ Дополнительные ответы T-Sync AI',
        'help-nav-5-security': '🎟️ Практики безопасности и конфиденциальности T-Sync AI',
        'help-nav-6': '#6. Данные и интеграции',
        'help-nav-6-import': '🚚 Импорт и экспорт данных',
        'help-nav-6-backup': '💿 Резервное копирование данных',
        'help-nav-7': '#7. Планы и оплата',
        'help-nav-7-change-plan': '💸 Изменение существующего плана',
        'help-nav-8': '#8. Безопасность и приватность',
        'help-nav-8-practices': '🔒 Практики обеспечения безопасности',
        'help-nav-8-privacy': '🗝️ Политика конфиденциальности',
        'help-nav-8-owner-data': '🚨 Данные, доступные владельцу вашего рабочего пространства',
        'help-nav-8-report': '☎️ Сообщить о неприемлемом контенте',
        'help-nav-8-shared': '🛡️ Модель совместной ответственности',
        'help-nav-8-hosting': '🗃️ Размещение данных для T-Sync',
        'help-nav-9': '#9. Настройки',
        'help-nav-9-account': '⚙️ Настройки и предпочтения учетной записи',
        'help-nav-9-notifications': '🛎 Настройки уведомлений',
        'help-nav-9-workspace': '🗝️ Настройки рабочего пространства',
        'help-nav-9-ip': '🌐 Понятие IP-адресов и доменов',
        'help-nav-9-hipaa': '🏥 Конфигурация HIPAA',
        'help-nav-9-consent': '🚪 Согласие на доступ к данным',
        'help-nav-9-delete': '🗑 Удалить свою учетную запись',
        'help-nav-9-auth': '🔐 Войти и выйти',
        'help-nav-10': '#10. Поиск неисправностей',
        'help-nav-10-reset': 'Сброс понятия',
        'help-nav-10-access': 'Я не могу получить доступ к аккаунту',
        'help-nav-10-view': 'Я не могу загрузить или просмотреть файл',
        'help-nav-10-errors': 'Ошибки общего понятия',
        'help-sec-1-title': '#1. Начало работы',
        'help-sec-1-card1-title': 'Старт здесь',
        'help-sec-1-card1-desc': 'Обзор возможностей T‑Sync и первый вход.',
        'help-sec-1-card2-title': 'Создание страницы',
        'help-sec-1-card2-desc': 'Как создать первую страницу и структуру каталога.',
        'help-sec-2-title': '2. Рабочее пространство',
        'help-sec-2-card1-title': 'Навигация',
        'help-sec-2-card1-desc': 'Быстрый поиск и перемещение по разделам.',
        'help-sec-2-card2-title': 'Команды и роли',
        'help-sec-2-card2-desc': 'Права доступа и управление участниками.',
        'help-sec-3-title': '3. Страницы и блоки',
        'help-sec-3-card1-title': 'Редактирование',
        'help-sec-3-card1-desc': 'Форматирование текста, списки, медиа.',
        'help-sec-3-card2-title': 'Шаблоны',
        'help-sec-3-card2-desc': 'Используйте готовые пресеты для быстрого старта.',
        'help-sec-4-title': '5. Совместная работа',
        'help-sec-4-card1-title': 'Права и доступ',
        'help-sec-4-card1-desc': 'Общий доступ, приглашения и комментарии.',
        'help-sec-4-card2-title': 'Уведомления',
        'help-sec-4-card2-desc': 'Подписки, упоминания и напоминания.',
        'help-sec-5-title': '6. Данные и интеграции',
        'help-sec-5-card1-title': 'Интеграции',
        'help-sec-5-card1-desc': 'Подключение Garmin, Strava и других сервисов.',
        'help-sec-5-card2-title': 'Экспорт и резервные копии',
        'help-sec-5-card2-desc': 'Экспорт данных и восстановление.',
        'help-sec-6-title': '7. Автоматизации',
        'help-sec-6-card1-title': 'Правила и кнопки',
        'help-sec-6-card1-desc': 'Настройка сценариев и быстрых действий.',
        'help-sec-6-card2-title': 'Уведомления и вебхуки',
        'help-sec-6-card2-desc': 'Интеграция событий с внешними системами.',
        'help-sec-7-title': '8. Планы и оплата',
        'help-sec-7-card1-title': 'Тарифы',
        'help-sec-7-card1-desc': 'Выбор плана и возможности каждого тарифа.',
        'help-sec-7-card2-title': 'Счета и платежи',
        'help-sec-7-card2-desc': 'История оплат, квитанции и возвраты.',
        'help-sec-8-title': '9. Безопасность и приватность',
        'help-sec-8-card1-title': 'Безопасность',
        'help-sec-8-card1-desc': '2FA, политика паролей и контроль доступа.',
        'help-sec-8-card2-title': 'Конфиденциальность',
        'help-sec-8-card2-desc': 'Хранение данных и обработка персональных данных.',
        'help-sec-9-title': '10. Устранение неполадок',
        'help-sec-9-card1-title': 'Не удаётся войти',
        'help-sec-9-card1-desc': 'Частые причины и быстрые решения.',
        'help-sec-9-card2-title': 'Ошибка загрузки данных',
        'help-sec-9-card2-desc': 'Как диагностировать и что делать дальше.',

        // Create Website
        'cw-hero-title': 'Создайте персональный сайт за минуты, вместе с <span class="highlight-word">T-Sync Creatium</span>',
        'cw-create-site': 'Создать сайт',
        'cw-view-templates': 'Посмотреть шаблоны',
        'cw-quick-start-title': 'Быстрый старт',
        'cw-quick-start-desc': 'Самый простой способ запустить свой веб-сайт.',
        'cw-fill-data': 'Заполнить данные',
        'cw-more-productive': 'Больше продуктивности. Меньше инструментов.',
        'cw-card-profile-title': 'Личный профиль',
        'cw-card-profile-desc': 'Создайте персональную страницу с достижениями и статистикой',
        'cw-card-achievements-title': 'Ваши достижения',
        'cw-card-achievements-desc': 'Добавляйте медали, рекорды и спортивные успехи',
        'cw-card-contacts-title': 'Контакты',
        'cw-card-contacts-desc': 'Дайте возможность связаться с вами',
        'cw-templates-title': 'Шаблоны сайтов',
        'cw-templates-soon-title': 'Шаблоны скоро появятся',
        'cw-templates-soon-desc': 'Мы работаем над созданием красивых и функциональных шаблонов для ваших сайтов.',

        // Privacy
        'privacy-page-title': 'Политика конфиденциальности – T‑Sync',
        'privacy-breadcrumb-title': 'Политика конфиденциальности',
        'privacy-title': '🔒 Политика конфиденциальности T‑Sync',
        'privacy-last-updated-label': 'Последнее обновление:',
        'privacy-link-1': '1. Общие положения',
        'privacy-link-2': '2. Собираемые данные',
        'privacy-link-3': '3. Использование данных',
        'privacy-link-4': '4. Передача данных',
        'privacy-link-5': '5. Защита данных',
        'privacy-link-6': '6. Файлы Cookie',
        'privacy-link-7': '7. Права пользователей',
        'privacy-link-8': '8. Изменения в Политике Конфиденциальности',
        'privacy-contacts-title': 'Контактная информация',
        'privacy-sec1-title': '1. Общие положения',
        'privacy-sec1-p1': '1.1. Настоящая Политика конфиденциальности регулирует порядок сбора, хранения, использования и защиты персональных данных пользователей платформы <strong>T‑Sync</strong>.',
        'privacy-sec1-p2': '1.2. Платформа предназначена для тренеров и спортсменов, ведущих совместную работу в формате <strong>B2B</strong> (ведение тренировок, планирование нагрузок, мониторинг прогресса).',
        'privacy-sec1-p3': '1.3. Используя Платформу, вы соглашаетесь с условиями данной Политики.',
        'privacy-sec2-title': '2. Какие данные мы собираем?',
        'privacy-sec2-intro': 'Мы собираем информацию, когда вы предоставляете ее нам, когда пользуетесь программой или услугами, а также когда ее предоставляют нам другие источники, как описано ниже.',
        'privacy-sec2-2-1-title': '2.1. Информация, которую вы нам предоставляете:',
        'privacy-sec2-2-1-li1': '<strong>Создание учетной записи:</strong> Когда вы создаете учетную запись или иным образом пользуетесь Услугами, мы собираем такую информацию, как ваше имя, адрес электронной почты, пароль, должность в вашей команде или на предприятии, а также необязательную фотографию профиля.',
        'privacy-sec2-2-1-li2': '<strong>Ваши сообщения с нами:</strong> Мы собираем от вас информацию, такую как адрес электронной почты, номер телефона или почтовый адрес, когда вы запрашиваете информацию о наших услугах, регистрируетесь на рассылку новостей, запрашиваете клиентскую или техническую поддержку или иным образом связываетесь с нами. Мы также собираем содержимое сообщений или вложений, которые вы можете отправлять нам, а также другую информацию, которую вы предпочитаете предоставлять, и которая может быть связана с вашими сообщениями.',
        'privacy-sec2-2-1-li3': '<strong>Информация об оплате:</strong> Когда вы приобретаете подписку на Услуги, вам необходимо будет предоставить платежную информацию (например, данные финансового счета, информацию о доставке) для оформления вашей подписки. Мы используем сторонних поставщиков платежных услуг для обработки платежей по Услугам. Мы можем получать информацию, связанную с вашей платежной информацией, такую как платежный адрес и информация о транзакции, но мы не храним платежную информацию напрямую в Сервисах. Платежная информация хранится и обрабатывается нашими поставщиками платежных услуг от нашего имени.',
        'privacy-sec2-2-1-li4': '<strong>Опросы:</strong> Мы можем связаться с вами для участия в опросах. Если вы решите принять участие, вас могут попросить предоставить определенную информацию, которая может включать контактную информацию и другую информацию о вас.',
        'privacy-sec2-2-1-li5': '<strong>Интерактивные функции:</strong> Мы можем предлагать интерактивные функции, такие как форумы, блоги, службы чата и обмена сообщениями, а также страницы в социальных сетях. Мы и другие лица, которые пользуются нашим веб-сайтом или Услугами, можем собирать информацию, которую вы отправляете или делаете доступной с помощью этих интерактивных функций. Любой контент, который вы предоставляете через общедоступные разделы этих функций, будет считаться «общедоступным» и на него не распространяются меры защиты конфиденциальности, упомянутые в настоящем документе. Используя эти интерактивные функции, вы понимаете, что предоставленная вами информация может быть просмотрена и использована третьими лицами в своих собственных целях.',
        'privacy-sec2-2-2-title': '2.2. Автоматически собираемые данные:',
        'privacy-sec2-2-2-li1': '<strong>Автоматический сбор данных:</strong> Мы отслеживаем определенную информацию о вас, когда вы посещаете сайт и взаимодействуете с ним. Эта информация может включать ваш IP‑адрес, настройки пользователя, MAC‑адрес, идентификаторы файлов cookie, оператора мобильной связи, мобильную рекламу и другие уникальные идентификаторы, сведения о вашем браузере, операционной системе или устройстве, информацию о местоположении (включая общее местоположение, полученное на основе вашего IP‑адреса), интернет‑провайдере, страницы, которые вы посещаете до, во время и после использования Веб‑сайта или Услуг, информация о ссылках, по которым вы переходите, информация о том, как вы взаимодействуете с Веб‑сайтом или Услугами, включая частоту и продолжительность ваших действий, и другую информацию о том, как вы используете Веб‑сайт или Услуги. Информация, которую мы собираем, может быть связана с учетными записями и другими устройствами.',
        'privacy-sec2-2-2-li2': '<strong>Файлы cookie:</strong> Мы, а также третьи стороны, которые предоставляют контент, рекламу или другие функциональные возможности в Сервисах, можем использовать файлы cookie, пиксельные теги, локальное хранилище и другие технологии («Технологии») для автоматического сбора информации через Веб‑сайт или услуги. Технологии — это, по сути, небольшие файлы данных, размещаемые на ваших устройствах, которые позволяют нам и нашим партнерам записывать определенные фрагменты информации всякий раз, когда вы посещаете наши Сервисы или взаимодействуете с ними.',
        'privacy-sec2-2-2-li3': '<strong>Аналитика:</strong> Мы также можем использовать сторонних поставщиков услуг для сбора и обработки аналитических данных и другой информации на нашем веб‑сайте или в Сервисах. Эти сторонние поставщики услуг могут использовать технологии для сбора и хранения аналитических данных и другой информации. У них есть свои собственные политики конфиденциальности, касающиеся того, как они используют аналитику и другую информацию, и мы не имеем доступа к использованию третьими лицами файлов cookie или других технологий отслеживания и не контролируем их.',
        'privacy-sec3-title': '3. Как мы используем данные?',
        'privacy-sec3-intro': 'Мы используем вашу информацию для различных деловых целей, в том числе для:',
        'privacy-sec3-li1': '<strong>Создание и управление профилями:</strong> Персональные данные используются для формирования индивидуальных профилей пользователей, обеспечения доступа к платформе и персонализации интерфейса.',
        'privacy-sec3-li2': '<strong>Управление рабочими пространствами:</strong> Если вы зарегистрируете учетную запись T‑Sync или свяжете учетную запись с адресом электронной почты, предоставленным вашей организацией, мы можем передавать вашей организации информацию о вас и любых рабочих пространствах, принадлежащих вам или управляемых вами. Такая информация может включать ваше имя, адрес электронной почты и фотографию профиля, а также название рабочей области, идентификатор рабочей области, размер членства, дату создания вашей рабочей области, адрес электронной почты и содержимое вашей рабочей области в вашей организации.',
        'privacy-sec3-li3': '<strong>Анализ эффективности тренировок:</strong> Система автоматически обрабатывает статистику выполнения упражнений для оценки прогресса и корректировки нагрузок.',
        'privacy-sec4-title': '4. Кому мы передаем данные?',
        'privacy-sec4-p1': '4.1. <strong>Тренер ↔ Спортсмен</strong> – данные доступны в рамках их взаимодействия на Платформе.',
        'privacy-sec4-p2': '4.2. <strong>Технические подрядчики</strong> – только для обеспечения работы сервиса (хостинг, аналитика).',
        'privacy-sec4-p3': '4.3. <strong>Государственные органы</strong> – только по законному требованию.',
        'privacy-sec5-title': '5. Защита данных',
        'privacy-sec5-p1': '5.1. Мы используем:<br>— Шифрование (SSL/TLS)<br>— Регулярные проверки безопасности<br>— Ограниченный доступ к данным',
        'privacy-sec5-p2': '5.2. Пользователи обязаны:<br>— Не передавать логины/пароли третьим лицам<br>— Использовать сложные пароли',
        'privacy-sec6-title': '6. Cookies и аналогичные технологии',
        'privacy-sec6-intro': '6.1. Платформа использует cookies для:',
        'privacy-sec6-li1': 'Авторизации',
        'privacy-sec6-li2': 'Анализа посещаемости',
        'privacy-sec6-note': '6.2. Можно отключить cookies в настройках браузера, но это повлияет на функциональность.',
        'privacy-sec7-title': '7. Права пользователей',
        'privacy-sec7-intro': 'Вы можете:',
        'privacy-sec7-li1': 'Запросить доступ к своим данным',
        'privacy-sec7-li2': 'Исправить неточности',
        'privacy-sec7-li3': 'Удалить аккаунт (данные будут обезличены)',
        'privacy-sec7-li4': 'Отозвать согласие на обработку',
        'privacy-sec8-title': '8. Изменения в Политике Конфиденциальности',
        'privacy-sec8-p1': 'Мы можем время от времени пересматривать эту Политику конфиденциальности по нашему собственному усмотрению. Если в этой Политике конфиденциальности произойдут какие-либо существенные изменения, мы уведомим вас об этом в соответствии с требованиями действующего законодательства. Вы понимаете и соглашаетесь с тем, что будет считаться, что вы приняли обновленную Политику конфиденциальности, если вы продолжите пользоваться Услугами после вступления в силу новой Политики конфиденциальности.',
        'privacy-contacts-site': '🌐 Сайт: <a href="http://t-sync.ru" target="_blank" rel="noopener noreferrer">t-sync.ru</a>',
        'privacy-contacts-phone': '📱 Телефон: <a href="tel:+79646150520">+7 964 615 05 20</a>',
        'privacy-contacts-inn': 'ИНН 672908781554',

        // Roadmap statuses
        'status-completed': 'Завершено',
        'status-in-development': 'В разработке',
        'status-planned': 'Запланировано',
        'status-discussed': 'Обсуждается',

        // Roadmap tags
        'tag-tsync-platform': '#T-Sync Platform',
        'tag-new-feature': '#Новая функция ✨',
        'tag-improvement': '#Улучшение 👍',
        'tag-extension': '#Расширение 🔥',
        'tag-design': '#Дизайн 🎨',
        'tag-integration': '#Интеграция ⚡️',
        'tag-final-result': '#Конечный результат 🤝',
        'tag-tsygram': '#Tsygram',
        'tag-tsync-creatium': '#T-Sync Creatium',

        // Roadmap common
        'roadmap-page-title': 'Роудмап – T‑Sync',
        'roadmap-breadcrumb-title': 'Роудмап',
        'roadmap-title': 'Роудмап',
        'roadmap-intro': 'Наши планы и прогресс по новым функциям.',
        'roadmap-suggestions-title': 'Есть предложения?',
        'roadmap-suggestions-desc': 'Ваши идеи помогают сделать наш сервис еще лучше 🙌',
        'roadmap-suggestions-cta': 'Предложить идею',

        // Roadmap items (titles, short desc, full)
        'roadmap-analytics-view-title': 'Просмотр аналитики и отчетов тренировок',
        'roadmap-analytics-view-desc': 'Возможность просмотра аналитики тренировок.',
        'roadmap-analytics-view-full': 'Полноценная система аналитики тренировок с детальными отчетами, графиками прогресса и статистикой. Включает в себя анализ нагрузок, восстановления, эффективности тренировок и персональные рекомендации.',

        'roadmap-drag-windows-title': 'Добавлены drag-окна',
        'roadmap-drag-windows-desc': 'Добавлена возможность перетаскивать модальные окна для автоматизации вашего взаимодействия в платформе.',
        'roadmap-drag-windows-full': 'Инновационная система drag-and-drop для модальных окон, позволяющая пользователям настраивать интерфейс под свои потребности. Повышает удобство использования и производительность работы.',

        'roadmap-add-members-title': 'Возможность добавлять участников',
        'roadmap-add-members-desc': 'Добавлена возможность приглашать в рабочую зону других пользователей.',
        'roadmap-add-members-full': 'Система управления командой с возможностью приглашения участников, назначения ролей и контроля доступа. Идеально для тренеров и спортивных команд.',

        'roadmap-platform-created-title': 'Создана платформа',
        'roadmap-platform-created-desc': 'Полностью рабочий функционал платформы.',
        'roadmap-platform-created-full': 'Основная платформа T-Sync с полным набором функций для управления тренировками, включая планирование, отслеживание прогресса и аналитику.',

        'roadmap-platform-design-title': 'Дизайн платформы',
        'roadmap-platform-design-desc': 'Учреждение итогового дизайн платформы. Следующий шаг - разработка функционала.',
        'roadmap-platform-design-full': 'Современный и интуитивно понятный дизайн платформы, созданный с учетом лучших практик UX/UI. Адаптивный интерфейс для всех устройств.',

        'roadmap-resource-website-title': 'Сайт ресурса',
        'roadmap-resource-website-desc': 'Информационный сайт ресурса. Последние новости и обновления.',
        'roadmap-resource-website-full': 'Информационный портал с актуальными новостями, документацией и ресурсами для пользователей T-Sync. Регулярные обновления и поддержка.',

        'roadmap-garmin-integration-title': 'Интеграция Garmin Connect',
        'roadmap-garmin-integration-desc': 'Возможность подключить аккаунт Garmin с выгрузкой тренировок.',
        'roadmap-garmin-integration-full': 'Прямая интеграция с Garmin Connect для автоматической синхронизации тренировок, данных о пульсе, GPS-треков и других метрик с устройствами Garmin.',

        'roadmap-website-templates-title': 'Выбор шаблона для сайта',
        'roadmap-website-templates-desc': 'Возможность выбрать шаблон для сайта.',
        'roadmap-website-templates-full': 'Библиотека профессиональных шаблонов для создания персональных сайтов. Различные стили и темы для разных направлений спорта и личных предпочтений.',

        'roadmap-creatium-service-title': 'Создание сервиса T-Sync Creatium',
        'roadmap-creatium-service-desc': 'Возможность создавать сайты о себе.',
        'roadmap-creatium-service-full': "Сервис для создания персональных спортивных сайтов с возможностью настройки дизайна, добавления контента и интеграции с социальными сетями. <a class='roadmap-window-link' href='/products/create-website/'>Посетить страницу</a>",

        'roadmap-tsygram-service-title': 'Создание сервиса Tsygram',
        'roadmap-tsygram-service-desc': 'Социальная сеть спортсменов и тренеров.',
        'roadmap-tsygram-service-full': 'Социальная платформа для спортсменов, тренеров и любителей спорта. Обмен опытом, поиск единомышленников и создание спортивного сообщества.',

        'roadmap-ai-assistant-title': 'ИИ-ассистент',
        'roadmap-ai-assistant-desc': 'Разработка ии-помощника для персонализации и автоматизации ваших тренировок.',
        'roadmap-ai-assistant-full': 'Искусственный интеллект для персонализации тренировок, анализа данных и автоматического создания программ тренировок на основе целей и возможностей пользователя.',

        'roadmap-conferences-title': 'Создание конференций в рамках платформы',
        'roadmap-conferences-desc': 'Разработка ии-помощника для персонализации и автоматизации ваших тренировок.',
        'roadmap-conferences-full': 'Встроенная система для проведения онлайн-конференций, вебинаров и мастер-классов. Идеально для тренеров и спортивных организаций.',

        'roadmap-trainers-board-title': 'Создание доски тренеров',
        'roadmap-trainers-board-desc': 'Возможность загрузить свою анкету, и привлечь новых спортсменов в Рабочую Зону.',
        'roadmap-trainers-board-full': 'Платформа для тренеров с возможностью создания профилей, демонстрации достижений и привлечения клиентов. Система отзывов и рейтингов.',
        
        // Навигация
        'nav-home': 'Главная',
        'nav-products': 'Наши сервисы',
        'nav-pricing': 'Тарифы',
        'nav-help': 'Справочный центр',
        'nav-roadmap': 'Роадмап',
        'nav-privacy': 'Конфиденциальность',
        'nav-login': 'Войти',
        'nav-services': 'Наши сервисы',
        'nav-ai': 'Ai',
        
        // 404 Page
        'error-404-title': '404. Страница не найдена',
        'error-404-description': 'К сожалению, запрашиваемая страница не существует или была перемещена. Возможно, вы перешли по неверной ссылке или ввели неправильный адрес.',
        'error-404-button': 'Вернуться на главную',
        
        // Выпадающее меню навигации
        'nav-platform-title': 'T-Sync Platform',
        'nav-platform-desc': 'Платформа для управления тренировками',
        'nav-creatium-title': 'T-Sync Creatium',
        'nav-creatium-desc': 'Создание персонального сайта',
        'nav-tsygram-title': 'Tsygram',
        'nav-tsygram-desc': 'Социальная сеть для спортсменов',
        
        // Футер
        'footer-products': 'Продукты',
        'footer-resources': 'Ресурсы',
        'footer-more': 'Еще',
        'footer-privacy': 'Политика Конфиденциальности',
        'footer-copyright': '© 2025 T‑Sync',
        'footer-ai-assistant': 'AI‑ассистент',
        'footer-link-platform': 'T‑Sync Platform',
        'footer-link-creatium': 'T‑Sync Creatium',
        'footer-link-tsygram': 'Tsygram',
        'footer-tariffs': 'Тарифы',
        'footer-roadmap': 'Роудмап',
        
        // Бренд
        'brand-name': 'T‑Sync.',
        // Hero секция
        'launch-date': 'Запуск платформы: 01.10.2025',
        'hero-title-line1': 'Платформа для',
        'hero-title-line2': 'созданная',
        'hero-title-sport1': 'спортсменов',
        'hero-title-sport2': 'спортсменами',
        'hero-text': '🤝 Создание тренировочного процесса, слежение за аналитикой и синхронизиация команды. Все это - в одном месте. b2b-платформа для ведения тренировок.',
        'hero-button': 'Создать beta-аккаунт',
        'scroll-hint': 'Scroll',
        // Статистика
        'stats-title': 'О нас в цифрах',
        'stats-uptime': 'Всегда на связи и без сбоев, всегда надежен.',
        'stats-users': 'Активных пользователей в системе.',
        'stats-support': 'Настоящие люди/Ии-ассистент - всегда готовы помочь.',

        // Partners
        'partners-title': 'С кем работаем',

        // Pricing page
        'pricing-page-title': 'Цены – T‑Sync',
        'pricing-breadcrumb-home': 'Главная',
        'pricing-breadcrumb-pricing': 'Цены',
        'pricing-plans-title': 'Тарифные планы',
        'pricing-plans-subtitle': 'Выберите подходящий тариф для себя или своей команды.',
        'pricing-basic-title': 'Базовый тариф',
        'pricing-basic-price': '0 ₽',
        'pricing-basic-subtitle': 'Для личного использования',
        'pricing-basic-feature1': 'Неограниченное создание комнат и тренировок',
        'pricing-basic-feature2': 'Допустимый размер хранилища: 1 ГБ',
        'pricing-basic-feature3': 'История изменений, удаленные данные: 30 дней',
        'pricing-basic-feature4': 'Поддержка: 9.00 - 18.00',
        'pricing-basic-button': 'Начать',
        'pricing-premium-title': 'Премиум тариф',
        'pricing-premium-price': 'от 199 ₽',
        'pricing-premium-subtitle': 'Для небольших команд',
        'pricing-premium-feature1': 'Неограниченное создание комнат и тренировок',
        'pricing-premium-feature2': 'Допустимый размер хранилища: 3 ГБ',
        'pricing-premium-feature3': 'История изменений, удаленные данные: 90 дней',
        'pricing-premium-feature4': 'Поддержка: 24/7',
        'pricing-premium-button': 'Попробовать бесплатно',
        'pricing-comparison-title': 'Сравнение тарифов',
        'pricing-comparison-basic': 'Базовый',
        'pricing-comparison-premium': 'Премиум',
        'pricing-comparison-premium-plus': 'Премиум+',
        'pricing-feature-rooms': 'Создание комнат и тренировок',
        'pricing-feature-offline': 'Оффлайн-режим',
        'pricing-feature-dashboard': 'Дашборд прогресса',
        'pricing-feature-users': 'Добавление пользователей',
        'pricing-feature-roles': 'Ролевой доступ',
        'pricing-feature-export': 'Экспорт данных',
        'pricing-feature-storage': 'Допустимый размер хранилища',
        'pricing-storage-1gb': 'до 1 ГБ',
        'pricing-storage-3gb': 'до 3 ГБ',
        'pricing-storage-unlimited': '∞',
        'pricing-feature-history': 'История изменений, удаленные данные',
        'pricing-history-30': '30 дней',
        'pricing-history-90': '90 дней',
        'pricing-history-unlimited': '∞',
        'pricing-feature-support': 'Поддержка',
        'pricing-support-limited': '9.00 - 18.00',
        'pricing-support-24-7': '24/7',
        
        // Преимущества (benefits)
        'benefits-title': 'Наши преимущества',
        'benefit-access-title': 'Гибкие настройки доступа',
        'benefit-access-desc': 'Настраивайте права доступа для ассистентов, спортсменов или вторых тренеров за 2 клика.',
        'benefit-crossplatform-title': 'Кроссплатформенная доступность',
        'benefit-crossplatform-desc': 'Начните на компьютере, продолжите на телефоне — все синхронизируется мгновенно.',
        'benefit-unified-title': 'Единое пространство для тренировок',
        'benefit-unified-desc': 'Все инструменты в одном месте: от планирования до видеоразборов.',
        'benefit-automation-title': 'Полная автоматизация процессов',
        'benefit-automation-desc': 'Система сама считает нагрузки, напоминает о тренировках и формирует отчеты.',
        'benefit-integration-title': 'Интеграция с внешними сервисами',
        'benefit-integration-desc': 'Подключение Garmin Connect, Slack и других платформ для полной автоматизации.',
        'benefit-analytics-title': 'Детальная аналитика и отчеты',
        'benefit-analytics-desc': 'Прогресс в виде понятных графиков, статистика нагрузок и детальные отчеты по тренировкам.',
        
        // Network section
        'network-center': 'вы',
        'network-garmin-title': 'Garmin Connect',
        'network-garmin-desc': 'Подключите свой аккаунт, <br/>и отслеживайте активность',
        'network-slack-title': 'Slack-уведомления',
        'network-slack-desc': 'Получайте уведомления в своем <br/>рабочем пространстве Slack',
        'network-privacy-title': 'Персональная Конфиденциальность',
        'network-privacy-desc': 'Управляйте безопасностью и доступом к своему аккаунту',
        'network-roles-title': 'Ролевой доступ',
        'network-roles-desc': 'Задавайте роли всем участникам зоны',
        'network-export-title': 'Экспорт данных',
        'network-export-desc': 'Переносите созданные тренировки в удобный для вас формат',
        'network-other-title': 'Другие возможности',
        'network-other-desc': 'Создайте свой персональный сайт и страницу в tsygram'
    },
    
    EN: {
        // Keep EN section minimal to avoid duplication; expanded for index.html
        'help-breadcrumb-home': 'Home',
        'help-breadcrumb-help': 'Help Center',
        'help-center-title': 'Help Center',
        'help-center-subtitle': 'Start with the basics or explore advanced features to become a T‑Sync expert.',
        'help-popular-topics': 'OUR SERVICES',
        'nav-home': 'Home',
        'nav-products': 'Our services',
        'nav-pricing': 'Pricing',
        'nav-help': 'Help Center',
        'nav-roadmap': 'Roadmap',
        'nav-privacy': 'Privacy',
        'nav-login': 'Log in',
        'nav-services': 'Our services',
        'nav-ai': 'AI',
        'nav-platform-title': 'T-Sync Platform',
        'nav-platform-desc': 'Platform for training management',
        'nav-creatium-title': 'T-Sync Creatium',
        'nav-creatium-desc': 'Create a personal website',
        'nav-tsygram-title': 'Tsygram',
        'nav-tsygram-desc': 'Social network for athletes',

        // Hero
        'launch-date': 'Platform launch: 10/01/2025',
        'hero-title-line1': 'A platform for',
        'hero-title-line2': 'built by',
        'hero-title-sport1': 'athletes',
        'hero-title-sport2': 'athletes',
        'hero-text': '🤝 Build training workflows, track analytics, and sync your team — all in one place. A B2B platform for managing training.',
        'hero-button': 'Create beta account',
        'scroll-hint': 'Scroll',

        // Partners
        'partners-title': 'Who we work with',

        // Stats
        'stats-title': 'Our numbers',
        'stats-uptime': 'Always online and reliable.',
        'stats-users': 'Active users on the platform.',
        'stats-support': 'Real people/AI assistant — always ready to help.',
        
        // Benefits
        'benefits-title': 'Our benefits',
        'benefit-access-title': 'Flexible access control',
        'benefit-access-desc': 'Set permissions for assistants, athletes, or co‑coaches in 2 clicks.',
        'benefit-crossplatform-title': 'Cross‑platform availability',
        'benefit-crossplatform-desc': 'Start on desktop, continue on mobile — instant sync.',
        'benefit-unified-title': 'Unified training workspace',
        'benefit-unified-desc': 'All tools in one place: from planning to video reviews.',
        'benefit-automation-title': 'Full process automation',
        'benefit-automation-desc': 'The system calculates loads, reminds about workouts, and creates reports.',
        'benefit-integration-title': 'Integrations with external services',
        'benefit-integration-desc': 'Connect Garmin Connect, Slack, and more for full automation.',
        'benefit-analytics-title': 'Detailed analytics and reports',
        'benefit-analytics-desc': 'Clear graphs, load statistics, and detailed training reports.',
        
        // Network section
        'network-center': 'you',
        'network-garmin-title': 'Garmin Connect',
        'network-garmin-desc': 'Connect your account <br/>and track your activity',
        'network-slack-title': 'Slack notifications',
        'network-slack-desc': 'Receive alerts in your <br/>Slack workspace',
        'network-privacy-title': 'Personal privacy',
        'network-privacy-desc': 'Control security and access to your account',
        'network-roles-title': 'Role‑based access',
        'network-roles-desc': 'Assign roles to all zone participants',
        'network-export-title': 'Data export',
        'network-export-desc': 'Export created workouts to a convenient format',
        'network-other-title': 'Other capabilities',
        'network-other-desc': 'Create your personal site and a page on Tsygram',
        'footer-link-platform': 'T‑Sync Platform',
        'footer-link-creatium': 'T‑Sync Creatium',
        'footer-link-tsygram': 'Tsygram',
        'footer-products': 'Products',
        'footer-resources': 'Resources',
        'footer-more': 'More',
        'footer-privacy': 'Privacy Policy',
        'footer-copyright': '© 2025 T‑Sync',
        'footer-ai-assistant': 'AI assistant',
        'footer-tariffs': 'Pricing',
        'footer-roadmap': 'Roadmap',
        
        // Brand
        'brand-name': 'T‑Sync.',

        // Pricing page
        'pricing-page-title': 'Pricing – T‑Sync',
        'pricing-breadcrumb-home': 'Home',
        'pricing-breadcrumb-pricing': 'Pricing',
        'pricing-plans-title': 'Pricing plans',
        'pricing-plans-subtitle': 'Choose the right plan for you or your team.',
        'pricing-basic-title': 'Basic plan',
        'pricing-basic-price': '0 ₽',
        'pricing-basic-subtitle': 'For personal use',
        'pricing-basic-feature1': 'Unlimited rooms and workouts',
        'pricing-basic-feature2': 'Storage limit: 1 GB',
        'pricing-basic-feature3': 'Version history, deleted data: 30 days',
        'pricing-basic-feature4': 'Support: 9am - 6pm',
        'pricing-basic-button': 'Get started',
        'pricing-premium-title': 'Premium plan',
        'pricing-premium-price': 'from 199 ₽',
        'pricing-premium-subtitle': 'For small teams',
        'pricing-premium-feature1': 'Unlimited rooms and workouts',
        'pricing-premium-feature2': 'Storage limit: 3 GB',
        'pricing-premium-feature3': 'Version history, deleted data: 90 days',
        'pricing-premium-feature4': 'Support: 24/7',
        'pricing-premium-button': 'Try for free',
        'pricing-comparison-title': 'Plan comparison',
        'pricing-comparison-basic': 'Basic',
        'pricing-comparison-premium': 'Premium',
        'pricing-comparison-premium-plus': 'Premium+',
        'pricing-feature-rooms': 'Rooms and workouts',
        'pricing-feature-offline': 'Offline mode',
        'pricing-feature-dashboard': 'Progress dashboard',
        'pricing-feature-users': 'Add users',
        'pricing-feature-roles': 'Role-based access',
        'pricing-feature-export': 'Data export',
        'pricing-feature-storage': 'Storage limit',
        'pricing-storage-1gb': 'up to 1 GB',
        'pricing-storage-3gb': 'up to 3 GB',
        'pricing-storage-unlimited': '∞',
        'pricing-feature-history': 'Version history, deleted data',
        'pricing-history-30': '30 days',
        'pricing-history-90': '90 days',
        'pricing-history-unlimited': '∞',
        'pricing-feature-support': 'Support',
        'pricing-support-limited': '9am - 6pm',
        'pricing-support-24-7': '24/7',

        // Create Website (Creatium) page
        'cw-page-title': 'T‑Sync. | Create Website',
        'cw-hero-title': 'Create your personal site in minutes with <span class="highlight-word">T‑Sync Creatium</span>',
        'cw-create-site': 'Create a site',
        'cw-view-templates': 'View templates',
        'cw-quick-start-title': 'Quick start',
        'cw-quick-start-desc': 'The easiest way to launch your website.',
        'cw-fill-data': 'Fill in data',
        'cw-more-productive': 'More productivity. Fewer tools.',
        'cw-card-profile-title': 'Personal profile',
        'cw-card-profile-desc': 'Create a personal page with achievements and stats',
        'cw-card-achievements-title': 'Your achievements',
        'cw-card-achievements-desc': 'Add medals, records, and sports successes',
        'cw-card-contacts-title': 'Contacts',
        'cw-card-contacts-desc': 'Give people a way to contact you',
        'cw-templates-title': 'Site templates',
        'cw-templates-soon-title': 'Templates coming soon',
        'cw-templates-soon-desc': 'We are working on beautiful and functional templates for your sites.',
        'error-404-title': '404. Page Not Found',
        'error-404-button': 'Back to Home'
    }
};

// Функция для получения перевода
function getTranslation(key, lang = 'RU') {
    return translations[lang]?.[key] || key;
}
// Функция для обновления всех текстов на странице
function updatePageLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getTranslation(key, lang);
        const useHtml = element.hasAttribute('data-translate-html');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else if (useHtml) {
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }
    });
    // Обновляем title страницы
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.getAttribute('data-translate')) {
        const titleKey = titleElement.getAttribute('data-translate');
        titleElement.textContent = getTranslation(titleKey, lang);
    }
    // Сохраняем выбранный язык в localStorage
    localStorage.setItem('selectedLanguage', lang);
}

// Функция для инициализации языка при загрузке страницы
function initializeLanguage() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'RU';
    updatePageLanguage(savedLang);
    // Обновляем активную кнопку языка
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === savedLang) {
            btn.classList.add('active');
        }
    });
    // Обновляем отображаемый язык
    const currentLang = document.getElementById('current-lang');
    if (currentLang) {
        currentLang.textContent = savedLang;
    }
}


