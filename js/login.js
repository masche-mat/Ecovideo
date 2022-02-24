var formulario = document.getElementById("formIngreso");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    var user = document.getElementById("usuario").value;

    if (user.trim() === "") {
        alert("Nombre de usuario vacio");
    } else {
        localStorage.setItem("nombre", user.trim());

        document.location.href = "home.html";
    }
});
