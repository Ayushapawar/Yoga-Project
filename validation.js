// 1. INITIALIZE: Load users from localStorage OR start with empty array if none exist
let users = JSON.parse(localStorage.getItem('userDatabase')) || [];

// Helper function to save current users array to browser storage
function saveToStorage() {
    localStorage.setItem('userDatabase', JSON.stringify(users));
}

// Function to handle Signup
function signup() {
    const name = document.getElementById('SignUpName').value.trim();
    const email = document.getElementById('SignUpEmail').value.trim();
    const password = document.getElementById('SignUpPassword').value.trim();
    const msg = document.getElementById('SignPassmsg');

    if (name === "" || email === "" || password === "") {
        msg.style.color = "#f87171";
        msg.innerText = "Please fill in all fields.";
        return;
    }

    // Check if user already exists in our loaded array
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        msg.style.color = "#f87171";
        msg.innerText = "Email already registered!";
        return;
    }

    // Add user to the array
    users.push({ name, email, password });
    
    // 2. SAVE: Update localStorage so it survives refresh
    saveToStorage();
    
    msg.style.color = "#10b981"; 
    msg.innerText = "Account created! You can now Sign In.";
    
    document.getElementById('SignupForm').reset();
}

// Function to handle Login
function login() {
    const email = document.getElementById('LoginEmail').value.trim();
    const password = document.getElementById('LoginPassword').value.trim();
    const msg = document.getElementById('LoginPassmsg');

    if (email === "" || password === "") {
        msg.style.color = "#f87171";
        msg.innerText = "Please enter both email and password.";
        return;
    }

    // Search through the users array (which stays populated thanks to localStorage)
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        msg.style.color = "#10b981";
        msg.innerText = `Welcome back, ${user.name}!`;
        
        // Optional: Save session status
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert("Login Successful!");
    } else {
        msg.style.color = "#f87171";
        msg.innerText = "Invalid credentials or account does not exist.";
    }
}

// --- Toggle Logic & Password Visibility (unchanged) ---

let isLogin = true;
function toggleForm() {
    const loginForm = document.getElementById('LoginForm');
    const signupForm = document.getElementById('SignupForm');
    const sideTitle = document.getElementById('side-title');
    const sideText = document.getElementById('side-text');
    const toggleBtn = document.getElementById('toggleBtn');

    document.getElementById('LoginPassmsg').innerText = "";
    document.getElementById('SignPassmsg').innerText = "";

    if (isLogin) {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        sideTitle.innerText = "Hello, Friend!";
        sideText.innerText = "Enter your details and start your journey with us";
        toggleBtn.innerText = "Sign In Instead";
        isLogin = false;
    } else {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        sideTitle.innerText = "Welcome Back!";
        sideText.innerText = "Login with your personal info to stay connected";
        toggleBtn.innerText = "Create Account";
        isLogin = true;
    }
}

function togglePasswordVisibility(inputId, el) {
    const passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        el.innerText = "Hide";
    } else {
        passwordInput.type = "password";
        el.innerText = "Show";
    }
}