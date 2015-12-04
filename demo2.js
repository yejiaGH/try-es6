'use strict';

class User {
    constructor(name) {
        this.name = name;
    }

    changeName(name) {
        this.name = name;
    }
}

class Manager extends User {
    constructor(name, password) {
        super(name);

        this.password = password;
    }
}

let manager = new Manager('leo', '123456');

console.log(manager);
manager.changeName('alice');
console.log(manager);
