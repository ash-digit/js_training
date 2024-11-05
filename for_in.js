const person = {fname:"John", lname:"Doe", age:25};

for(key in person){
    console.log(person[key],"<---value")// good way to access the value in some cases
    console.log(key, "<---key")// good way to access the key
    console.log("--------------------------")
}