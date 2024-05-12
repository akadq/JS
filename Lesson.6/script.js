//Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'
// let string1 = 'hello world';
// let string2 = 'lorem ipsum';
// let string3 = 'javascript is cool';
//
// console.log(string1.length);
// console.log(string2.length);
// console.log(string3.length);

// Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log(string1.toUpperCase());
// console.log(string2.toUpperCase());
// console.log(string3.toUpperCase());

//Перевести до нижнього регістру настипні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log(string1.toLowerCase());
// console.log(string2.toLowerCase());
// console.log(string3.toLowerCase());

//Є "брудна" стрінга let str = ' dirty string ' . Почистити її від зайвих пробілів.
// let str = ' dirty string';
// console.log(str.replace(' ', ''));

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів. let str = 'Ревуть воли як ясла повні'; let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// function stringToarray(str) {
//     return str.split(" ");
// }
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str);
// console.log(arr);

//є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let newNumbers = numbers.map(value => value.toString());
// console.log(newNumbers);

//створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction. let nums = [11,21,3]; sortNums(nums,'ascending') // [3,11,21] sortNums(nums,'descending') // [21,11,3]
// function sortNums(nums, direction) {
//     return direction === 'ascending' ? nums.sort((a, b) => a - b)
//         : direction === 'descending' ? nums.sort((a, b) => b - a)
//             : 'Error';
// }
// let nums = [11, 21, 3];
// console.log(sortNums(nums, 'ascending')); // [3,11,21]
// console.log(sortNums(nums, 'descending')); // [21,11,3]

//є масив let coursesAndDurationArray = [ {title: 'JavaScript Complex', monthDuration: 5}, {title: 'Java Complex', monthDuration: 6}, {title: 'Python Complex', monthDuration: 6}, {title: 'QA Complex', monthDuration: 4}, {title: 'FullStack', monthDuration: 7}, {title: 'Frontend', monthDuration: 4} ]; -- відсортувати його за спаданням за monthDuration -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration).filter(value => value.monthDuration > 5));

//описати колоду карт
// знайти піковий туз
// всі шістки
// всі червоні карти
// всі буби
// всі трефи від 9 та більше
// { cardSuit: '', // 'spade', 'diamond','heart', 'clubs' value: '', // '6'-'10', 'ace','jack','queen','king','joker' color:'', // 'red','black' }
function cardsCreate() {
    // debugger;
    let cards = [{}];
    // let cardColors = [{color: "red"}, {color: "black"}];
    // let cardSigns = [{sign: "spade"}, {sign: "diamond"}, {sign: "heart"}, {sign: "clubs"}];
    // let cardValues = [{value: 6}, {value:7}, {value: 8}, {value: 9}, {value: 10}, {value: "ace"}, {value: "jack"}, {value: "queen"}, {value: "king"}];
    let cardColors = ["red", "black"];
    let cardSigns = ["spade", "diamond", "heart", "clubs"];
    let cardValues = [6, 7, 8, 9, 10, "ace", "jack", "queen", "king"];
    for (const color of cardColors) {
        for (const sign of cardSigns) {
            for (const value of cardValues) {
                if ((sign === "heart" || sign === "diamond") && color === "red") {
                    cards.push({Suit: sign, Value: value, Color: color});
                } else if ((sign === "spade" || sign === "clubs") && color === "black") {
                    cards.push({Suit: sign, Value: value, Color: color});
                }
            }
        }
    }
    return cards.slice(1);
}

let cardSuite = cardsCreate();
console.log(cardSuite);
console.log(cardSuite.filter(card => card.Suit === 'spade' && card.Value === 'ace'));
console.log(cardSuite.filter(card => card.Value === 6));
console.log(cardSuite.filter(card => card.Color === 'red'));
console.log(cardSuite.filter(card => card.Suit === 'diamond'));
console.log(cardSuite.filter(card => card.Suit === 'spade' && (card.Value >= 9 || typeof card.Value === "string")));