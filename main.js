const cpf = document.querySelector("#cpf");
const buttonGerar = document.querySelector("#gerar");
const buttonCopy = document.querySelector("#copy");
const buttonValidar = document.querySelector("#validar");

function gerarCpf() {
    const number1 = aleatorio();
    const number2 = aleatorio();
    const number3 = aleatorio();

    const digito1 = digito(number1, number2, number3);
    const digito2 = digito(number1, number2, number3, digito1);

    return `${number1}.${number2}.${number3}-${digito1}${digito2}`
}

function digito(n1, n2, n3, n4) {
    const numbers = n1.split("").concat(n2.split(""), n3.split(""));

    if(n4 !== undefined) {
        numbers[9] = n4;
    }

    let x = 0;

    for (let i = (n4 !== undefined ? 11:10), j = 0; i >= 2; i--, j++) {
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
    document.querySelector("#exibir-cpf").style.border = "none";
    document.querySelector("#true").setAttribute("hidden", "hidden")
    document.querySelector("#false").setAttribute("hidden", "hidden")
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

function testaCpf(valor) {
    let Soma;
    let Resto;
    Soma = 0;

    if (valor == "00000000000") return false;

    for (i=1; i<=9; i++) Soma = Soma + parseInt(valor.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(valor.substring(9, 10)) )
     
    return document.querySelector("#exibir-cpf").style.border = "3px solid red", document.querySelector("#false").removeAttribute("hidden", "hidden")

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(valor.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(valor.substring(10, 11) ) ) 

    return document.querySelector("#exibir-cpf").style.border = "3px solid red", document.querySelector("#false").removeAttribute("hidden", "hidden")
    return document.querySelector("#exibir-cpf").style.border = "3px solid #1b8f1b", document.querySelector("#true").removeAttribute("hidden", "hidden")
}

buttonValidar.addEventListener("click", () => {
    let valor = cpf.value.replaceAll(".", "").replace("-", "");

    testaCpf(valor)
})
