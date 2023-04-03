* /In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/


let gatsbySGuests = ["Tizio", "Caio", "Sempronio", "Ambrogio", "Giammaria", "Adolf Hitler", "Francisco Franco", "Ted Kaczynski"];

console.log(gatsbySGuests);

let userInputName = prompt("come ti chiami?");

if (gatsbySGuests.includes(userInputName)) {
    console.log("Sei stato invitato!");
} else {
    console.log("Non sei stato invitato.");
}