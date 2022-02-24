document.addEventListener("DOMContentLoaded", function (e) {

    if (localStorage.getItem("nombre")) {
        var nombre = localStorage.getItem("nombre");
        document.getElementById("nomUser").innerHTML = nombre;
    } else { document.location.href = "index.html"; }

});
