const registerForm = document.getElementById('register-form');

function userRegister(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const role = 'user';

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    const apiService = new ApiService(ApiUrl.apiUrl);

    apiService.checkUserExists(email)
        .then(users => {
            if (users.length > 0) {
                alert('An account with this email already exists.');
                throw new Error('An account with this email already exists.');
            } else {
                const id = Date.now();
                const userInstance = new User(id, username, email, password, dateOfBirth, role);
                const userObject = {
                    id: userInstance.id,
                    username: userInstance.username,
                    email: userInstance.email,
                    password: userInstance.password,
                    dateOfBirth: userInstance.dateOfBirth,
                    role: userInstance.role
                };

                return apiService.registerUser(userObject);
            }
        })
        .then(data => {
            console.log('Success:', data);
            alert('User registered successfully!');
            window.location.href = '../Login-page/quiz-login-form.html';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

registerForm.addEventListener('submit', userRegister);