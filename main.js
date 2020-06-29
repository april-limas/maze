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
let playerRowPos = 9
let playerColPos = 0
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
        player.classList.add("player","butterfly")
        maze.append(player)  
}
createMaze(map) 


// let up = map[playerRowPos - 1][playerColPos]
// let down = map[playerRowPos + 1][playerColPos]
// let left = map[playerRowPos][playerColPos - 1]
// let right = map[playerRowPos][playerColPos + 1]


function movePlayer(e) {
    if (e.code === "ArrowDown") {
        let down = map[playerRowPos + 1][playerColPos]
        if (down !== "W") {
            topPos += 40 
            playerRowPos++
            
        }
    } else if (e.code === "ArrowUp") {
        let up = map[playerRowPos - 1][playerColPos]
        if (up !== "W") {
            topPos -= 40
            playerRowPos--
        }
    } else if (e.code === "ArrowLeft") {
        let left = map[playerRowPos][playerColPos - 1]
        if (left !== "W") {
            leftPos -= 38.09
            playerColPos--
        }
    } else if (e.code === "ArrowRight") {
        let right = map[playerRowPos][playerColPos + 1]
        if (right !== "W") {
            leftPos += 38.09
            playerColPos++

            if (playerRowPos === finishRowPos && playerColPos === finishColPos) {
                setTimeout( function() {
                    let bannerOverlay = document.createElement("div")
                    bannerOverlay.className = "win"
                    bannerOverlay.innerHTML = 
                        `<div class="text">
                        <h2>Perfect!</h2>
                        <p>You completed the maze</p>
                        <div><a href="index.html">Play again</a></div>
                        </div>`
                    document.body.append(bannerOverlay)
                }, 300)
            } 
        }
    }
    player.style.top = topPos + "px"
    player.style.left = leftPos + "px"
}

document.addEventListener("keydown", movePlayer)










