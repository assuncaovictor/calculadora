function calculadora() {
    return {
        calculo: "",
        input: document.querySelector("input"),
        numeros: {
            um: "",
            dois: "",
            operando: "",
        },

        set adicionaNumero(numero) {
            if (this.numeros.operando) this.numeros.dois += numero;
            else this.numeros.um += numero;
            this.mostraNumero();
        },

        set defineOperando(operando) {
            if (this.numeros.dois) this.realizaCalculo();
            this.numeros.operando = operando;
            this.mostraNumero();
        },

        limpaInput() {
            this.calculo = "";
            this.numeros.um = "";
            this.numeros.dois = "";
            this.numeros.operando = "";

            this.mostraNumero();
        },

        removeCaractere() {
            if (this.numeros.dois) this.numeros.dois = this.numeros.dois.substring(0, this.numeros.dois.length - 1);
            else if (this.numeros.operando) this.numeros.operando = "";
            else if (this.numeros.um) this.numeros.um = this.numeros.um.substring(0, this.numeros.um.length - 1);

            this.mostraNumero();
        },

        mostraNumero() {
            this.calculo = `${this.numeros.um} ${this.numeros.operando} ${this.numeros.dois}`;
            this.input.value = this.calculo;
        },

        adicionaDecimal() {
            if (this.numeros.dois && !this.numeros.dois.includes(".")) this.numeros.dois += ".";
            else if (this.numeros.um && !this.numeros.um.includes(".") && !this.numeros.operando) this.numeros.um += ".";

            this.mostraNumero();
        },

        realizaCalculo() {
            const calc = this.calculo;

            this.limpaInput();
            this.adicionaNumero = eval(calc);
        },
    };
}

const form = document.querySelector("form");
const calc = calculadora();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    calc.realizaCalculo();
});

form.addEventListener("click", (e) => {
    const el = e.target;
    if (el.hasAttribute("data-numero")) {
        calc.adicionaNumero = el.innerHTML;
    }

    if (el.hasAttribute("data-operando")) {
        calc.defineOperando = el.innerHTML;
    }

    if (el.innerHTML === "C") {
        calc.limpaInput();
    }

    if (el.innerHTML === ".") {
        calc.adicionaDecimal();
    }

    if (el.innerHTML === "&lt;&lt;") calc.removeCaractere();
});
