const arr = [
    { Name: "Вася", age: 25 },
    { Name: "Петя", age: 30 },
    { Name: "Маша", age: 29 }
]

let at = 0

const reduced = arr.reduce((acc, item) => acc + item.age, at);
let ava = reduced / arr.length

let age = 'сумма всех age'
let arif = 'среднее арифметическая' 
alert(`${age} ${reduced}`)
alert(`${arif} ${ava}`);






