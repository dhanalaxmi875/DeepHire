// Dark mode functionality
function createThemeToggle() {
    // Check if toggle already exists
    if (document.querySelector('.theme-toggle')) return;

    const header = document.querySelector('header .header-container');
    if (!header) return;

    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.innerHTML = `
        <span class="theme-icon-container">
            <span id="theme-icon">🌞</span>
        </span>
    `;
    toggle.onclick = toggleDarkMode;

    // Insert after the h1 if it exists, otherwise at the start of header
    const h1 = header.querySelector('h1');
    if (h1) {
        h1.after(toggle);
    } else {
        header.prepend(toggle);
    }
}

function updateThemeUI(isDark) {
    const themeIcon = document.getElementById('theme-icon');
    const themeIconContainer = document.querySelector('.theme-icon-container');
    
    if (themeIcon && themeIconContainer) {
        // Update icon
        if (isDark) {
            themeIcon.textContent = '🌙  ';
        } else {
            themeIcon.textContent = '  🌞';
        }
        
        // Add sliding animation
        if (isDark) {
            themeIconContainer.style.animation = 'slideLeft 0.3s ease forwards';
        } else {
            themeIconContainer.style.animation = 'slideRight 0.3s ease forwards';
        }
        
        // Reset animation after completion
        setTimeout(() => {
            themeIconContainer.style.animation = '';
        }, 300);
    }
}

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    updateThemeUI(true);
    
    // Add smooth transition for dark mode
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
    updateThemeUI(false);
    
    // Reset transition
    document.body.style.transition = '';
}

function toggleDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Initialize dark mode
function initDarkMode() {
    createThemeToggle();
    const savedMode = localStorage.getItem('darkMode');
    
    // Check system preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode === 'enabled' || (savedMode === null && prefersDark)) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem('darkMode') === null) {
        if (e.matches) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }
});

// Apply dark mode when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDarkMode);
} else {
    initDarkMode();
}

// Difficulty Level Selection
document.addEventListener('DOMContentLoaded', function() {
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    const getStartedBtn = document.querySelector('.get-started-btn');
    
    // Add click event listeners to difficulty buttons
    difficultyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            difficultyButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Store selected difficulty in localStorage
            const selectedDifficulty = this.dataset.level;
            localStorage.setItem('selectedDifficulty', selectedDifficulty);
            
            // Update Get Started button text
            getStartedBtn.textContent = `Get Started (${selectedDifficulty})`;
        });
    });
    
    // Load saved difficulty if exists
    const savedDifficulty = localStorage.getItem('selectedDifficulty');
    if (savedDifficulty) {
        const savedButton = document.querySelector(`[data-level="${savedDifficulty}"]`);
        if (savedButton) {
            savedButton.click();
        }
    }
    
    // Get Started button click handler
    getStartedBtn.addEventListener('click', function() {
        const selectedDifficulty = localStorage.getItem('selectedDifficulty');
        if (selectedDifficulty) {
            // You can add your navigation or action logic here
            alert(`Starting with ${selectedDifficulty} difficulty level!`);
        } else {
            alert('Please select a difficulty level first!');
        }
    });
});

// Difficulty Level Selection
document.addEventListener('DOMContentLoaded', function() {
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    const getStartedBtn = document.querySelector('.get-started-btn');
    
    // Add click event listeners to difficulty buttons
    difficultyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            difficultyButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Store selected difficulty in localStorage
            const selectedDifficulty = this.dataset.level;
            localStorage.setItem('selectedDifficulty', selectedDifficulty);
            
            // Update Get Started button text
            getStartedBtn.textContent = `Get Started (${selectedDifficulty})`;
        });
    });
    
    // Load saved difficulty if exists
    const savedDifficulty = localStorage.getItem('selectedDifficulty');
    if (savedDifficulty) {
        const savedButton = document.querySelector(`[data-level="${savedDifficulty}"]`);
        if (savedButton) {
            savedButton.classList.add('active');
            getStartedBtn.textContent = `Get Started (${savedDifficulty})`;
        }
    }
    
    // Get Started button click handler
    getStartedBtn.addEventListener('click', function() {
        const selectedDifficulty = localStorage.getItem('selectedDifficulty');
        if (selectedDifficulty) {
            // You can add your navigation or action logic here
            alert(`Starting with ${selectedDifficulty} difficulty level!`);
        } else {
            alert('Please select a difficulty level first!');
        }
    });
});

// Difficulty Level Selection
document.addEventListener('DOMContentLoaded', function() {
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    const getStartedBtn = document.querySelector('.get-started-btn');
    
    // Add click event listeners to difficulty buttons
    difficultyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            difficultyButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Store selected difficulty in localStorage
            const selectedDifficulty = this.dataset.level;
            localStorage.setItem('selectedDifficulty', selectedDifficulty);
            
            // Update Get Started button text
            getStartedBtn.textContent = `Get Started (${selectedDifficulty})`;
        });
    });
    
    // Load saved difficulty if exists
    const savedDifficulty = localStorage.getItem('selectedDifficulty');
    if (savedDifficulty) {
        const savedButton = document.querySelector(`[data-level="${savedDifficulty}"]`);
        if (savedButton) {
            savedButton.click();
        }
    }
    
    // Get Started button click handler
    getStartedBtn.addEventListener('click', function() {
        const selectedDifficulty = localStorage.getItem('selectedDifficulty');
        if (selectedDifficulty) {
            // You can add your navigation or action logic here
            alert(`Starting with ${selectedDifficulty} difficulty level!`);
        } else {
            alert('Please select a difficulty level first!');
        }
    });
});


// Function to update logo image based on dark mode
function updateLogoImage() {
    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
        if (document.body.classList.contains('dark-mode')) {
            logo.src = 'https://res.cloudinary.com/dlxddikck/image/upload/v1745414436/WhatsApp_Image_2025-04-23_at_18.33.07_303c1758-removebg-preview_qya0cf.png';
        } else {
            logo.src = 'https://res.cloudinary.com/dlxddikck/image/upload/v1745414451/WhatsApp_Image_2025-04-23_at_18.33.06_4fc7f43e-removebg-preview_fsqjeb.png';
        }
    });
}

// Update logo when dark mode is toggled
function toggleDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
    updateLogoImage();
}

// Update logo when dark mode is initialized
function initDarkMode() {
    createThemeToggle();
    const savedMode = localStorage.getItem('darkMode');
    
    // Check system preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode === 'enabled' || (savedMode === null && prefersDark)) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
    updateLogoImage();
}
