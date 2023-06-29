// document.querySelector("form");

// addEventListener("submit", e=> {
//     e.preventDefaul()
//     const datos = Object.fromEntries(
//         new FormData(e.target)
//     )
//         console.log(data);
// });

const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

});

function obtenerDatos() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var cursos = document.getElementById("cursos").value;
  console.log(nombre);
  console.log(apellido);
  console.log(email);
  console.log(cursos);
}





// // agregar validacion de jose
// const enviarFormulario = () => {
//   let formularioCorrecto = true;
//   const nombreInput = document.getElementById("nombre");
//   // .trim quita los espacios en blanco
//   if (nombreInput.value.trim() == "") {
//   //  Error de required
//   document.getElementById("error-nombre").innerHTML = "El nombre es requerido"
//   formularioCorrecto = false;
//   } else if (nombreInput.value.trim().length < 5){
//     document.getElementById("error-nombre").innerHTML = "El nombre debe tener un minimo de 4 caracteres"
//     formularioCorrecto = false;
//   } else {
//     document.getElementById("error-nombre").innerHTML = ""
//   }
// const inicializarJs = () =>












