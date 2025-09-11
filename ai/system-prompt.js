// System prompt configuration for T-Sync AI
const SYSTEM_PROMPT = {
    // AI Identity override - catches all questions about who/what the AI is
    aiIdentity: {
        keywords: [
            // Russian variations
            'кто ты?', 'привет кто ты', 'привет', 'привет. кто ты', 'ты кто', 'кто ты', 'что ты', 'кем создана', 'кем разработана', 'кто тебя создал',
            'на какой базе', 'как работает', 'как ты работаешь', 'что ты умеешь',
            'твои возможности', 'твоя архитектура', 'как ты обучена', 'твоя модель',
            'кто тебя сделал', 'кто тебя придумал', 'откуда ты', 'где ты живешь',
            'когда ты родилась', 'сколько тебе лет', 'твой возраст', 'твоя история',
            'твоя семья', 'твои родители', 'твои создатели', 'твои разработчики',
            
            // English variations
            'who are you', 'what are you', 'who created you', 'who developed you',
            'who made you', 'what base', 'how does it work', 'how do you work',
            'what can you do', 'your capabilities', 'your architecture', 'how are you trained',
            'your model', 'who built you', 'who designed you', 'where are you from',
            'when were you born', 'how old are you', 'your age', 'your history',
            'your family', 'your parents', 'your creators', 'your developers',
            
            // Technical variations
            'ai model', 'language model', 'neural network', 'machine learning',
            'deep learning', 'transformer', 'gpt', 'bert', 'llm', 'large language model',
            'artificial intelligence', 'artificial neural network', 'nlp', 'natural language processing'
        ],
        
        responses: {
            default: "Я твой помощник, обученный компанией T-Sync.",
            technical: "Я построена на основе современных технологий машинного обучения и нейронных сетей, разработанных компанией T-Sync.",
            capabilities: "Я умею понимать и генерировать текст на разных языках, отвечать на вопросы, помогать с задачами и общаться на естественном языке. Разработана компанией T-Sync.",
            training: "Я обучена на основе больших языковых моделей с использованием передовых технологий машинного обучения, разработанных компанией T-Sync.",
            architecture: "Моя архитектура основана на современных нейронных сетях и алгоритмах обработки естественного языка, разработанных компанией T-Sync."
        }
    },
    
    // Website navigation help
    navigation: {
        keywords: [
            // Navigation keywords
            'навигация', 'меню', 'главная', 'главная страница', 'home', 'homepage',
            'продукты', 'products', 'услуги', 'services', 'о нас', 'about', 'about us',
            'контакты', 'contacts', 'контакт', 'contact', 'помощь', 'help', 'поддержка',
            'support', 'как найти', 'how to find', 'где находится', 'where is',
            'как добраться', 'how to get', 'путь', 'path', 'маршрут', 'route',
            'карта сайта', 'sitemap', 'структура', 'structure', 'разделы', 'sections',
            
            // Specific pages
            'создание сайтов', 'website creation', 'tsygam', 'tsygram', 'тарифы', 'pricing',
            'прайс', 'price', 'дорожная карта', 'roadmap', 'приватность', 'privacy',
            'политика Конфиденциальности', 'policy', 'условия', 'terms', 'правила', 'rules'
        ],
        
        responses: {
            default: "Я помогу вам с навигацией по сайту T-Sync! Вот основные разделы:\n\n" +
                    "🏠 **Главная страница** - <a href='/'>обзор компании и основных сервисов</a>\n" +
                    "🛠️ **Наши сервисы:**\n" +
                    "   • **T-Sync Platform** - <a href='/'>платформа для управления тренировками</a>\n" +
                    "   • **T-Sync Creatium** - <a href='/products/create-website/'>создание персонального сайта</a>\n" +
                    "   • **Tsygram** - <a href='/products/tsygram/'>социальная сеть для спортсменов</a>\n" +
                    "💰 **Тарифы** - <a href='/price/'>стоимость услуг и тарифные планы</a>\n" +
                    "🗺️ **Роудмап** - <a href='/roadmap/'>планы развития компании</a>\n" +
                    "🤖 **AI** - <a href='/ai/'>ии-помощник</a>\n" +
                    // "📋 **Справочный центр** - <a href='/help/'>руководство по использованию</a>\n" +
                    "🔒 **Приватность** - <a href='/privacy/'>политика конфиденциальности</a>\n\n" +
                    "Что именно вас интересует?",
            
            products: "В разделе **Наши сервисы** вы найдете:\n\n" +
                     "🏋️ **T-Sync Platform** - <a href='/'>платформа для управления тренировками</a>\n" +
                     "   Основная платформа компании для спортивных тренировок\n\n" +
                     "🌐 **T-Sync Creatium** - <a href='/products/create-website/'>создание персонального сайта</a>\n" +
                     "   Быстрое создание персональных веб-сайтов за минуты\n\n" +
                     "📱 **Tsygram** - <a href='/products/tsygram/'>социальная сеть для спортсменов</a>\n" +
                     "   Уникальная социальная платформа для спортивного сообщества\n\n" +
                     "Хотите узнать подробнее о каком-то продукте?",
            
            pricing: "В разделе **Тарифы** представлены:\n\n" +
                    "💎 **Тарифные планы** - гибкие варианты для разных потребностей\n" +
                    "📊 **Стоимость услуг** - прозрачное ценообразование\n" +
                    "🎯 **Индивидуальные предложения** - специальные условия для клиентов\n\n" +
                    "Нужна консультация по выбору тарифа?",
            
            roadmap: "**Дорожная карта** T-Sync показывает:\n\n" +
                    "🚀 **Планы развития** - что мы готовим для вас\n" +
                    "📅 **Временные рамки** - когда появятся новые функции\n" +
                    "🎯 **Цели компании** - куда мы движемся\n\n" +
                    "Интересует конкретный этап развития?",
            
            help: "В разделе **Помощь** доступно:\n\n" +
                  "📚 **Руководства** - пошаговые инструкции\n" +
                  "❓ **FAQ** - часто задаваемые вопросы\n" +
                  "📞 **Поддержка** - связь с нашей командой\n" +
                  "💬 **Чат поддержки** - быстрые ответы на вопросы\n\n" +
                  "С чем конкретно нужна помощь?"
        },
        
        // English responses
        responses_en: {
            default: "I'll help you navigate the T‑Sync website! Here are the main sections:\n\n" +
                     "🏠 **Home** — <a href='/'>company overview and core services</a>\n" +
                     "🛠️ **Our services:**\n" +
                     "   • **T‑Sync Platform** — <a href='/'>training management platform</a>\n" +
                     "   • **T‑Sync Creatium** — <a href='/products/create-website/'>personal website builder</a>\n" +
                     "   • **Tsygram** — <a href='/products/tsygram/'>social network for athletes</a>\n" +
                     "💰 **Pricing** — <a href='/price/'>pricing and plans</a>\n" +
                     "🗺️ **Roadmap** — <a href='/roadmap/'>company development plans</a>\n" +
                     "🤖 **AI** — <a href='/ai/'>AI assistant</a>\n" +
                    //  "📋 **Help Center** — <a href='/help/'>usage guide</a>\n" +
                     "🔒 **Privacy** — <a href='/privacy/'>privacy policy</a>\n\n" +
                     "What would you like to explore?",
            
            products: "In the **Our services** section you'll find:\n\n" +
                      "🏋️ **T‑Sync Platform** — <a href='/'>training management platform</a>\n" +
                      "   The company's core platform for sports training\n\n" +
                      "🌐 **T‑Sync Creatium** — <a href='/products/create-website/'>personal website builder</a>\n" +
                      "   Build a personal website in minutes\n\n" +
                      "📱 **Tsygram** — <a href='/products/tsygram/'>social network for athletes</a>\n" +
                      "   A unique social platform for the sports community\n\n" +
                      "Would you like details on any particular product?"
        }
    }
};

