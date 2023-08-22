//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato.

//Chiedere il nome all'utente

const userName = prompt ("Inserisci il tuo nome")
console.log(userName);

//Chiedere il suo all'utente

const userSurname = prompt ("Inserisci il tuo cognome")
console.log(userSurname);

//Chiedere il colore preferito all'utente

const userColor = prompt ("Inserisci il nome del colore che preferisci")
console.log(userColor);

//Chiedere l'età all'utente

const userAge = prompt ("Inserisci la tua attuale età")
console.log(userAge);

//Riportare il risultato in pagina

document.getElementById("info").innerHTML = userName + userSurname + userColor + userAge;