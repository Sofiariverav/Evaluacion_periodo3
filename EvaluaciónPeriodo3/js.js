let correo, contraseña;

let formulario = document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})

function LeerDatos(){
    correo = document.getElementById('floatingInput').value;
    contraseña = document.querySelector('#floatingPassword').value;
    ValidarData(correo, contraseña)
    guardarlocarstorage(correo, contraseña)
}

function ValidarData(correo, contraseña){
    if(correo.length==0 || contraseña.length==0){
        swal("Good job!", "You clicked the button!", "error");
    }
}

function ValidarData(correo, contraseña){
    if(correo.length==0 || contraseña.length==0){
        alert('error')
        swal("Error de informacion","ups...", "error");
    }
}

function guardarlocarstorage(correo, contraseña){
    localStorage.setItem('floatingInput', correo);
    localStorage.setItem('floatingPassword', contraseña);
    listaData()
}

function listaData(correol, contraseñal){
    swal(contraseñal);
    swal(correol);
    let correol = localStorage.getItem('floatingInput');
    let contraseñal = localStorage.getItem('floatingPassword');
    
    alert(correol + contraseñal)
    if(correol== floatingInput && contraseñal== floatingPassword){
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });       
    }else{
        swal("Error de informacion","ups...", "error");
    }
    
    
}