// Authentication JavaScript for ElectroMart

// User data storage (in a real app, this would be handled by a backend)
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Initialize authentication on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeAuth();
    updateAuthUI();
});

/**
 * Initialize authentication functionality
 */
function initializeAuth() {
    // Login form handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Registration form handling
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
        
        // Password strength checking
        const passwordInput = document.getElementById('password');
        if (passwordInput) {
            passwordInput.addEventListener('input', checkPasswordStrength);
        }
    }

    // Social login buttons
    const googleBtn = document.querySelector('.google-btn');
    const facebookBtn = document.querySelector('.facebook-btn');
    
    if (googleBtn) {
        googleBtn.addEventListener('click', handleGoogleLogin);
    }
    
    if (facebookBtn) {
        facebookBtn.addEventListener('click', handleFacebookLogin);
    }
}

/**
 * Handle login form submission
 */
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe')?.checked || false;
    
    // Clear previous errors
    clearErrors();
    
    // Validate inputs
    if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        return;
    }
    
    if (!password) {
        showError('passwordError', 'Please enter your password');
        return;
    }
    
    // Check if user exists
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Login successful
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
        }
        
        showSuccess('Login successful! Redirecting...');
        
        // Redirect to home page after a short delay
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
        
    } else {
        showError('passwordError', 'Invalid email or password');
    }
}

/**
 * Handle registration form submission
 */
function handleRegister(e) {
    e.preventDefault();
    
    const formData = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
        address: document.getElementById('address').value.trim(),
        agreeTerms: document.getElementById('agreeTerms').checked
    };
    
    // Clear previous errors
    clearErrors();
    
    // Validate all fields
    if (!validateRegistration(formData)) {
        return;
    }
    
    // Check if user already exists
    if (users.find(u => u.email === formData.email)) {
        showError('emailError', 'An account with this email already exists');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now().toString(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        address: formData.address,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    showSuccess('Account created successfully! Please login.');
    
    // Redirect to login page
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

/**
 * Validate registration form data
 */
function validateRegistration(data) {
    let isValid = true;
    
    // First name validation
    if (!data.firstName) {
        showError('firstNameError', 'First name is required');
        isValid = false;
    }
    
    // Last name validation
    if (!data.lastName) {
        showError('lastNameError', 'Last name is required');
        isValid = false;
    }
    
    // Email validation
    if (!validateEmail(data.email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation
    if (!validatePhone(data.phone)) {
        showError('phoneError', 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Password validation
    if (!validatePassword(data.password)) {
        showError('passwordError', 'Password must be at least 8 characters long');
        isValid = false;
    }
    
    // Confirm password validation
    if (data.password !== data.confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }
    
    // Address validation
    if (!data.address) {
        showError('addressError', 'Address is required');
        isValid = false;
    }
    
    // Terms agreement validation
    if (!data.agreeTerms) {
        alert('Please agree to the Terms of Service and Privacy Policy');
        isValid = false;
    }
    
    return isValid;
}

/**
 * Validate email format
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate phone number
 */
function validatePhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Validate password strength
 */
function validatePassword(password) {
    return password.length >= 8;
}

/**
 * Check password strength and update UI
 */
function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');
    
    if (!strengthFill || !strengthText) return;
    
    let strength = 0;
    let strengthLabel = '';
    
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    // Remove existing classes
    strengthFill.classList.remove('weak', 'medium', 'strong');
    
    if (strength <= 2) {
        strengthFill.classList.add('weak');
        strengthLabel = 'Weak';
    } else if (strength <= 3) {
        strengthFill.classList.add('medium');
        strengthLabel = 'Medium';
    } else {
        strengthFill.classList.add('strong');
        strengthLabel = 'Strong';
    }
    
    strengthText.textContent = `Password strength: ${strengthLabel}`;
}

/**
 * Toggle password visibility
 */
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('passwordToggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

/**
 * Toggle confirm password visibility
 */
function toggleConfirmPassword() {
    const passwordInput = document.getElementById('confirmPassword');
    const toggleIcon = document.getElementById('confirmPasswordToggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

/**
 * Show error message
 */
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

/**
 * Clear all error messages
 */
function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.classList.remove('show');
        element.textContent = '';
    });
}

/**
 * Show success message
 */
function showSuccess(message) {
    // Create a temporary success message
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        font-weight: 500;
    `;
    successDiv.textContent = message;
    
    document.body.appendChild(successDiv);
    
    // Remove after 3 seconds
    setTimeout(() => {
        document.body.removeChild(successDiv);
    }, 3000);
}

/**
 * Handle Google login (placeholder)
 */
function handleGoogleLogin() {
    alert('Google login integration would be implemented here');
}

/**
 * Handle Facebook login (placeholder)
 */
function handleFacebookLogin() {
    alert('Facebook login integration would be implemented here');
}

/**
 * Logout user
 */
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('rememberMe');
    updateAuthUI();
    window.location.href = 'index.html';
}

/**
 * Update authentication UI based on login status
 */
function updateAuthUI() {
    const nav = document.querySelector('nav ul');
    if (!nav) return;
    
    // Remove existing auth links
    const existingAuthLinks = nav.querySelectorAll('.auth-link');
    existingAuthLinks.forEach(link => link.remove());
    
    // Check if auth buttons already exist in the navigation
    const existingAuthButtons = nav.querySelector('.auth-buttons');
    
    if (currentUser) {
        // User is logged in - replace auth buttons with user menu
        if (existingAuthButtons) {
            existingAuthButtons.remove();
        }
        
        const userMenu = document.createElement('li');
        userMenu.className = 'auth-link';
        userMenu.innerHTML = `
            <div class="user-menu">
                <span>Welcome, ${currentUser.firstName}</span>
                <button onclick="logout()" class="logout-btn">Logout</button>
            </div>
        `;
        nav.appendChild(userMenu);
    } else {
        // User is not logged in
        if (!existingAuthButtons) {
            // Only add auth links if they don't already exist
            const loginLink = document.createElement('li');
            loginLink.className = 'auth-link';
            loginLink.innerHTML = '<a href="login.html">Login</a>';
            nav.appendChild(loginLink);
            
            const registerLink = document.createElement('li');
            registerLink.className = 'auth-link';
            registerLink.innerHTML = '<a href="register.html">Register</a>';
            nav.appendChild(registerLink);
        }
    }
}

/**
 * Check if user is logged in
 */
function isLoggedIn() {
    return currentUser !== null;
}

/**
 * Get current user
 */
function getCurrentUser() {
    return currentUser;
}

// Add some CSS for the user menu
const style = document.createElement('style');
style.textContent = `
    .user-menu {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .user-menu span {
        color: #fff;
        font-weight: 500;
    }
    
    .logout-btn {
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 6px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s ease;
    }
    
    .logout-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.5);
    }
`;
document.head.appendChild(style);
