let parola1 = prompt("inserici la prima parola");
let length1 = parola1.length;
let parola2 = prompt("inserici la seconda parola");
let length2 = parola2.length;


if (length1 > length2) {
    console.log(parola1 + parola2)
} else if (length2 > length1) {
    console.log(parola2 + parola1)
}


