//Variables para guardar el elemento input id: input-area
const inputTarea = document.getElementById("input-tarea");
//Variables para guardar el elemento ul id: list-container que contendra todas las tareas dentro
const listContainer = document.getElementById("list-container")


//Funcion para agregar 1 nueva tarea 
function agregarTarea() {
    //Si el contenido del input esta vacio mostramos mensaje una alerta para que se ingrese alguna tarea
    if (inputTarea.value === ""){
        alert("Debe agregar una tarea!");
    }
    //Sino
    else {
        //Creamos un elemento tipo li y lo guardamos en la variable li
        let li = document.createElement("li");
        //En el innerHTML (nombre del li) de ese li, cargamos el texto que cargo el usuario en el input de agregar tarea
        li.innerHTML = inputTarea.value;
        //en la variable listContainer (que era un UL), agregamos un nuevo li cuyo nombre sera lo que el usuario cargo como tarea
        listContainer.appendChild(li);
        //Creamos un elemento span y como innerHTML (nombre del span ponemos una X (u00d7))
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"

        //Al mismo li que se creo se le carga ese span con la x
        li.appendChild(span);
        
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        // INICIO PRUEBA CARGAR ADEMAS UNA IMAGENNNN
        // let imgDiv = document.createElement("div");
        // imgDiv.style.backgroundImage = "TP-Final\imagenes\nuevoBorrar.png"
        // li.appendChild(imgDiv);
        // FIN DE PRUEBA PRUEBAAAA
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        actulizarEstadoTareas();
    }
    //Dejo en blancl el input despues de crear el elemento
    inputTarea.value = "";
    // llamado a funcion para que guarde los datos
    //llamo a la funcion para guardar los datos en el localStorage
    guardarTareas();
    
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        guardarTareas();
        actulizarEstadoTareas()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        guardarTareas();
        actulizarEstadoTareas();
    }
}, false);

//funcion que guarda los datos en el localStorage
function guardarTareas(){
    localStorage.setItem("tareas", listContainer.innerHTML)
}
S
function mostrarTareasGuardadas(){
    listContainer.innerHTML = localStorage.getItem("tareas");
}

function actulizarEstadoTareas(){
    console.log("hola");
    let pendientes = document.querySelectorAll('li');
    let finalizadas = document.querySelectorAll('.checked');

    let stats = document.getElementById("stats");

    stats.innerHTML = `<div><p class="estilo-estados">En curso: ${pendientes.length} - Finalizados: ${finalizadas.length}</p></div>`
};



// llamo a la funcion para que se muetren las tareas guardadas si es que las hay.
mostrarTareasGuardadas();
actulizarEstadoTareas();
