<<<<<<< HEAD
// Интерактивные шарики для hero секции
document.addEventListener('DOMContentLoaded', function() {
    // Функциональность смены языка
    const languageToggle = document.getElementById('language-toggle');
    const languageMenu = document.getElementById('language-menu');
    const currentLang = document.getElementById('current-lang');
    const langButtons = document.querySelectorAll('.lang-btn');
    
    console.log('Language toggle found:', languageToggle);
    console.log('Language menu found:', languageMenu);
    console.log('Current lang found:', currentLang);
    console.log('Lang buttons found:', langButtons.length);
    
    // Показать/скрыть меню языков
    if (languageToggle && languageMenu) {
        languageToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Language toggle clicked');
            languageMenu.classList.toggle('show');
            console.log('Menu visibility toggled');
        });
        
        // Скрыть меню при клике вне его
        document.addEventListener('click', function(e) {
            if (!languageToggle.contains(e.target) && !languageMenu.contains(e.target)) {
                languageMenu.classList.remove('show');
            }
        });
    } else {
        console.error('Language toggle or menu not found');
    }
    
    // Обработка смены языка
    if (langButtons.length > 0) {
        langButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const selectedLang = this.getAttribute('data-lang');
                
                console.log('Language button clicked:', selectedLang);
                
                // Обновляем текущий язык
                if (currentLang) {
                    currentLang.textContent = selectedLang;
                }
                
                // Переключаем активный класс
                langButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Скрываем меню
                if (languageMenu) {
                    languageMenu.classList.remove('show');
                }
                
                // Обновляем язык на всей странице
                updatePageLanguage(selectedLang);
                // Обновляем контент карточек на странице роудмапа, если функция доступна
                try {
                    if (typeof window.updateRoadmapCardsLanguage === 'function') {
                        window.updateRoadmapCardsLanguage(selectedLang);
                    }
                } catch (e) {
                    console.warn('Не удалось обновить язык карточек роудмапа:', e);
                }
                console.log('Выбран язык:', selectedLang);
                
                // Обновляем модальное окно при смене языка
                if (languageSuggestionModal && languageSuggestionModal.classList.contains('show')) {
                    // Если модальное окно открыто, обновляем его содержимое
                    setTimeout(() => {
                        updatePageLanguage(selectedLang);
                    }, 100);
                }
            });
        });
    } else {
        console.error('Language buttons not found');
    }
    
    // Инициализируем язык при загрузке страницы
    initializeLanguage();
    
    // Функциональность модального окна смены языка
    const languageSuggestionModal = document.getElementById('language-suggestion-modal');
    const languageSuggestionClose = document.getElementById('language-suggestion-close');
    
    // Показываем модальное окно при загрузке страницы
    function showLanguageSuggestionModal() {
        // Проверяем, показывали ли мы уже модальное окно в этой сессии
        const hasShownLanguageSuggestion = sessionStorage.getItem('hasShownLanguageSuggestion');
        
        if (!hasShownLanguageSuggestion) {
            setTimeout(() => {
                languageSuggestionModal.classList.add('show');
            }, 2000); // Показываем через 2 секунды после загрузки
            
            // Отмечаем, что модальное окно было показано
            sessionStorage.setItem('hasShownLanguageSuggestion', 'true');
        }
    }
    
    // Скрываем модальное окно
    function hideLanguageSuggestionModal() {
        languageSuggestionModal.classList.remove('show');
    }
    
    // Обработчики событий
    if (languageSuggestionClose) {
        languageSuggestionClose.addEventListener('click', hideLanguageSuggestionModal);
    }
    
    // Закрытие по клику вне модального окна
    if (languageSuggestionModal) {
        document.addEventListener('click', function(e) {
            if (!languageSuggestionModal.contains(e.target) && 
                !languageToggle.contains(e.target) && 
                languageSuggestionModal.classList.contains('show')) {
                hideLanguageSuggestionModal();
            }
        });
    }
    
    // Закрытие по клавише Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && languageSuggestionModal.classList.contains('show')) {
            hideLanguageSuggestionModal();
        }
    });
    
    // Показываем модальное окно
    showLanguageSuggestionModal();
    
    // Плавная прокрутка к блоку шаблонов
    const examplesButton = document.getElementById('view-examples-btn');
    const templatesSection = document.getElementById('templates');
    
    console.log('Кнопка найдена:', examplesButton);
    console.log('Секция шаблонов найдена:', templatesSection);
    
    if (examplesButton && templatesSection) {
        examplesButton.addEventListener('click', function() {
            console.log('Клик по кнопке!');
            // Плавная прокрутка без изменения URL
            templatesSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    } else {
        console.error('Не удалось найти кнопку или секцию шаблонов');
    }

    const balls = document.querySelectorAll('.ball');
    let mouseX = 0, mouseY = 0;
    
    // Отслеживание движения мыши
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Параллакс эффект для шариков
        balls.forEach((ball, index) => {
            const speed = (index + 1) * 0.02;
            const x = (mouseX - window.innerWidth / 2) * speed;
            const y = (mouseY - window.innerHeight / 2) * speed;
            
            ball.style.transform = `translate(${x}px, ${y}px) scale(${1 + Math.sin(Date.now() * 0.001 + index) * 0.1})`;
        });
    });
    
    // Эффект при наведении на шарики
    balls.forEach(ball => {
        ball.addEventListener('mouseenter', () => {
            ball.style.filter = 'blur(20px)';
            ball.style.opacity = '0.8';
            ball.style.transform = 'scale(1.2)';
        });
        
        ball.addEventListener('mouseleave', () => {
            ball.style.filter = 'blur(40px)';
            ball.style.opacity = '0.6';
            ball.style.transform = 'scale(1)';
        });
    });
});

