let number1 = prompt("scrivi il primo numero grazie");
let number2 = prompt("scrivi il secondo numero grazie");

parseInt(number1);
parseInt(number2);

if (number1 > number2) {
    console.log(number1)
} else if (number2 > number1) {
    console.log(number2)
} else {
    console.log("i numeri sono uguali o non hai inserito 2 numeri.")
}
