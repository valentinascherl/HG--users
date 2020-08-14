let nombre = document.getElementsByClassName("nombre");
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
});