const fetchList = () => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest()
        let src = ''
        const URL = 'https://nekos.best/api/v2/endpoints'
        req.open('GET', URL)
        req.getResponseHeader('Content-type', 'application/json')
        req.onreadystatechange = () => {
            if (req.readyState == 4) {
                const result = JSON.parse(req.responseText)
                let parent = document.getElementsByTagName('table')[0]

                for (let i = 0; i < Object.entries(result).length; i++) {
                    let tr = document.createElement('tr')
                    let tdOptions = document.createElement('td')
                    let tdButtons = document.createElement('td')
                    let btn = document.createElement('button')
                    btn.appendChild(document.createTextNode('Load'))
                    btn.addEventListener('click', loadImage)
                    tdButtons.appendChild(btn)
                    tdOptions.appendChild(document.createTextNode(Object.entries(result)[i][0]))
                    tr.appendChild(tdOptions)
                    tr.appendChild(tdButtons)
                    parent.appendChild(tr)
                }
                document.querySelector('.btn.btn-primary').style.display = 'none'
            }
        }
        req.send();
    })

}

document.querySelector('.btn.btn-primary').addEventListener('click', e => {
    fetchList()
})

const loadImage = (e) => {
    console.log(e.target.parentElement.parentElement.firstChild.innerText)
}