// DOM Elements
const notificationBar = document.getElementById('notification-bar');
const notificationMessage = document.getElementById('notification-message');
const closeNotification = document.getElementById('close-notification');
const navBtns = document.querySelectorAll('.nav-btn[data-tab]');
const tabs = document.querySelectorAll('.tab');
const counselorsGrid = document.querySelector('.counselors-grid');
const counselorModal = document.getElementById('counselor-modal');
const closeModal = document.getElementById('close-modal');
const viewScheduleBtn = document.getElementById('view-schedule-btn');
const bookAppointmentBtn = document.getElementById('book-appointment-btn');
const modalCounselorImg = document.getElementById('modal-counselor-img');
const modalCounselorName = document.getElementById('modal-counselor-name');
const modalCounselorSpecialization = document.getElementById('modal-counselor-specialization');
const modalCounselorBio = document.getElementById('modal-counselor-bio');
const modalExercises = document.getElementById('modal-exercises');
const timeSlots = document.querySelectorAll('.time-slot');
const scheduleBtn = document.querySelector('.schedule-btn');
const newQuoteBtn = document.getElementById('new-quote-btn');
const dailyQuote = document.getElementById('daily-quote');
const exercisesGrid = document.querySelector('.exercises-grid');
const chatList = document.getElementById('chat-list');
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendMessageBtn = document.getElementById('send-message-btn');
const newChatBtn = document.getElementById('new-chat-btn');
const categoryBtns = document.querySelectorAll('.category-btn');

// Sample Data
const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Whoever is happy will make others happy too. - Anne Frank",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln"
];

const counselors = [
    {
        id: 1,
        name: "Dr. Sarah Miller",
        specialization: "Anxiety & Stress Management",
        bio: "Dr. Miller has over 10 years of experience helping students manage anxiety and stress. She specializes in cognitive behavioral therapy and mindfulness techniques.",
        available: true,
        rating: 4.7,
        image: "https://ui-avatars.com/api/?name=Sarah+Miller&background=2563eb&color=fff",
        exercises: [1, 3, 5]
    },
    {
        id: 2,
        name: "Dr. James Wilson",
        specialization: "Academic Pressure & Burnout",
        bio: "Dr. Wilson focuses on helping students overcome academic pressure and prevent burnout. He uses a holistic approach combining counseling with practical time management strategies.",
        available: true,
        rating: 4.5,
        image: "https://ui-avatars.com/api/?name=James+Wilson&background=7e22ce&color=fff",
        exercises: [2, 4, 6]
    },
    {
        id: 3,
        name: "Dr. Emily Chen",
        specialization: "Relationship Issues & Social Anxiety",
        bio: "Dr. Chen specializes in helping students navigate relationship challenges and social anxiety. She creates a safe space for students to explore their interpersonal dynamics.",
        available: false,
        rating: 4.8,
        image: "https://ui-avatars.com/api/?name=Emily+Chen&background=0d9488&color=fff",
        exercises: [1, 2, 7]
    },
    {
        id: 4,
        name: "Dr. Michael Rodriguez",
        specialization: "Depression & Mood Disorders",
        bio: "Dr. Rodriguez has extensive experience working with students dealing with depression and mood disorders. He combines evidence-based therapies with compassionate support.",
        available: true,
        rating: 4.6,
        image: "https://ui-avatars.com/api/?name=Michael+Rodriguez&background=b91c1c&color=fff",
        exercises: [3, 5, 8]
    }
];

