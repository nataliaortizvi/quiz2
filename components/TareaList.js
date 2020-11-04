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
        
        component.appendChild(descrip);
        component.appendChild(borrabt);
        
        borrabt.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('usuario/'+this.latarea.id).set(null);
        });

        return component;
    }
}