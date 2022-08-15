const botonBorrar = document.getElementById('boton-borrar');
const botonEnviar = document.getElementById('boton-enviar');

botonBorrar.addEventListener('click', e=>{
    const form = document.getElementById('formulario-contacto');
    form.reset();
});

botonEnviar.addEventListener('click', e=>{  
    const inputApellido = document.querySelector('.input-apellido');
    const inputNombre = document.querySelector('.input-nombre');
    const inputEmail = document.querySelector('.input-email');
    const inputText = document.querySelector('.input-text');

    if((inputApellido.value != undefined && inputApellido.value != "") && (inputNombre.value != undefined && inputNombre.value != "") && (inputEmail.value != undefined && inputEmail.value != "") && (inputText.value != undefined && inputText.value != "")){
        alert("¡Formulario enviado correctamente!");
        const form = document.getElementById('formulario-contacto');
        form.reset();
    }else{
        alert("¡Error al enviar el formulario!");
    }

});



