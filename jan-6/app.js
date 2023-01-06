let fs = require('fs')
// fs.writeFileSync('notes.txt', 'this is written in nodejs')
fs.appendFileSync('notes.txt', '\r\nI am Ellen, 24 and currently living in Palawan')
console.log('success appending to file')