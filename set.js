const a = new Set([1, 2, 3]);
a.add("Hey")
a.delete(1)
console.log(a)
console.log(a.has("Hey"), " has the string 'Hey in it' ")

for(let item of a){
    console.log(item)
}

const convertedToArray = Array.from(a);
console.log(Array.isArray(convertedToArray)," convertedToArray is an array")
// Use to remove duplicate elements from an array
const numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];

console.log([...new Set(numbers)]); 