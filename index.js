'use strict'

// ----------------- Передача по ссылке или по значению, Spread оператор (ES6-ES9)

// const copy = (mainObj) => {
//   let copyObj = {}

//   for (let key in mainObj) {
//     copyObj[key] = mainObj[key]
//   }

//   return copyObj
// }

// const car = {
//   model: 'Renault',
//   year: 2015,
//   color: 'black',
//   engine: '2.0 dCI M9R'
// }

// const newCar = copy(car)

// newCar.model = 'BMW'
// newCar.engine = '4.4 L S63 twin-turbocharged V8'
// newCar.year = 2019

// console.log(car)
// console.log(newCar)

// const add = {
//   bodyStyle: '4-door sedan',
//   transmission: '8-speed automatic'
// }

// const clone = Object.assign({}, newCar, add)

// // console.log(clone)

// clone.color = 'red'

// console.log(clone)

// const footballClubs = ['FC Barcelona', 'Real Madrid', 'Valencia', 'Atlético Madrid']

// console.log(footballClubs)

// const copyArray = (mainArr) => {
//   let copyArr = []

//   for (let i = 0; i < mainArr.length; i++) {
//     copyArr[i] = mainArr[i]
//   }

//   return copyArr
// }

// const newFootballClubs = copyArray(footballClubs)

// newFootballClubs[0] = 'FC Arsenal'

// console.log(newFootballClubs)

// const newFootballClubs = footballClubs.slice(2)

// console.log(newFootballClubs)

// Spread operator

// const video = ['youtube', 'tiktok', 'vimeo']
// const social = ['telegram', 'instagram', 'facebook', 'twitter']
// const all = [...video, ...social]

// // console.log(all)

// const num = [1, 2, 3]

// console.log(num)

// --------------------- Основы ООП,прототипно-ориентированное наследование

let str = 'hello'
let newStr = new String(str)

// console.log(typeof(newStr), typeof(str))

// console.dir([1, 2, 3])

const soldier = {
  health: 400,
  armor: 100
}

const john = Object.create(soldier)

// const john = {
//   health: 100
// }

// john.__proto__ = soldier

// Object.setPrototypeOf(john, soldier)

console.log(john.armor)