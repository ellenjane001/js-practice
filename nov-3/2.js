function switchDemo(a) {
    switch (a) {
        case 'a':
        case 'b':
            console.log('hello')
            return true
            break
        case 'c':
            console.log('world')
            return false
            break
    }
}

console.log(switchDemo('a'))