const exercises = [
    {
        id: 1,
        title: "5-Minute Breathing Exercise",
        description: "A simple breathing technique to calm your nervous system and reduce anxiety in just 5 minutes.",
        duration: "5 min",
        counselorId: 1,
        type: "breathing",
        attachments: [
            { name: "Breathing Guide.pdf", url: "#" },
            { name: "Audio Meditation.mp3", url: "#" },
            { name: "Visual Guide.png", url: "#" }
        ]
    },
    {
        id: 2,
        title: "Progressive Muscle Relaxation",
        description: "Systematically tense and relax different muscle groups to release physical tension and stress.",
        duration: "10 min",
        counselorId: 2,
        type: "relaxation",
        attachments: [
            { name: "PMR Instructions.pdf", url: "#" },
            { name: "Guided Audio.mp3", url: "#" }
        ]
    },
    {
        id: 3,
        title: "Mindful Walking",
        description: "Transform your daily walk into a mindfulness practice to ground yourself in the present moment.",
        duration: "15 min",
        counselorId: 1,
        type: "mindfulness",
        attachments: [
            { name: "Walking Meditation Guide.pdf", url: "#" },
            { name: "Nature Sounds.mp3", url: "#" }
        ]
    },
    {
        id: 4,
        title: "Gratitude Journaling",
        description: "Write down three things you're grateful for each day to shift your focus to the positive.",
        duration: "5 min",
        counselorId: 2,
        type: "journaling",
        attachments: [
            { name: "Journal Template.pdf", url: "#" },
            { name: "Prompt Ideas.docx", url: "#" }
        ]
    },
    {
        id: 5,
        title: "Body Scan Meditation",
        description: "A guided meditation that brings awareness to different parts of your body to release tension.",
        duration: "20 min",
        counselorId: 1,
        type: "meditation",
        attachments: [
            { name: "Body Scan Script.pdf", url: "#" },
            { name: "Full Meditation.mp3", url: "#" },
            { name: "Quick Version.mp3", url: "#" }
        ]
    },
    {
        id: 6,
        title: "Time Management Matrix",
        description: "Organize your tasks using the Eisenhower Matrix to prioritize effectively and reduce overwhelm.",
        duration: "10 min",
        counselorId: 2,
        type: "planning",
        attachments: [
            { name: "Matrix Template.xlsx", url: "#" },
            { name: "How-To Guide.pdf", url: "#" }
        ]
    },
    {
        id: 7,
        title: "Self-Compassion Break",
        description: "A short practice to offer yourself kindness during difficult moments.",
        duration: "5 min",
        counselorId: 3,
        type: "self-care",
        attachments: [
            { name: "Self-Compassion Exercises.pdf", url: "#" },
            { name: "Affirmation Cards.pdf", url: "#" }
        ]
    },
    {
        id: 8,
        title: "Positive Affirmations",
        description: "Repeat empowering statements to challenge negative thoughts and build self-confidence.",
        duration: "5 min",
        counselorId: 4,
        type: "affirmations",
        attachments: [
            { name: "Affirmation List.pdf", url: "#" },
            { name: "Daily Practice Guide.pdf", url: "#" }
        ]
    }
];

// AI Assistant Data
let chatHistory = [
    {
        id: 1,
        title: "Managing Exam Stress",
        lastMessage: "Try the 5-minute breathing exercise before your exam",
        time: "Today, 10:30 AM",
        category: "recent",
        messages: [
            { sender: "user", text: "I'm feeling really stressed about my upcoming exams." },
            { sender: "ai", text: "I understand exam stress can be overwhelming. Have you tried any relaxation techniques?" },
            { sender: "user", text: "Not really, I don't know where to start." },
            { sender: "ai", text: "Try the 5-minute breathing exercise before your exam. It can help calm your nervous system quickly." }
        ]
    },
    {
        id: 2,
        title: "Sleep Issues",
        lastMessage: "Establish a consistent bedtime routine",
        time: "Yesterday, 8:15 PM",
        category: "recent",
        messages: [
            { sender: "user", text: "I've been having trouble sleeping lately." },
            { sender: "ai", text: "Sleep issues can significantly impact your well-being. What's your current bedtime routine like?" },
            { sender: "user", text: "I usually scroll through my phone until I fall asleep." },
            { sender: "ai", text: "Establish a consistent bedtime routine without screens. Try reading or light stretching instead." }
        ]
    },
    {
        id: 3,
        title: "Social Anxiety",
        lastMessage: "Practice deep breathing before social events",
        time: "Oct 10, 2023",
        category: "achieved",
        messages: [
            { sender: "user", text: "I get really anxious in social situations." },
            { sender: "ai", text: "Social anxiety is common. Have you tried any techniques to manage it?" },
            { sender: "user", text: "I avoid social events when I can." },
            { sender: "ai", text: "Practice deep breathing before social events. Start with small gatherings to build confidence." }
        ]
    },
    {
        id: 4,
        title: "Time Management",
        lastMessage: "Try the Eisenhower Matrix for prioritization",
        time: "Oct 5, 2023",
        category: "deleted",
        messages: []
    }
];