const svg = document.querySelector(".network-svg");
const center = document.querySelector(".center-icon");
const nodes = document.querySelectorAll(".node");
let lines = [];

// Проверяем, есть ли элементы сетевой секции на странице
const hasNetworkSection = svg && center && nodes.length > 0;

// Создаём линии под каждый блок только если есть сеть
if (hasNetworkSection) {
    nodes.forEach(() => {
        const line = document.createElementNS("http://www.w3.org/2000/svg","line");
        svg.appendChild(line);
        lines.push(line);
    });
}

// Проверяем, является ли устройство мобильным
function isMobile() {
    return window.innerWidth <= 768;
}

// Появление при скролле только если есть сеть
function handleScroll() {
    if (!hasNetworkSection) return;
    
    const networkElement = document.getElementById("network");
    if (!networkElement) return;
    
    const triggerPoint = window.innerHeight * 0.85;
    const rect = networkElement.getBoundingClientRect();
    if (rect.top < triggerPoint) {
        nodes.forEach((n, i) => setTimeout(() => n.classList.add("visible"), i * 100));
    }
}
window.addEventListener("scroll", handleScroll);

// Параллакс при движении курсора
let mouseX = 0, mouseY = 0;
document.addEventListener("mousemove", e => {
    mouseX = (e.clientX - window.innerWidth / 2) / 30;
    mouseY = (e.clientY - window.innerHeight / 2) / 30;
});

// Постоянный пересчёт позиций линий только если есть сеть
function updateLines() {
    if (!hasNetworkSection) return;
    
    try {
        const centerRect = center.getBoundingClientRect();
        const containerRect = svg.getBoundingClientRect();

        nodes.forEach((node, i) => {
            // Смещение для параллакса только на десктопе
            if (!isMobile()) {
                node.style.transform = `translate(${mouseX * (i+1)/3}px, ${mouseY * (i+1)/3}px)`;
            } else {
                node.style.transform = 'none';
            }

            const nodeRect = node.getBoundingClientRect();

            if (lines[i]) {
                lines[i].setAttribute("x1", centerRect.left + centerRect.width/2 - containerRect.left);
                lines[i].setAttribute("y1", centerRect.top + centerRect.height/2 - containerRect.top);
                lines[i].setAttribute("x2", nodeRect.left + nodeRect.width/2 - containerRect.left);
                lines[i].setAttribute("y2", nodeRect.top + nodeRect.height/2 - containerRect.top);
            }
        });

        requestAnimationFrame(updateLines);
    } catch (error) {
        // Игнорируем ошибки если элементы не найдены
        console.log("Network section elements not found, skipping animation");
    }
}

