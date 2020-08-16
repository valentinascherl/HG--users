
addEventListener('load', function() {

    let registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {


            // VALIDACIÓN CAMPO EMAIL DE LA VISTA REGISTRO
            let nameReg = document.querySelector('input.nombre');
            let nameRegContent = nameReg.value;
            let emptyName = document.querySelector('div.emptyName');

            if (nameRegContent = '' || nameRegContent.length < 3) {
                event.preventDefault();
                emptyName.innerHTML = '<p>' + 'Por favor, ingresá tu nombre. Debe tener al menos tres caracteres' + '</p>';
                nameReg.style.border = "1px solid red";
            } else {
                emptyName.innerHTML = '';
                nameReg.style.border = "1px solid #ced4da";
            }

            // VALIDACIÓN CAMPO APELLIDO DE LA VISTA REGISTRO
            let apellidoReg = document.querySelector('input.apellido');
            let apellidoRegContent = apellidoReg.value;
            let emptyApellido = document.querySelector('div.emptyApellido');

            if (apellidoRegContent = '' || apellidoRegContent.length < 3) {
                event.preventDefault();
                emptyApellido.innerHTML = '<p>' + 'Por favor, ingresá tu apellido. Debe tener al menos tres caracteres' + '</p>';
                apellidoReg.style.border = "1px solid red";
            } else {
                emptyApellido.innerHTML = '';
                apellidoReg.style.border = "1px solid #ced4da";
            }

            // VALIDACIÓN CAMPO EMAiL DE LA VISTA REGISTRO
            let emailReg = document.querySelector('input.emailcito');
            let emailRegContent = emailReg.value;
            let arrobaReg = emailRegContent.includes('@');
            let emailRegLength = emailRegContent.length >= 6 ? true : false;
            let invalidRegEmail = document.querySelector('div.emptyRegEmail');
            let emptyRegEmail = document.querySelector('div.emptyRegEmail');

            if (emailRegContent == '' || !emailRegLength) {
                event.preventDefault();
                emptyRegEmail.innerHTML = '<p>' + 'Por favor, ingresá tu email o verificá que esté bien escrito' + '</p>';
                emailReg.style.border = "1px solid red";
            } else {
                emptyRegEmail.innerHTML = '';
                emailReg.style.border = "1px solid #ced4da";
            }

            if (emailRegContent != '' && !arrobaReg) {
                event.preventDefault();
                invalidRegEmail.innerHTML = "<p>" + 'Debés incluir el signo @ en la dirección de correo electrónico. La dirección ' + '<span style="font-weight: 600">' + emailRegContent + '</span>' + ' no la incluye.' + '</p>';
                emailReg.style.border = "1px solid #CF664F";
            }

            // VALIDACIÓN DEL CAMPO CONTRASEÑA DE LA VISTA REGISTRO
            let passReg = document.querySelector('input.contrasena');
            let passRegContent = passReg.value;
            let emptyRegPass = registerForm.querySelector('div.emptyPassReg');
            let invalidRegPass = registerForm.querySelector('div.invalidPassReg');
            let regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;

            if (passRegContent == '') {
                event.preventDefault();
                emptyRegPass.innerHTML = '<p>' + 'Por favor, ingresá tu contraseña' + '</p>';
                passReg.style.border = "1px solid red";
            } else {
                emptyRegPass.innerHTML = '';
                passReg.style.border = "1px solid #ced4da";
            }

            if (!regExp.test(passRegContent) && passRegContent != '') {
                event.preventDefault();
                invalidRegPass.innerHTML = "<p>" + 'Debe tener un mínimo de 8 caracteres, al menos una letra y un número' + '</p>';
                passReg.style.border = "1px solid red";
            } else {
                invalidRegPass.innerHTML = '';
                passReg.style.border = "1px solid #ced4da";
            }

            // VALIDACIÓN DEL CAMPO AVATAR DE LA VISTA REGISTRO
            let avatar = document.querySelector('input#avatar');
            let avatarContent = avatar.value;
            extension = (avatarContent.substring(avatarContent.lastIndexOf("."))).toLowerCase();
            let emptyAvatar = registerForm.querySelector('div.emptyAvatar');
            let invalidAvatar = registerForm.querySelector('div.invalidAvatar');

            if (avatarContent == '') {
                event.preventDefault();
                emptyAvatar.innerHTML = "<p>" + '¡No te olvides de cargar una imagen!' + '</p>';
            } else {
                emptyAvatar.innerHTML = '';
            }

            if (avatarContent != '' && extension != '.jpg' && extension != '.png' && extension != '.jpeg' && extension != '.gif') {
                event.preventDefault();
                invalidAvatar.innerHTML = "<p>" + 'Solo podés cargar archivos jpg, png, jpeg o gif' + '</p>';
            } else {
                invalidAvatar.innerHTML = "";
            }
        })
    }
})
