// const Integer_to_Roman = function(num){
//     const splited = num.toString().split("")
//     let fiqures = []
//     let roman = "";
//     for(let i = 0; i < splited.length; i++){
//         let zeros = ''
//         for(let j = splited.length - 1; j > i; j--){
//             zeros += "0"
//         }
//         fiqures.push(`${splited[i]}${zeros}`)
//     }
//    const intArr = fiqures.map(str => parseInt(str))
//    for(let i = 0; i < intArr.length; i++){
//     if(intArr[i] === 3000){
//         roman += "MMM"
//     }else if (intArr[i] === 2000){
//         roman += "MM"
//     }else if (intArr[i] === 1000){
//         roman += "M"
//     }else if (intArr[i] === 900){
//         roman += "CM"
//     }else if (intArr[i] === 800){
//         roman += "DCCC"
//     }else if (intArr[i] === 700){
//         roman += "DCC"
//     }else if (intArr[i] === 600){
//         roman += "DC"
//     }else if (intArr[i] === 500){
//         roman += "D"
//     }else if (intArr[i] === 400){
//         roman += "CD"
//     }else if (intArr[i] === 300){
//         roman += "CCC"
//     }else if (intArr[i] === 200){
//         roman += "CC"
//     }else if (intArr[i] === 100){
//         roman += "C"
//     }else if (intArr[i] === 90){
//         roman += "XC"
//     }else if (intArr[i] === 80){
//         roman += "LXXX"
//     }else if (intArr[i] === 70){
//         roman += "LXX"
//     }else if (intArr[i] === 60){
//         roman += "LX"
//     }else if (intArr[i] === 50){
//         roman += "L"
//     }else if (intArr[i] === 40){
//         roman += "XL"
//     }else if (intArr[i] === 30){
//         roman += "XXX"
//     }else if (intArr[i] === 20){
//         roman += "XX"
//     }else if (intArr[i] === 10){
//         roman += "X"
//     }else if (intArr[i] === 9){
//         roman += "IX"
//     }else if (intArr[i] === 8){
//         roman += "VIII"
//     }else if (intArr[i] === 7){
//         roman += "VII"
//     }else if (intArr[i] === 6){
//         roman += "VI"
//     }else if (intArr[i] === 5){
//         roman += "V"
//     }else if (intArr[i] === 4){
//         roman += "IV"
//     }else if (intArr[i] === 3){
//         roman += "III"
//     }else if (intArr[i] === 2){
//         roman += "II"
//     }else if (intArr[i] === 1){
//         roman += "I"
//     }
//    }
// return roman
// }
const integerToRoman = function(num) {
    const romanNumerals = [
        ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
        ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
        ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
    ];
    let roman = "";
    for (let [symbol, value] of romanNumerals) {
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    }

    return roman;
};

console.log(
    integerToRoman(273),
    integerToRoman(2333),
    integerToRoman(2),
    integerToRoman(3998)
)

