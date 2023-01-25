function encriptar() {

    var frase = document.getElementById("mensajeIngresado").value.toLowerCase();

    var mensajeIngresado = frase.replace(/e/img, "enter");
    var mensajeIngresado = mensajeIngresado.replace(/o/img, "ober");
    var mensajeIngresado = mensajeIngresado.replace(/i/img, "imes");
    var mensajeIngresado = mensajeIngresado.replace(/a/img, "ai");
    var mensajeIngresado = mensajeIngresado.replace(/u/img, "ufat");

    document.getElementById("mensajeResultado").innerHTML = mensajeIngresado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function botonEncriptar() {
    const textoEncriptado = encriptar(mensajeResultado.value)
    mensajeIngresado.value = textoEncriptado
    mensajeIngresado.value = "";
    mensajeResultado.style.backgroundImage = "none";
    mjeNoEncontrado.style.display = "none";
    mjeIngresaTexto.style.display = "none";
}

function desencriptar() {

    var frase = document.getElementById("mensajeIngresado").value.toLowerCase();

    var mensajeIngresado = frase.replace(/enter/img, "e");
    var mensajeIngresado = mensajeIngresado.replace(/ober/img, "o");
    var mensajeIngresado = mensajeIngresado.replace(/imes/img, "i");
    var mensajeIngresado = mensajeIngresado.replace(/ai/img, "a");
    var mensajeIngresado = mensajeIngresado.replace(/ufat/img, "u");

    document.getElementById("mensajeResultado").innerHTML = mensajeIngresado;
}

function botonDesencriptar() {
    const textoEncriptado = desencriptar(mensajeResultado.value)
    mensajeIngresado.value = textoEncriptado
    mensajeIngresado.value = "";
    mensajeResultado.style.backgroundImage = "none";
    mjeNoEncontrado.style.display = "none";
    mjeIngresaTexto.style.display = "none";
}

function copiar () {

    var contenido = document.querySelector("#mensajeResultado");
    contenido.select();
    document.execCommand("copy");

}

var botonCopiar = document.querySelector(".copiar");
botonCopiar.onclick = copiar;