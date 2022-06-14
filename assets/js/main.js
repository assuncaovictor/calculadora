function Calculator() {
    // Atributo privado
    const input = document.querySelector("[data-input]");

    // métodos públicos
    this.start = () => {
        clickButtons();
        pressEnter();
    };

    this.appendParans = (value) => {
        input.value += value;
    };

    this.clearInput = () => {
        input.value = "";
    };

    this.deleteOne = () => {
        input.value = input.value.slice(0, -1);
    };

    this.calculate = () => {
        try {
            input.value = eval(input.value);

            if (isNaN(input.value)) {
                throw new Error("Conta inválida");
            }
        } catch (e) {
            alert("Conta inválida");
            this.clearInput();
        }
    };

    // Métodos privados
    const clickButtons = () => {
        document.addEventListener("click", (e) => {
            const el = e.target;

            if (el.hasAttribute("data-number")) {
                this.appendParans(el.innerText);
            }

            if (el.hasAttribute("data-clear")) {
                this.clearInput();
            }

            if (el.hasAttribute("data-delete")) {
                this.deleteOne();
            }

            if (el.hasAttribute("data-equals")) {
                this.calculate();
            }
        });
    };

    const pressEnter = () => {
        input.addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
                this.calculate();
            }
        });
    };
}

const calculator = new Calculator();
calculator.start();
