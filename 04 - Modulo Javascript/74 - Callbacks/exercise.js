function repeatHello(callback) {
    setInterval(callback, 1000);
}

repeatHello(()=> console.log("Hello"));

// perchè repeatHello si aspetta un parametro di tipo funzione e con le arrow io dichiaro una funzione anonima che ogni secondo mi stampa Hello