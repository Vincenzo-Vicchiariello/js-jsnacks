/Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti./

let inputNumbers = [];
for (let i = 0; i < 10; i++) {
    inputNumbers.push(+prompt("Scrivi un numero"));
}

let sumOfNumbers = 0;

for (let i = 0; i < 10; i++) {

    sumOfNumbers += inputNumbers[i];
}

//inputNumbers.map(x => sumOfNumbers += x);



console.log(sumOfNumbers);

