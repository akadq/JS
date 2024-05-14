//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
console.log('Hello World length is: ' + 'Hello World!'.length);
console.log('lorem ipsum length is: ' + 'lorem ipsum'.length);
console.log('javascript is cool length is: ' + 'javascript is cool'.length);

//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log(' dirty string   '.trim());

//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
const stringToarray = (str) => str.split(' ');

console.log(stringToarray('Ревуть воли як ясла повні'));

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.log([10, 8, -7, 55, 987, -1011, 0, 1050, 0].map((elem) => elem + ''));

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
const sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    }
};

console.log(sortNums([11, 21, 3], 'ascending'));
console.log(sortNums([11, 21, 3], 'descending'));

//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const sorted = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sorted);

const filtered = coursesAndDurationArray.filter((elem) => elem.monthDuration > 5);
console.log(filtered);

const mapped = coursesAndDurationArray.map((elem, index) => ({
    id: index,
    ...elem
}));
console.log(mapped)

//описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const createCards = () => {
    const cardColors = ['red', 'black'];
    const cardSuits = ['spade', 'diamond', 'heart', 'clubs']; //«піка», «бубна», «черва», «трефа»
    const cardValues = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'];
    let deckOfCards = [{}];
    for (const color of cardColors) {
        for (const suit of cardSuits) {
            for (const value of cardValues) {
                if ((suit === 'spade' || suit === 'clubs') && color === 'black') {
                    deckOfCards.push({Value: value, Suite: suit, Color: color});
                } else if ((suit === 'diamond' || suit === 'heart') && color === 'red') {
                    deckOfCards.push({Value: value, Suite: suit, Color: color});
                }
            }
        }
    }
    return deckOfCards.slice(1);
}

let cardSuite = createCards();
// console.log(cardSuite);
console.log(cardSuite.filter(e => e.Value === 'ace' && e.Suite === 'spade'));
console.log(cardSuite.filter(e => e.Value === 6));
console.log(cardSuite.filter(e => e.Color === 'red'));
console.log(cardSuite.filter(e => e.Suite === 'diamond'));
console.log(cardSuite.filter(e => e.Suite === 'clubs' && (e.Value > 9 || typeof e.Value === 'string')));

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const groupBySuite = cardSuite.reduce((acc, curr) => {
    const suit = curr.Suite;
    if (acc[suit]) {
        acc[suit] = [...acc[suit], curr];
    } else {
        acc[suit] = [curr];
    }
    return acc;
}, {});


console.log(groupBySuite);

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

const findProperties = ((property) => coursesArray.filter(e => e.modules.includes(property)));

console.log(findProperties('sass'));
console.log(findProperties('docker'));