//querySelector accede a cualquier parte de la etiqueta html, ya sea clase o id.
var contenido = document.querySelector('#contenido');

function traer() {
    //Dentro del fetch va la url que queremos ocupar
    fetch('tabla.json')
    .then(res => res.json()) // La primera promesa trae los datos y los transforma en texto (formato que se puede leer) 
    .then(datos => { 
        //console.log(data)
        tabla(datos)
    })
}

// Creando función tabla
function tabla(datos){
    console.log(datos)
    contenido.innerHTML = '' //String vacío
    for(let i of datos){
       // console.log(i.nombre)
       contenido.innerHTML += `
       <tr>
        <th scope="row">${i.id}</th>
        <td>${i.nombre}</td>
        <td>${i.email}</td>
        <td>${i.estado ? "Activo" : "Eliminado"}</td>
       </tr>
       ` // El signo (?) funciona como un condicional de línea (if) dentro de un template, y (:) funciona como un else. Si el estado es tru, ejecuta la primera acción (Activo), de lo contarrio, si es false ejecuta la segunda acción (Eliminado). Se separa lo verdadero de lo falso con los dos puntos (:)
    }
}