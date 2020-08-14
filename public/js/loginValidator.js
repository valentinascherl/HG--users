
addEventListener('load', function () {

    let form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', function (e) {

            // VALIDACIÓN DEL CAMPO EMAIL DE LA VISTA LOGIN

            let emailLog = document.querySelector('input.email');
            let emailContent = emailLog.value;
            let arroba = emailContent.includes('@');
            let emailLength = emailContent.length >= 6 ? true : false;
            let invalidEmail = form.querySelector('div.emptyEmail');
            let emptyEmail = document.querySelector('div.emptyEmail');

            if (emailContent == '' || !emailLength) {
                e.preventDefault();
                emptyEmail.innerHTML = '<p>' + 'Por favor, ingresá tu email o verificá que esté bien escrito' + '</p>';
                emailLog.style.border = "1px solid red";
            } else {
                emptyEmail.innerHTML = '';
                emailLog.style.border = "1px solid #ced4da";
            }

            if (emailContent != '' && !arroba) {
                e.preventDefault();
                invalidEmail.innerHTML = "<p>" + 'Debés incluir el signo @ en la dirección de correo electrónico. La dirección ' + '<span style="font-weight: 600">' + emailContent + '</span>' + ' no la incluye.' + '</p>';
                emailLog.style.border = "1px solid #CF664F";
            }

        })
    }
})