
// Esta funcion obtiene los datos puestos en el formulario
// y asi poder ponerlos en la Card
function getInfo(){
    const nombre = document.getElementById("nombre").value;
    document.getElementById("nameFull").innerHTML =`Nombre: ${nombre}`;

    const apellido = document.getElementById("apellido").value;
    document.getElementById("lastnameFull").innerHTML = `Apellido: ${apellido}`;

    const cedula = document.getElementById("cedula").value;
    document.getElementById("cedulaFull").innerHTML = `Cedula: ${cedula}`;
}
