async function f(){
    const url = "https://dummyapi.online/api/movies";
    const movies = await fetch(url)
    const parsedMovies = await movies.json()
return parsedMovies
}
// f().then(x => console.log(x))
const movies = await f();
console.log(movies)
console.log("hello")