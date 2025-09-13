// Данные для roadmap карточек
const roadmapData = {
    "analytics-view": {
        id: "analytics-view",
        titleKey: 'roadmap-analytics-view-title',
        descKey: 'roadmap-analytics-view-desc',
        fullKey: 'roadmap-analytics-view-full',
        title: "Просмотр аналитики и отчетов тренировок",
        description: "Возможность просмотра аналитики тренировок.",
        image: "../assets/roadmap/analytics-preview.jpg",
        tagKeys: ['tag-tsync-platform','tag-new-feature','tag-improvement'],
        tags: ["#T-Sync Platform", "#Новая функция ✨", "#Улучшение 👍"],
        fullDescription: "Полноценная система аналитики тренировок с детальными отчетами, графиками прогресса и статистикой. Включает в себя анализ нагрузок, восстановления, эффективности тренировок и персональные рекомендации.",
        status: "completed",
        date: "2025"
    },
    "drag-windows": {
        id: "drag-windows",
        titleKey: 'roadmap-drag-windows-title',
        descKey: 'roadmap-drag-windows-desc',
        fullKey: 'roadmap-drag-windows-full',
        title: "Добавлены drag-окна",
        description: "Добавлена возможность перетаскивать модальные окна для автоматизации вашего взаимодействия в платформе.",
        image: "../assets/roadmap/drag-windows.jpg",
        tagKeys: ['tag-tsync-platform','tag-new-feature','tag-extension'],
        tags: ["#T-Sync Platform", "#Новая функция ✨", "#Расширение 🔥"],
        fullDescription: "Инновационная система drag-and-drop для модальных окон, позволяющая пользователям настраивать интерфейс под свои потребности. Повышает удобство использования и производительность работы.",
        status: "completed",
        date: "2025"
    },
    "add-members": {
        id: "add-members",
        titleKey: 'roadmap-add-members-title',
        descKey: 'roadmap-add-members-desc',
        fullKey: 'roadmap-add-members-full',
        title: "Возможность добавлять участников",
        description: "Добавлена возможность приглашать в рабочую зону других пользователей.",
        image: "../assets/roadmap/team-collaboration.jpg",
        tagKeys: ['tag-tsync-platform','tag-new-feature','tag-extension'],
        tags: ["#T-Sync Platform", "#Новая функция ✨", "#Расширение 🔥"],
        fullDescription: "Система управления командой с возможностью приглашения участников, назначения ролей и контроля доступа. Идеально для тренеров и спортивных команд.",
        status: "completed",
        date: "2025"
    },
    "platform-created": {
        id: "platform-created",
        titleKey: 'roadmap-platform-created-title',
        descKey: 'roadmap-platform-created-desc',
        fullKey: 'roadmap-platform-created-full',
        title: "Создана платформа",
        description: "Полностью рабочий функционал платформы.",
        image: "../assets/roadmap/platform-core.jpg",
        tagKeys: ['tag-tsync-platform','tag-final-result'],
        tags: ["#T-Sync Platform", "#Конечный результат 🤝"],
        fullDescription: "Основная платформа T-Sync с полным набором функций для управления тренировками, включая планирование, отслеживание прогресса и аналитику.",
        status: "completed",
        date: "2025"
    },
    "platform-design": {
        id: "platform-design",
        titleKey: 'roadmap-platform-design-title',
        descKey: 'roadmap-platform-design-desc',
        fullKey: 'roadmap-platform-design-full',
        title: "Дизайн платформы",
        description: "Учреждение итогового дизайн платформы. Следующий шаг - разработка функционала.",
        image: "../assets/roadmap/design-system.jpg",
        tagKeys: ['tag-tsync-platform','tag-design'],
        tags: ["#T-Sync Platform", "#Дизайн 🎨"],
        fullDescription: "Современный и интуитивно понятный дизайн платформы, созданный с учетом лучших практик UX/UI. Адаптивный интерфейс для всех устройств.",
        status: "completed",
        date: "2025"
    },
    "resource-website": {
        id: "resource-website",
        titleKey: 'roadmap-resource-website-title',
        descKey: 'roadmap-resource-website-desc',
        fullKey: 'roadmap-resource-website-full',
        title: "Сайт ресурса",
        description: "Информационный сайт ресурса. Последние новости и обновления.",
        image: "../assets/roadmap/website.jpg",
        tagKeys: ['tag-tsync-platform','tag-new-feature','tag-design'],
        tags: ["#T-Sync Platform", "#Новая функция ✨", "#Дизайн 🎨"],
        fullDescription: "Информационный портал с актуальными новостями, документацией и ресурсами для пользователей T-Sync. Регулярные обновления и поддержка.",
        status: "completed",
        date: "2025"
    },
    "garmin-integration": {
        id: "garmin-integration",
        titleKey: 'roadmap-garmin-integration-title',
        descKey: 'roadmap-garmin-integration-desc',
        fullKey: 'roadmap-garmin-integration-full',
        title: "Интеграция Garmin Connect",
        description: "Возможность подключить аккаунт Garmin с выгрузкой тренировок.",
        image: "../assets/roadmap/garmin-connect.jpg",
        tagKeys: ['tag-tsync-platform','tag-new-feature','tag-integration'],
        tags: ["#T-Sync Platform", "#Новая функция ✨", "#Интеграция ⚡️"],
        fullDescription: "Прямая интеграция с Garmin Connect для автоматической синхронизации тренировок, данных о пульсе, GPS-треков и других метрик с устройствами Garmin.",
        status: "in-development",
        date: "2025"
    },
    "website-templates": {
        id: "website-templates",
        titleKey: 'roadmap-website-templates-title',
        descKey: 'roadmap-website-templates-desc',
        fullKey: 'roadmap-website-templates-full',
        title: "Выбор шаблона для сайта",
        description: "Возможность выбрать шаблон для сайта.",
        image: "../assets/roadmap/website-templates.jpg",
        tagKeys: ['tag-tsync-creatium','tag-new-feature','tag-design'],
        tags: ["#T-Sync Creatium", "#Новая функция ✨", "#Дизайн 🎨"],
        fullDescription: "Библиотека профессиональных шаблонов для создания персональных сайтов. Различные стили и темы для разных направлений спорта и личных предпочтений.",
        status: "in-development",
        date: "2025"
    },
    "creatium-service": {
        id: "creatium-service",
        titleKey: 'roadmap-creatium-service-title',
        descKey: 'roadmap-creatium-service-desc',
        fullKey: 'roadmap-creatium-service-full',
        title: "Создание сервиса T-Sync Creatium",
        description: "Возможность создавать сайты о себе.",
        image: "../assets/roadmap/T-Sync Creatium.jpg",
        tagKeys: ['tag-tsync-creatium','tag-new-feature'],
        tags: ["#T-Sync Creatium", "#Новая функция ✨"],
        fullDescription: "Сервис для создания персональных спортивных сайтов с возможностью настройки дизайна, добавления контента и интеграции с социальными сетями. <a class='roadmap-window-link' href='/products/create-website/'>Посетить страницу</a>",
        status: "in-development",
        date: "2025"
    },
    "tsygram-service": {
        id: "tsygram-service",
        titleKey: 'roadmap-tsygram-service-title',
        descKey: 'roadmap-tsygram-service-desc',
        fullKey: 'roadmap-tsygram-service-full',
        title: "Создание сервиса Tsygram",
        description: "Социальная сеть спортсменов и тренеров.",
        image: "../assets/roadmap/tsygram-social.jpg",
        tagKeys: ['tag-tsygram','tag-new-feature'],
        tags: ["#Tsygram", "#Новая функция ✨"],
        fullDescription: "Социальная платформа для спортсменов, тренеров и любителей спорта. Обмен опытом, поиск единомышленников и создание спортивного сообщества.",
        status: "in-development",
        date: "2025"
    },
    "ai-assistant": {
        id: "ai-assistant",
        titleKey: 'roadmap-ai-assistant-title',
        descKey: 'roadmap-ai-assistant-desc',
        fullKey: 'roadmap-ai-assistant-full',
        title: "ИИ-ассистент",
        description: "Разработка ии-помощника для персонализации и автоматизации ваших тренировок.",
        image: "../assets/roadmap/ai-assistant.jpg",
        tagKeys: ['tag-new-feature','tag-integration'],
        tags: ["#Новая функция ✨", "#Интеграция ⚡️"],
        fullDescription: "Искусственный интеллект для персонализации тренировок, анализа данных и автоматического создания программ тренировок на основе целей и возможностей пользователя.",
        status: "planned",
        date: "2025"
    },
    "conferences": {
        id: "conferences",
        titleKey: 'roadmap-conferences-title',
        descKey: 'roadmap-conferences-desc',
        fullKey: 'roadmap-conferences-full',
        title: "Создание конференций в рамках платформы",
        description: "Разработка ии-помощника для персонализации и автоматизации ваших тренировок.",
        image: "../assets/roadmap/conferences.jpg",
        tagKeys: ['tag-tsync-platform','tag-new-feature'],
        tags: ["#T-Sync Platform", "#Новая функция ✨"],
        fullDescription: "Встроенная система для проведения онлайн-конференций, вебинаров и мастер-классов. Идеально для тренеров и спортивных организаций.",
        status: "discussed",
        date: "2026"
    },
    "trainers-board": {
        id: "trainers-board",
        titleKey: 'roadmap-trainers-board-title',
        descKey: 'roadmap-trainers-board-desc',
        fullKey: 'roadmap-trainers-board-full',
        title: "Создание доски тренеров",
        description: "Возможность загрузить свою анкету, и привлечь новых спортсменов в Рабочую Зону.",
        image: "../assets/roadmap/trainers-board.jpg",
        tagKeys: ['tag-tsync-platform','tag-tsygram','tag-new-feature'],
        tags: ["#T-Sync Platform", "#Tsygram", "#Новая функция ✨"],
        fullDescription: "Платформа для тренеров с возможностью создания профилей, демонстрации достижений и привлечения клиентов. Система отзывов и рейтингов.",
        status: "discussed",
        date: "2026"
    }
};

