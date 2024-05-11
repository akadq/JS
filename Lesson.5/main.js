//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const triangle = (a, b) => a * b;

console.log(`Площа трикутника = ${triangle(10, 20)}`);

//- створити функцію яка обчислює та повертає площу кола з радіусом r
const circle = (r) => {
    p = 3.14;
    return p * r ** 2;
};

console.log(`Площа кола = ${circle(10)}`);

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinder = (h, r) => {
    p = 3.14;
    return 2 * p * r * h;
}

console.log(`Площа циліндра = ${cylinder(10, 15)}`);

//- створити функцію яка приймає масив та виводить кожен його елемент
const randomArraay = [true, "apple", 42, false, "banana", 3.14, true, "cherry", -17, false, "date", 2.718, true, "elderberry", 108, false, "fig", 0, true, "grape"];

const arrayExtract = (arr) => {
    for (let element of arr) {
        console.log(element);
    }
}

arrayExtract(randomArraay);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
const textParagraph = (text) => {
    document.write(text);
    console.log(text);
}

textParagraph('Hello Paragraph');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const triList = (elementOfList) => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${elementOfList}</li>`);
    }
    document.write('</ul>');
}

triList('Hello triple list');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const triListWithQuantity = (elementOfList, quant) => {
    document.write('<ul>');
    for (let i = 0; i < quant; i++) {
        document.write(`<li>${elementOfList}</li>`);
    }
    document.write('</ul>');
}

triListWithQuantity('Hello triple list with quantity', 5);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const randomList = (arr) => {
    document.write('<ul>');
    for (let element of arr) {
        document.write(`<li>${element}</li>`);
    }
    document.write('</ul>');
}

randomList(randomArraay);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const objArr = [{id: 1, name: 'Alice', age: 63}, {id: 2, name: 'Michael', age: 38}, {id: 3, name: 'Jane', age: 27}, {id: 4, name: 'Bob', age: 71}, {id: 5, name: 'Emily', age: 52}, {id: 6, name: 'Charlie', age: 24}, {id: 7, name: 'Sarah', age: 46}, {id: 8, name: 'John', age: 33}, {id: 9, name: 'Eve', age: 59}, {id: 10, name: 'David', age: 20}];

const objToPage = (arrOfObjects) => {
    counter = 1;
    for (let element of arrOfObjects) {
        document.write('<div class="element">');
        document.write(`<h3>Entry number: ${counter++}</h3>`);
        document.write('<ul>');
        for (let obj in element) {
            document.write(`<li>${obj}: ${element[obj]}</li>`);
        }
        document.write('</ul>');
        document.write('</div>');
        document.write('<br>');
    }
}

objToPage(objArr);

//- створити функцію яка повертає найменьше число з масиву
const numbersArray = [47, 83, 29, 61, 18, 92, 58, 7, 33, 42, 67, -55, 93, 15, 76, 5, -88, 21, 64, 37, 25, 80, 11, 44, 72, 51, 86, 9, 40, 23]

const lessArrNumber = (arr) => {
    let min = arr[0];
    if (arr.length >= 1) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
    } else {
        console.log('Array length to small');
    }
    return min;
}

console.log(lessArrNumber(numbersArray));

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const summarize = (array) => {
    let collector = 0;
    if (array.length >= 1) {
        for (let i = 0; i < array.length; i++) {
            collector = collector + array[i];
        }
    } else {
        console.log('Array length to small');
    }
    return collector;
}

console.log(summarize(numbersArray));

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
const swapArray = [47, 83, 29, 61, 18, 92, 58, 7];

const swap = (array, index1, index2) => {
    if (array.length >= 1 && index1 >= 0 && index2 >= 0 && index2 <= (array.length - 1)) {
        [array[index1], array[index2]] = [array[index2], array[index1]];
        return array;
    } else {
        return 'Values out of range';
    }
}

console.log(swap(swapArray, 0, 7));

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sum, currencyValues, exchangeCurrency) => {
    for (let currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return currency.value * sum;
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 39}, {currency: 'EUR', value: 42}], 'EUR'));