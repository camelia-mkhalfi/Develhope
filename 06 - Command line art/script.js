const figlet = require('figlet');

figlet('Hi  Camelia !', function(err, data) {
  if (err) {
    console.log('Errore nella stampa');
    return;
  }
  console.log(data);
});
