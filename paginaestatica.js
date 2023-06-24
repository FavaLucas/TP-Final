// document.querySelector("form");

// addEventListener("submit", e=> {
//     e.preventDefaul()
//     const datos = Object.fromEntries(
//         new FormData(e.target)
//     )
//         console.log(data);
// });   

const form = document.getElementById("form")
form.addEventListener("submit", function(event){
    event.preventDefault();
}
)

function obtenerDatos(){
 var nombre = document.getElementById("nombre").value;
 var apellido = document.getElementById("apellido").value;
 var email = document.getElementById("email").value;
 var cursos = document.getElementById("cursos").value;
 console.log(nombre);
 console.log(apellido);
 console.log(email);
 console.log(cursos);
}