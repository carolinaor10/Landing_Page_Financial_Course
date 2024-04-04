//Vincular los objetos del DOM

const btnEnviar = document.getElementById('btn-submit');
const tikTok = document.getElementById('tikTok');
const email = document.getElementById('email');
const message = document.getElementById('message');
const myCheck = document.getElementById('myCheck');



//crear una función para validar campos vacíos
function validar_campos_vacios(){
    let error = false;//asumir que al inicio no hay errores
    let campos_requeridos = document.querySelectorAll("#frm-contact [required]")
    for(let i=0; i< campos_requeridos.length;i++){
        if(campos_requeridos[i].value === ""){ 
            campos_requeridos[i].classList.add("error");
            error = true;
        }else{
            campos_requeridos[i].classList.remove("error");
        }
    }
    return error;//retornando un true o un false
}


function validar_correo(){

    let error = false;
    let texto = email.value;
    let regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
    if(regex.test(texto)===false){
        email.classList.add("error");
        error = true;
    }else{
        email.classList.remove("error");
    }

    return error;

}

function limpiar_campos(){
    tikTok.value = " ";
    email.value = " ";
    message.value = " ";
    myCheck.value = " ";

}


function enviar_datos() {
    let error_campos_vacios = validar_campos_vacios();
    let error_correo = validar_correo();

    if(error_campos_vacios){
        Swal.fire({
            icon:"warning",
            title:"Empty data",
            text:"Please fill out the requirement fields"
        })
    }else if(error_correo){
        Swal.fire({
            icon:"warning",
            title:"Email Error",
            text:"Enter a valid email"
        })
    }
    else{
        
        Swal.fire({
            icon:"success",
            title:"Validated information",
            text:"We will contact you as the case may be."
        })
    }

    limpiar_campos();


}

//asociar un evento al botón
btnEnviar.addEventListener('click',enviar_datos);