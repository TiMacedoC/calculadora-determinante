const input = document.querySelector("#tamanho");

const matrizField = document.querySelector(".matrizField");
const entrada = document.querySelector(".entrada");

//desenha a matriz quando o tamanho é selecionado
input.addEventListener("input", () => {
    document.querySelector(".resultado").innerHTML = "";

    entrada.innerHTML = "";

    //muda o estilo da matriz no css
    document.documentElement.style.setProperty("--grid-size", input.value)

    //Desenha a matriz na tela 
    const index = Math.pow(input.value, 2)
    for (i = 0; i < index; i++) {

        entrada.innerHTML += `<li><input type="number" class="valueField"></li>`;
    }

    if (input.value == 3) {
        document.getElementById("button").disabled = false;
    } else {
        document.getElementById("button").disabled = true;
    }

});

function calcular() {
    let tamanho = input.value;

    const matriz = criarMatriz(tamanho);

    calcular3x3(matriz);
};

// Armazena a Matriz
function criarMatriz(tamanho) {

    var matriz = new Array();

    for (var k = 0; k < tamanho; k++) {
        console.log("entrou");
        matriz[k] = new Array();
    }

    const valores = document.querySelectorAll(".valueField");

    let i = 0;
    let j = 0;

    valores.forEach((valor) => {

        if (j < tamanho) {
            matriz[i][j] = valor.value;
            j++;
        } else {
            i++;
            j = 0;
            matriz[i][j] = valor.value;
            j++;
        }
    })

    return matriz;
}

// Funções que calculam o Fatorial para cada tamanho de matriz
function calcular3x3(m) {

    const det = (
        ((m[0][0] * m[1][1] * m[2][2]) +
            (m[0][1] * m[1][2] * m[2][0]) +
            (m[0][2] * m[1][0] * m[2][1])) -
        ((m[0][2] * m[1][1] * m[2][0]) +
            (m[0][0] * m[1][2] * m[2][1]) +
            (m[0][1] * m[1][0] * m[2][2]))
    )

    //Chama a função que escreve o determinante na tela
    mostraResultado(det);
}

//Função que imprime o valor na tela
function mostraResultado(result) {

    document.querySelector(".resultado").innerHTML = `
    <h2 class="tituloResultado">Determinante:</h2>
    <p class="resultado">${result}</p>`;

}
