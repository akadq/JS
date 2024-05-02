// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: "Harry Potter", pagecount: 300, genre: "Fiction"};
let book2 = {title: "Танець Недоумка", pagecount: 200, genre: "Fantastical"};
let book3 = {title: "Game Of Thrones", pagecount: 10000, genre: "Magic"};
console.log(book1, book2, book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {title: "Harry Potter", pagecount: 300, genre: "Fiction", authors: ["Joan Rawlins", 55]};
let book5 = {title: "Танець Недоумка", pagecount: 200, genre: "Fantastical", authors: ["Іларіон Павлюк", 48]};
let book6 = {title: "Game Of Thrones", pagecount: 10000, genre: "Magic", authors: ["George R. R. Martin", 75]};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let usersArray = [{name: 'Vasa', username: 'Vasil', password: 'qwerty1'}, {name: 'Petya', username: 'Petyan', password: 'qwerty2'}, {name: 'Sain', username: 'Sain', password: 'qwerty3'}, {name: 'Diesel', username: 'Dazel', password: 'qwerty4'}, {name: 'Zerg', username: 'Zorgi', password: 'qwerty5'}, {name: 'Frank', username: 'Franki', password: 'qwerty6'}, {name: 'Ted', username: 'Teddy', password: 'qwerty7'}, {name: 'Tel', username: 'Telki', password: 'qwerty8'}, {
    name: 'Tels', username: 'Telsi', password: 'qwerty9'
}, {name: 'Telta', username: 'Teltik', password: 'qwerty10'},];
console.log(usersArray[0].password);
console.log(usersArray[1].password);
console.log(usersArray[2].password);
console.log(usersArray[3].password);
console.log(usersArray[4].password);
console.log(usersArray[5].password);
console.log(usersArray[6].password);
console.log(usersArray[7].password);
console.log(usersArray[8].password);
console.log(usersArray[9].password);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let morning = '';
let lunch = '';
let evening = '';
let sevenDaysOfWeather = [{
    Monday: {
        morning, lunch, evening
    }
}, {
    Tuesday: {
        morning, lunch, evening
    }
}, {
    Wednesday: {
        morning, lunch, evening
    }
}, {
    Thursday: {
        morning, lunch, evening
    }
}, {
    Friday: {
        morning, lunch, evening
    }
}, {
    Saturday: {
        morning, lunch, evening
    }
}, {
    Sunday: {
        morning, lunch, evening
    }
}];

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let quarter = 31;
if (quarter >= 0 && quarter <= 14) {
    console.log('First quarter');
} else if (quarter >= 15 && quarter <= 29) {
    console.log('Second quarter');
} else if (quarter >= 30 && quarter <= 44) {
    console.log('Third quarter');
} else if (quarter >= 45 && quarter <= 59) {
    console.log('Fourth quarter');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 15;
if (day >= 0 && day <= 9) {
    console.log('First decade');
} else if (day >= 10 && day <= 19) {
    console.log('Second decade');
} else if (day >= 20 && day <= 31) {
}
console.log('Third decade');

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
let dayForChoose = 5;
switch (dayForChoose) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
}

// - Користувач вводить або має два числа.
//// Потрібно знайти та вивести максимальне число з тих двох .
// // Також потрібно врахувати коли введені рівні числа.
let firstDigit = 77;
let secondDigit = 78;
if (firstDigit > secondDigit) {
    console.log(`${firstDigit} digit is larger than ${secondDigit}`);
} else if (firstDigit < secondDigit) {
    console.log(`${firstDigit} digit is smaller than ${secondDigit}`);
} else if (secondDigit === firstDigit) {
    console.log(`${firstDigit} digit and ${secondDigit} are equal`);
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let xx = undefined;
xx = xx ? "not default" : "default";
console.log(xx);


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент
// на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Супер");
}