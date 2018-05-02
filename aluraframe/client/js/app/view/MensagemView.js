/**
 * Created by christopher on 02/05/18.
 */
class MensagemView extends View{

    template (model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`
    }

}