// Запускаем анимацию только если есть сеть
if (hasNetworkSection) {
    updateLines();
}

// Обработчик изменения размера окна для корректного отображения линий
window.addEventListener('resize', () => {
    if (!hasNetworkSection) return;
    
    // Небольшая задержка для корректного пересчета после изменения размера
    setTimeout(() => {
        try {
            // Принудительно обновляем позиции линий
            const centerRect = center.getBoundingClientRect();
            const containerRect = svg.getBoundingClientRect();

            nodes.forEach((node, i) => {
                const nodeRect = node.getBoundingClientRect();
                
                if (lines[i]) {
                    lines[i].setAttribute("x1", centerRect.left + centerRect.width/2 - containerRect.left);
                    lines[i].setAttribute("y1", centerRect.top + centerRect.height/2 - containerRect.top);
                    lines[i].setAttribute("x2", nodeRect.left + nodeRect.width/2 - containerRect.left);
                    lines[i].setAttribute("y2", nodeRect.top + nodeRect.height/2 - containerRect.top);
                }
            });
        } catch (error) {
            // Игнорируем ошибки если элементы не найдены
            console.log("Network section elements not found during resize");
        }
    }, 100);
});

// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (!mobileMenuToggle || !nav || !menuIcon) return;
    
    mobileMenuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        if (nav.classList.contains('active')) {
            // Определяем правильный путь к иконке закрытия
            const closeIconPath = menuIcon.src.includes('assets') ? 
                menuIcon.src.replace('menu.png', 'close.png') : 
                './assets/icons/close.png';
            menuIcon.src = closeIconPath;
            menuIcon.alt = 'Закрыть меню';
            // Блокируем скролл страницы
            document.body.classList.add('menu-open');
        } else {
            // Определяем правильный путь к иконке меню
            const menuIconPath = menuIcon.src.includes('assets') ? 
                menuIcon.src.replace('close.png', 'menu.png') : 
                './assets/icons/menu.png';
            menuIcon.src = menuIconPath;
            menuIcon.alt = 'Меню';
            // Восстанавливаем скролл страницы
            document.body.classList.remove('menu-open');
        }
    });
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            nav.classList.remove('active');
            const menuIconPath = menuIcon.src.includes('assets') ? 
                menuIcon.src.replace('close.png', 'menu.png') : 
                './assets/icons/menu.png';
            menuIcon.src = menuIconPath;
            menuIcon.alt = 'Меню';
            // Восстанавливаем скролл страницы
            document.body.classList.remove('menu-open');
        }
    });
    
    // Закрытие меню по клавише Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && nav.classList.contains('active')) {
            nav.classList.remove('active');
            const menuIconPath = menuIcon.src.includes('assets') ? 
                menuIcon.src.replace('close.png', 'menu.png') : 
                './assets/icons/menu.png';
            menuIcon.src = menuIconPath;
            menuIcon.alt = 'Меню';
            // Восстанавливаем скролл страницы
            document.body.classList.remove('menu-open');
        }
    });
    
    // Обработка выпадающих меню на мобильных
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        
        if (dropdownToggle) {
            dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        }
    });
});

// Функционал кнопки "Вверх"
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    
    if (scrollToTopButton) {
        // Показываем кнопку при скролле вниз
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopButton.classList.add('show');
            } else {
                scrollToTopButton.classList.remove('show');
            }
        });
        
        // Прокрутка вверх при клике на кнопку
        scrollToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Добавляем hover эффект для мобильных устройств
        scrollToTopButton.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        scrollToTopButton.addEventListener('touchend', function() {
            this.style.transform = 'translateY(0)';
        });
    }
