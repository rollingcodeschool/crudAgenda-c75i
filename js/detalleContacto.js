console.log(window.location.search)

const parametroURL = new URLSearchParams(window.location.search)
const idContacto = parametroURL.get('id');

console.log(idContacto)

//1- traer los datos del localstorage

//2- buscar el objeto que tiene el idContacto en el array agenda.

//3- dibujar la card horizontal con los datos del objeto encontrado
