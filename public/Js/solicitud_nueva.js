var ultimaSolicitudString = window.localStorage.getItem('ultimaSolicitudString');
var ultimaSolicitud = JSON.parse(ultimaSolicitudString)
var solicitudes =  traerSolicitudes();

const guardar = document.getElementById("botonGuardar");
const textArea = document.getElementById("text-area2");
const fechaElement = document.querySelector('#fecha');
const cancelar = document.querySelector('.cancelar');
const title = document.querySelector(".title");
const selector = document.querySelector('.sel');  

function traerSolicitudes() {
    const solicitudesString = window.localStorage.getItem('solicitudes');
    const solicitudes = JSON.parse(solicitudesString);
    return solicitudes;
}

guardar.addEventListener('click',(e) => {
    e.preventDefault();

    var nuevaSolicitud ={
        id: id,
        fecha : fechaElement.value,
        descripcion : textArea.value,
        estado :  selector.value,
        checked : false
    }

    solicitudes.push(nuevaSolicitud);
    
    window.localStorage.setItem('solicitudes',JSON.stringify(solicitudes));
    document.location.href="solicitudes.html"
})

traerSolicitudes();