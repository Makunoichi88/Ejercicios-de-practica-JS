function letraespecifica(cadena) {
    let letter = "a";
    let contador = 0;
    cadena = cadena.toLowerCase();
    for (let letra of cadena) {
        if (letra === letter){
            contador++;
        }
    }
    return contador;
}
console.log(letraespecifica("maikol"));