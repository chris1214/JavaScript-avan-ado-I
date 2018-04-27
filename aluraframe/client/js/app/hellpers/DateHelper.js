/**
 * Created by christopher on 27/04/18.
 */
class DateHelper {
    constructor() {
        throw Error('Esta calss não pode ser instanciada pois posui metodos staticos');
    }
    static dataParaTexto (data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textoParaData (texto) {
        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('Deve estar no formato aaaa-mm-dd');
        return new Date(...texto.split('-').map((item, indice) =>item - indice % 2));
    }
}