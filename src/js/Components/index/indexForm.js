import {MDCTextField} from '@material/textfield';

import Swal from 'sweetalert2';

var elementsLabels = document.querySelectorAll('.mdc-text-field');

if(elementsLabels != null) {
    elementsLabels.forEach(el => {
        var textFieldElement = new MDCTextField(el);
    });
}

var forms = document.getElementById("form");

function log(event) {
    Swal.fire({
        title: "Sucesso!",
        text: "Registro feito com sucesso! Assim que possível entraremos em contato para solucionar o seu problema!",
        showConfirmButton: true,
        confirmButtonText: "OK!"
    })
}

forms.addEventListener('submit', log)

