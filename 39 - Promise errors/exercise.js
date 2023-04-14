const isLogged = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      if (isLogged === true) return resolve(Math.round(Math.random() * 100));
    } catch (error) {
      return reject(error);
    }
  }, 3000);
});

promise
  .then((result) => {
    const secondPromise = new Promise((resolve, reject) => {
      try {
        if (result > 0.5) return resolve(`nome: John \netà: ${result}`);
      } catch (error) {
        return reject(error);
      }
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
  })
  .finally(() => {
    console.log("\nLe promise sono state correttamente completate\n");
  });
