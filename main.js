const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let maze = document.getElementById("maze")
let player = document.createElement("div")
let playerRowPos
let playerColPos
let topPos = 360
let leftPos = 0
let finishRowPos
let finishColPos


function createMaze (blueprint) {
    for (let rowNum = 0; rowNum < blueprint.length; rowNum++) {
        let rowBlock = blueprint[rowNum]
        let block = ""
        

            for (let columnNum = 0; columnNum < rowBlock.length; columnNum++) {
                let columnBlock = rowBlock[columnNum]  
                
                    if (columnBlock === "W") {
                        block += `<div class="block wall"></div>`
                    } else if (columnBlock === "S") {
                        block += `<div id="start" class="block"></div>`
                    } else if (columnBlock === "F") {
                        block += `<div class="block finish"></div>`
                        finishRowPos = rowNum
                        finishColPos = columnNum
                    } else {
                        block += `<div class="block"></div>`
                    } 
                }
            maze.innerHTML += `<div class="row">${block}</div>`    
            }
        player.className = "player"
        maze.append(player)  
}
createMaze(map) 


// let up = map[rowPosition - 1][colPosition]
// let down = map[rowPosition + 1][colPosition]
// let left = map[rowPosition][colPosition - 1]
// let right = map[rowPosition][colPosition + 1]


function movePlayer(e) {
    if (e.code === "ArrowDown") {
        topPos += 40 
    } else if (e.code === "ArrowUp") {
        topPos -= 40
    } else if (e.code === "ArrowLeft") {
        leftPos -= 38.09
    } else if (e.code === "ArrowRight") {
        leftPos += 38.09
    }
    player.style.top = topPos + "px"
    player.style.left = leftPos + "px"
}

document.addEventListener("keydown", movePlayer)