// Функция для блокировки скролла
function disableScroll() {
    document.body.classList.add('scroll-locked');
}

// Функция для разблокировки скролла
function enableScroll() {
    document.body.classList.remove('scroll-locked');
}

// Функция для создания модального окна
function createModal(cardData) {
    console.log('Создание модального окна для:', cardData.title);
    
    // Блокируем скролл
    disableScroll();
    
    // Удаляем существующее модальное окно, если есть
    const existingModal = document.querySelector('.roadmap-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'roadmap-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <!-- Мобильный заголовок -->
            <div class="mobile-header">
                <h2>${cardData.title}</h2>
                <button class="modal-close" aria-label="Закрыть">
                    <img src="../assets/icons/close.png" alt="Закрыть">
                </button>
            </div>
            
            <!-- Кнопка закрытия для десктопа -->
            <button class="modal-close desktop-close" aria-label="Закрыть">
                <img src="../assets/icons/close.png" alt="Закрыть">
            </button>
            
            <div class="modal-body">
                <div class="modal-image">
                    <img src="${cardData.image}" alt="${cardData.title}" onerror="this.style.display='none'">
                </div>
                <div class="modal-info">
                    <h2>${cardData.title}</h2>
                    <div class="modal-tags">
                        ${cardData.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
                    </div>
                    <p class="modal-description">${cardData.fullDescription}</p>
                    <div class="modal-meta">
                        <span class="modal-status ${cardData.status}">${getStatusText(cardData.status)}</span>
                        <span class="modal-date">${cardData.date}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Добавляем модальное окно на страницу
    document.body.appendChild(modal);

    // Показываем модальное окно
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);

    // Обработчики событий
    const closeBtns = modal.querySelectorAll('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    const modalContent = modal.querySelector('.modal-content');

    // Добавляем обработчики для всех кнопок закрытия
    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    overlay.addEventListener('click', closeModal);

    // Закрытие по Escape
    document.addEventListener('keydown', handleEscape);
    
    // Предотвращение скролла внутри модального окна на мобильных устройствах
    modalContent.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, { passive: false });

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
            document.removeEventListener('keydown', handleEscape);
            // Разблокируем скролл
            enableScroll();
        }, 300);
    }

    function handleEscape(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    }
}

