const validator = require('validator')
const chalk = require('chalk')
let c = validator.isEmail('test@g.com')

console.log(c)

// console.log(validator.isNumeric('a'))
// console.log(validator.isNumeric(2))

console.log(chalk.green.bold('hello'))
console.log(chalk.white.bgGreen.bold('hello'))