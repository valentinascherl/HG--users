addEventListener('load', function() {


    let formEdit = document.getElementById('productEdit');
    formEdit.addEventListener('submit', function(ebe) {


        // VALIDACIÓN DEL CAMPO NOMBRE DE PRODUCTO
        let nameProduct = document.getElementById('nombre');
        let namePContent = nameProduct.value;
        let namePLength = namePContent.length >= 5 ? true : false;
        let emptyNameP = document.getElementById('emptyNameEdit');
        let invalidName = document.getElementById('invalidNameEdit');

        if (namePContent == '') {
            ebe.preventDefault();
            emptyNameP.innerHTML = '<p>' + 'Ingresá el nombre del producto' + '</p>';
            nameProduct.style.border = "1px solid red";
        } else {
            emptyNameP.innerHTML = '';
            nameProduct.style.border = "1px solid #ced4da";
        }

        if (namePContent != '' && !namePLength) {
            ebe.preventDefault();
            invalidName.innerHTML = '<p>' + 'Debe tener al menos 5 caracteres' + '</p>';
            nameProduct.style.border = "1px solid #CF664F";
        } else {
            invalidName.innerHTML = ''
            nameProduct.style.border = "1px solid #ced4da";
        }
        // VALIDACIÓN DEL CAMPO DESCRIPCIÓN COMPLETA DE PRODUCTO
        let description = document.getElementById('descripcion');
        let descriptionContent = description.value;
        let descriptionLength = descriptionContent.length >= 20 ? true : false;
        let emptyDescription = document.getElementById('emptyDescription');
        let invalidDescription = document.getElementById('invalidDescription');

        if (descriptionContent == '') {
            ebe.preventDefault();
            emptyDescription.innerHTML = '<p>' + 'Ingresá una descripción' + '</p>';
            description.style.border = "1px solid #CF664F";
        } else {
            emptyDescription.innerHTML = '';
            description.style.border = "1px solid #ced4da";
        }

        if (descriptionContent != '' && !descriptionLength) {
            ebe.preventDefault();
            invalidDescription.innerHTML = '<p>' + 'Debe tener entre 20 y 500 caracteres' + '</p>';
            description.style.border = "1px solid #CF664F";
        } else {
            invalidDescription.innerHTML = ''
            description.style.border = "1px solid #ced4da";
        }

        // VALIDACIÓN DE LA IMAGEN DE PRODUCTO
        let img = document.getElementById('imagen');
        let imgContent = img.value;
        extensionImg = (imgContent.substring(imgContent.lastIndexOf("."))).toLowerCase();
        let invalidImg = document.getElementById('invalidImg');

        if (imgContent != '' && extensionImg != '.jpg' && extensionImg != '.png' && extensionImg != '.jpeg' && extensionImg != '.gif') {
            ebe.preventDefault();
            invalidImg.innerHTML = "<p>" + 'Solo podés cargar archivos jpg, png, jpeg o gif' + '</p>';
        } else {
            invalidImg.innerHTML = "";
        }
    })


})