const isPhoebeeHappy = false
  
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