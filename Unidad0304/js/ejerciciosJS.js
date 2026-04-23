function validarLogin() {
    const user = document.getElementById('userInput').value;
    const pass = document.getElementById('passInput').value;
    const spanNombre = document.getElementById('nombre-usuario');

    const USER_CORRECTO = "admin";
    const PASS_CORRECTO = "1234";

    if (user === USER_CORRECTO && pass === PASS_CORRECTO) {
        spanNombre.textContent = user;
        console.log("Acceso concedido");
    } else {
        spanNombre.textContent = "";
        alert("Usuario o contraseña incorrectos");
    }
}

//

