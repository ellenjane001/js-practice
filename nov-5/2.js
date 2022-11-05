let booksStr = ''
let booksArr = ['Books1', 'Books2', 'Books3', 'Books4', 'Books5']
let booksArrUpper = booksArr.map(a => a.toUpperCase())
booksArrUpper.forEach(e => {
    booksStr = `${booksStr} <li> ${e} </li>`
})
// console.log(`<ul>${booksStr}</ul>`)


let myArr = [1, 2, 3, 'a', 'e', 5]
console.log(myArr.includes('A'))


const searchBook = (value) => {
    console.log(value)
    let b = booksArr.includes(value)
    if (b)
        console.log('Book is in the collection')
    else
        console.log('Book is currently unavailable')
}

