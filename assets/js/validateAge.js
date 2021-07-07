let age = document.getElementById('age');
const btnSend = document.getElementById('send-age');
maxLength(2, 'age');


btnSend.addEventListener('click', () => {
    let age = document.getElementById('age').value;
    verifyAge(age);
})

age.addEventListener('keyup', e => {
    if (e.target.value.length === 0) {
        // deshabilitar el boton
        changeStatusBtn('send-age', false);
    } else {
        // habilitamos el boton
        changeStatusBtn('send-age', true);
    }
})


// FUNCIONES
function verifyAge(age) {
    const ageNumber = Number(age);

    switch (ageNumber){
        case 18:
        case 45:
            alertMessage('alert-success', 'Si eres mayor de edad.');
            break;
        case 60:
            alertMessage('alert-warning', 'Eres de la tercera edad.');
            break;
        case 15:
            alertMessage('alert-danger', 'Eres menor de edad.');
            break;
        default:
            alertMessage('alert-info', 'No sabemos que tipo de persona eres.');
            break;
    }
}

function maxLength(qty, nameInput) {
    document.getElementById(nameInput).onkeypress = e => {
        if(e.target.value.length === qty) {
            return false;
        }
    }
}

function changeStatusBtn(nameBtn, status) {
    const btn = document.getElementById(nameBtn);
    if(status) {
        // hacemos que el boton se habilite
        btn.removeAttribute('disabled');
        btn.classList.remove('btn-light');
        btn.classList.add('btn-primary');

    } else {
        // hacemos que el boton se habilite
        btn.setAttribute('disabled', true);
        btn.classList.add('btn-light');
        btn.classList.remove('btn-primary');
    }
}

function alertMessage(typeAlert, alertMessage) {
    const ageAlert = document.getElementById('age-alert');
    const ageMessage = document.getElementById('age-message');

    // remove class
    ageAlert.classList.remove('d-none');
    ageAlert.classList.remove('alert-danger');
    ageAlert.classList.remove('alert-info');
    ageAlert.classList.remove('alert-warning');
    ageAlert.classList.remove('alert-success');

    // add class
    ageAlert.classList.add('d-block');
    ageAlert.classList.add(typeAlert);

    // add text
    ageMessage.innerText = alertMessage;
}
