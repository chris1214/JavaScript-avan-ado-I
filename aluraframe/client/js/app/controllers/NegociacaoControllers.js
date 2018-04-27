/**
 * Created by christopher on 27/04/18.
 */
class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor= $('#valor');
        this._negociacao = new ListaNegociacoes();
        this._TableView = new TableView($('#table'));

        this._TableView.update(this._negociacao);
    }

    adiciona(event){
        event.preventDefault();

        let data = DateHelper.textoParaData(this._data.value);

        this._negociacao.adiciona(this._criaNegociacao());
        this._TableView.update(this._negociacao);
        this._limpaFormulario();
        console.log(this._negociacao.negociacoes)
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._data.value),
            this._quantidade.value,
            this._valor.value,
        );
    }
    _limpaFormulario() {
        this._data.value = '';
        this._quantidade.value = 1;
        this._valor.value = 0.0;
        this._data.focus();
    }
}