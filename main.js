import { Book, displayBooks } from '/books.js';

document.addEventListener("DOMContentLoaded", function () {
    const carritoProductos = document.getElementById("carrito-productos");
    const botonCarrito = document.getElementById("boton-carrito");
    const filtro = document.getElementById("filtro");
    const categoriasDropdown = document.getElementById("categorias-dropdown");
    const cuadroDialogo = document.getElementById("carrito-container");
    const contenidoCuadroDialogo = document.getElementById("contenido-cuadro-dialogo");
    const cerrarCuadroDialogo = document.getElementById("cerrar-cuadro-dialogo");
    const botonComprar = document.getElementById("boton-comprar"); // Añadido el botón Comprar

    // Carrito de compras
    const carrito = [];

    // Función para mostrar todos los productos al inicio
    function mostrarTodosLosProductos() {
        carritoProductos.innerHTML = ""; // Limpiar el contenedor de productos

        displayBooks.forEach((producto) => {
            const productoHTML = `
                <article class="single-product">
                    <div class="product-image">
                        <img src="${producto.cover}" alt="${producto.title}">
                        <div class="overlay">
                            <button class="añadir-al-carrito" data-nombre="${producto.title}" data-precio="${producto.price}">Añadir al Carrito</button>
                        </div>
                    </div>
                    <div class="info">
                        <h3>${producto.title}</h3>
                        <p class="price">$${producto.price}</p>
                    </div>
                </article>
            `;
            carritoProductos.innerHTML += productoHTML; // Agregar el producto al contenedor
        });

        // Agregar evento de clic para los botones "Añadir al Carrito"
        document.querySelectorAll(".añadir-al-carrito").forEach((button) => {
            button.addEventListener("click", function () {
                const nombre = button.dataset.nombre;
                const precio = parseFloat(button.dataset.precio);
                carrito.push({ title: nombre, price: precio });
                mostrarCarrito(); // Actualizar la visualización del carrito
            });
        });
    }

    // Mostrar todos los productos al cargar la página
    mostrarTodosLosProductos();

    // Evento de cambio en el campo de búsqueda
    filtro.addEventListener("input", function () {
        const valorBusqueda = filtro.value.trim().toLowerCase();
        mostrarProductos("", valorBusqueda); // Mostrar productos filtrados por búsqueda
    });

    // Evento click en las categorías
    categoriasDropdown.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            const categoria = event.target.dataset.categoria;
            mostrarProductos(categoria);
        }
    });

    // Función para mostrar productos según la categoría seleccionada o el filtro de búsqueda
    function mostrarProductos(categoria = "", filtroBusqueda = "") {
        carritoProductos.innerHTML = ""; // Limpiar el contenedor de productos

        displayBooks.forEach((producto) => {
            // Filtrar por categoría si se especifica una categoría
            if (categoria && producto.category !== categoria) {
                return; // Omitir este producto si no coincide con la categoría seleccionada
            }

            // Filtrar por búsqueda si se especifica un filtro de búsqueda
            if (filtroBusqueda && !producto.title.toLowerCase().includes(filtroBusqueda)) {
                return; // Omitir este producto si no coincide con el filtro de búsqueda
            }

            // Crear el HTML del producto
            const productoHTML = `
                <article class="single-product">
                    <div class="product-image">
                        <img src="${producto.cover}" alt="${producto.title}">
                        <div class="overlay">
                            <button class="añadir-al-carrito" data-nombre="${producto.title}" data-precio="${producto.price}">Añadir al Carrito</button>
                        </div>
                    </div>
                    <div class="info">
                        <h3>${producto.title}</h3>
                        <p class="price">$${producto.price}</p>
                    </div>
                </article>
            `;
            carritoProductos.innerHTML += productoHTML; // Agregar el producto al contenedor
        });

        // Agregar evento de clic para los botones "Añadir al Carrito"
        document.querySelectorAll(".añadir-al-carrito").forEach((button) => {
            button.addEventListener("click", function () {
                const nombre = button.dataset.nombre;
                const precio = parseFloat(button.dataset.precio);
                carrito.push({ title: nombre, price: precio });
                mostrarCarrito(); // Actualizar la visualización del carrito
            });
        });
    }

    // Función para mostrar el contenido del carrito
    function mostrarCarrito() {
        contenidoCuadroDialogo.innerHTML = ""; // Limpiar contenido anterior del carrito

        if (carrito.length === 0) {
            contenidoCuadroDialogo.innerText = "El carrito está vacío.";
        } else {
            let mensaje = "Carrito de Compras:\n";
            let total = 0;

            carrito.forEach((item) => {
                mensaje += `${item.title} - Precio: $${item.price}\n`;
                total += item.price;
            });

            mensaje += `\nMonto total a pagar: $${total.toFixed(2)}`;
            contenidoCuadroDialogo.innerText = mensaje;
        }

        cuadroDialogo.style.display = "block"; // Mostrar el cuadro de diálogo del carrito
    }

    // Evento click en el botón de carrito
    botonCarrito.addEventListener("click", function () {
        mostrarCarrito(); // Mostrar el contenido del carrito al hacer clic en el botón
    });

    // Añadir evento de clic al botón "Cerrar"
    cerrarCuadroDialogo.addEventListener("click", function () {
        cuadroDialogo.style.display = "none"; // Ocultar el cuadro de diálogo del carrito al hacer clic en "Cerrar"
    });

    // Añadir evento de clic al botón "Comprar"
    botonComprar.addEventListener("click", function () {
        carrito.length = 0; // Vaciar el carrito al hacer clic en "Comprar"
        mostrarCarrito(); // Actualizar la visualización del carrito
    });

});
