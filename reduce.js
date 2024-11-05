let arr = [1,2,3,4,5]
const func = (acc, curr)=>{
    return acc += curr
}
const resault = arr.reduce(func)

console.log(resault)