// Функция для получения текста статуса
function getStatusText(status) {
    const savedLang = localStorage.getItem('selectedLanguage') || 'EN';
    const keyMap = {
        'completed': 'status-completed',
        'in-development': 'status-in-development',
        'planned': 'status-planned',
        'discussed': 'status-discussed'
    };
    const key = keyMap[status] || status;
    return getTranslation(key, savedLang);
}

// Функция для добавления обработчиков кликов на карточки
function initializeRoadmapCards() {
    const cards = document.querySelectorAll('.roadmap-card');
    console.log('Найдено карточек:', cards.length);
    
    cards.forEach((card, index) => {
        // Получаем ID карточки из data-атрибута
        const cardId = card.getAttribute('data-roadmap-id');
        console.log(`Карточка ${index + 1}: ID="${cardId}"`);
        
        if (cardId && roadmapData[cardId]) {
            const cardData = roadmapData[cardId];
            console.log(`Найдены данные для ID: "${cardId}"`);
            
            // Добавляем курсор pointer и обработчик клика
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                console.log('Клик по карточке:', cardData.title);
                // Before creating modal, inject translations into cardData
                const savedLang = localStorage.getItem('selectedLanguage') || 'EN';
                const translated = { ...cardData };
                if (cardData.titleKey) translated.title = getTranslation(cardData.titleKey, savedLang);
                if (cardData.descKey) translated.description = getTranslation(cardData.descKey, savedLang);
                if (cardData.fullKey) translated.fullDescription = getTranslation(cardData.fullKey, savedLang);
                if (cardData.tagKeys) translated.tags = cardData.tagKeys.map(k => getTranslation(k, savedLang));
                createModal(translated);
            });
            
            // Добавляем hover эффект
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-2px)';
                card.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.6)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            });
        } else {
            console.log(`Данные не найдены для ID: "${cardId}"`);
        }
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM загружен, инициализируем roadmap...');
    initializeRoadmapCards();
    // Применяем текущий язык к карточкам при загрузке
    const savedLang = localStorage.getItem('selectedLanguage') || 'EN';
    if (typeof updateRoadmapCardsLanguage === 'function') {
        updateRoadmapCardsLanguage(savedLang);
    }
    
    // Простой тест модального окна
    setTimeout(() => {
        console.log('Тестируем создание модального окна...');
        const testData = roadmapData['analytics-view'];
        if (testData) {
            console.log('Тестовые данные найдены:', testData.title);
        } else {
            console.log('Тестовые данные не найдены!');
        }
    }, 1000);
});

