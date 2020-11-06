class TareaDone{
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

        let antbt = document.createElement('button');
        antbt.className = 'anterior';

        let horita = document.createElement('div');
        horita.className = 'lahora';
        horita.innerHTML = (
            this.latarea.fecha
        );
        
        component.appendChild(horita);
        component.appendChild(descrip);
        component.appendChild(borrabt);
        component.appendChild(antbt);

        borrabt.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('tareas done/'+this.latarea.id).set(null);
        });

        antbt.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('tareas doing/'+this.latarea.id).set(this.latarea);
            database.ref('tareas done/'+this.latarea.id).set(null);
        });

        return component;
    }
}