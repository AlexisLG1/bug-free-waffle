// Check if the user is already logged in
window.onload = function() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        showWelcome();
    } else {
        showLogin();
    }
};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Simple validation
    if (username === 'user' && password === 'pass') {
        if (rememberMe) {
            localStorage.setItem('isLoggedIn', 'true');
        }
        showWelcome();
    } else {
        showError();
    }
}

function showWelcome() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('welcome-container').style.display = 'block';
}

function showError() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('error-container').style.display = 'block';
}

function showLogin() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('welcome-container').style.display = 'none';
    document.getElementById('error-container').style.display = 'none';
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    showLogin();
}
