function saludar(){
    console.log("hola mundo")
    /*let miH1 = document.getElementById("miH1")
    let nombre = document.getElementById("txtNombre").value
    miH1.innerHTML = "HOLA" + nombre*/
}
let elemento = document.getElementById("saludarbtn")
elemento.addEventListener("click", saludar)