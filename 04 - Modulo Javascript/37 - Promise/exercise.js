const number = 15;

const promise = new Promise((resolve, reject) => {
    if(number>10) return resolve("Number è maggiore di 10");
    return reject("Errore nella promise");
})

promise
.then((result) =>{
    console.log(result);
})
.catch((error) =>{
    console.error(error);
})