function encriptar(){
    let texto = document.getElementById("texto").value;
    let imagen = document.getElementById("imagen");
    let mensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");

    let cifrado = texto 
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if(texto.length !=0){
        document.getElementById("texto").value = cifrado;
        imagen.src = "./img/padlock-g7d2eef014_640.png";
        mensaje.textContent = "Mensaje encriptado";
        parrafo.textContent = "";
    }else{
        alert("Ingrese un texto");
        imagen.src = "./img/detective-g37b759611_640.png";
        mensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingrese texto que desea encriptar o desencriptar";
    }
}