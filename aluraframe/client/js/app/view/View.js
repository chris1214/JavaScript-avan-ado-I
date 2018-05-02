/**
 * Created by christopher on 02/05/18.
 */
class View {
    constructor (elemento){
        this._elemento = elemento;
    }
    template(){
        throw new Error ('O método template deve ser implementado.')
    }
    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}