const test1 = ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]

const test2 = ["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]


console.log(ArrayChallenge(test1))

function ArrayChallenge(strArr) { 

    const dictionary = strArr[1].split(',')
    const targetWord = strArr[0].split('')

    const frontString = []
    const backString = []

    for(let i = 0; i < dictionary.length; i++){
        const trialWord = dictionary[i].split('')
        const firstLetterMatch = trialWord[0] === targetWord[0]
        
        if(firstLetterMatch) frontString.push({word: trialWord, length: trialWord.length})
    }   

    for(let i = 0; i < dictionary.length; i++){
        const trialWord = dictionary[i].split('')
        const lastLetterMatch = trialWord[trialWord.length - 1] === targetWord[targetWord.length - 1]

        if(lastLetterMatch) backString.push({word: trialWord, length: trialWord.length})
    }

    return matchStrings(frontString, backString, targetWord)
}

function matchStrings(frontString, backString, targetWord){
    for(let i = 0; i < frontString.length; i++){
        for(let u = 0; u < backString.length; u++){
            const match = frontString[i].length + backString[u].length === targetWord.length
            if(match ){
                const frontWord = frontString[i].word.join("")
                const backWord = backString[u].word.join("")
                if(testWord(frontWord, backWord, targetWord)){
                    return frontWord + "," + backWord
                }
            }
        }
    }
}

function testWord(frontWord, backWord, targetWord){
    if(frontWord + backWord === targetWord.join("")){
        return true
    } else {
        return false
    }
}