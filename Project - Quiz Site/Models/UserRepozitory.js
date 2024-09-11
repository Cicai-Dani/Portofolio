class User {
    #id;
    #username;
    #email;
    #password;
    #dateOfBirth;
    #role;

    constructor(id, username, email, password, dateOfBirth, role) {
        this.#id = id;
        this.#username = username;
        this.#email = email;
        this.#password = password;
        this.#dateOfBirth = dateOfBirth;
        this.#role = role;
    }

    get username() {
        return this.#username;
    }

    get email() {
        return this.#email;
    }

    get password() {
        return this.#password;
    }

    get dateOfBirth() {
        return this.#dateOfBirth;
    }

    get role() {
        return this.#role;
    }

}

class Admin extends User {
    constructor(id, username, email, password, dateOfBirth) {
        super(id, username, email, password, dateOfBirth, 'admin');
    }

  
}
