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
    let referencia = database.ref('tareas/').push();   
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
        fase: 0,
        fecha: fechita,
    }  
    

    referencia.set(latarea);
    tarea.value='';
}

//ACCION DE PUBLICAR
btnueva.addEventListener('click',postear);

//LECTURA
database.ref('tareas/').on('value', function(data){
    todoLista.innerHTML = '';
    doingLista.innerHTML = '';
    data.forEach(
        latarea => {
            let valor = latarea.val();
            let fila = new TareaList(valor);
            if(valor.fase == 0){
                todoLista.appendChild(fila.render());
            }
        
            if(valor.fase == 1){
                doingLista.appendChild(fila.render());
            }

            if(valor.fase == 2){
                doneLista.appendChild(fila.render());
            }
            
        }
    );
});
