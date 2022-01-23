String.prototype.replaceAt = function(index, replacement){
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

const test1 = ["...X..","....XX","..X..."]
const test2 = ["....X..","X......",".....X.","......."]
const test3 = ["...X.",".X..X","X...X","..X.."]

const result = robotClean(test3)

console.log(result)

// no right way to stop the
function robotClean(entry){
    const grid = entry
    const turnHistory = []
    let pos = {x: 0, y: 0}
    let cleanCounter = 0;

    while(true){
        let turnCounter = turnHistory.length
        const direction = turnCounter % 4
    
        if(grid[pos.y][pos.x] === "o"){

            for(let i = direction; i < turnHistory.length; i += 4){

                if(turnHistory[i].x === pos.x && turnHistory[i].y === pos.y){
                    return cleanCounter
                } 

            }

            let nextPosition = undefined
            
            while(!nextPosition){
                nextPosition = checkPath(turnCounter, pos, grid)

                if(nextPosition){
                    pos = nextPosition
                }else {
                    turnCounter ++
                    turnHistory.push(pos)
                }
            }

        } else {

            grid[pos.y] = grid[pos.y].replaceAt(pos.x, "o")
            cleanCounter++
            
            let nextPosition = undefined
    
            while(!nextPosition){
                nextPosition = checkPath(turnCounter, pos, grid)

                if(nextPosition){
                    pos = nextPosition
                }else {
                    turnCounter ++
                    turnHistory.push(pos)
                }
            }
        }
    }
}

function checkPath(turnCounter, {x, y}, grid){

    const direction = turnCounter % 4
    const collision = (x, y) => !grid[y] || !grid[y][x] || grid[y][x] === "X"

    switch(direction){
        case 0:
            if(collision(x +1, y)) {
                return undefined
            } else {
                return {x: x +1, y}
            }
            
        case 1:
            if(collision(x, y +1)){
                return undefined
            } else {
                return {x, y: y +1}
            }
        case 2: 
            if(collision(x -1, y)){
                return undefined
            } else {
                return {x: x -1, y}
            }
        case 3:
            if(collision(x, y -1)){
                return undefined
            } else {
                return {x, y: y -1}
            }
    }
}