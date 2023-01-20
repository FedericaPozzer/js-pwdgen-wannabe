// CHIEDO INFO
let user_name = prompt("come ti chiami?");
let user_surname = prompt("quale è il tuo cognome?");
let favourite_color = prompt("quale è il tuo colore preferito?");

    // le stampo in console per vedere se è tutto ok - OK!
console.log(`${user_name} ${user_surname} ${favourite_color}`);

// CALCOLO PASSWORD - prima funzionava anche senza parentesi tonde, ma quello sotto (quello del bonus) no, e allora le ho aggiunte anche qui!
const user_password = (`${user_name}${user_surname}${favourite_color}23`);

    // stampo in console per vedere se è tutto ok - OK!
console.log(user_password);

// ok, vediamo se funziona ---> YESSS!
document.getElementById("password").innerHTML = user_password;


// BONUS-1:

    // chiedo il numero preferito
let favourite_number = prompt("quale è il tuo numero preferito?")
    // stampo in console - OK!
console.log(`${favourite_number}`);
    // creo il bonus
const bonus_password = (`${user_name}${user_surname}${favourite_color}${favourite_number}`);
    // funziona? - SI!
console.log(bonus_password);
    // stampo in HTML
document.getElementById("bonus-password").innerHTML = bonus_password;







