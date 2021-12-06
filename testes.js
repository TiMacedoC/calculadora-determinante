//Função auxiliar pra gerar numeros aleatórios (Só para testes)
// Só colar essa linha lá em cima: value="${getRandomInt(-4, 4)}"
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}