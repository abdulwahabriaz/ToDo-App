var input = document.getElementById("post-input")
var mainpost = document.getElementById("post")

function setpost() {

    var div = document.createElement('div')
    var pera = document.createElement('p')
    var del = document.createElement('button')
    pera.className = "main"
    mainpost.appendChild(div)
    div.appendChild(pera)
    pera.innerText = input.value
    del.setAttribute("onclick", "deleteThis(this)")
    pera.appendChild(del)
    del.innerText = "Delete"
    del.className = "delete_this"
    pera.className = "pera_add"
    console.log(mainpost)
    input.value = ""
}

function deleteThis(e) {
    e.parentNode.remove()
}

function clearAll() {
    mainpost.innerHTML = ""
}