let currentChatId = 1;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Set up navigation
    setupNavigation();
    
    // Populate counselors
    renderCounselors();
    
    // Generate calendar
    generateCalendar();
    
    // Set up daily quote
    setRandomQuote();
    
    // Populate exercises with attachments
    renderExercises();
    
    // Set up AI assistant
    renderChatList();
    loadChat(currentChatId);
    
    // Set up event listeners
    setupEventListeners();
    
    // Show initial notification
    showNotification("Welcome to Clear Mind! Your appointment with Dr. Miller is confirmed for Oct 15 at 10:00 AM", "success");
});

// Navigation Functions
function setupNavigation() {
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            // Update active nav button
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show active tab
            tabs.forEach(tab => {
                tab.classList.remove('active');
                if (tab.id === `${tabId}-tab`) {
                    tab.classList.add('active');
                }
            });
        });
    });
}

// Counselor Functions
function renderCounselors() {
    counselorsGrid.innerHTML = '';
    
    counselors.forEach(counselor => {
        const card = document.createElement('div');
        card.className = 'counselor-card';
        card.dataset.id = counselor.id;
        
        const availabilityClass = counselor.available ? 'available' : 'unavailable';
        const availabilityText = counselor.available ? 'Available Today' : 'Unavailable';
        
        card.innerHTML = `
            <div class="counselor-header">
                <img src="${counselor.image}" alt="${counselor.name}">
                <h4>${counselor.name}</h4>
            </div>
            <div class="counselor-body">
                <p>${counselor.specialization}</p>
                <div class="counselor-availability">
                    <span class="status-indicator ${availabilityClass}"></span>
                    <span>${availabilityText}</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openCounselorModal(counselor));
        counselorsGrid.appendChild(card);
    });
}

function openCounselorModal(counselor) {
    modalCounselorImg.src = counselor.image;
    modalCounselorName.textContent = counselor.name;
    modalCounselorSpecialization.textContent = counselor.specialization;
    modalCounselorBio.textContent = counselor.bio;
    
    // Populate exercises
    modalExercises.innerHTML = '';
    counselor.exercises.forEach(exId => {
        const exercise = exercises.find(e => e.id === exId);
        if (exercise) {
            const tag = document.createElement('span');
            tag.className = 'exercise-tag';
            tag.textContent = exercise.title;
            modalExercises.appendChild(tag);
        }
    });
    
    // Update rating stars
    const ratingStars = document.querySelectorAll('.rating i');
    const fullStars = Math.floor(counselor.rating);
    const halfStar = counselor.rating % 1 >= 0.5;
    
    ratingStars.forEach((star, index) => {
        if (index < fullStars) {
            star.className = 'fas fa-star';
        } else if (index === fullStars && halfStar) {
            star.className = 'fas fa-star-half-alt';
        } else {
            star.className = 'far fa-star';
        }
    });
    
    document.querySelector('.rating span').textContent = counselor.rating;
    
    // Update availability in modal
    const availabilityEl = document.querySelector('.stat-value.available');
    if (counselor.available) {
        availabilityEl.textContent = 'Available Today';
        availabilityEl.classList.add('available');
    } else {
        availabilityEl.textContent = 'Currently Unavailable';
        availabilityEl.classList.remove('available');
    }
    
    counselorModal.classList.add('show');
}

// Calendar Functions
function generateCalendar() {
    const calendarGrid = document.querySelector('.calendar-grid');
    calendarGrid.innerHTML = '';
    
    // Get current date
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // Get first day of month and number of days
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay(); // 0 = Sunday
    
    // Previous month days (for alignment)
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    
    // Add empty cells for days before the 1st
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
        const day = document.createElement('div');
        day.className = 'calendar-day';
        day.textContent = prevMonthLastDay - i;
        day.style.color = '#ccc';
        calendarGrid.appendChild(day);
    }
    
    // Add current month days
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        // Highlight today
        if (day === today.getDate() && currentMonth === today.getMonth()) {
            dayElement.classList.add('today');
        }
        
        // Add event indicator for days with appointments
        if (day === 15 || day === 16) {
            dayElement.classList.add('has-event');
        }
        
        calendarGrid.appendChild(dayElement);
    }
    
    // Add next month days to fill the grid
    const totalCells = 42; // 6 rows x 7 days
    const daysAdded = startingDayOfWeek + daysInMonth;
    const nextDaysNeeded = totalCells - daysAdded;
    
    for (let day = 1; day <= nextDaysNeeded; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        dayElement.style.color = '#ccc';
        calendarGrid.appendChild(dayElement);
    }
}

// Quote Functions
function setRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    dailyQuote.textContent = quotes[randomIndex];
}

// Exercises Functions
function renderExercises() {
    exercisesGrid.innerHTML = '';
    
    exercises.forEach(exercise => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        
        const counselor = counselors.find(c => c.id === exercise.counselorId);
        const counselorName = counselor ? counselor.name : "Wellness Team";
        
        // Create attachments HTML
        let attachmentsHTML = '';
        if (exercise.attachments && exercise.attachments.length > 0) {
            attachmentsHTML = `
                <div class="exercise-attachments">
                    <h5>Resources:</h5>
                    ${exercise.attachments.map(att => `
                        <div class="attachment-item" data-url="${att.url}">
                            <i class="fas fa-file-alt"></i>
                            <span>${att.name}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        card.innerHTML = `
            <div class="exercise-header">
                <h4>${exercise.title}</h4>
                <p>Recommended by ${counselorName}</p>
            </div>
            <div class="exercise-body">
                <p>${exercise.description}</p>
                ${attachmentsHTML}
            </div>
            <div class="exercise-footer">
                <div class="exercise-duration">
                    <i class="fas fa-clock"></i>
                    <span>${exercise.duration}</span>
                </div>
                <div class="exercise-actions">
                    <button class="btn secondary">Try Now</button>
                    <button class="btn primary">Save</button>
                </div>
            </div>
        `;
        
        // Add event listeners to attachments
        card.querySelectorAll('.attachment-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const url = e.currentTarget.dataset.url;
                // In a real app, this would open/download the file
                showNotification(`Opening ${e.currentTarget.querySelector('span').textContent}`, "success");
            });
        });
        
        exercisesGrid.appendChild(card);
    });
}

// AI Assistant Functions
function renderChatList() {
    chatList.innerHTML = '';
    
    // Get active category
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    
    // Filter chats by category
    const filteredChats = chatHistory.filter(chat => chat.category === activeCategory);
    
    filteredChats.forEach(chat => {
        const chatItem = document.createElement('div');
        chatItem.className = `chat-item ${chat.id === currentChatId ? 'active' : ''}`;
        chatItem.dataset.id = chat.id;
        
        chatItem.innerHTML = `
            <img src="https://ui-avatars.com/api/?name=AI+Assistant&background=0d9488&color=fff" alt="AI Assistant">
            <div class="chat-item-info">
                <div class="chat-item-title">${chat.title}</div>
                <div class="chat-item-time">${chat.time}</div>
            </div>
        `;
        
        chatItem.addEventListener('click', () => {
            // Update active chat
            document.querySelectorAll('.chat-item').forEach(item => {
                item.classList.remove('active');
            });
            chatItem.classList.add('active');
            
            // Load chat
            currentChatId = chat.id;
            loadChat(chat.id);
        });
        
        chatList.appendChild(chatItem);
    });
}

function loadChat(chatId) {
    const chat = chatHistory.find(c => c.id === chatId);
    if (!chat) return;
    
    chatMessages.innerHTML = '';
    
    chat.messages.forEach(message => {
        const messageEl = document.createElement('div');
        messageEl.className = `message ${message.sender}`;
        messageEl.textContent = message.text;
        chatMessages.appendChild(messageEl);
    });
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addMessage(sender, text) {
    const chat = chatHistory.find(c => c.id === currentChatId);
    if (!chat) return;
    
    // Add to chat history
    chat.messages.push({ sender, text });
    
    // Update last message and time
    chat.lastMessage = text;
    chat.time = new Date().toLocaleString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    // Add to UI
    const messageEl = document.createElement('div');
    messageEl.className = `message ${sender}`;
    messageEl.textContent = text;
    chatMessages.appendChild(messageEl);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Notification Functions
function showNotification(message, type = 'success') {
    notificationMessage.textContent = message;
    notificationBar.className = `notification-bar ${type}`;
    notificationBar.classList.add('show');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideNotification();
    }, 5000);
}

function hideNotification() {
    notificationBar.classList.remove('show');
}

// Event Listeners
function setupEventListeners() {
    // Close notification
    closeNotification.addEventListener('click', hideNotification);
    
    // Close modal
    closeModal.addEventListener('click', () => {
        counselorModal.classList.remove('show');
    });
    
    // Close modal when clicking outside
    counselorModal.addEventListener('click', (e) => {
        if (e.target === counselorModal) {
            counselorModal.classList.remove('show');
        }
    });
    
    // View schedule button
    viewScheduleBtn.addEventListener('click', () => {
        // Switch to schedule tab
        document.querySelector('.nav-btn[data-tab="schedule"]').click();
        counselorModal.classList.remove('show');
    });
    
    // Book appointment button
    bookAppointmentBtn.addEventListener('click', () => {
        // Switch to schedule tab
        document.querySelector('.nav-btn[data-tab="schedule"]').click();
        counselorModal.classList.remove('show');
        showNotification("Redirecting to schedule appointment...", "success");
    });
    
    // Time slot selection
    timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            timeSlots.forEach(s => s.classList.remove('selected'));
            slot.classList.add('selected');
        });
    });
    
    // Schedule appointment
    scheduleBtn.addEventListener('click', () => {
        const reason = document.getElementById('appointment-reason').value;
        if (!reason.trim()) {
            showNotification("Please provide a reason for your appointment", "error");
            return;
        }
        
        const selectedSlot = document.querySelector('.time-slot.selected');
        if (!selectedSlot) {
            showNotification("Please select a time slot", "error");
            return;
        }
        
        showNotification(`Appointment scheduled for ${selectedSlot.textContent}! Confirmation email sent.`, "success");
        document.getElementById('appointment-reason').value = '';
        timeSlots.forEach(s => s.classList.remove('selected'));
    });
    
    // Notification bell
    document.getElementById('notifications-btn').addEventListener('click', () => {
        showNotification("All notifications are up to date!", "success");
    });
    
    // New quote button
    newQuoteBtn.addEventListener('click', setRandomQuote);
    
    // AI Assistant
    sendMessageBtn.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // New chat button
    newChatBtn.addEventListener('click', createNewChat);
    
    // Category buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderChatList();
        });
    });
}

// AI Assistant Message Handling
function sendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage('user', message);
    messageInput.value = '';
    
    // Simulate AI response after a delay
    setTimeout(() => {
        const responses = [
            "I understand how you feel. Have you tried the breathing exercises we discussed?",
            "That's a great question. Based on your situation, I'd recommend the mindfulness walking exercise.",
            "It's important to acknowledge your feelings. Would you like me to suggest some resources?",
            "Remember, you're not alone in this. Many students face similar challenges.",
            "Let's break this down into smaller steps. What's the first thing that's causing you stress?",
            "I'm here to support you. Would you like to schedule a session with one of our counselors?",
            "That's a positive step! How can I help you build on this progress?",
            "Self-care is essential. Have you taken time for yourself today?"
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addMessage('ai', randomResponse);
    }, 1000);
}

function createNewChat() {
    const newChat = {
        id: chatHistory.length + 1,
        title: "New Conversation",
        lastMessage: "How can I help you today?",
        time: new Date().toLocaleString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
        }),
        category: "recent",
        messages: [
            { sender: "ai", text: "Hello! I'm your Wellness AI Assistant. How can I help you today?" }
        ]
    };
    
    chatHistory.unshift(newChat);
    currentChatId = newChat.id;
    renderChatList();
    loadChat(newChat.id);
}

// Simulate new notifications
setInterval(() => {
    const messages = [
        "New exercise: 'Grounding Techniques' added to your library",
        "Dr. Miller has recommended a new breathing exercise for you",
        "Your wellness check-in is due today",
        "New workshop: 'Building Resilience' available next week",
        "Complete your daily mindfulness practice for bonus points"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    // Only show if notification bar is not currently visible
    if (!notificationBar.classList.contains('show')) {
        showNotification(randomMessage, "success");
    }
}, 30000); // Every 30 seconds
