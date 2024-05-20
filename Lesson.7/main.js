//Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone створити пустий масив, наповнити його 10 об'єктами new User(....)
class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

let usersE = [
    new User(1, "Vasya", "Petrov", "gmail", 67),
    new User(2, "Vova", "Petrov", "gmail", 89),
    new User(3, "Ira", "Kovalova", "uandex", 88),
    new User(4, "Karina", "Bocman", "ramler", 99),
    new User(5, "Karina5", "Bocman", "ramler", 99),
    new User(6, "Karina6", "Bocman", "ramler", 99),
    new User(7, "Karina7", "Bocman", "ramler", 99),
];

// Взяти масив з User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = usersE.filter(val => val.id % 2 === 0);
console.log(filteredUsers);

// Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = usersE.sort((a, b) => a - b);
console.log(sortedUsers);

// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів) створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    order;

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// //Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clients = [
    new Client(1, "Vasya", "Petrov", "gmail", 67, []),
    new Client(2, "Vova", "Petrov", "gmail", 89, ["apple"]),
    new Client(3, "Ira", "Kovalova", "uandex", 88, ["apple", "banan"]),
    new Client(4, "Karina", "Bocman", "ramler", 99, ["apple", "banan", "orange"]),
    new Client(5, "Karina5", "Bocman", "ramler", 99, ["apple", "banan", "orange", "kivi"]),
    new Client(6, "Karina6", "Bocman", "ramler", 99, ["apple", "banan", "orange", "kivi", "pamelo"]),
    new Client(7, "Karina7", "Bocman", "ramler", 99, ["apple", "banan", "orange", "kivi", "pamelo", "ananas"]),
];

let sortedClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);


// //(Те саме, тільки через клас) Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції: -- drive () - яка виводить в консоль їдемо зі швидкістю ${максимальна швидкість} на годину -- info () - яка виводить всю інформацію про автомобіль в форматі назва поля - значення поля -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed -- changeYear (newValue) - змінює рік випуску на значення newValue -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`Model: ${this.model}`);
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Year: ${this.year}`);
        console.log(`Max speed: ${this.maxSpeed}`);
        console.log(`Engine capacity: ${this.engine}`);
        console.log(`Driver: ${this.driver}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

const mercedesS = new Car("s class", "Mercedes", 2022, 320, 4);

mercedesS.increaseMaxSpeed(340);
mercedesS.addDriver('Vova');
mercedesS.info();
console.log(mercedesS.maxSpeed);


// //створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок. Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов. За допомоги циклу знайти яка попелюшка повинна бути з принцом. Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Sindirella {
    name;
    age;
    foot;

    constructor(name, age, foot) {
        this.name = name;
        this.age = age;
        this.foot = foot;
    }
}

class Prince {
    name;
    age;
    foot;

    constructor(name, age, foot) {
        this.name = name;
        this.age = age;
        this.foot = foot;
    }
}

let sindirelas = [
    new Sindirella("Vika", 23, 35),
    new Sindirella("Vika1", 23, 36),
    new Sindirella("Vika2", 23, 37),
    new Sindirella("Vika3", 23, 38),
    new Sindirella("Vika4", 23, 33),
    new Sindirella("Vika5", 23, 32),
    new Sindirella("Vika6", 23, 31),
    new Sindirella("Vika7", 23, 30),
    new Sindirella("Vika8", 23, 39),
    new Sindirella("Vika9", 23, 40),
]

const prince = new Prince("Vova", 32, 38);
let i = -1;
do {
    i++;
    if (prince.foot === sindirelas[i].foot) console.log(sindirelas[i]);
} while (prince.foot !== sindirelas[i].foot);

let needSindirella = sindirelas.find((val) => val.name === 'Vika3');
console.log(needSindirella);

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'max', age: 31, status: true},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'max', age: 31, status: true}
];

Array.prototype.myFilter = function (callback) {
    let arr = [];
    for (const item of this) {
        if (callback(item)) arr.push(item);
    }
    return arr;
}

//filter function
let falseUsers = users.myFilter(user => user.status === false);

console.log(falseUsers);

//map function
Array.prototype.myMap = function (callback) {
    let arr = [];
    for (const item of this) {
        arr.push(callback(item));
    }
    return arr;
};

let id = 0;
let mappedUsers = users.myMap(user => {
    id++;
    user.id = id;
    return {...user};
});

console.log(mappedUsers);
