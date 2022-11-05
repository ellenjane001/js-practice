let myArr = []
let booksArr = new Array('Book1', 'Book2', 'Book3', 'Book4')

booksArr.push('Book5')
booksArr[booksArr.length] = 'Book6'
console.log(booksArr)
console.log(`count of books: ${booksArr.length}`)

let borrowedBook = booksArr.pop()
console.log(`person 1 borrowed the book title: ${borrowedBook}`)
console.log(`count of remaining books ${booksArr.length}`)
console.log(`============================`)
let newbook = 'book0'
booksArr.unshift(newbook)
console.log(`person 2 donated a book named ${newbook}`)
console.log(`new counts of books ${booksArr.length} book ${booksArr}`)
console.log(booksArr)
console.log(`============================`)
console.log(`person 3 wanted to borrow the first book in the collection`)
borrowedBook = booksArr.shift()
console.log(`person 3 borrowed ${borrowedBook}`)
console.log(`============================`)

console.log(`updated book collection is as follows ${booksArr}`)
myArr = [2, 5, 7, 9, 2]
myArr.forEach((e) => {
    // console.log(e * 2)
    // console.log(`index of ${e} is ${myArr.indexOf(e)}`)
    //get index then element multiplied by two
    myArr[myArr.indexOf(e)] = e * 2
    // console.log(`index of ${e} is ${myArr.indexOf(e)}`)
})

// console.log(myArr.indexOf(2))
// console.log(myArr.lastIndexOf(2))

// console.log(myArr)