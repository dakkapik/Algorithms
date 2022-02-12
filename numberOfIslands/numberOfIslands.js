const numberOfIslands = (grid) => {
    // change this into objects, search better that way?
    const hLines = []
    const vLines = []

    let currentXline 
    let currentYline 
    console.log(grid)

    for(let y = 0; y < grid.length; y++){
        for(let x = 0; x < grid[y].length; x++){
            if(grid[y][x] === "1"){
                if(grid[y][x -1] === undefined || grid[y][x -1] === "0"){
                    if(currentXline) hLines.push(currentXline)

                    currentXline = {x, y, length: 1}
                }else{
                    currentXline.length ++;
                }
            }
        }
    }
    if(currentXline) hLines.push(currentXline)

    for(let x = 0; x < grid[0].length; x++){
        for(let y = 0; y < grid.length; y++){
            if(grid[y][x] === "1"){
                if(grid[y -1] === undefined || grid[y -1][x] === "0"){
                    if(currentYline) vLines.push(currentYline)

                    currentYline = {x, y, length: 1}
                }else{
                    currentYline.length ++;
                }
            }
        }
    }
    if(currentYline) vLines.push(currentYline)
    //describe the bigO of both loops

    const islands = {}

    for(let i = 0; i < hLines.length; i++){
        for(let o = 0; o < vLines.length; o++){
            if(
                hLines[i].x >= vLines[o].x && 
                hLines[i].x + hLines[i].x <= vLines[o].length && 
                hLines[i].y >= vLines[o].y && 
                hLines[i].y <= vLines[o].y + vLines[o].length
            ){
                if(islands[i]){
                    islands[i].push(o)
                }else{
                    islands[i] = [o]
                }
            }

        }
    }
    console.log(islands)
    console.log(hLines)
    console.log(vLines)
}

const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]

const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]

const grid3 = [[]]

console.log(numberOfIslands(grid) === 0)
console.log(numberOfIslands(grid2) === 3)
console.log(numberOfIslands(grid3) === 0)