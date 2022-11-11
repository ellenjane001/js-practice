let date1 = new Date()
console.log(date1)

let date2 = new Date(949278000000)
console.log(date2)

console.log(new Date(2022, 11, 30, 15, 35, 20, 20))
console.log(date2.getDay())
console.log(date2.getMonth())
console.log(date1.toDateString())
console.log(date2.toTimeString())
let d = new Date()
d.setFullYear(2012, 11, 14)
console.log(d.toDateString())


let date = new Date()
const weekday = new Array(7)
weekday[0] = "Sunday"
weekday[1] = "Monday"
weekday[2] = "Tuesday"
weekday[3] = "Wednesday"
weekday[4] = "Thursday"
weekday[5] = "Friday"
weekday[6] = "Saturday"

console.log(weekday[d.getDay()])

let myDate = new Date()
myDate.setFullYear(2022, 12, 30)
console.log(myDate)
const today = new Date()

if (myDate > today)
    console.log(true)
else
    console.log(false)