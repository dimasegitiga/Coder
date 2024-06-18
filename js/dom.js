//finding element

let element = document.getElementById("div-1")
let element2 = document.getElementsByClassName("div-2")
let element3 = document.getElementsByTagName("div")

console.log(element)
console.log(element2)
console.log(element3)

//query selector 

// let ele = document.querySelector("#div-1")


//Inner HTML
// element.innerHTML = "<b>Hello World</b>"

//change atribute
// let input = document.getElementById("input")
// console.log(input)
// input.setAttribute("type", "password")

//set atribute
// let input = document.getElementById("input")
// input.style.color = "blue"

//change or remove element
// const bold = document.createElement("b")
// const divBold = document.getElementById("div-1")

// divBold.appendChild(bold)
// bold.innerHTML = "Namaku Dimas"

// divBold.removeChild(bold)

//Event Listener
const hello = document.getElementById("hello")
hello.addEventListener("mouseenter", function () {
    hello.style.border = "1px solid blue"
})

hello.addEventListener("mouseleave", function() {
    hello.style.border = "none"
})

const button = document.getElementById("btn")
const boom = document.getElementById("boom")
button.addEventListener("click", function() {
    if (boom.style.display == "none") {
        boom.style.display = "block"
    } else {
        boom.style.display = "none"
    }
})