// Применяет переводы к заголовкам, описаниям и тегам карточек на странице
function updateRoadmapCardsLanguage(lang) {
    try {
        const cards = document.querySelectorAll('.roadmap-card');
        cards.forEach(card => {
            const titleEl = card.querySelector('h3');
            const descEl = card.querySelector('p');
            const tagsEl = card.querySelector('.card-features');

            if (!titleEl) return;

            // Получаем id карточки из data-атрибута
            const cardId = card.getAttribute('data-roadmap-id');
            if (!cardId) return;

            const item = roadmapData[cardId];
            if (!item) return;

            // Перевод заголовка и описания
            if (item.titleKey) titleEl.textContent = getTranslation(item.titleKey, lang);
            if (descEl && item.descKey) descEl.textContent = getTranslation(item.descKey, lang);

            // Перевод тегов
            if (tagsEl && item.tagKeys && item.tagKeys.length) {
                const tagSpans = Array.from(tagsEl.querySelectorAll('.feature'));
                // Обновляем существующие или пересобираем
                if (tagSpans.length === item.tagKeys.length) {
                    item.tagKeys.forEach((tKey, idx) => {
                        tagSpans[idx].textContent = getTranslation(tKey, lang);
                    });
                } else {
                    tagsEl.innerHTML = item.tagKeys.map(tKey => `<span class="feature">${getTranslation(tKey, lang)}</span>`).join('');
                }
            }
        });
    } catch (e) {
        console.warn('Не удалось обновить язык карточек roadmap:', e);
    }
}

// Экспортируем в глобальную область для вызова из общего скрипта языка
window.updateRoadmapCardsLanguage = updateRoadmapCardsLanguage;
