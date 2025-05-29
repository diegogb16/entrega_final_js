document.addEventListener("DOMContentLoaded", () => {
    const total = localStorage.getItem("montoTotal");
    const formContainer = document.getElementById("formulario-container");

    formContainer.innerHTML = `
        <form id="formulario-pago">
            <label>Nombre completo:</label><br>
            <input type="text" id="nombre" required><br><br>

            <label>Número de tarjeta:</label><br>
            <input type="text" id="tarjeta" maxlength="16" required><br><br>

            <label>Fecha de vencimiento:</label><br>
            <input type="month" id="vencimiento" required><br><br>

            <label>CVV:</label><br>
            <input type="text" id="cvv" maxlength="3" required><br><br>

            <p><strong>Total a pagar: $${total}</strong></p>

            <button type="submit">Confirmar pago</button>
        </form>
    `;

    const form = document.getElementById("formulario-pago");
    form.onsubmit = (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const tarjeta = document.getElementById("tarjeta").value.trim();
        const vencimiento = document.getElementById("vencimiento").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        if (!nombre || !tarjeta || !vencimiento || !cvv) {
            return Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor completá todos los campos.',
                confirmButtonColor: '#007bff'
            });
        }

        if (tarjeta.length !== 16 || isNaN(tarjeta)) {
            return Swal.fire({
                icon: 'error',
                title: 'Número de tarjeta inválido',
                text: 'Debe contener 16 dígitos numéricos.',
                confirmButtonColor: '#007bff'
            });
        }

        if (cvv.length !== 3 || isNaN(cvv)) {
            return Swal.fire({
                icon: 'error',
                title: 'CVV inválido',
                text: 'Debe contener 3 dígitos numéricos.',
                confirmButtonColor: '#007bff'
            });
        }

        // Paso 1: mostrar carga
        Swal.fire({
            title: 'Procesando pago...',
            html: 'Por favor esperá un momento',
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        // Simulamos espera de 2 segundos y luego mostramos resumen
        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: '¡Pago realizado con éxito!',
                html: `
                    <p><strong>Comprador:</strong> ${nombre}</p>
                    <p><strong>Total abonado:</strong> $${total}</p>
                    <p>Gracias por tu compra 🎉</p>
                `,
                confirmButtonText: 'Volver al inicio',
                confirmButtonColor: '#007bff'
            }).then(() => {
                localStorage.clear();
                window.location.href = "../index.html";
            });
        }, 2000);
    };
});

