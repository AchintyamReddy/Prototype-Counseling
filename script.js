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
const timeSlots = document.querySelectorAll('.time-slot');
const scheduleBtn = document.querySelector('.schedule-btn');

// Sample Data
const counselors = [
    {
        id: 1,
        name: "Dr. Sarah Miller",
        specialization: "Anxiety & Stress Management",
        bio: "Dr. Miller has over 10 years of experience helping students manage anxiety and stress. She specializes in cognitive behavioral therapy and mindfulness techniques.",
        available: true,
        rating: 4.7,
        image: "https://ui-avatars.com/api/?name=Sarah+Miller&background=2563eb&color=fff"
    },
    {
        id: 2,
        name: "Dr. James Wilson",
        specialization: "Academic Pressure & Burnout",
        bio: "Dr. Wilson focuses on helping students overcome academic pressure and prevent burnout. He uses a holistic approach combining counseling with practical time management strategies.",
        available: true,
        rating: 4.5,
        image: "https://ui-avatars.com/api/?name=James+Wilson&background=7e22ce&color=fff"
    },
    {
        id: 3,
        name: "Dr. Emily Chen",
        specialization: "Relationship Issues & Social Anxiety",
        bio: "Dr. Chen specializes in helping students navigate relationship challenges and social anxiety. She creates a safe space for students to explore their interpersonal dynamics.",
        available: false,
        rating: 4.8,
        image: "https://ui-avatars.com/api/?name=Emily+Chen&background=0d9488&color=fff"
    },
    {
        id: 4,
        name: "Dr. Michael Rodriguez",
        specialization: "Depression & Mood Disorders",
        bio: "Dr. Rodriguez has extensive experience working with students dealing with depression and mood disorders. He combines evidence-based therapies with compassionate support.",
        available: true,
        rating: 4.6,
        image: "https://ui-avatars.com/api/?name=Michael+Rodriguez&background=b91c1c&color=fff"
    }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Set up navigation
    setupNavigation();
    
    // Populate counselors
    renderCounselors();
    
    // Generate calendar
    generateCalendar();
    
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
}

// Simulate new notifications
setInterval(() => {
    const messages = [
        "New workshop: 'Mindfulness Techniques' available next week",
        "Your wellness score has improved by 10%!",
        "Reminder: Counseling session tomorrow at 10:00 AM",
        "New counselor Dr. Lisa Thompson has joined the team",
        "Complete your weekly wellness check-in for bonus points"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    // Only show if notification bar is not currently visible
    if (!notificationBar.classList.contains('show')) {
        showNotification(randomMessage, "success");
    }
}, 30000); // Every 30 seconds
