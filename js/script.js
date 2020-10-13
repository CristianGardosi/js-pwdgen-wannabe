// USERNAME
var username = prompt('Quale è il tuo nome?');

//USERNAME console.log
console.log('NOME INSERITO:', username);


// SURNAME
var surname = prompt('Quale è il tuo cognome?');

//SURNAME console.log
console.log('COGNOME INSERITO:', surname);


// COLORE
var colore = prompt('Quale è il tuo colore preferito?');

//COLORE console.log
console.log('COLORE INSERITO:', colore);

// NUMERO
var numero = parseInt( prompt('Quale è il tuo numero preferito?') );

//NUMERO console.log
console.log('NUMERO INSERITO:', numero);


//PASSWORD GENERATA
document.getElementById('password').innerHTML = username + surname + colore + numero;