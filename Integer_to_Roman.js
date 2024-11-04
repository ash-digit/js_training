const Integer_to_Roman = function(num){
    const splited = num.toString().split("")
    let fiqures = []

    for(let i = 0; i < splited.length; i++){
        // console.log(splited[i])
        for(let j = splited.length; j > i; j--){
            console.log(j , "<---J")
        }

        
        // fiqures.append(`${splited[i]}${zeros}`)
    }
   
}

Integer_to_Roman(273)