import { Book, displayBooks } from '/books.js';

document.addEventListener("DOMContentLoaded", function () {
    const carritoProductos = document.getElementById("carrito-productos");
    const botonCarrito = document.getElementById("boton-carrito");
    const filtro = document.getElementById("filtro");
    const categoriasDropdown = document.getElementById("categorias-dropdown");
    const cuadroDialogo = document.getElementById("carrito-container");
    const contenidoCuadroDialogo = document.getElementById("contenido-cuadro-dialogo");
    const cerrarCuadroDialogo = document.getElementById("cerrar-cuadro-dialogo");
    const botonComprar = document.getElementById("boton-comprar");
    const botonDeseos = document.getElementById("boton-deseos"); // Nuevo botón de deseos

    // Carrito de compras
    const carrito = [];
    const listaDeseos = [];

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
                            <button class="añadir-a-deseos" data-nombre="${producto.title}">
                            <box-icon name='heart' type='solid' animation='tada' color='#c90707'></box-icon> <!-- Icono de corazón sólido -->
                            </button>
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

        // Agregar evento de clic para los botones "Añadir a la lista de deseos"
        document.querySelectorAll(".añadir-a-deseos").forEach((button) => {
            button.addEventListener("click", function () {
                const nombre = button.dataset.nombre;
                agregarAListaDeseos(nombre); // Agregar el producto a la lista de deseos
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

    // Función para agregar un producto a la lista de deseos
    function agregarAListaDeseos(nombre) {
        // Verificar si el producto ya está en la lista de deseos
        const existeEnLista = listaDeseos.some(item => item.title === nombre);
        if (!existeEnLista) {
            listaDeseos.push({ title: nombre });
            mostrarListaDeseos(); // Actualizar la visualización de la lista de deseos
        }
    }

    // Evento click en el botón de lista de deseos
    botonDeseos.addEventListener("click", function () {
        mostrarListaDeseos(); // Mostrar la lista de deseos al hacer clic en el botón
    });

    // Función para mostrar la lista de deseos
    function mostrarListaDeseos() {
        contenidoCuadroDialogo.innerHTML = ""; // Limpiar contenido anterior de la lista de deseos

        if (listaDeseos.length === 0) {
            contenidoCuadroDialogo.innerText = "La lista de deseos está vacía.";
        } else {
            let mensaje = "Lista de Deseos:\n";

            listaDeseos.forEach((item) => {
                mensaje += `${item.title}\n`;
            });

            contenidoCuadroDialogo.innerText = mensaje;
        }

        cuadroDialogo.style.display = "block"; // Mostrar el cuadro de diálogo de la lista de deseos
    }
});
