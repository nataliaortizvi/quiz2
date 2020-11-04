//DECLARACIONES
var database = firebase.database();

const tareas = document.getElementById('tarea');
const btnueva = document.getElementById('nueva');
const todoLista = document.getElementById('todo');
const doingLista = document.getElementById('doing');
const doneLista = document.getElementById('done');

//FUNCIONES
postear = () => {

    //si no escribe nada en un campo
     if(tareas.value == ''){
        alert('Hay un campo vacio');
        return;
    }

    //value de las variables
    let referencia = database.ref('usuario/').push();   
    let t = tareas.value;

    //objeto del usuario con el post
    let latarea = {
        tareasn: t,
        id: referencia.key,
    }  

    referencia.set(latarea);
    tarea.value='';
}

//ACCION DE PUBLICAR
btnueva.addEventListener('click',postear);

//LECTURA
database.ref('usuario/').on('value', function(data){
    todoLista.innerHTML = '';
    doingLista.innerHTML = '';
    doneLista.innerHTML = '';
    data.forEach(
        latarea => {
            let valor = latarea.val();
            console.log(valor);
            let fila = new TareaList(valor);
            todoLista.appendChild(fila.render());
            doingLista.appendChild(fila.render());
            doneLista.appendChild(fila.render());
        }
    );
});