// CHIEDO INFO
let user_name = prompt("come ti chiami?");
let user_surname = prompt("quale è il tuo cognome?");
let favourite_color = prompt("quale è il tuo colore preferito?");

    // le stampo in console per vedere se è tutto ok - OK!
console.log(`${user_name} ${user_surname} ${favourite_color}`);

// CALCOLO PASSWORD
const user_password = `${user_name}${user_surname}${favourite_color}23`;
// si poteva scrivere anche così:
//  const user_password = user_name + user_surname + favourite_color + "23";
// e anche così:
// const user_password = la password è: ${user_name}${user_surname}${favourite_color};
// ma il metodo usato (che si chiama "literal template" è il migliore!)
// andava bene anche (sempre literal):
// const user_password = `${user_name + user_surname ecc}` che funziona ma si usa più che altro per fare somme, se no è meglio scriverle separate (ogniuna nella sua $graffa)

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
const bonus_password = `${user_name}${user_surname}${favourite_color}${favourite_number}`;
    // funziona? - SI!
console.log(bonus_password);
    // stampo in HTML
document.getElementById("bonus-1").innerHTML = bonus_password;

// BONUS-2:
    // generare un numero random -ok!
document.getElementById("bonus-random-number").innerHTML = Math.floor(Math.random() * 100);
    // e poi??
const bonus_password_two = `${user_name}${user_surname}${favourite_color}${Math.floor(Math.random() * 100)}`;
console.log(bonus_password_two);
    //stampo in HTML - yeeee!
document.getElementById("bonus-2").innerHTML = bonus_password_two;
