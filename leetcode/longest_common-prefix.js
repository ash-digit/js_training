let input = ['flower', 'flow', 'flight'];
let temp = ['a', 'ab', 'abc', 'b']
let temp2 = []

let longestCommenPrefix = function(arr){//using vertical comparison
    let prefix = ''
    if(arr.length === 0) return prefix;

    for(let i = 0; i < arr[0].length; i++){//Loop through the first string's characters in the array
        const character = arr[0][i];//Assigning the current character to the character variable
        for(let j = 0; j < arr.length; j++){//Loop through all elements of arr
            if (arr[j][i] !== character) return prefix//
        }
        prefix = prefix + character
    }
    return prefix;

}

console.log(longestCommenPrefix(input))