function contarVocales(palabra) {
  let contador = 0;
  let vocales = "aeiou";

  for (let letra of palabra.toLowerCase()) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

// Ejemplo de uso:
console.log(contarVocales("Baranoa")); // Muestra: 4
console.log(contarVocales("Javascript")); // Muestra: 3
