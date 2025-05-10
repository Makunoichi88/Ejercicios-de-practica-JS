function contraseña(contra) {
    let mayuscula = false;
    let numero = false;
    let larga = false;
    if (contra.length >= 8) {
        larga = true;
        for (let palabra of contra) {
            if (palabra === palabra.toUpperCase() && palabra !== palabra.toLowerCase()) {
                mayuscula = true;
            }
        
        if (!isNaN(palabra)) {
            numero = true;
        }
    }
    if (larga && numero && mayuscula) {
        return true;
    } else {
        return false;
    }
}
}
console.log(contraseña("Maikolandres9"))