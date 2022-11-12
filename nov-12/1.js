let count = 0


let i = setInterval(() => {
    console.log('hello')
    console.log(count++)
}, 3000)

clearInterval(i)