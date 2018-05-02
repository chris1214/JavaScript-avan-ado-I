/**
 * Created by christopher on 27/04/18.
 */
class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor= $('#valor');

        let self = this;

        this._negociacao =

        this._TableView = new TableView($('#table'));

        //this._negociacao = new ListaNegociacoes(model => this._TableView.update(model));

        this._TableView.update(this._negociacao);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagem'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event){
        event.preventDefault();
        this._negociacao.adiciona(this._criaNegociacao());

        this._mensagem.texto = 'Negociação criada com sucesso.';

        this._limpaFormulario();
        this._mensagemView.update(this._mensagem);
    }
    apaga () {
        this._negociacao.esvazia();

        this._mensagem.texto = 'Negociação apagada com sucesso.';
        this._mensagemView.update(this._mensagem);
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