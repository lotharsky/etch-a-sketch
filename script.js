const container = document.createElement("div")
container.classList.add("container")


// setAttribute("style", 
//     `width: 1000px;
//     height: 1000px;
//     border: 10px, solid, black;
//     display: flex;
//     justify-content: space-evenly;
//     flex-wrap: wrap;

//     `)


document.body.append(container)

document.body.setAttribute("style", "display: flex; align-items: center; justify-content: center")

function createCanvas(nBlocks) {

    const blockSize = (1000 - (16*(nBlocks+1)))/ (nBlocks)

    for (let i = 1; i <= nBlocks*nBlocks && i <= 100; i++) {

        console.log("i: ", i)

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


createCanvas(3)



