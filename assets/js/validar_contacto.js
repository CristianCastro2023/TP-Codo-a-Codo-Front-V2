document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contacto-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var isValid = true;
        var errorMessages = [];

        // Validar nombre
        var nombre = document.getElementById('nombre');
        if (nombre.value.trim() === '') {
            isValid = false;
            errorMessages.push('El campo de nombre es obligatorio.');
            displayErrorMessage(errorMessages);
            return;
        }

        // Validar email
        var email = document.getElementById('email');
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email.value)) {
            isValid = false;
            errorMessages.push('Por favor, ingrese un correo electrónico válido.');
            displayErrorMessage(errorMessages);
            return;
        }

        // Validar checkbox (suscripción)
        var suscripcion = document.getElementById('suscripcion');
        if (!suscripcion.checked) {
            isValid = false;
            errorMessages.push('Debe aceptar la suscripción.');
            displayErrorMessage(errorMessages);
            return;
        }

        // Validar select (motivo)
        var motivo = document.getElementById('motivo');
        if (motivo.value === '') {
            isValid = false;
            errorMessages.push('Debe seleccionar un motivo.');
            displayErrorMessage(errorMessages);
            return;
        }

        // Validar textarea (mensaje)
        var mensaje = document.getElementById('mensaje');
        if (mensaje.value.trim() === '') {
            isValid = false;
            errorMessages.push('El campo de mensaje es obligatorio.');
            displayErrorMessage(errorMessages);
            return;
        }

        // Si llegamos aquí, el formulario es válido
        if (isValid) {
            form.submit();
        }
    });

    // Función para mostrar mensajes de error
    function displayErrorMessage(messages) {
        var errorMessageContainer = document.querySelector('.error-messages');
        if (!errorMessageContainer) {
            errorMessageContainer = document.createElement('div');
            errorMessageContainer.className = 'error-messages';
            form.parentNode.insertBefore(errorMessageContainer, form.nextSibling);
        }
        errorMessageContainer.innerHTML = '<ul><li>' + messages.join('</li><li>') + '</li></ul>';
    }
});
