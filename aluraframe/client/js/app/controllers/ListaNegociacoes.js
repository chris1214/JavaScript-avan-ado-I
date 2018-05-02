/**
 * Created by christopher on 27/04/18.
 */
class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
        //this._armadilha = armadilha;
    }
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        //this._armadilha(this);
        //Reflect.apply(this._armadilha, this._contexto, [this]);
    }
    get negociacoes() {
        return [].concat(this._negociacoes)
    }

    esvazia() {
        this._negociacoes = [];
        //Reflect.apply(this._armadilha, this._contexto, [this]);
        //this._armadilha(this);
    }
}