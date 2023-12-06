import Contacto from "./classContacto.js";

//declaro variables
const formularioContacto = document.querySelector("form");
const nombre = document.querySelector("#nombre"),
  apellido = document.querySelector("#apellido"),
  email = document.querySelector("#email"),
  telefono = document.querySelector("#telefono");
  const agenda = JSON.parse(localStorage.getItem('agendaKey')) || [];

//funciones
const crearContacto = (e) => {
  e.preventDefault();
  console.log("desde la funcion que crea los contactos");
  //en el evento submit
  //preventDefault
  //tomo los datos de los inputs (validar)
  //crear un objeto
    const nuevoContacto = new Contacto(nombre.value, apellido.value, email.value, telefono.value);
  //guardo el objeto en un array
   agenda.push(nuevoContacto)
   console.log(agenda);
   limpiarFormularioContacto();
  //guardar el array en el localstorage JSON
  guardarEnLocalstorage();
};

const limpiarFormularioContacto = ()=>{
    formularioContacto.reset();
}

const guardarEnLocalstorage = ()=>{
    localStorage.setItem('agendaKey', JSON.stringify(agenda));
}

//resto de la logica
formularioContacto.addEventListener("submit", crearContacto);
