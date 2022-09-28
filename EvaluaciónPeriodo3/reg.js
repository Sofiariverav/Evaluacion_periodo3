function verificarPasswords() {
 
    contraseña = document.getElementById('contraseña');
    conf_contraseña = document.getElementById('conf_contraseña');
    Nombre = document.getElementById('Nombre');
    Telefono = document.getElementById('tel');
    email = document.getElementById('email');
 
}
// Verificamos si las constraseñas no coinciden
if (contraseña.value != conf_contraseña.value) {
 
    // Si las constraseñas no coinciden mostramos un mensaje
    document.getElementById("error").classList.add("mostrar");
}
 
else {
 
    // Si las contraseñas coinciden ocultamos el mensaje de error
    document.getElementById("error").classList.remove("mostrar");
 
    // Mostramos un mensaje mencionando que las Contraseñas coinciden
    document.getElementById("ok").classList.remove("ocultar");
 
    // Desabilitamos el botón de login
    document.getElementById("login").disabled = true;
 
    // Refrescamos la página (Simulación de envío del formulario)
    setTimeout(function() {
    location.reload();
    }, 3000);

}

function guardarlocarstorage(Nombre, contraseña, email, Telefono, conf_contraseña, ){
    localStorage.setItem('Nombre', Nombre);
    localStorage.setItem('contraseña', contraseña);
    localStorage.setItem('email', email);
    localStorage.setItem('tel', Telefono);
    localStorage.setItem('conf_contraseña', conf_contraseña);
    listaData()
}

function listaData(){
    let Nombre = localStorage.getItem('Nombre');
    let contraseña = localStorage.getItem('contraseña');
    let conf_contraseña = localStorage.getItem('conf_contraseña');
    let Telefono = localStorage.getItem('tel');
    let email = localStorage.getItem('email');
    swal(contraseña);
    swal(email);
    swal(conf_contraseña);
    swal(Nombre);
    swal(Telefono);
}