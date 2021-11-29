import rutValidator from './rut-validator.js';


const form = document.querySelector('#frmEnviar');

form.addEventListener('submit', function (evento) {
          evento.preventDefault(); // Evitar que el formulario haga su "envío"(submit)
          console.log('Se envió formulario virtualmente'); // Enviar mensaje para comprobar JS (consola)

          //document.getElementById('btnEnviar').disabled = true; // Modificar el estado del botón "Agregar"(btnEnviar) a deshabilitado

          // Obtener los valores desde los inputs
          let rut = document.getElementById('inputRut').value;
          let nombre = document.getElementById('inputNombre').value;
          let correo = document.getElementById('inputCorreo').value;

          // multiples validaciones
          if (!rutValidator(rut)) {
            alert('rut invalido')
          } else if (nombre.length <= 3) {
            alert('nombre invalido')
          } else if (!correo.endsWith('.cl')) {
            alert('correo invalido')
          } else {
              alert('Datos correctos');
          }
});
