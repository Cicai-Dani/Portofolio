const loginForm = document.getElementById('loginForm');

function userLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const apiService = new ApiService(ApiUrl.apiUrl);
    
        apiService.loginUser(email)
            .then(users => {
                if (users.length === 0) {
                    alert('No user found with that email.');
                } else {
                    const user = users[0]; 
                    if (user.password === password) {
                        alert('Login successful!');
                        window.location.href = '../Main-page/quiz-main-page.html'; 
                    } else {
                        alert('Password is incorrect.');
                    }
                }
            })
            .catch(error => {
                console.error('Error logging in:', error);
            });
    } 

loginForm.addEventListener('submit', userLogin);