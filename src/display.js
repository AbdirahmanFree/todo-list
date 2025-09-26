 function createECard(title){
    const container = document.createElement("div");
    container.classList.add("entity-container");
    const circle = document.createElement("div");
    circle.classList.add("circle");
    const cross = document.createElement("div");
    cross.textContent = "X"
    cross.classList.add("cross")
    const cardTitle = document.createElement("h3")
    cardTitle.textContent = title
    container.appendChild(circle)
    container.appendChild(cardTitle)
    container.appendChild(cross)
    return container
 }

 export { createECard }