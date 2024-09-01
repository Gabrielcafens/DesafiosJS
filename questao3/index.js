const fs = require('fs');
const data = JSON.parse(fs.readFileSync('faturamento.json', 'utf8'));

function calcularFaturamento(faturamento) {
    // Filtrar valores positivos e mapear apenas os valores
    const valores = faturamento.filter(item => item.valor > 0).map(item => item.valor);
    
    // Exibir valores para depuração
    console.log('Valores:', valores);
    
    // Calcular o menor e o maior valor
    const menor = Math.min(...valores);
    const maior = Math.max(...valores);
    
    // Calcular a média dos valores
    const media = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;
    
    // Exibir a média para depuração
    console.log('Média:', media);
    
    // Contar o número de dias com faturamento acima da média
    const diasAcimaMedia = valores.filter(valor => valor > media).length;

    return { menor, maior, diasAcimaMedia };
}

const { menor, maior, diasAcimaMedia } = calcularFaturamento(data.faturamento);

console.log(`Menor valor: R$${menor.toFixed(2)}`);
console.log(`Maior valor: R$${maior.toFixed(2)}`);
console.log(`Número de dias acima da média: ${diasAcimaMedia}`);