=======
// Интерактивные шарики для hero секции
document.addEventListener('DOMContentLoaded', function() {
    // Функциональность смены языка
    const languageToggle = document.getElementById('language-toggle');
    const languageMenu = document.getElementById('language-menu');
    const currentLang = document.getElementById('current-lang');
    const langButtons = document.querySelectorAll('.lang-btn');
    
    console.log('Language toggle found:', languageToggle);
    console.log('Language menu found:', languageMenu);
    console.log('Current lang found:', currentLang);
    console.log('Lang buttons found:', langButtons.length);
    
    // Показать/скрыть меню языков
    if (languageToggle && languageMenu) {
        languageToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Language toggle clicked');
            languageMenu.classList.toggle('show');
            console.log('Menu visibility toggled');
        });
        
        // Скрыть меню при клике вне его
        document.addEventListener('click', function(e) {
            if (!languageToggle.contains(e.target) && !languageMenu.contains(e.target)) {
                languageMenu.classList.remove('show');
            }
        });
    } else {
        console.error('Language toggle or menu not found');
    }
    
    // Обработка смены языка
    if (langButtons.length > 0) {
        langButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const selectedLang = this.getAttribute('data-lang');
                
                console.log('Language button clicked:', selectedLang);
                
                // Обновляем текущий язык
                if (currentLang) {
                    currentLang.textContent = selectedLang;
                }
                
                // Переключаем активный класс
                langButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Скрываем меню
                if (languageMenu) {
                    languageMenu.classList.remove('show');
                }
                
                // Обновляем язык на всей странице
                updatePageLanguage(selectedLang);
                // Обновляем контент карточек на странице роудмапа, если функция доступна
                try {
                    if (typeof window.updateRoadmapCardsLanguage === 'function') {
                        window.updateRoadmapCardsLanguage(selectedLang);
                    }
                } catch (e) {
                    console.warn('Не удалось обновить язык карточек роудмапа:', e);
                }
                console.log('Выбран язык:', selectedLang);
                
                // Обновляем модальное окно при смене языка
                if (languageSuggestionModal && languageSuggestionModal.classList.contains('show')) {
                    // Если модальное окно открыто, обновляем его содержимое
                    setTimeout(() => {
                        updatePageLanguage(selectedLang);
                    }, 100);
                }
            });
        });
    } else {
        console.error('Language buttons not found');
    }
    
    // Инициализируем язык при загрузке страницы
    initializeLanguage();
    
    // Функциональность модального окна смены языка
    const languageSuggestionModal = document.getElementById('language-suggestion-modal');
    const languageSuggestionClose = document.getElementById('language-suggestion-close');
    
    // Показываем модальное окно при загрузке страницы
    function showLanguageSuggestionModal() {
        // Проверяем, показывали ли мы уже модальное окно в этой сессии
        const hasShownLanguageSuggestion = sessionStorage.getItem('hasShownLanguageSuggestion');
        
        if (!hasShownLanguageSuggestion) {
            setTimeout(() => {
                languageSuggestionModal.classList.add('show');
            }, 2000); // Показываем через 2 секунды после загрузки
            
            // Отмечаем, что модальное окно было показано
            sessionStorage.setItem('hasShownLanguageSuggestion', 'true');
        }
    }
    
    // Скрываем модальное окно
    function hideLanguageSuggestionModal() {
        languageSuggestionModal.classList.remove('show');
    }
    
    // Обработчики событий
    if (languageSuggestionClose) {
        languageSuggestionClose.addEventListener('click', hideLanguageSuggestionModal);
    }
    
    // Закрытие по клику вне модального окна
    if (languageSuggestionModal) {
        document.addEventListener('click', function(e) {
            if (!languageSuggestionModal.contains(e.target) && 
                !languageToggle.contains(e.target) && 
                languageSuggestionModal.classList.contains('show')) {
                hideLanguageSuggestionModal();
            }
        });
    }
    
    // Закрытие по клавише Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && languageSuggestionModal.classList.contains('show')) {
            hideLanguageSuggestionModal();
        }
    });
    
    // Показываем модальное окно
    showLanguageSuggestionModal();
    
    // Плавная прокрутка к блоку шаблонов
    const examplesButton = document.getElementById('view-examples-btn');
    const templatesSection = document.getElementById('templates');
    
    console.log('Кнопка найдена:', examplesButton);
    console.log('Секция шаблонов найдена:', templatesSection);
    
    if (examplesButton && templatesSection) {
        examplesButton.addEventListener('click', function() {
            console.log('Клик по кнопке!');
            // Плавная прокрутка без изменения URL
            templatesSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    } else {
        console.error('Не удалось найти кнопку или секцию шаблонов');
    }

    const balls = document.querySelectorAll('.ball');
    let mouseX = 0, mouseY = 0;
    
    // Отслеживание движения мыши
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Параллакс эффект для шариков
        balls.forEach((ball, index) => {
            const speed = (index + 1) * 0.02;
            const x = (mouseX - window.innerWidth / 2) * speed;
            const y = (mouseY - window.innerHeight / 2) * speed;
            
            ball.style.transform = `translate(${x}px, ${y}px) scale(${1 + Math.sin(Date.now() * 0.001 + index) * 0.1})`;
        });
    });
    
    // Эффект при наведении на шарики
    balls.forEach(ball => {
        ball.addEventListener('mouseenter', () => {
            ball.style.filter = 'blur(20px)';
            ball.style.opacity = '0.8';
            ball.style.transform = 'scale(1.2)';
        });
        
        ball.addEventListener('mouseleave', () => {
            ball.style.filter = 'blur(40px)';
            ball.style.opacity = '0.6';
            ball.style.transform = 'scale(1)';
        });
    });
});

