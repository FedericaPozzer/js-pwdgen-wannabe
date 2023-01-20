// CHIEDO INFO
let user_name = prompt("come ti chiami?");
let user_surname = prompt("quale è il tuo cognome?");
let favourite_color = prompt("quale è il tuo colore preferito?");

    // le stampo in console per vedere se è tutto ok - OK!
console.log(`${user_name} ${user_surname} ${favourite_color}`);

// CALCOLO PASSWORD
const user_password = `${user_name}${user_surname}${favourite_color}23`;

    // stampo in console per vedere se è tutto ok - OK!
console.log(user_password);

// ok, vediamo se funziona ---> YESSS!
document.getElementById("password").innerHTML = user_password;