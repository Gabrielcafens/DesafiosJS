// Valores de faturamento mensal por estado
const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const valorTotal = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

for (const estado in faturamento) {
  const percentual = (faturamento[estado] / valorTotal) * 100;
  console.log(`${estado} representa ${percentual.toFixed(2)}% do valor total mensal.`);
}

// Output esperado:
// SP representa 37.53% do valor total mensal.
// RJ representa 20.29% do valor total mensal.
// MG representa 16.17% do valor total mensal.
// ES representa 15.10% do valor total mensal.
// Outros representa 10.97% do valor total mensal.
