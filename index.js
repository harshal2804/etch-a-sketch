let gridSize = document.getElementById("gridSize")
let penColor = document.getElementById("penColor")
let applychanges = document.getElementById("change")
let container = document.querySelector('.container')

let size
let color = "#000000"
if(gridSize.value==""){
    size = 16
}
else if(gridSize.value<=0){
    alert("Grid size cannot be negative or zero!")
    size = gridSize.value
}
else if(gridSize.value>=100){
    alert("Grid size should not exceed 100!")
    size = gridSize.value
}
console.log(size)
let gridItemSize = `${660/size}px `
container.style.gridTemplateRows = gridItemSize.repeat(size)
container.style.gridTemplateColumns = gridItemSize.repeat(size)

for(let i=0; i<size*size; i++)
{
    let divElement = document.createElement('div')
    divElement.setAttribute('class','item')
    divElement.addEventListener('mouseover', changeBgcolor)
    divElement.addEventListener('click', changeBgcolor)
    container.appendChild(divElement) 
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeBgcolor(e) {
    if(mouseDown===true || (e.type==='mouseover' && mouseDown===true)){
        e.target.style.backgroundColor = color
    }
}

applychanges.onclick = () => {
    size = gridSize.value
    color = penColor.value
}