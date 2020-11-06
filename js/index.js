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
    let referencia = database.ref('tareas todo/').push();   
    let t = tareas.value;
    let fecha = new Date();
    let anno = fecha.getFullYear();
    let months = fecha.getMonth();
    let days = fecha.getDay();

    let h = fecha.getHours();
    let m = fecha.getMinutes();
    let s = fecha.getSeconds();

    let laHora = h+':'+m+':'+s;
    let fechita = anno+'-'+months+'-'+days+'  ('+laHora+')';

    console.log(laHora);

    //objeto del usuario con el post
    let latarea = {
        tareasn: t,
        id: referencia.key,
        fecha: fechita,
    }  
    

    referencia.set(latarea);
    tarea.value='';
}

//ACCION DE PUBLICAR
btnueva.addEventListener('click',postear);

//LECTURA TO DO
database.ref('tareas todo/').on('value', function(data){
    todoLista.innerHTML = '';
    data.forEach(
        latarea => {
            let valor = latarea.val();
            let fila1 = new TareaList(valor);
            todoLista.appendChild(fila1.render());
        }
    );
});

//LECTURA DOING
database.ref('tareas doing/').on('value', function(data){
    doingLista.innerHTML = '';
    data.forEach(
        latarea => {
            let valor = latarea.val();
            let fila2 = new TareaDoing(valor);
            doingLista.appendChild(fila2.render());
        }
    );
});

//LECTURA DONE
database.ref('tareas done/').on('value', function(data){
    doneLista.innerHTML = '';
    data.forEach(
        latarea => {
            let valor = latarea.val();
            let fila3 = new TareaDone(valor);
            doneLista.appendChild(fila3.render());
        }
    );
});
