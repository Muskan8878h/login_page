function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.indexOf('@') === -1) {
        alert('Please enter a valid email address.');
        return;
    }
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }
    window.location.href = 'another-page.html';
}