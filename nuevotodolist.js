const inputTarea = document.getElementById("input-tarea");
const listContainer = document.getElementById("list-container")



function agregarTarea() {
    if (inputTarea.value === ""){
        alert("Debe agregar una tarea!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputTarea.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputTarea.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false)