const container = document.createElement("div")
container.setAttribute("style", 
    `width: 920px;
    height: 800px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    `)
document.body.append(container)


for (let i = 0; i < 16; i++) {
    const box = document.createElement("div")
    box.setAttribute("style", "width: 200px; height: 200px; background: red; margin: 1rem auto 1rem auto ")
    container.appendChild(box)
}




