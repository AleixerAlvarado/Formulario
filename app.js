
let estudiantes = [];


function agregarEstudiante() {
    document.getElementById("listaEstudiantes").innerHTML = "";
    let nombreStr = document.getElementById("nombre").value;
    let apellidoStr = document.getElementById("apellido").value;
    let ciudadStr = document.getElementById("ciudad").value;
    let telefonoStr = document.getElementById("telefono").value;
    let persona = {
        nombre: nombreStr,
        apellido: apellidoStr,
        ciudad: ciudadStr,
        telefono: telefonoStr
    };

    if (persona.nombre.length != 0 && persona.apellido.length != 0 && persona.ciudad.length != 0 && persona.telefono.length != 0) {
        estudiantes.push(persona);

        for (let i = 0; i < estudiantes.length; i++) {
            let table = `<tr>
            <td scope='row'>`+ estudiantes[i].nombre + `</td>
            <td>`+ estudiantes[i].apellido + `</td>
            <td>`+ estudiantes[i].ciudad + `</td>
            <td>`+ estudiantes[i].telefono + `</td>
            </tr>`;
            document.getElementById("listaEstudiantes").innerHTML += table; //estudiantes[i].nombre +" "+ estudiantes[i].apellido + ", de la ciudad de "+ estudiantes[i].ciudad + ", telefono: "+estudiantes[i].telefono+ "<br>";
        }

    } else {
        alert("por favor ingrese un estudiante")
    }
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("telefono").value = "";
}




let Auto = {
    puertas: "N/A",
    motor: 125,
    llantas: 2,
}

let Autos = [{ Auto }, { Auto }]