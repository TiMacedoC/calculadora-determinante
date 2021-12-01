const input = document.querySelector("#tamanho");

const matrizField = document.querySelector(".matrizField");
const entrada = document.querySelector(".entrada");

input.addEventListener("input", () => {

    entrada.innerHTML = "";

    const index = Math.pow(input.value, 2)

    console.log(index);

    //muda o estilo da matriz no css
    document.documentElement.style.setProperty("--grid-size", input.value)

    //Desenha a matriz na tela 
    for (i = 0; i < index; i++) {

        entrada.innerHTML += `<li><input type="number" class="valueField"></li>`;
    }

})

