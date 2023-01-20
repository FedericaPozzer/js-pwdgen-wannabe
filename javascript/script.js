let user_name = prompt("come ti chiami?");
let user_surname = prompt("quale è il tuo cognome?");
let favourite_color = prompt("quale è il tuo colore preferito?");

console.log(`${user_name} ${user_surname} ${favourite_color}`);

const user_password = (user_name + user_surname + favourite_color + "23");

