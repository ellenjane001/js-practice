function car(color, model) {
    this.color = color
    this.model = model
}

let c = new car('red', 'sedan')

console.log(c.color)


const person = new Object()

class Person {
    constructor(firstname, lastName) {
        this.firstname = firstname
        this.lastName = lastName
    }
    call() {
        console.log(`hi ${this.firstname}`)
    }
}

const g = new Person('test', 'test')

console.log(g.lastName)
g.call()

let str = 'lastName'
console.log(g[str])