class Book {
    constructor(title, genre, author) {
        this.title = title
        this.genre = genre
        this.author = author
        this.isBorrowed = false
    }

    borrow = () => {
        this.isBorrowed = true
    }

    read = () => {
        console.log(`Book titled ${this.title} was read on ${new Date().toDateString()}`)
    }
}

let book1 = new Book('Little Women', 'Classic', 'Louisa May Alcott')
book1.read()

let book2 = new Book('The adventures of tintin', 'Adventure, Fantasy', 'Herge')
book2.read()




class Converter {

    convertToFarhenheit(degCel) {
        return (degCel * 9 / 5) + 32
    }

    convertToCelsius(degFar) {
        return (degFar - 32) * 5 / 9
    }

    convertToKelvin(unitOfTemp, temperature) {
        let kelvin = 0
        if (unitOfTemp == 'F')
            kelvin = this.convertToCelsius(temperature) + 273.15
        else if (unitOfTemp == 'C')
            kelvin = temperature + 273.15

        return kelvin
    }
}


console.log(new Converter().convertToCelsius(1))
console.log(new Converter().convertToFarhenheit(1))
console.log(new Converter().convertToKelvin('F', 3))
console.log(new Converter().convertToKelvin('C', 3))