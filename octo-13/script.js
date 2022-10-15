const today = Date.now()
let greetings
console.log(today)
const d = new Date(today)
console.log(d)
const cTnH = d.getHours()
console.log(cTnH)
let convertedTime
//ctnh = current time in hours
if (cTnH > 12)
    convertedTime = cTnH - 12;
else
    convertedTime = cTnH

if (cTnH >= 0 && cTnH < 12)
    greetings = `Ohayo! time is ${convertedTime} AM`
else if (cTnH >= 12 && cTnH < 18)
    greetings = `Kon'nichiwa! time is ${convertedTime} PM `
else
    greetings = `Kon'banwa! time is ${convertedTime} PM `


console.log(greetings)