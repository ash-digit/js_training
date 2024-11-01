function walkTheDog() {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved("I walked the Dog.");
    }, 1500);
  });
}

function cleanTheHouse() {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved("I cleaned the House");
    }, 1000);
  });
}

function buyGraphicsCard() {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved("I just bought a 4090!");
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
  });
