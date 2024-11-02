//this is just a very simple example of Promise object
//I call this block of code: part ONE and this is the begining of it

function walkTheDog() {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      const isTheDogWalked = true;
      if (isTheDogWalked) {
        resolved("I walked the Dog.");
      } else {
        rejected("Nope You didn't walk the dog, How dare you!");
      }
    }, 1500);
  });
}

function cleanTheHouse() {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      const isCleaned = true;
      if (isCleaned) {
        resolved("I cleaned the House");
      } else {
        rejected("You didn't clean the house!");
      }
    }, 1000);
  });
}

function buyGraphicsCard() {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      const isBought = false;
      if (isBought) {
        resolved("I just bought a 4090!");
      } else {
        rejected("Nope, You did not buy the 4090!)");
      }
    }, 3000);
  });
}

walkTheDog()
  .then((dogThing) => {
    console.log(dogThing);
    return cleanTheHouse();
  })
  .then((houseThing) => {
    console.log(houseThing);
    return buyGraphicsCard();
  })
  .then((gpuThing) => {
    console.log(gpuThing);
    console.log("I've done too much! need some refreshment!");
  })
  .catch((rejected) => {
    console.log(rejected);
    console.log("You didn't complete the tasks!");
  });

//this is the end of part ONE
