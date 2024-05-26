//Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let btn = document.getElementById("btn");
let credential = document.getElementById("credential");
let values = {name: "", surname: "", age: 0};
btn.addEventListener("click", function (e) {
    e.preventDefault();
    values.name = credential.name.value;
    values.surname = credential.surname.value;
    values.age = credential.age.value;
    say(values);
})

function say(obj) {
    document.getElementById("nameval").innerHTML = `Name: ${obj.name}`;
    document.getElementById("surnameval").innerHTML = `Surname: ${obj.surname}`;
    document.getElementById("ageval").innerHTML = `Age: ${obj.age}`;
}

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// який при кожному перезавантажені сторінки буде додавати до неї +1

if (!localStorage.getItem("number")) {
    localStorage.setItem("number", JSON.stringify(1));
} else if (localStorage.getItem("number")) {
    let value = localStorage.getItem("number");
    value++;
    localStorage.setItem("number", JSON.stringify(value));
}

let digit = document.getElementById("digitFromStorage");
digit.innerHTML = localStorage.getItem("number");

//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно
// відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію

window.onload = function () {
    let now = new Date();
    let time = [now.getHours(), now.getMinutes(), now.getSeconds()].join(':');
    let seconds = now.getSeconds();
    let storage = localStorage.getItem("time");
    if (storage === null) {
        localStorage.setItem("time", JSON.stringify([time]));
    } else {
        let timeArr = JSON.parse(storage);
        timeArr.push(time);
        localStorage.setItem("time", JSON.stringify(timeArr));
    }
    //code for 10 array elements show task
    localStorage.setItem("array", JSON.stringify(10));
    show('forward');
    changeHundred(seconds);
}

//зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let arr = [];
for (let i = 1; i <= 100; i++) {
    arr.push(`${i} array item`);
}


function show(direction) {
    let arrayHtml = document.getElementById('array');
    let counter = JSON.parse(localStorage.getItem('array'));
    arrayHtml.innerHTML = '';
    if (direction === 'forward') {
        for (let i = counter - 10; i < counter; i++) {
            let li = document.createElement('li');
            li.innerHTML = arr[i];
            arrayHtml.appendChild(li);
        }
    } else if (direction === 'backward') {
        for (let i = counter - 10; i < counter; i++) {
            let li = document.createElement('li');
            li.innerHTML = arr[i];
            arrayHtml.appendChild(li);
        }
    }
}

document.getElementById('next').addEventListener("click", function (e) {
    e.preventDefault();
    if (JSON.parse(localStorage.getItem("array")) < arr.length - 1) {
        let counter = JSON.parse(localStorage.getItem('array'));
        localStorage.setItem('array', JSON.stringify(counter + 10));
        show('forward');
    }
});

document.getElementById('prev').addEventListener("click", function (e) {
    e.preventDefault();
    // debugger;
    if (JSON.parse(localStorage.getItem("array")) > 10) {
        let counter = JSON.parse(localStorage.getItem('array'));
        localStorage.setItem('array', JSON.stringify(counter - 10));
        show('backward');
    }
});


//- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let buttonDisapear = document.getElementById('disapear');
let blockToDisapear = document.getElementById('text');

buttonDisapear.addEventListener('click', function (e) {
    if (blockToDisapear.style.display === 'none') {
        blockToDisapear.style.display = 'block'
    } else {
        blockToDisapear.style.display = 'none';
    }
});

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let agebtn = document.getElementById('agebtn');
let p = document.getElementById('ageinfo');
agebtn.addEventListener('click', function (e) {
    e.preventDefault();
    let val = document.getElementById('agecheckinfo').agecheck.value;
    if (val > 18) {
        p.style.color = 'black';
        p.innerHTML = 'Your age match';
    } else {
        p.style.color = 'red';
        p.innerHTML = 'You are to young';
    }
});

//*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let cellbtn = document.getElementById('cellbtn');
let rowsq = document.getElementById('rowsq');
let quant = document.getElementById('quant');
let cellval = document.getElementById('cellval');
let caution = document.getElementById('cautioncell');
cellbtn.addEventListener('click', function (e) {
    e.preventDefault();
    let parameters = [rowsq.value, quant.value, cellval.value];
    if (parameters[0] <= 10 && parameters[1] <= 10) {
        draw(parameters);
    }
});

function draw(parameters) {
    let cells = document.getElementById('cells');
    cells.innerHTML = '';
    for (let i = 1; i <= parameters[0]; i++) {
        let row = document.createElement('div');
        row.style.display = 'flex';
        for (let j = 1; j <= parameters[1]; j++) {
            let block = document.createElement('div');
            block.style.fontSize = '14px';
            block.innerHTML = parameters[2];
            block.style.width = (100 / parameters[1] + '%');
            block.style.height = (100 / parameters[0] + '%');
            block.style.border = 'black 1px solid';
            row.appendChild(block);
        }
        cells.appendChild(row);
    }
}

//*** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

function changeHundred(seconds) {
    let hundred = document.getElementById('hundred');
    let currentHundred = JSON.parse(localStorage.getItem('hundred'));
    if (!currentHundred) {
        localStorage.setItem('hundred', JSON.stringify(100));
    }
    let prevSeconds = JSON.parse(localStorage.getItem('seconds'));
    let seccondsdiff;
    if (seconds >= 0 && seconds <= 10) {
        seccondsdiff = (seconds + 60) - prevSeconds;
    } else {
        seccondsdiff = seconds - prevSeconds;
    }
    seccondsdiff = Math.abs(seccondsdiff);
    if (seccondsdiff > 10) {
        currentHundred = currentHundred + 10;
        localStorage.setItem('hundred', JSON.stringify(currentHundred));
        hundred.innerHTML = `${currentHundred}грн`;
    } else {
        hundred.innerHTML = `${currentHundred}грн`;
    }
    localStorage.setItem('seconds', JSON.stringify(seconds));
}