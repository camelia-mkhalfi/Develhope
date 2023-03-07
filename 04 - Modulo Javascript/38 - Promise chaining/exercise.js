const isLogged = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isLogged === true) return resolve(Math.round(Math.random() * 100));
    return reject("Errore: non sei loggato");
  }, 3000);
});

promise
  .then((result) => {
    const secondPromise = new Promise((resolve, reject) => {
      //const number = Math.round(Math.random() * 100);
      if (result > 0.5) return resolve(`nome: John \netà: ${result}`);
      return reject("Errore: età inferiore a 0.5");
    });
    secondPromise
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {
    console.error(error);
  });
