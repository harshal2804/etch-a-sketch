let container = document.getElementsByClassName("container")
let gridSize = document.getElementById("gridSize")
let penColor = document.getElementById("penColor")
let applychanges = document.getElementById("change")
let eraser = document.getElementById("eraser")
let clear = document.getElementById("clear")

let currentSize
let color = penColor.value
if(gridSize.value==""){
    currentSize = 16
}
else if(gridSize.value<=0){
    alert("Grid size cannot be negative or zero!")
    currentSize = gridSize.value
}
else if(gridSize.value>=100){
    alert("Grid size should not exceed 100!")
    currentSize = gridSize.value
}

let gridItemSize = `${650/currentSize}px `
container[0].style.gridTemplateRows = gridItemSize.repeat(currentSize)
container[0].style.gridTemplateColumns = gridItemSize.repeat(currentSize)

for(let i=0; i<currentSize*currentSize; i++)
{
    let divElement = document.createElement('div')
    divElement.setAttribute('class','item')
    divElement.addEventListener('dragstart',(e) => {
        e.preventDefault()
    })
    divElement.addEventListener('drop',(e) => {
        e.preventDefault()
    })
    divElement.addEventListener('mouseover', changeBgcolor)
    divElement.addEventListener('click', changeBgcolor)
    container[0].appendChild(divElement) 
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeBgcolor(e) {
    if(mouseDown===true || (e.type==='mouseover' && mouseDown===true)){
        e.target.style.backgroundColor = color
    }
}

function clearBg() {
    for(let i=0; i<currentSize*currentSize; i++)
    {
        container[0].childNodes[i].style.backgroundColor = 'white'
    }
}

applychanges.onclick = () => {
    color = penColor.value
    if(gridSize.value==""){
        currentSize = 16
    }
    else if(gridSize.value<=0){
        alert("Grid currentSize cannot be negative or zero!")
    }
    else if(gridSize.value>100){
        alert("Grid currentSize should not exceed 100!")
    }
    else{
        if(currentSize!==gridSize.value){
            console.log(currentSize)
            clearBg()
        }
        currentSize = gridSize.value
    }

    let gridItemSize = `${650/currentSize}px `
    container[0].style.gridTemplateRows = gridItemSize.repeat(currentSize)
    container[0].style.gridTemplateColumns = gridItemSize.repeat(currentSize)

    for(let i=0; i<currentSize*currentSize; i++)
    {
        let divElement = document.createElement('div')
        divElement.setAttribute('class','item')
        divElement.addEventListener('dragstart',(e) => {
            e.preventDefault()
        })
        divElement.addEventListener('drop',(e) => {
            e.preventDefault()
        })
        divElement.addEventListener('mouseover', changeBgcolor)
        divElement.addEventListener('click', changeBgcolor)
        container[0].appendChild(divElement) 
    }
}

clear.onclick = () => {
    clearBg()
}

let prevColor
eraser.addEventListener('change',() => {
    if(eraser.checked){
        prevColor = color
        color = 'white'
    }
    else{
        color = prevColor
    }
})