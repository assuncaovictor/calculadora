function calculadora() {
    return {
        calculo: "",
        input: document.querySelector("input"),

        set adicionaNumero(numero) {
            this.calculo += numero;
            this.mostraNumero();
        },

        set defineOperando(operando) {
            this.operando += operando;
            this.mostraNumero();
        },

        limpaInput() {
            this.calculo = "";
            this.mostraNumero();
        },

        removeCaractere() {
            const len = this.calculo.length;
            this.calculo = this.calculo.substring(0, len - 1);
            this.mostraNumero();
        },

        mostraNumero() {
            this.input.value = this.calculo;
        },
    };
}

const form = document.querySelector("form");
const calc = calculadora();

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

form.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("numero")) {
        calc.adicionaNumero = el.innerHTML;
    }

    if (el.innerHTML === "C") {
        calc.limpaInput();
    }

    if (el.innerHTML === "/") calc.defineOperando = "/";
    if (el.innerHTML === "+") calc.defineOperando = "+";
    if (el.innerHTML === "-") calc.defineOperando = "-";
    if (el.innerHTML === "*") calc.defineOperando = "*";

    if (el.innerHTML === "&lt;&lt;") calc.removeCaractere();
});
