class TareaList{
    constructor(latarea){
        this.latarea = latarea;
    }

    render(){
        let component = document.createElement('div');
        component.className = 'lastareas';

        let descrip = document.createElement('div');
        descrip.className = 'lodescrip';
        descrip.innerHTML = (
            this.latarea.tareasn
        );

        let borrabt = document.createElement('button');
        borrabt.className = 'borrar';

        let sigbt = document.createElement('button');
        sigbt.className = 'siguiente';

        let antbt = document.createElement('button');
        antbt.className = 'anterior';

        let horita = document.createElement('p');
        horita.className = 'lahora';
        horita.innerHTML = (
            this.latarea.id
        );
        
        component.appendChild(horita);
        component.appendChild(descrip);
        component.appendChild(borrabt);
        component.appendChild(sigbt);
        component.appendChild(antbt);

        borrabt.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('tareas/'+this.latarea.id).set(null);
        });

        sigbt.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('tareas/'+this.latarea.id+'/fase').set('tareas doing');
        });

        antbt.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('tareas/'+this.latarea.id+'/fase').set('tareas to do');
        });


        return component;
    }
}