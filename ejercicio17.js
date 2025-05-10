function frases(palabra) {
    let contador = 0;
    let espacio = " ";
    for(let letra of palabra) {
        if(letra === espacio) {
            contador++;
        }
    }
    return contador;
}
console.log(frases("maikol andresrodriguez"));