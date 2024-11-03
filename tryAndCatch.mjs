const isPhoebeeHappy = true
  
  try{
    if(!isPhoebeeHappy){
        throw new Error("Aww, the world can't be a happy place!");
    }
  }
  catch (e) {
    console.log(e)
  }
  finally{
    console.log("this would run no matter if Phoebe is happy or not!")
  }

  const url = "https://dummyapi.online/api/movies";

 async function moviesFunction(){
    try{
        const movies = await fetch(url)
        const parsedMovies = await movies.json()
        return parsedMovies
      }
      catch(e){
        console.log(e, "<-----the error in catch block")
      }
  }
  
// const movies = await moviesFunction()
// console.log(movies)

const jsonStrings = [
  '{"name": "Alice", "age": 25}',         // Valid JSON
  '{"name": "Bob", "age": 30}',           // Valid JSON
  '{"name": "Charlie", "age": "thirty"}', // Valid JSON
  '{name: "Dave", "age": 40}',            // Invalid JSON (missing quotes around name)
  '{"name": "Eve", "age":}',              // Invalid JSON (incomplete object)
];

async function jsonParser(arr){
  for(let i = 0; i < arr.length ; i++){
    try{  
      const parsedObj =  JSON.parse(arr[i])
      console.log(`Parsed object at index ${i}: ${arr[i]}`)
    }
    catch(err){

      console.log(`Invalid JSON at index ${i}`)
    }
  }
}
jsonParser(jsonStrings)