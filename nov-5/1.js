let myArr = [1, 2, 3, 4, 5]
// console.log(myArr.join(','))

myArr = [1, 2, 5]
let values = [5, 6, 7, "Test"]
let newArr = values.concat(myArr)
// let newArr = myArr.concat(values)
// console.log(newArr)

let booksArr = ['book1', 'book2', 'book3']
let booksUpper = booksArr.map(a => a.toUpperCase())
console.log(booksUpper)