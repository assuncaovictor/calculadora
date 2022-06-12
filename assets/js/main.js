function calculadora() {
    const input = document.querySelector("input");
    input.value = 0;

    return {
        numero1: "0",
        numero2: undefined,
        input,

        limpaInput() {
            this.numero1 = 0;
            this.numero2 = undefined;
        },

        set adicionaNumero(numero) {
            this.numero1 += `${numero}`;
        },

        get pegaNumero() {
            return;
        },
    };
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

document.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("numero")) {
        calc.adicionaNumero = el.value;
        console.log(calc.numero1);
    }
});

const calc = calculadora();
