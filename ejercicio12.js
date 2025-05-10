function valor(num1) {
    if (num1 >0) {
    return `es positivo`;
    } else if (num1 < 0) {
        return `es negativo`;
    } else if (num1 === 0) {
        return `es igual a 0`;
    }
}
console.log(valor(0))