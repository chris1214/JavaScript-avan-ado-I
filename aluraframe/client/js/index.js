/**
 * Created by christopher on 23/04/18.
 */
function myCampos() {
    var campos = [
        data = document.querySelector('#data'),
        quantidade = document.querySelector('#quantidade'),
        valor = document.querySelector('#valor')
    ];
    return campos
}
function clearCampos() {
    var campos = myCampos();

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
}
function calculaVolume(campos) {
    var volume = document.createElement('td');
    volume.textContent = campos[1].value * campos[2].value;

    return volume;
}
var form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    var tr = document.createElement('tr');
    var campos = myCampos();
    var tbody = document.querySelector('tbody');

    campos.forEach(function (campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var volume = calculaVolume(campos);

    tr.appendChild(volume);
    tbody.appendChild(tr);

    clearCampos();
});