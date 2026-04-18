document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Store user session
            const user = {
                email: email,
                loggedIn: true
            };
            
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            alert('Login successful!');
            window.location.href = 'index.html';
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters long!');
                return;
            }
            
            // Store user data
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            
            if (users.find(u => u.email === email)) {
                alert('Email already exists!');
                return;
            }
            
            users.push({
                fullName: fullName,
                email: email,
                password: password
            });
            
            localStorage.setItem('users', JSON.stringify(users));
            
            alert('Signup successful! Please login.');
            window.location.href = 'login.html';
        });
    }
});