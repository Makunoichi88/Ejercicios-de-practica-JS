function palabra(nombre) {
    let contador = 0;
    let vocal = "aeiou";
    for(let letra of nombre.toLowerCase()) {
            if(vocal.includes(letra)) {
                contador++;
            }
    }
    return contador;
}
console.log(palabra("povedaa"));