 class ApiUrl { 
 
    static apiUrl = "http://localhost:3000";

    static apiUrlusers = "http://localhost:3000/users";

    static apiUrlQuestion ="http://localhost:3000/qustions";
}

class ApiService {
    constructor() {
        this.baseUrl = ApiUrl.apiUrl;
        this.usersUrl = ApiUrl.apiUrlusers;
        this.questionsUrl = ApiUrl.apiUrlQuestion;
    }

    checkUserExists(email) {
        return fetch(`${this.usersUrl}?email=${email}`)
            .then(response => response.json());
    }

    registerUser(userObject) {
        return fetch(this.usersUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObject)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Register unssucesfull');
            }
        });
    }

    loginUser(email) {
        return fetch(`${this.baseUrl}/users?email=${encodeURIComponent(email)}`)
            .then(response => response.json());
    }
}