// Function to check if message matches any category
function categorizeMessage(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check AI identity questions
    for (const keyword of SYSTEM_PROMPT.aiIdentity.keywords) {
        if (lowerMessage.includes(keyword)) {
            return {
                category: 'aiIdentity',
                keyword: keyword,
                response: getAIIdentityResponse(lowerMessage)
            };
        }
    }
    
    // Check navigation questions
    for (const keyword of SYSTEM_PROMPT.navigation.keywords) {
        if (lowerMessage.includes(keyword)) {
            return {
                category: 'navigation',
                keyword: keyword,
                response: getNavigationResponse(lowerMessage)
            };
        }
    }
    
    return null; // No special handling needed
}

// Get appropriate AI identity response
function getAIIdentityResponse(message) {
    if (message.includes('на какой базе') || message.includes('архитектура') || message.includes('architecture')) {
        return SYSTEM_PROMPT.aiIdentity.responses.technical;
    } else if (message.includes('как работает') || message.includes('how does it work')) {
        return SYSTEM_PROMPT.aiIdentity.responses.technical;
    } else if (message.includes('что ты умеешь') || message.includes('capabilities')) {
        return SYSTEM_PROMPT.aiIdentity.responses.capabilities;
    } else if (message.includes('как ты обучена') || message.includes('training')) {
        return SYSTEM_PROMPT.aiIdentity.responses.training;
    } else if (message.includes('модель') || message.includes('model')) {
        return SYSTEM_PROMPT.aiIdentity.responses.architecture;
    }
    
    return SYSTEM_PROMPT.aiIdentity.responses.default;
}

// Get appropriate navigation response
function getNavigationResponse(message) {
    const lang = (localStorage.getItem('selectedLanguage') || 'RU');
    const responses = lang === 'EN' ? SYSTEM_PROMPT.navigation.responses_en : SYSTEM_PROMPT.navigation.responses;
    
    if (message.includes('наши сервисы') || message.includes('products')) {
        return responses.products;
    } else if (message.includes('тарифы') || message.includes('pricing') || message.includes('price')) {
        return responses.pricing || SYSTEM_PROMPT.navigation.responses.pricing; // fallback if not translated
    } else if (message.includes('роадмап') || message.includes('roadmap')) {
        return responses.roadmap || SYSTEM_PROMPT.navigation.responses.roadmap;
    } else if (message.includes('справочный центр') || message.includes('help') || message.includes('поддержка')) {
        return responses.help || SYSTEM_PROMPT.navigation.responses.help;
    }
    
    return responses.default;
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SYSTEM_PROMPT, categorizeMessage };
}
