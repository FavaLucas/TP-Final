// Utilizo estas lineas para que al clickear el boton, no se me vayan los datos de la consola
const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

// Funcion para obtener los datos ingresados por el usuario en el formulario y mandarlo a la consola
function obtenerDatos() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const cursos = document.getElementById("cursos").value;
  console.log(nombre);
  console.log(apellido);
  console.log(email);
  console.log(cursos);
  validarDatos();
  borrarDatos();
}


// Funcion para validar el input email, se llama en funcion validarDatos();
const esEmailValido = (email) => {
  const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
  return emailRegex.test(email)
}

// FUncion para validar los datos del formulario
function validarDatos(){
  // Valido que los inpunts de id: nombre, apellido, email y cursos sean correctos
  const nombre = document.getElementById("nombre");
  if (nombre.value.trim() == "") {
    document.getElementById("error-nombre").innerHTML ="Ingresa tu nombre!";
  } else if (nombre.value.trim().length < 5) {
    document.getElementById("error-nombre").innerHTML = "El nombre debe tener al menos 5 letras";
  } else {
    document.getElementById("error-nombre").innerHTML= "";
  }

  const apellido = document.getElementById("apellido");
  if (apellido.value.trim() == "") {
    document.getElementById("error-apellido").innerHTML ="Ingresa tu apellido!";
  } else if (apellido.value.trim().length < 5) {
    document.getElementById("error-apellido").innerHTML = "El apellido debe tener al menos 5 letras";
  } else {
    document.getElementById("error-apellido").innerHTML= "";
  }

  const email = document.getElementById('email');
  if (email.value.trim() == "") {
    document.getElementById('error-email').innerHTML = "Ingresa tu email!";
  } else if (!esEmailValido(email.value)) {
    document.getElementById('error-email').innerHTML = "Direccion de email incorrecta";
  } else {
    document.getElementById('error-email').innerHTML = "";
  }

  const cursos = document.getElementById("cursos");
  if (cursos.value.trim() == "") {
    document.getElementById("error-cursos").innerHTML ="En que cursos te queres anotar?";
  // } else if (apellido.value.trim().length < 5) {
  //   document.getElementById("error-apellido").innerHTML = "El apellido debe tener al menos 5 letras";
  } else {
    document.getElementById("error-apellido").innerHTML= "";
  }

}


// Funcion para dejar en blanco los datos del formulario despues de enviarlos a consola.
function borrarDatos() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cursos").value = "";
}

//   let inputs = document.querySelectorAll(".input");
//   for (let i = 0; i< inputs.length; i++) {
//     inputs[i].value = "";
// }




//Idea de mi JS

// Al generarse el onclick en el boton submit se llama a la funcion obtenerDatos(), lo que se hace es capturar la informacion de cada campo del formulario y mostrarlo en crossOriginIsolated, sin importar lo que el usuario haya ingresado, es decir sea correcto o no. Luego la funcion valida los compos del formulario segun los criterios establecidos y aposterior se borran los inputs para que el formulario vuelva a quedar vacio 


// Falta validar datos del formulario
// Intentat utilizar funciones flecha

