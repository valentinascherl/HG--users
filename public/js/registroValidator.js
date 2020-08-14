/*let nombre = document.getElementsByClassName("nombre");
let apellido = document.getElementsByClassName("apellido");
let email = document.getElementsByClassName("email");
let contrasena = document.getElementsByClassName("contrasena");
let formRegistro = document.getElementById("formRegistro");


let errores = [];
nombre.addEventListener("blur", function(){
    if(nombre.value == ""){
        nombre.classList.add("is-invalid");
        document.querySelector('.nombre-invalido').innerHTML = '<li>Este campo debe estar completo.</li>'
    } else if (nombre.value.length < 2){
        nombre.classList.add("is-invalid");
        document.querySelector('.nombre-invalido').innerHTML = '<li> El nombre debe tener al menos 2 caracteres </li>';
        } else {
        document.querySelector('.nombre-invalido').innerHTML = ""
        nombre.classList.remove("is-invalid");
    }
});

apellido.addEventListener("blur", function(){
    if(apellido.value == ""){
        apellido.classList.add("is-invalid");
        document.querySelector('.apellido-invalido').innerHTML = '<li>Este campo debe estar completo.</li>'
    } else if (apellido.value.length < 2){
        apellido.classList.add("is-invalid");
        document.querySelector('.apellido-invalido').innerHTML = '<li> El apellido debe tener al menos 2 caracteres </li>';
        } else {
        document.querySelector('.apellido-invalido').innerHTML = ""
        apellido.classList.remove("is-invalid");
    }
});

email.addEventListener("blur", function(){
    if (email.value == ""){
        document.querySelector('.email-invalido').innerHTML = '<li>Debe ingresar su email</li>';
        email.classList.add("is-invalid");
        } else {
        document.querySelector('.email-invalido').innerHTML = ""
        email.classList.remove("is-invalid");
    }
});

contrasena.addEventListener("blur", function(){
    if (contraseña.value == ""){
        contraseña.classList.add("is-invalid");
        document.querySelector('.contrasena-invalida').innerHTML = '<li> Debe ingresar una contraseña </li>';
        } else if (contraseña.value.length < 8){
        contraseña.classList.add("is-invalid");
        document.querySelector('.contrasena-invalida').innerHTML = '<li> La contraseña debe tener al menos 8 caracteres </li>';
        } else {
        document.querySelector('.contrasena-invalida').innerHTML = ""
        contraseña.classList.remove("is-invalid");
    }
});

formRegistro.addEventListener("submit", function(e){
    if(nombre.value == ""){
        errores.push("El campo nombre debe estar completo");
        nombre.classList.add("is-invalid");
        document.querySelector('.nombre-invalido').innerHTML = '<li>Este campo debe estar completo.</li>'
    } else if (nombre.value.length < 2){
        nombre.classList.add("is-invalid");
        document.querySelector('.nombre-invalido').innerHTML = '<li> El nombre debe tener al menos 2 caracteres </li>';
        errores.push("El nombre debe tener al menos 2 caracteres");
    }

    if(apellido.value == ""){
        errores.push("El campo apellido debe estar completo");
        apellido.classList.add("is-invalid");
        document.querySelector('.apellido-invalido').innerHTML = '<li>Este campo debe estar completo.</li>'
    } else if (apellido.value.length < 2){
        apellido.classList.add("is-invalid");
        document.querySelector('.apellido-invalido').innerHTML = '<li> El apellido debe tener al menos 2 caracteres </li>';
        errores.push("El apellido debe tener al menos 2 caracteres");
    }

    if (email.value == ""){
        errores.push("Este Campo debe estar completo");
        document.querySelector('.email-invalido').innerHTML = '<li>Debe ingresar su email</li>';
        email.classList.add("is-invalid");
    }
    if (contraseña.value == ""){
        contraseña.classList.add("is-invalid");
        document.querySelector('.contrasena-invalida').innerHTML = '<li> Debe ingresar una contraseña </li>';
        errores.push("Debe ingresar una contraseña");
    } else if (contraseña.value.length < 8){
        contraseña.classList.add("is-invalid");
        document.querySelector('.contrasena-invalida').innerHTML = '<li> La contraseña debe tener al menos 8 caracteres </li>';
        errores.push("La contraseña debe tener al menos 4 caracteres");
    }

    console.log(errores);
    if (errores.length > 0){
    e.preventDefault();
    errores = [];
    }
});*/
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
