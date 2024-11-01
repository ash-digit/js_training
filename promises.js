function aPromiseFunction() {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved("a Promise has been resolved");
    }, 1500);
  });
}

function anotherPromiseFunction() {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved("this is the other Promise from anotherPromiseFunction");
    }, 1000);
  });
}

aPromiseFunction()
  .then((resolved) => {
    console.log(resolved);
    return anotherPromiseFunction();
  })
  .then((value) => {
    console.log(value);
  });
