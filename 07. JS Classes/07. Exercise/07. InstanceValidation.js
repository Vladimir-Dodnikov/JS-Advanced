class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = +clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get clientId() {
        return this.clientId;
    }
    set clientId(value) {
        const regexExpression = /^[0-9]{6}$/gm; ///^\d{6}$/g;
        if (!regexExpression.test(value)) {
            throw new TypeError("Client ID must be a 6-digit number");
        }
        return this._clientId = value;
    }
    get email() {
        return this.email;
    }
    set email(value) {
        const regexExpression = /[a-zA-Z1-9]+@[a-zA-z\.]+/g;
        if (!regexExpression.test(value)) {
            throw new TypeError("Invalid e-mail");
        }
        return this._email = value;
    }
    get firstName() {
        return this.firstName;
    }
    set firstName(value) {
        if (value.length < 3 || 20 < value.length) {
            throw new TypeError("First name must be between 3 and 20 characters long");
        }
        const regexExpression = /^[a-zA-Z]+$/g
        if (!regexExpression.test(value)) {
            throw new TypeError("First name must contain only Latin characters");
        }
        return this._firstName = value;
    }
    get lastName() {
        return this.lastName;
    }
    set lastName(value) {
        if (value.length < 3 || 20 < value.length) {
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }
        const regexExpression = /^[a-zA-Z]+$/g
        if (!regexExpression.test(value)) {
            throw new TypeError("Last name must contain only Latin characters");
        }
        return this._lastName = value;
    }
}
//TypeError: Client ID must be a 6-digit number
let acc1 = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov')
//TypeError: Invalid e-mail
let acc2 = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov')
//TypeError: First name must be between 3 and 20 characters long
let acc3 = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')
//TypeError: "First name must contain only Latin characters
let acc4 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')