const svg = document.querySelector(".network-svg");
const center = document.querySelector(".center-icon");
const nodes = document.querySelectorAll(".node");
let lines = [];

// Проверяем, есть ли элементы сетевой секции на странице
const hasNetworkSection = svg && center && nodes.length > 0;

// Создаём линии под каждый блок только если есть сеть
if (hasNetworkSection) {
    nodes.forEach(() => {
        const line = document.createElementNS("http://www.w3.org/2000/svg","line");
        svg.appendChild(line);
        lines.push(line);
    });
}

// Проверяем, является ли устройство мобильным
function isMobile() {
    return window.innerWidth <= 768;
}

// Появление при скролле только если есть сеть
function handleScroll() {
    if (!hasNetworkSection) return;
    
    const networkElement = document.getElementById("network");
    if (!networkElement) return;
    
    const triggerPoint = window.innerHeight * 0.85;
    const rect = networkElement.getBoundingClientRect();
    if (rect.top < triggerPoint) {
        nodes.forEach((n, i) => setTimeout(() => n.classList.add("visible"), i * 100));
    }
}
window.addEventListener("scroll", handleScroll);

// Параллакс при движении курсора
let mouseX = 0, mouseY = 0;
document.addEventListener("mousemove", e => {
    mouseX = (e.clientX - window.innerWidth / 2) / 30;
    mouseY = (e.clientY - window.innerHeight / 2) / 30;
});

// Постоянный пересчёт позиций линий только если есть сеть
function updateLines() {
    if (!hasNetworkSection) return;
    
    try {
        const centerRect = center.getBoundingClientRect();
        const containerRect = svg.getBoundingClientRect();

        nodes.forEach((node, i) => {
            // Смещение для параллакса только на десктопе
            if (!isMobile()) {
                node.style.transform = `translate(${mouseX * (i+1)/3}px, ${mouseY * (i+1)/3}px)`;
            } else {
                node.style.transform = 'none';
            }

            const nodeRect = node.getBoundingClientRect();

            if (lines[i]) {
                lines[i].setAttribute("x1", centerRect.left + centerRect.width/2 - containerRect.left);
                lines[i].setAttribute("y1", centerRect.top + centerRect.height/2 - containerRect.top);
                lines[i].setAttribute("x2", nodeRect.left + nodeRect.width/2 - containerRect.left);
                lines[i].setAttribute("y2", nodeRect.top + nodeRect.height/2 - containerRect.top);
            }
        });

        requestAnimationFrame(updateLines);
    } catch (error) {
        // Игнорируем ошибки если элементы не найдены
        console.log("Network section elements not found, skipping animation");
    }
}

