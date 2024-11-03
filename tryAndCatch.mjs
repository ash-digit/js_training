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
  
const movies = await moviesFunction()
console.log(movies)