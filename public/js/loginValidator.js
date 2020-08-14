
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

            // VALIDACIÓN DEL CAMPO CONTRASEÑA DE LA VISTA LOGIN
            let passLog = document.getElementsByClassName('contrasena');
            let passLogContent = passLog.value;
            let emptyPass = form.querySelector('div.emptyPassLog');
            let invalidPass = form.querySelector('div.invalidPassLog');
            let regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;
            //let iconoKey = form.querySelector('i#keyIconLog');
            if (passLogContent == '') {
                e.preventDefault();
                emptyPass.innerHTML = '<p>' + 'Por favor, ingresá tu contraseña' + '</p>';
            } else {
                emptyPass.innerHTML = '';
            }

            if (!regExp.test(passLogContent) && passLogContent != '') {
                event.preventDefault();
                invalidPass.innerHTML = "<p>" + 'Revisá que la contraseña esté bien escrita' + '</p>';
                passLog.style.border = "1px solid red";
            } else {
                invalidPass.innerHTML = '';
                passLog.style.border = "1px solid #ced4da";
            }
        })
    }
})