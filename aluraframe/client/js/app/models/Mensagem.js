/**
 * Created by christopher on 02/05/18.
 */
class Mensagem {
    constructor (texto = '') {
        this._texto = texto
    }
    get texto() {
        return this._texto;
    }
    set texto(texto) {
        this._texto = texto;
    }
}