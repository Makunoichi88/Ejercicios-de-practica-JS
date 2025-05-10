function palindromo(palabra) {
    let pal = false;
    let alreves;
    let minuscula = palabra.toLowerCase();
    minuscula = minuscula.replace(/ /g, "" );
    alreves = minuscula.split("").reverse().join("");
    if (minuscula === alreves) {
        pal = true;
    } else {
        pal = false;
    }
    return pal;
}
console.log(palindromo("rec o no cer"));