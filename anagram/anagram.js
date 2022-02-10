const getAnagram = (array) => {
    const sortedStrings = {}
    for(let i = 0; i < array.length; i++){
        const currentString = array[i].split('').sort().join('')
        if(sortedStrings[currentString]){
            sortedStrings[currentString] ++
        }else{
            sortedStrings[currentString] = 1;
        }
    }

    return Object.keys(sortedStrings).length
}

const str = "bca"
console.log(str.split('').sort().join(''))

console.log(getAnagram(["abc","bca","foo"]) === 2)
console.log(getAnagram(["catcat","ttaacc","food","foo"]) === 3)
console.log(getAnagram([]) === 0)