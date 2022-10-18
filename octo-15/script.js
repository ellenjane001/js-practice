let counter = 1
let btn1 = document.getElementById('btn-1')
let btn2 = document.getElementById('btn-2')
btn1.onclick = function () {
    let img_obj = document.querySelector('img.img-fluid')
    if (counter > 1) {
        counter--
        if (counter == 1) {
            console.log(counter)
            console.log("nature")
            img_obj.src = 'https://images.unsplash.com/photo-1665501340269-5ced49f91a92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        } else if (counter == 2) {
            console.log(counter)
            img_obj.src = 'https://images.unsplash.com/photo-1665731372479-551841cac2c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        } else if (counter == 3) {
            console.log(counter)
            img_obj.src = 'https://images.unsplash.com/photo-1665689285334-b0044b6d2dc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        } else if (counter == 4) {
            console.log(counter)
            img_obj.src = 'https://images.unsplash.com/photo-1665690399410-eafc2b35a767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
        }

    }
    else {
        return
    }
}
btn2.onclick = function () {
    let img_obj = document.querySelector('img.img-fluid')
    if (counter < 4) {
        counter++
        if (counter == 1) {
            console.log(counter)
            console.log('nature')
            img_obj.src = 'https://images.unsplash.com/photo-1665501340269-5ced49f91a92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        } else if (counter == 2) {
            console.log(counter)
            img_obj.src = 'https://images.unsplash.com/photo-1665731372479-551841cac2c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        } else if (counter == 3) {
            console.log(counter)
            img_obj.src = 'https://images.unsplash.com/photo-1665689285334-b0044b6d2dc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        } else if (counter == 4) {
            console.log(counter)
            img_obj.src = 'https://images.unsplash.com/photo-1665690399410-eafc2b35a767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
        }

    }
    else {
        return
    }
}
