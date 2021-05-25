var form = document.getElementById("datos");

form.addEventListener("submit", function(e)
{
    e.preventDefault();

    var boleta = document.getElementById("Boleta").value;
    var nombre = document.getElementById("Nombre").value;
    var grupo = document.getElementById("Grupo").value;
    var materia = document.getElementById("Materia").value;
    var fecha = document.getElementById("Fecha").value;

    var salida = document.getElementById("salida");
    salida.innerHTML = "Boleta: " + boleta + "<br>Nombre: " + nombre + "<br>Grupo " + grupo + "<br>Materia: " + materia + "<br>Fecha: " + fecha;
})
