const messageForm = document.querySelector(".prompt__form");
const chatHistoryContainer = document.querySelector(".chats");
const suggestionItems = document.querySelectorAll(".suggests__item");

const themeToggleButton = document.getElementById("themeToggler");
const clearChatButton = document.getElementById("deleteButton");
const backButton = document.getElementById("backButton");

// State variables
let currentUserMessage = null;
let isGeneratingResponse = false;

const GOOGLE_API_KEY = "AIzaSyDtlKHDF46DJKf-brAz-QSMdElz3VEmElY";
const API_REQUEST_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GOOGLE_API_KEY}`;

// Load saved data from local storage
const loadSavedChatHistory = () => {
    const savedConversations = JSON.parse(localStorage.getItem("saved-api-chats")) || [];
    const isLightTheme = localStorage.getItem("themeColor") === "light_mode";

    document.body.classList.toggle("light_mode", isLightTheme);
    themeToggleButton.innerHTML = isLightTheme ? '<i class="bx bx-moon"></i>' : '<i class="bx bx-sun"></i>';

    chatHistoryContainer.innerHTML = '';

    // Iterate through saved chat history and display messages
    savedConversations.forEach(conversation => {
        // Display the user's message
        const userMessageHtml = `

            <div class="message__content">
                <p class="message__text">Вы:</p>
               <p class="message__text">${conversation.userMessage}</p>
            </div>
        
        `;

        const outgoingMessageElement = createChatMessageElement(userMessageHtml, "message--outgoing");
        chatHistoryContainer.appendChild(outgoingMessageElement);

        // Display the API response
        const responseText = conversation.apiResponse?.candidates?.[0]?.content?.parts?.[0]?.text;
        const parsedApiResponse = marked.parse(responseText); // Convert to HTML
        const rawApiResponse = responseText; // Plain text version

        const responseHtml = `
        
           <div class="message__content">
                <p class="message__text"></p>
                <div class="message__loading-indicator hide">
                    <div class="message__loading-bar"></div>
                </div>
            </div>
            <div class="message__actions hide">
                <span onClick="copyMessageToClipboard(this)" class="message__icon message__icon--copy"><i class='bx bx-copy-alt'></i></span>
                <span onClick="likeMessage(this)" class="message__icon message__icon--like"><i class='bx bx-like'></i></span>
                <span onClick="dislikeMessage(this)" class="message__icon message__icon--dislike"><i class='bx bx-dislike'></i></span>
                <button onClick="startNewChat()" class="message__new-chat-btn">
                    <i class='bx bx-plus'></i>
                    Новый чат
                </button>
            </div>
        
        `;

        const incomingMessageElement = createChatMessageElement(responseHtml, "message--incoming");
        chatHistoryContainer.appendChild(incomingMessageElement);

        const messageTextElement = incomingMessageElement.querySelector(".message__text");

        // Display saved chat without typing effect
        showTypingEffect(rawApiResponse, parsedApiResponse, messageTextElement, incomingMessageElement, true); // 'true' skips typing
    });

    document.body.classList.toggle("hide-header", savedConversations.length > 0);
    
    // Enable scrolling if there are saved messages
    if (savedConversations.length > 0) {
        chatHistoryContainer.classList.add("has-messages");
        document.body.classList.add("has-chat");
        backButton.style.display = "flex"; // Show back button
        
        // Show suggestions if there are saved messages
        const promptSuggests = document.querySelector(".prompt .suggests");
        if (promptSuggests) {
            promptSuggests.classList.add("show");
        }
    }
    
    scrollToBottom(); // Scroll to bottom after loading saved chat history
};

// create a new chat message element
const createChatMessageElement = (htmlContent, ...cssClasses) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", ...cssClasses);
    messageElement.innerHTML = htmlContent;
    return messageElement;
}

// Show typing effect
const showTypingEffect = (rawText, htmlText, messageElement, incomingMessageElement, skipEffect = false) => {
    const actionsElement = incomingMessageElement.querySelector(".message__actions");
    actionsElement.classList.add("hide"); // Initially hide actions

    if (skipEffect) {
        // Display content directly without typing
        messageElement.innerHTML = htmlText;
        hljs.highlightAll();
        addCopyButtonToCodeBlocks();
        actionsElement.classList.remove("hide"); // Show actions
        isGeneratingResponse = false;
        scrollToBottom(); // Scroll to bottom when content is displayed
        return;
    }

    const wordsArray = rawText.split(' ');
    let wordIndex = 0;

    const typingInterval = setInterval(() => {
        messageElement.innerText += (wordIndex === 0 ? '' : ' ') + wordsArray[wordIndex++];
        if (wordIndex === wordsArray.length) {
            clearInterval(typingInterval);
            isGeneratingResponse = false;
            messageElement.innerHTML = htmlText;
            hljs.highlightAll();
            addCopyButtonToCodeBlocks();
            actionsElement.classList.remove("hide");
            scrollToBottom(); // Scroll to bottom when typing is complete
        }
    }, 75);
};

// Fetch API response based on user input
const requestApiResponse = async (incomingMessageElement) => {
    const messageTextElement = incomingMessageElement.querySelector(".message__text");

    try {
        // Check if message matches T-Sync system prompt categories
        const categorizedMessage = categorizeMessage(currentUserMessage);
        
        if (categorizedMessage) {
            // Use T-Sync system response instead of API call
            const responseText = categorizedMessage.response;
            const parsedApiResponse = marked.parse(responseText);
            const rawApiResponse = responseText;

            showTypingEffect(rawApiResponse, parsedApiResponse, messageTextElement, incomingMessageElement);

            // Save conversation in local storage
            let savedConversations = JSON.parse(localStorage.getItem("saved-api-chats")) || [];
            savedConversations.push({
                userMessage: currentUserMessage,
                apiResponse: { candidates: [{ content: { parts: [{ text: responseText }] } }] }
            });
            localStorage.setItem("saved-api-chats", JSON.stringify(savedConversations));
            return;
        }

        const response = await fetch(API_REQUEST_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ role: "user", parts: [{ text: currentUserMessage }] }]
            }),
        });

        const responseData = await response.json();
        if (!response.ok) throw new Error(responseData.error.message);

        const responseText = responseData?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!responseText) throw new Error("Invalid API response.");

        const parsedApiResponse = marked.parse(responseText);
        const rawApiResponse = responseText;

        showTypingEffect(rawApiResponse, parsedApiResponse, messageTextElement, incomingMessageElement);

        // Save conversation in local storage
        let savedConversations = JSON.parse(localStorage.getItem("saved-api-chats")) || [];
        savedConversations.push({
            userMessage: currentUserMessage,
            apiResponse: responseData
        });
        localStorage.setItem("saved-api-chats", JSON.stringify(savedConversations));
    } catch (error) {
        isGeneratingResponse = false;
        messageTextElement.innerText = error.message;
        messageTextElement.closest(".message").classList.add("message--error");
    } finally {
        incomingMessageElement.classList.remove("message--loading");
    }
};

// Add copy button to code blocks
const addCopyButtonToCodeBlocks = () => {
    const codeBlocks = document.querySelectorAll('pre');
    codeBlocks.forEach((block) => {
        const codeElement = block.querySelector('code');
        let language = [...codeElement.classList].find(cls => cls.startsWith('language-'))?.replace('language-', '') || 'Text';

        const languageLabel = document.createElement('div');
        languageLabel.innerText = language.charAt(0).toUpperCase() + language.slice(1);
        languageLabel.classList.add('code__language-label');
        block.appendChild(languageLabel);

        const copyButton = document.createElement('button');
        copyButton.innerHTML = `<i class='bx bx-copy'></i>`;
        copyButton.classList.add('code__copy-btn');
        block.appendChild(copyButton);

        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(codeElement.innerText).then(() => {
                copyButton.innerHTML = `<i class='bx bx-check'></i>`;
                setTimeout(() => copyButton.innerHTML = `<i class='bx bx-copy'></i>`, 2000);
            }).catch(err => {
                console.error("Copy failed:", err);
                alert("Unable to copy text!");
            });
        });
    });
};

// Show loading animation during API request
const displayLoadingAnimation = () => {
    const loadingHtml = `

        <div class="message__content">
            <p class="message__text"></p>
            <div class="message__loading-indicator">
                <div class="message__loading-bar"></div>
            </div>
        </div>
        <div class="message__actions hide">
            <span onClick="copyMessageToClipboard(this)" class="message__icon message__icon--copy"><i class='bx bx-copy-alt'></i></span>
            <span onClick="likeMessage(this)" class="message__icon message__icon--like"><i class='bx bx-like'></i></span>
            <span onClick="dislikeMessage(this)" class="message__icon message__icon--dislike"><i class='bx bx-dislike'></i></span>
            <button onClick="startNewChat()" class="message__new-chat-btn">
                <i class='bx bx-plus'></i>
                Новый чат
            </button>
        </div>
    
    `;

    const loadingMessageElement = createChatMessageElement(loadingHtml, "message--incoming", "message--loading");
    chatHistoryContainer.appendChild(loadingMessageElement);
    scrollToBottom(); // Scroll to bottom after adding loading message

    requestApiResponse(loadingMessageElement);
};

// Copy message to clipboard
const copyMessageToClipboard = (copyButton) => {
    const messageContent = copyButton.parentElement.parentElement.querySelector(".message__text").innerText;

    navigator.clipboard.writeText(messageContent);
    copyButton.innerHTML = `<i class='bx bx-check'></i>`; // Confirmation icon
    setTimeout(() => copyButton.innerHTML = `<i class='bx bx-copy-alt'></i>`, 1000); // Revert icon after 1 second
};

// Like message
const likeMessage = (likeButton) => {
    const icon = likeButton.querySelector('i');
    if (icon.classList.contains('bx-like')) {
        icon.classList.remove('bx-like');
        icon.classList.add('bxs-like');
        likeButton.style.color = '#4ecdc4';
    } else {
        icon.classList.remove('bxs-like');
        icon.classList.add('bx-like');
        likeButton.style.color = '';
    }
};

// Dislike message
const dislikeMessage = (dislikeButton) => {
    const icon = dislikeButton.querySelector('i');
    if (icon.classList.contains('bx-dislike')) {
        icon.classList.remove('bx-dislike');
        icon.classList.add('bxs-dislike');
        dislikeButton.style.color = '#ff6b6b';
    } else {
        icon.classList.remove('bxs-dislike');
        icon.classList.add('bx-dislike');
        dislikeButton.style.color = '';
    }
};

// Start new chat
const startNewChat = () => {
    if (confirm("Вы уверены, что хотите начать новый чат? Текущая история будет очищена.")) {
        localStorage.removeItem("saved-api-chats");
        
        // Remove has-messages class to disable scrolling
        chatHistoryContainer.classList.remove("has-messages");
        document.body.classList.remove("has-chat");
        backButton.style.display = "none"; // Hide back button
        
        // Hide suggestions
        const promptSuggests = document.querySelector(".prompt .suggests");
        if (promptSuggests) {
            promptSuggests.classList.remove("show");
        }
        
        // Reload chat history to reflect changes
        loadSavedChatHistory();
        
        currentUserMessage = null;
        isGeneratingResponse = false;
    }
};

// Go back to welcome page
const goBackToWelcome = () => {
    if (confirm("Вы уверены, что хотите вернуться к приветственной странице? Вся история чата будет удалена.")) {
        localStorage.removeItem("saved-api-chats");
        
        // Hide back button and show header
        backButton.style.display = "none";
        document.body.classList.remove("hide-header", "has-chat");
        
        // Remove has-messages class to disable scrolling
        chatHistoryContainer.classList.remove("has-messages");
        
        // Hide suggestions
        const promptSuggests = document.querySelector(".prompt .suggests");
        if (promptSuggests) {
            promptSuggests.classList.remove("show");
        }
        
        // Clear chat history
        chatHistoryContainer.innerHTML = '';
        
        // Reset state
        currentUserMessage = null;
        isGeneratingResponse = false;
    }
};

// Handle sending chat messages
const handleOutgoingMessage = () => {
    currentUserMessage = messageForm.querySelector(".prompt__form-input").value.trim() || currentUserMessage;
    if (!currentUserMessage || isGeneratingResponse) return; // Exit if no message or already generating response

    isGeneratingResponse = true;

    const outgoingMessageHtml = `
    
        <div class="message__content">
            <p class="message__text">Вы:</p>
        </div>

    `;

    const outgoingMessageElement = createChatMessageElement(outgoingMessageHtml, "message--outgoing");
    outgoingMessageElement.querySelector(".message__text").innerText = currentUserMessage;
    chatHistoryContainer.appendChild(outgoingMessageElement);

    // Enable scrolling when first message is added
    chatHistoryContainer.classList.add("has-messages");
    document.body.classList.add("has-chat");

    messageForm.reset(); // Clear input field
    document.body.classList.add("hide-header");
    backButton.style.display = "flex"; // Show back button
    
    // Show suggestions in chat
    const promptSuggests = document.querySelector(".prompt .suggests");
    if (promptSuggests) {
        promptSuggests.classList.add("show");
    }
    
    scrollToBottom(); // Scroll to bottom after adding message
    setTimeout(displayLoadingAnimation, 500); // Show loading animation after delay
};

// Toggle between light and dark themes
themeToggleButton.addEventListener('click', () => {
    const isLightTheme = document.body.classList.toggle("light_mode");
    localStorage.setItem("themeColor", isLightTheme ? "light_mode" : "dark_mode");

    // Update icon based on theme
    const newIconClass = isLightTheme ? "bx bx-moon" : "bx bx-sun";
    themeToggleButton.querySelector("i").className = newIconClass;
});

// Back button event listener
backButton.addEventListener('click', goBackToWelcome);

// Clear all chat history
clearChatButton.addEventListener('click', () => {
    if (confirm("Are you sure you want to delete all chat history?")) {
        localStorage.removeItem("saved-api-chats");

                // Remove has-messages class to disable scrolling
        chatHistoryContainer.classList.remove("has-messages");
        document.body.classList.remove("has-chat");
        backButton.style.display = "none"; // Hide back button
        
        // Hide suggestions
        const promptSuggests = document.querySelector(".prompt .suggests");
        if (promptSuggests) {
            promptSuggests.classList.remove("show");
        }
        
        // Reload chat history to reflect changes
        loadSavedChatHistory();

        currentUserMessage = null;
        isGeneratingResponse = false;
    }
});

// Handle click on suggestion items
suggestionItems.forEach(suggestion => {
    suggestion.addEventListener('click', () => {
        const translateEl = suggestion.querySelector('[data-translate]');
        const translateKey = translateEl ? translateEl.getAttribute('data-translate') : null;
        const text = suggestion.querySelector('.suggests__item-text').innerText;

        // Support RU and EN by key or visible text
        if (translateKey === 'ai-suggest-nav' || text === 'Покажи навигацию сайта' || text === 'Show site navigation') {
            showNavigationResponse();
        } else if (translateKey === 'ai-suggest-products' || text === 'Расскажи о продуктах' || text === 'Tell me about products') {
            showProductsResponse();
        } else {
            // Default behavior - use existing logic
            currentUserMessage = text;
            handleOutgoingMessage();
        }
    });
});

// Function to show navigation response
function showNavigationResponse() {
    const lang = (localStorage.getItem('selectedLanguage') || 'EN');
    const userText = lang === 'EN' ? 'Show site navigation' : 'Покажи навигацию сайта';
    const response = lang === 'EN' ? (SYSTEM_PROMPT.navigation.responses_en?.default || SYSTEM_PROMPT.navigation.responses.default)
                                   : SYSTEM_PROMPT.navigation.responses.default;

    // Add user message
    addUserMessage(userText);

    // Add AI response
    addAIResponse(response, userText);
}

// Function to show products response
function showProductsResponse() {
    const lang = (localStorage.getItem('selectedLanguage') || 'EN');
    const userText = lang === 'EN' ? 'Tell me about products' : 'Расскажи о продуктах';
    const response = lang === 'EN' ? (SYSTEM_PROMPT.navigation.responses_en?.products || SYSTEM_PROMPT.navigation.responses.products)
                                   : SYSTEM_PROMPT.navigation.responses.products;

    // Add user message
    addUserMessage(userText);

    // Add AI response
    addAIResponse(response, userText);
}

// Function to add user message
function addUserMessage(text) {
    // Enable scrolling and show chat interface
    chatHistoryContainer.classList.add("has-messages");
    document.body.classList.add("has-chat");
    document.body.classList.add("hide-header");
    
    // Show back button
    if (backButton) {
        backButton.style.display = "flex";
    }
    
    // Show suggestions in chat
    const promptSuggests = document.querySelector(".prompt .suggests");
    if (promptSuggests) {
        promptSuggests.classList.add("show");
    }
    
    // Create user message element
    const userMessageHtml = `
        <div class="message__content">
            <p class="message__text">Вы: ${text}</p>
        </div>
    `;
    
    const userMessage = createChatMessageElement(userMessageHtml, "message--outgoing");
    chatHistoryContainer.appendChild(userMessage);
    scrollToBottom();
}

// Function to add AI response
function addAIResponse(text, userMessageText) {
    // Create AI message element
    const responseHtml = `
        <div class="message__content">
            <div class="message__text"></div>
        </div>
        <div class="message__actions">
            <span onClick="copyMessageToClipboard(this)" class="message__icon message__icon--copy"><i class='bx bx-copy-alt'></i></span>
            <span onClick="likeMessage(this)" class="message__icon message__icon--like"><i class='bx bx-like'></i></span>
            <span onClick="dislikeMessage(this)" class="message__icon message__icon--dislike"><i class='bx bx-dislike'></i></span>
            <button onClick="startNewChat()" class="message__new-chat-btn">
                <i class='bx bx-plus'></i>
                Новый чат
            </button>
        </div>
    `;
    
    const aiMessage = createChatMessageElement(responseHtml, "message--incoming");
    chatHistoryContainer.appendChild(aiMessage);
    
    // Parse markdown and display response
    const parsedResponse = marked.parse(text);
    const messageTextElement = aiMessage.querySelector(".message__text");
    messageTextElement.innerHTML = parsedResponse;
    
    // Highlight code blocks
    hljs.highlightAll();
    
    scrollToBottom();
    
    // Save to local storage
    const conversation = {
        userMessage: userMessageText,
        apiResponse: {
            candidates: [{
                content: {
                    parts: [{
                        text: text
                    }]
                }
            }]
        }
    };
    
    const savedConversations = JSON.parse(localStorage.getItem("saved-api-chats")) || [];
    savedConversations.push(conversation);
    localStorage.setItem("saved-api-chats", JSON.stringify(savedConversations));
}

// Prevent default from submission and handle outgoing message
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleOutgoingMessage();
});

// Auto-scroll to bottom of chat
const scrollToBottom = () => {
    chatHistoryContainer.scrollTop = chatHistoryContainer.scrollHeight;
};

// Load saved chat history on page load
loadSavedChatHistory();