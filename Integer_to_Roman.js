const Integer_to_Roman = function(num){
    const splited = num.toString().split("")
    let fiqures = []
    let roman = "";
    for(let i = 0; i < splited.length; i++){
        let zeros = ''
        for(let j = splited.length - 1; j > i; j--){
            zeros += "0"
        }
        fiqures.push(`${splited[i]}${zeros}`)
    }
   const intArr = fiqures.map(str => parseInt(str))
   for(let i = 0; i < intArr.length; i++){
    if(intArr[i] === 3000){
        roman += "MMM"
    }else if (intArr[i] === 2000){
        roman += "MM"
    }else if (intArr[i] === 1000){
        roman += "M"
    }else if (intArr[i] === 500){
        roman += "D"
    }else if (intArr[i] === 400){
        roman += "CD"
    }else if (intArr[i] === 300){
        roman += "CCC"
    }else if (intArr[i] === 200){
        roman += "CC"
    }
   }
console.log(roman)
}

Integer_to_Roman(273)