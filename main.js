const cpf = document.querySelector("#cpf");
const buttonGerar = document.querySelector("#gerar");
const buttonCopy = document.querySelector("#copy");

function gerarCpf() {
    const number1 = aleatorio();
    const number2 = aleatorio();
    const number3 = aleatorio();

    const digito1 = digito(number1, number2, number3);
    const digito2 = digito(number1, number2, number3, digito1);

    return `${number1}.${number3}.${number3}-${digito1}${digito2}`;
}

function digito(n1, n2, n3, n4) {
    const numbers = n1.split("").concat(n2.split(""), n3.split(""));

    if(n4 !== undefined) {
        numbers[9] = n4;
    }

    let x = 0;

    for(let i = (n4 !== undefined ? 11:10), j = 0; i >= 2; i--, j++) {
        x += parseInt(numbers[j]) * i;
    }

    const y = x % 11;

    return y < 2 ? 0 : 11 - y;
}

function aleatorio() {
    const aleat = Math.floor(Math.random() * 999);

    return ("" + aleat).padStart(3, '0');
}

buttonGerar.addEventListener("click", () => {
    cpf.value = gerarCpf();

    document.querySelector("#message").innerHTML = "Copiar";
    document.querySelector("#copy").removeAttribute("disabled", "disabled");
})

buttonCopy.addEventListener("click", () => {
    cpf.select();

    document.execCommand("copy");
    document.querySelector("#message").innerHTML = "Copiado";
})


function message() {
    document.querySelector("#message").style.display = "block";
}

function offMessage() {
    document.querySelector("#message").style.display = "none";
}
