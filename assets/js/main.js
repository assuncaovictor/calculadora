function createCalculator() {
    return {
        input: document.querySelector("[data-input]"),

        start() {
            this.clickButtons();
            this.pressEnter();
        },

        appendParans(value) {
            this.input.value += value;
        },

        clearInput() {
            this.input.value = "";
        },

        deleteOne() {
            this.input.value = this.input.value.slice(0, -1);
        },

        pressEnter() {
            this.input.addEventListener("keyup", (e) => {
                if (e.keyCode === 13) {
                    this.calculate();
                }
            });
        },

        calculate() {
            try {
                this.input.value = eval(this.input.value);

                if (isNaN(this.input.value)) {
                    throw new Error("Conta inválida");
                }
            } catch (e) {
                alert("Conta inválida");
                this.clearInput();
            }
        },

        clickButtons() {
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
        },
    };
}

const calculator = createCalculator();
calculator.start();