// Запускаем анимацию только если есть сеть
if (hasNetworkSection) {
    updateLines();
}

// Обработчик изменения размера окна для корректного отображения линий
window.addEventListener('resize', () => {
    if (!hasNetworkSection) return;
    
    // Небольшая задержка для корректного пересчета после изменения размера
    setTimeout(() => {
        try {
            // Принудительно обновляем позиции линий
            const centerRect = center.getBoundingClientRect();
            const containerRect = svg.getBoundingClientRect();

            nodes.forEach((node, i) => {
                const nodeRect = node.getBoundingClientRect();
                
                if (lines[i]) {
                    lines[i].setAttribute("x1", centerRect.left + centerRect.width/2 - containerRect.left);
                    lines[i].setAttribute("y1", centerRect.top + centerRect.height/2 - containerRect.top);
                    lines[i].setAttribute("x2", nodeRect.left + nodeRect.width/2 - containerRect.left);
                    lines[i].setAttribute("y2", nodeRect.top + nodeRect.height/2 - containerRect.top);
                }
            });
        } catch (error) {
            // Игнорируем ошибки если элементы не найдены
            console.log("Network section elements not found during resize");
        }
    }, 100);
});

// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (!mobileMenuToggle || !nav || !menuIcon) return;
    
    mobileMenuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        if (nav.classList.contains('active')) {
            // Определяем правильный путь к иконке закрытия
            const closeIconPath = menuIcon.src.includes('assets') ? 
                menuIcon.src.replace('menu.png', 'close.png') : 
                './assets/icons/close.png';
            menuIcon.src = closeIconPath;
            menuIcon.alt = 'Закрыть меню';
            // Блокируем скролл страницы
            document.body.classList.add('menu-open');
        } else {
            // Определяем правильный путь к иконке меню
            const menuIconPath = menuIcon.src.includes('assets') ? 
                menuIcon.src.replace('close.png', 'menu.png') : 
                './assets/icons/menu.png';
            menuIcon.src = menuIconPath;
            menuIcon.alt = 'Меню';
            // Восстанавливаем скролл страницы
            document.body.classList.remove('menu-open');
        }
    });
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            nav.classList.remove('active');
            const menuIconPath = menuIcon.src.includes('assets') ? 
                menuIcon.src.replace('close.png', 'menu.png') : 
                './assets/icons/menu.png';
            menuIcon.src = menuIconPath;
            menuIcon.alt = 'Меню';
            // Восстанавливаем скролл страницы
            document.body.classList.remove('menu-open');
        }
    });
    
    // Закрытие меню по клавише Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && nav.classList.contains('active')) {
            nav.classList.remove('active');
            const menuIconPath = menuIcon.src.includes('assets') ? 
                menuIcon.src.replace('close.png', 'menu.png') : 
                './assets/icons/menu.png';
            menuIcon.src = menuIconPath;
            menuIcon.alt = 'Меню';
            // Восстанавливаем скролл страницы
            document.body.classList.remove('menu-open');
        }
    });
    
    // Обработка выпадающих меню на мобильных
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        
        if (dropdownToggle) {
            dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        }
    });
});

// Функционал кнопки "Вверх"
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    
    if (scrollToTopButton) {
        // Показываем кнопку при скролле вниз
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopButton.classList.add('show');
            } else {
                scrollToTopButton.classList.remove('show');
            }
        });
        
        // Прокрутка вверх при клике на кнопку
        scrollToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Добавляем hover эффект для мобильных устройств
        scrollToTopButton.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        scrollToTopButton.addEventListener('touchend', function() {
            this.style.transform = 'translateY(0)';
        });
    }
>>>>>>> a5a19c1e6a03d755ac3c83e0bc340a75738c67c9
});