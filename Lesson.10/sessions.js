//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно
// відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію

document.getElementById('counter').innerHTML = JSON.parse(localStorage.getItem('time')).length;
let times = document.getElementById('times');
let counter = JSON.parse(localStorage.getItem('time'));
for (let item of counter) {
    let li = document.createElement('li');
    li.innerHTML = item;
    times.append(li);
}