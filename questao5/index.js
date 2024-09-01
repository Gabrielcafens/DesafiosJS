function inverterString(str) {
  let invertida = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
      invertida += str[i];
  }

  return invertida;
}
const exemplo = "gabrielcafens metendo bala no front e no back desta vez em node";
const resultado = inverterString(exemplo);

console.log("String original: " + exemplo);
console.log("String invertida: " + resultado);

// Output esperado:
// String original: gabrielcafens metendo bala no front e no back desta vez em node
// String invertida: edon me zev atsde kcab on e tnorf on alab odnetem snefacleirbag
