let count = 0

const processSubmission = (e) => {
    e.preventDefault()
    // create elements
    const tr = document.createElement('tr')
    const tdname = document.createElement('td')
    const tdlastname = document.createElement('td')
    const tdgender = document.createElement('td')
    const tdaction = document.createElement('td')
    const actionBtn = document.createElement('button')
    // assign function on button

    actionBtn.id = count++
    actionBtn.textContent = 'Delete'
    actionBtn.onclick = deleteRecord

    // append button to td
    tdaction.append(actionBtn)

    const myFields = document.getElementsByClassName('form-field')
    tdname.textContent = myFields[0].value
    myFields[0].value = ''
    tdlastname.textContent = myFields[1].value
    myFields[1].value = ''
    if (myFields[2].checked) {
        tdgender.textContent = 'F'
        myFields[2].checked = false
    }
    else if (myFields[3].checked) {
        tdgender.textContent = 'M'
        myFields[3].checked = false
    }
    tr.appendChild(tdname)
    tr.appendChild(tdlastname)
    tr.appendChild(tdgender)
    tr.appendChild(tdaction)
    const myTableBody = document.querySelector('#parent-div table tbody')
    myTableBody.appendChild(tr)
}

document.querySelector('button[type="submit"]').onclick = processSubmission

const deleteRecord = (evt) => {
    evt.preventDefault()
    let parentElement = document.querySelector('#parent-div>table tbody')
    parentElement.removeChild(evt.target.parentElement.parentElement)
}