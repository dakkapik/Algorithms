const test1 = "canarfjsfdsga"

const result = removeDups(test1)
console.log(result)


function removeDups(str){
    const hashMap = {}
    let array = str.split("")

    for(let i = 0; i < array.length; i++){
        if(hashMap[array[i]]){
            hashMap[array[i]] ++
        }else {
            hashMap[array[i]] = 1
        }
    }
    
    for(let i = 0; i < array.length; i++){

        if(hashMap[array[i]] > 1){
            hashMap[array[i]] = 1
            array[i] = ''
        } else if (hashMap[array[i]] === 1){
            delete hashMap[array[i]]
        } else {
            array[i] = ''
        }
    }
    
    return array.join("")
}