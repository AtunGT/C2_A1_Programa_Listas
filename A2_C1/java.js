let listausuarios = [];

function guardar() {
    let nss = document.getElementById("nss").value;
    let nombre = document.getElementById("name").value;
    let tdt = document.getElementById("tdt").value;

    let usuario = {
        Nombre: nombre,
        Numero_de_seguridad_social: nss,
        Total_de_dias_trabajados: tdt
    };

    listausuarios.push(usuario);
    mostrarUsuarios();
}

function eliminar() {
    if (listausuarios.length > 0) {
        listausuarios.shift();
        mostrarUsuarios();
    } else {
        console.log("La lista de usuarios está vacía.");
    }
}

function mostrarUsuarios() {
    let usuariosContainer = document.getElementById("usuarios-container");
    usuariosContainer.innerHTML = "";

    let tabla = document.createElement("table");
    tabla.classList.add("usuarios-table");

    let encabezados = document.createElement("tr");
    encabezados.innerHTML = "<th>Nombre</th><th>NSS</th><th>TDT</th>";
    tabla.appendChild(encabezados);

    listausuarios.forEach(usuario => {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${usuario.Nombre}</td><td>${usuario.Numero_de_seguridad_social}</td><td>${usuario.Total_de_dias_trabajados}</td>`;
        tabla.appendChild(fila);
    });

    usuariosContainer.appendChild(tabla);
}

function buscarPorNSS() {
    let buscarNSS = document.getElementById("buscar-nss").value.trim();
    let usuariosFiltrados = listausuarios.filter(usuario => usuario.Numero_de_seguridad_social.includes(buscarNSS));

    let usuariosContainer = document.getElementById("usuarios-container");
    usuariosContainer.innerHTML = "";

    let tabla = document.createElement("table");
    tabla.classList.add("usuarios-table");

    let encabezados = document.createElement("tr");
    encabezados.innerHTML = "<th>Nombre</th><th>NSS</th><th>TDT</th>";
    tabla.appendChild(encabezados);

    usuariosFiltrados.forEach(usuario => {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${usuario.Nombre}</td><td>${usuario.Numero_de_seguridad_social}</td><td>${usuario.Total_de_dias_trabajados}</td>`;
        tabla.appendChild(fila);
    });

    usuariosContainer.appendChild(tabla);
}