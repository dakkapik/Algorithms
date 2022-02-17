const numberOfIslands = (grid) => {
    // change this into objects, search better that way?
    const hLines = []
    const vLines = []

    let currentXline;
    let currentYline;

    for(let y = 0; y < grid.length; y++){
        for(let x = 0; x < grid[y].length; x++){
            if(grid[y][x] === "1"){
                if(grid[y][x -1] === undefined || grid[y][x -1] === "0"){
                    if(currentXline) hLines.push(currentXline)

                    currentXline = new Set();
                    currentXline.add(`${x}-${y}`)
                }else{
                    currentXline.add(`${x}-${y}`)
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

                    currentYline = new Set();
                    currentYline.add(`${x}-${y}`)
                }else{
                    currentYline.add(`${x}-${y}`)
                }
            }
        }
    }
    if(currentYline) vLines.push(currentYline)
    //describe the bigO of both loops
    //constant 

    const islands = []

    for(const i in hLines){
        for(const point of hLines[i]){
        
            for(const o in vLines){
                if(vLines[o].has(point)){
                    console.log(vLines[o])
                }
            }

            console.log(point)
        }
    }

    // const xLine = hLines[0]
    // const yLine = vLines[0]

    // const intersection = new Set([...xLine].filter(x => yLine))

    // console.log(intersection)

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
// console.log(numberOfIslands(grid2) === 3)
// console.log(numberOfIslands(grid3) === 0)