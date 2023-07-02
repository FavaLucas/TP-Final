//Variables para guardar el elemento input id: input-area
const inputTarea = document.getElementById("input-tarea");
//Variables para guardar el elemento ul id: list-container que contendra todas las tareas dentro
const listContainer = document.getElementById("list-container");

//Funcion para agregar 1 nueva tarea
function agregarTarea() {
  //Si el contenido del input esta vacio mostramos mensaje una alerta para que se ingrese alguna tarea
  if (inputTarea.value === "") {
    alert("Debe agregar una tarea!");
  } else {
    //Creamos un elemento tipo li y lo guardamos en la variable li
    let li = document.createElement("li");
    //En el innerHTML (nombre del li) de ese li, cargamos el texto que cargo el usuario en el input de agregar tarea
    li.innerHTML = inputTarea.value;
    //en la variable listContainer (que era un UL), agregamos un nuevo li cuyo nombre sera lo que el usuario cargo como tarea
    listContainer.appendChild(li);
    //Creamos un elemento span y como innerHTML (nombre del span ponemos una X (u00d7))
    let span = document.createElement("span");
    span.innerHTML = "X";
    //Al mismo li que se creo se le carga ese span con la x
    li.appendChild(span);
    actulizarEstadoTareas();
  }
  //Dejo en blancl el input despues de crear el elemento
  inputTarea.value = "";
  //llamo a la funcion para guardar los datos en el localStorage
  guardarTareas();
}

//Si el usuario realiza un click en algun LI se le cambia el estado a checked o unchecked
//Si el usuario hace click en el boton de elimiar, se elimina el padre que lo contiene (todo el li)
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      guardarTareas();
      actulizarEstadoTareas();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      guardarTareas();
      actulizarEstadoTareas();
    }
  },
);

//funcion que guarda los datos en el localStorage
function guardarTareas() {
  localStorage.setItem("tareas", listContainer.innerHTML);
}
//Recupera las tareas del localstorage y las muestra en pantalla.
function mostrarTareasGuardadas() {
  listContainer.innerHTML = localStorage.getItem("tareas");
}
//Funcion para actualizar el estado de la lista de las tareas (finalizadas o pendientes)
function actulizarEstadoTareas() {
  let pendientes = document.querySelectorAll("li");
  let finalizadas = document.querySelectorAll(".checked");

  let stats = document.getElementById("stats");

  stats.innerHTML = `<div><p class="estilo-estados">En curso: ${pendientes.length} - Finalizados: ${finalizadas.length}</p></div>`;
}

// llamo a la funcion para que se muetren las tareas guardadas si es que las hay.
mostrarTareasGuardadas();
actulizarEstadoTareas();

// let nuevaTarea = `
//     <li class="checked"> ${inputTarea.value}
//         <span><img clas"span-img" src="/imagenes/nuevoBorrar.png"></span>
//     </li>`

// listContainer.innerHTML += nuevaTarea
