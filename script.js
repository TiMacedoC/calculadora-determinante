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

        entrada.innerHTML += `<li><input type="number" class="valueField" ></li>`;
    }
});

function calcular() {
    let tamanho = input.value;

    const matriz = criarMatriz(tamanho);

    if (tamanho == 3) {
        mostraResultado(calcular3x3(matriz));
    } else if (tamanho == 4) {
        mostraResultado(calcular4x4(matriz));
    }
    else {
        window.alert("Não implementado")
    }
};

// Armazena a Matriz
function criarMatriz(tamanho) {

    var matriz = new Array();

    for (k = 0; k < tamanho; k++) {
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

    return det;
}

function calcular4x4(m) {

    const matrizes3x3 = criarMatrizMenor(m);

    //Vai percorrer a coluna 0 da matriz maior
    let cont = 0;
    let mult = 1;

    let det = 0;

    matrizes3x3.forEach(matriz => {

        det += (mult * m[cont][0]) * calcular3x3(matriz);

        console.log('matriz:', matriz)
        console.log("det", det);

        mult = mult * -1
        cont++;

    });

    return det;
}




//Função que imprime o valor na tela
function mostraResultado(result) {

    document.querySelector(".resultado").innerHTML = `
    <h2 class="tituloResultado">Determinante:</h2>
    <p class="resultado">${result}</p>`;

}


// Função que cria matriz menor
function criarMatrizMenor(m) {
    var vetorDeMatrizes = []

    for (i = 0; i < 4; i++) {
        //Auxiliar que vai me ajudar a preencher corretamente a matriz menor
        var aux = 0;

        //Cria a matriz menor que vai receber os valores
        let matrizMenor = new Array();
        for (cont = 0; cont < 3; cont++) {
            matrizMenor[cont] = new Array();
        }

        //Percorre toda matriz 4x4 e cria as matrizes menores

        for (l = 0; l < 4; l++) {
            for (c = 0; c < 4; c++) {

                if (c != 0 && l != i) {
                    matrizMenor[aux].push(m[l][c]);

                    if (matrizMenor[aux].length > 2) {
                        aux++;
                    }
                }

            }
        }

        vetorDeMatrizes.push(matrizMenor);
    }

    return vetorDeMatrizes;
}

//Função auxiliar pra gerar numeros aleatórios (Só para testes)
// Só colar essa linha lá em cima: value="${getRandomInt(-4, 4)}"
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}