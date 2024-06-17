document.getElementById('miFormulario').addEventListener('submit', validarFormulario);

function validarFormulario() {
    e.preventDefault();

    let usuario = document.getElementById('usuario').value;
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let contrasena = document.getElementById('contrasena').value;
    let repetirContrasena = document.getElementById('repetirContrasena').value;

    let esValido = true;

    // Validación del usuario
    if (!usuario.match(/^[a-zA-Z0-9]{6,16}$/)) {
        document.getElementById('usuarioError').textContent = 'Usuario inválido';
        esValido = false;
    } else {
        document.getElementById('usuarioError').textContent = '';
    }

    // Validación del nombre
    if (nombre.trim() === '') {
        document.getElementById('nombreError').textContent = 'El nombre es obligatorio.';
        esValido = false;
    } else {
        document.getElementById('nombreError').textContent = '';
    }

    // Validación del email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Correo electrónico inválido';
        esValido = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validación de la contraseña
    if (contrasena.length < 8 || contrasena.length > 16) {
        document.getElementById('contrasenaError').textContent = 'Contraseña inválida';
        esValido = false;
    } else {
        document.getElementById('contrasenaError').textContent = '';
    }

    // Validación de repetir contraseña
    if (repetirContrasena !== contrasena) {
        document.getElementById('repetirContrasenaError').textContent = 'Las contraseñas no coinciden';
        esValido = false;
    } else {
        document.getElementById('repetirContrasenaError').textContent = '';
    }

    // Si el formulario es válido
    if (esValido) {
        alert('Formulario válido');
    }
}