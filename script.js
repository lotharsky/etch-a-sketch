const btn = document.createElement("button")
btn.textContent = "Amount of boxes"
document.body.appendChild(btn)


const container = document.createElement("div")
container.classList.add("container")
document.body.append(container)
document.body.classList.add("bodySetup")


function userInput () {
    let amount = prompt("please enter amount of boxes per row")

    console.log(parseInt(amount))


    container.innerHTML = ""
    //createCanvas(4)
    return createCanvas(parseInt(amount), 2)
}

function createCanvas(nBlocks = 3, gapBetweenBlocks = 2) {

    const blockSize = (1000 - (gapBetweenBlocks*(nBlocks+1)))/ (nBlocks)

    for (let i = 1; i <= nBlocks*nBlocks && i <= 10000; i++) {

        //console.log("i: ", i)

        const box = document.createElement("div")
        box.setAttribute("style", `width: ${blockSize}px; height: ${blockSize}px;`)
        box.classList.add("box")
        container.appendChild(box)

        box.addEventListener("mouseover", event => {
            
            console.log(event.currentTarget)

            event.currentTarget.classList.add("hover")

            //event.currentTarget.style.background = "black"
        })
    }
}


createCanvas()

btn.addEventListener("click", userInput)


