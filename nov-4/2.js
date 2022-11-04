let myArr = []
let booksArr = new Array('Book1', 'Book2', 'Book3', 'Book4')

booksArr.push('Book5')
booksArr[booksArr.length] = 'Book6'
console.log(booksArr)
console.log(`count of books: ${booksArr.length}`)

let borrowedBook = booksArr.pop()
console.log(`person borrowed the book title: ${borrowedBook}`)
console.log(`count of remaining books ${booksArr.length}`)
let newbook = 'book0'
booksArr.unshift(newbook)
console.log(`person donated a book named ${newbook}`)
console.log(`new counts of books ${booksArr.length} book ${booksArr}`)

myArr = [2, 5, 7, 9]
myArr.forEach((e) => {
    console.log(e * 2)
    //get index then element multiplied by two
    myArr[myArr.indexOf(e)] = e * 2
})

console.log(myArr)