const selectTipo = document.getElementById("tipo")
const selectsubtipo = document.getElementById("subtipo")
const enviar = document.getElementById("enviar")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const usuario = document.getElementById("usuario")
const server = document.getElementById("server")
const direccion = document.getElementById("direccion")


selectTipo.addEventListener("change", function() {
  const valorSeleccionado = selectTipo.value
  switch (valorSeleccionado) {
    case "1":
      selectsubtipo.disabled = false
      selectsubtipo.value = 0
      selectsubtipo.options[1].text = "Botellas"
      selectsubtipo.options[2].text = "Envases"
      selectsubtipo.options[3].text = "Bolsas"
      break;
    case "2":
      selectsubtipo.disabled = false
      selectsubtipo.value = 0
      selectsubtipo.options[1].text = "Periódicos"
      selectsubtipo.options[2].text = "Cartón"
      selectsubtipo.options[3].text = "Papel de Oficina"
      break;
    case "3":
      selectsubtipo.disabled = false
      selectsubtipo.value = 0
      selectsubtipo.options[1].text = "Botellas"
      selectsubtipo.options[2].text = "Frascos"
      selectsubtipo.options[3].text = "Cristalería"
      break;
    case "4":
      selectsubtipo.disabled = false
      selectsubtipo.value = 0
      selectsubtipo.options[1].text = "Latas"
      selectsubtipo.options[2].text = "Cables"
      selectsubtipo.options[3].text = "Electrodomésticos Pequeños"
      break;
    case "5":
      selectsubtipo.disabled = false
      selectsubtipo.value = 0
      selectsubtipo.options[1].text = "Teléfonos Móviles"
      selectsubtipo.options[2].text = "Baterías"
      selectsubtipo.options[3].text = "Componentes de Computadoras"
      break;
    default:
      selectsubtipo.value = 0
      selectsubtipo.disabled = true
      break;
  }
});

enviar.addEventListener("click", function() {
    let bien = false
    if(selectTipo.value == 0){
        alert("seleccione tipo")
    } else if(selectsubtipo.value == 0){
        alert("seleccione subtipo")
    } else if(nombre.value == "" || apellido.value == ""){
        alert("complete nombre y apellido")
    } else if(usuario.value == "" || server.value == ""){
        alert("complete bien el correo")
    } else if(direccion.value == ""){
        alert("complete bien la dirección")
    } else {
        bien = true
    }
    if(bien){
        alert("Su solicitud fue enviada correctamente")
    }
})