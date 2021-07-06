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
    const ageCorrect = document.getElementById('age-correct');
    const ageIncorrect = document.getElementById('age-incorrect');

    if (ageNumber >= 18) {
        // mostrar que es mayor de edad
        ageCorrect.classList.remove('d-none');
        ageCorrect.classList.add('d-block');
        ageIncorrect.classList.add('d-none');
    } else {
        // mostrar que es menor de edad
        ageIncorrect.classList.remove('d-none');
        ageIncorrect.classList.add('d-block');
        ageCorrect.classList.add('d-none');
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
