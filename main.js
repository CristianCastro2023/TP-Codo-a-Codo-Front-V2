const productos = [
    {
        nombre: "Juego de Tronos",
        precio: 199.99,
        imagen: "img/1.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "Choque de Reyes",
        precio: 599.99,
        imagen: "img/2.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "Tormenta de Espadas",
        precio: 500.99,
        imagen: "img/3.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    // Agrega más productos aquí
    {
        nombre: "Festin de Cuervos",
        precio: 398,
        imagen: "img/4.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "Danza de Dragones",
        precio: 467,
        imagen: "img/5.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "Dune 1",
        precio: 599.99,
        imagen: "img/6.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "El messias de Dune",
        precio: 630,
        imagen: "img/7.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "Hijos de Dune",
        precio: 700,
        imagen: "img/8.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "Torrre del Alba",
        precio: 623,
        imagen: "img/9.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "Reino de cenizas",
        precio: 384,
        imagen: "img/10.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "Corona de medianoche",
        precio: 400,
        imagen: "img/11.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "Heredera de Fuego",
        precio: 450,
        imagen: "img/12.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "Reina de sombras",
        precio: 5693,
        imagen: "img/13.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "Imperio de tormentas",
        precio: 300,
        imagen: "img/14.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "Trono de cristal",
        precio: 9300,
        imagen: "img/15.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "Señor de los anillos",
        precio: 6300,
        imagen: "img/16.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "Las 2 torres ",
        precio: 8300,
        imagen: "img/17.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "El retorno del rey",
        precio: 234,
        imagen: "img/18.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "El hobbit",
        precio: 356,
        imagen: "img/19.webp",
        fantasia: true,
        historia: false,
        comics: false, 
    },
    {
        nombre: "Diario de Anna Frank",
        precio: 356,
        imagen: "img/20.webp",
        fantasia: false,
        historia: true,
        comics: false, 
    },
    {
        nombre: "El holocausto",
        precio: 356,
        imagen: "img/21.webp",
        fantasia: false,
        historia: true,
        comics: false, 
    },
    {
        nombre: "Persas,Era de grandes reyes",
        precio: 356,
        imagen: "img/22.webp",
        fantasia: false,
        historia: true,
        comics: false, 
    },
    {
        nombre: "Jujutsu Kaisen 1",
        precio: 356,
        imagen: "img/23.webp",
        fantasia: false,
        historia: false,
        comics: true, 
    },
    {
        nombre: "Jujutsu Kaisen 2",
        precio: 356,
        imagen: "img/24.webp",
        fantasia: false,
        historia: false,
        comics: true, 
    },
    {
        nombre: "Jujutsu Kaisen 3",
        precio: 356,
        imagen: "img/25.webp",
        fantasia: false,
        historia: false,
        comics: true, 
    },
    {
        nombre: "Jujutsu Kaisen 4",
        precio: 356,
        imagen: "img/26.webp",
        fantasia: false,
        historia: false,
        comics: true, 
    },
    {
        nombre: "Jujutsu Kaisen 5",
        precio: 356,
        imagen: "img/27.webp",
        fantasia: false,
        historia: false,
        comics: true, 
    },
    {
        nombre: "Naruto 1",
        precio: 356,
        imagen: "img/28.webp",
        fantasia: false,
        historia: false,
        comics: true, 
    },
    {
        nombre: "Naruto 2",
        precio: 356,
        imagen: "img/29.webp",
        fantasia: false,
        historia: false,
        comics: true, 
    },

];


document.addEventListener("DOMContentLoaded", function () {
    const filtroInput = document.getElementById("filtro");
    const mostrarFantasiaButton = document.getElementById("mostrar-fantasia");
    const mostrarHistoriaButton = document.getElementById("mostrar-historia");
    const mostrarComicsButton = document.getElementById("mostrar-comics");
    const carritoProductos = document.getElementById("carrito-productos");
    const botonCarrito = document.getElementById("boton-carrito"); // Agregamos el botón "Carrito"


    // Carrito de compras
    const carrito = [];

    function mostrarProductos(soloFantasia, soloHistoria, soloComics) {
        carritoProductos.innerHTML = "";

        productos.forEach((producto) => {
            if (
                (!soloFantasia || producto.fantasia) &&
                (!soloHistoria || producto.historia) &&
                (!soloComics || producto.comics)
            ) {
                const productoHTML = `
                    <article class="single-product">
                        <div class="product-image">
                            <img src="${producto.imagen}" alt="${producto.nombre}">
                            <div class="overlay">
                                <button class="Añadir_al_Carrito" data-nombre="${producto.nombre}" data-precio="${producto.precio}">Añadir al Carrito</button>
                            </div>
                        </div>
                        <div class="info">
                            <h3>${producto.nombre}</h3>
                            <p class="price">$${producto.precio}</p>
                        </div>
                    </article>
                `;
                carritoProductos.innerHTML += productoHTML;
            }
        });
    }

    botonCarrito.addEventListener("click", function () {
        const cuadroDialogo = document.getElementById("cuadro-dialogo");
        const contenidoCuadroDialogo = document.getElementById("contenido-cuadro-dialogo");
        const cerrarCuadroDialogo = document.getElementById("cerrar-cuadro-dialogo");
        
        if (carrito.length === 0) {
            contenidoCuadroDialogo.innerText = "El carrito está vacío.";
        } else {
            let mensaje = "Carrito de Compras:\n";
            let total = 0;

            carrito.forEach((item) => {
                mensaje += `${item.nombre} - Precio: $${item.precio}\n`;
                total += item.precio;
            });

            mensaje += `\nMonto total a pagar: $${total.toFixed(2)}`;
            contenidoCuadroDialogo.innerText = mensaje;
        }

        cuadroDialogo.style.display = "block";
        cerrarCuadroDialogo.style.display = "block"; // Muestra el botón "Cerrar"
    });

    document.getElementById("cerrar-cuadro-dialogo").addEventListener("click", function () {
        document.getElementById("cuadro-dialogo").style.display = "none";
        this.style.display = "none"; // Oculta el botón "Cerrar" al cerrar el cuadro de diálogo
    });botonCarrito.addEventListener("click", function () {
        const cuadroDialogo = document.getElementById("cuadro-dialogo");
        const contenidoCuadroDialogo = document.getElementById("contenido-cuadro-dialogo");
        const cerrarCuadroDialogo = document.getElementById("cerrar-cuadro-dialogo");
        
        if (carrito.length === 0) {
            contenidoCuadroDialogo.innerText = "El carrito está vacío.";
        } else {
            let mensaje = "Carrito de Compras:\n";
            let total = 0;

            carrito.forEach((item) => {
                mensaje += `${item.nombre} - Precio: $${item.precio}\n`;
                total += item.precio;
            });

            mensaje += `\nMonto total a pagar: $${total.toFixed(2)}`;
            contenidoCuadroDialogo.innerText = mensaje;
        }

        cuadroDialogo.style.display = "block";
        cerrarCuadroDialogo.removeAttribute("disabled");
    });

    document.getElementById("cerrar-cuadro-dialogo").addEventListener("click", function () {
        document.getElementById("cuadro-dialogo").style.display = "none";
        this.setAttribute("disabled", "true");
    });

    mostrarFantasiaButton.addEventListener("click", function () {
        const soloFantasia = mostrarFantasiaButton.dataset.mostrar === "true";
        mostrarFantasiaButton.dataset.mostrar = soloFantasia ? "false" : "true";
        mostrarProductos(soloFantasia, false, false);
    });

    mostrarHistoriaButton.addEventListener("click", function () {
        const soloHistoria = mostrarHistoriaButton.dataset.mostrar === "true";
        mostrarHistoriaButton.dataset.mostrar = soloHistoria ? "false" : "true";
        mostrarProductos(false, soloHistoria, false);
    });

    mostrarComicsButton.addEventListener("click", function () {
        const soloComics = mostrarComicsButton.dataset.mostrar === "true";
        mostrarComicsButton.dataset.mostrar = soloComics ? "false" : "true";
        mostrarProductos(false, false, soloComics);
    });

    // Manejar el cambio en el campo de filtro
    filtroInput.addEventListener("input", function () {
        const filtro = filtroInput.value.toLowerCase();
        productos.forEach((producto) => {
            if (producto.nombre.toLowerCase().includes(filtro)) {
                producto.fantasia = true;
            } else {
                producto.fantasia = false;
            }
        });

        const soloFantasia = mostrarFantasiaButton.dataset.mostrar === "true";
        const soloHistoria = mostrarHistoriaButton.dataset.mostrar === "true";
        const soloComics = mostrarComicsButton.dataset.mostrar === "true";
        mostrarProductos(soloFantasia, soloHistoria, soloComics);
    });

    // Inicialmente, muestra todos los productos
    mostrarProductos(false, false, false);

    // Añadir productos al carrito
    carritoProductos.addEventListener("click", function (event) {
        if (event.target.classList.contains("Añadir_al_Carrito")) {
            const nombre = event.target.dataset.nombre;
            const precio = parseFloat(event.target.dataset.precio);
            carrito.push({ nombre, precio });
        }
    });
});