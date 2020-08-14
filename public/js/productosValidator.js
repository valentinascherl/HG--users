let nombre = document.getElementById("name");
let descripcion = document.getElementById("description");
let form = document.getElementById("form");

let errores = [];
nombre.addEventListener("blur", function(){
    if(nombre.value == ""){
        errores.push("El campo nombre debe estar completo");
        document.querySelector('.nombre-invalido').innerHTML = '<li>Este campo debe estar completo.</li>'
    } else if (nombre.value.length < 2){
        document.querySelector('.nombre-invalido').innerHTML = '<li> El nombre del producto debe tener al menos 5 caracteres </li>';
        errores.push("El nombre del producto debe tener al menos 5 caracteres");
        } else {
        document.querySelector('.nombre-invalido').innerHTML = ""
        let error1 = errores.indexOf("El nombre debe tener al menos 5 caracteres")
        if (error1 > -1){
            errores.splice(error1, 1);
        }
        let error2 = errores.indexOf("El campo nombre debe estar completo")
        if (error2 > -1){
            errores.splice(error2, 1);
        }
    }
});
descripcion.addEventListener("blur", function(){
    if (descripcion.value == ""){
        errores.push("Este Campo debe contener al menos 20 caracteres");
        document.querySelector('.descripcion-invalido').innerHTML = '<li>Este Campo debe contener al menos 20 caracteres</li>';
        } else {
        document.querySelector('.descripcion-invalido').innerHTML = ""
        let error = errores.indexOf("Este Campo debe contener al menos 20 caracteres")
        if (error > -1){
            errores.splice(error, 1)
        }
    }
});
form.addEventListener("submit", function(e){
    console.log(errores);
    if (errores.length > 0){
    e.preventDefault();
    }
});
