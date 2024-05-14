class Book {
    constructor(title, author, cover, price, category, quantity) {
        this.title = title;
        this.author = author;
        this.cover = cover;
        this.price = price;
        this.category = category;
        this.quantity = quantity;
    }
}

// Matriz de libros a mostrar
const displayBooks = [
    // Ficción
    new Book('Juego de Tronos', 'George R. R. Martin', 'img/Juego de Tronos.webp', 199.99, 'Fantasía', 15),
    new Book('Choque de Reyes', 'George R. R. Martin', 'img/Choque de Reyes.webp', 299.99, 'Fantasía', 12),
    new Book('Tormenta de Espadas', 'George R. R. Martin', 'img/Tormenta de Espadas.webp', 300.99, 'Fantasía', 20),
    new Book('Festin de Cuervos', 'George R. R. Martin', 'img/Festin de Cuervos.webp', 400.99, 'Fantasía', 20),
    new Book('Danza de Dragones', 'George R. R. Martin', 'img/Danza de Dragones.webp', 500.99, 'Fantasía', 20),
    new Book('Dune 1', 'Frank Herbert', 'img/Dune 1.webp', 400.99, 'Fantasía', 20),
    new Book('Messias de Dune', 'Frank Herbert', 'img/Messias de Dune.webp', 500.99, 'Fantasía', 20),
    new Book('Hijos de Dune', 'Frank Herbert', 'img/Hijos de Dune.webp', 600.99, 'Fantasía', 20),
    new Book('Torre del Alba', 'Sarah J. Maas', 'img/Torre del Alba.webp', 700.99, 'Fantasía', 20),
    new Book('Reino de Cenizas', 'Sarah J. Maas', 'img/Reino de Cenizas.webp', 800.99, 'Fantasía', 20),
    new Book('Corona de Medianoche', 'Sarah J. Maas', 'img/Corona de Medianoche.webp', 400.99, 'Fantasía', 20),
    new Book('Heredera de Fuego', 'Sarah J. Maas', 'img/Heredera de Fuego.webp', 900.99, 'Fantasía', 20),
    new Book('Reina de Sombras', 'Sarah J. Maas', 'img/Reina de Sombras.webp', 560.99, 'Fantasía', 20),
    new Book('Imperio de Tormentas', 'Sarah J. Maas', 'img/Imperio de Tormentas.webp', 670.99, 'Fantasía', 20),
    new Book('Trono de Cristal', 'Sarah J. Maas', 'img/Trono de Cristal.webp', 300.99, 'Fantasía', 20),
    new Book('Señor de los Anillos', 'J.R.R.Tolkien', 'img/Señor de los Anillos.webp', 590.99, 'Fantasía', 20),
    new Book('S.A Las 2 Torres', 'J.R.R.Tolkien', 'img/S.A Las 2 Torres.webp', 580.99, 'Fantasía', 20),
    new Book('S.A Retorno del Rey', 'J.R.R.Tolkien', 'img/S.A Retorno del Rey.webp', 990.99, 'Fantasía', 20),
    new Book('El Hobbit', 'J.R.R.Tolkien', 'img/El Hobbit.webp', 500.99, 'Fantasía', 20),
    // Agrega más libros aquí según tu proyecto
    // Historia
    new Book('Diario de Anna Frank', 'Anna Frank', 'img/Diario de Anna Frank.webp', 956, 'Historia', 22),
    new Book('El holocausto', 'Martin Gilbert', 'img/El holocausto.webp', 356, 'Historia', 19),
    new Book('Persas, Era de grandes reyes', '', 'img/Persas, Era de grandes reyes.webp', 888, 'Historia', 21),
    // Comics
    new Book('Jujutsu Kaisen 1', 'Gege Akutami', 'img/Jujutsu Kaisen 1.webp', 100, 'Comics', 20),
    new Book('Jujutsu Kaisen 2', 'Gege Akutami', 'img/Jujutsu Kaisen 2.webp', 134, 'Comics', 18),
    new Book('Jujutsu Kaisen 3', 'Gege Akutami', 'img/Jujutsu Kaisen 3.webp', 256, 'Comics', 15),
    new Book('Jujutsu Kaisen 4', 'Gege Akutami', 'img/Jujutsu Kaisen 4.webp', 555, 'Comics', 15),
    new Book('Jujutsu Kaisen 5', 'Gege Akutami', 'img/Jujutsu Kaisen 5.webp', 777, 'Comics', 15),
    new Book('Naruto 1', 'Masashi Kishimoto', 'img/Naruto 1.webp', 356, 'Comics', 15),
    new Book('Naruto 2', 'Masashi Kishimoto', 'img/Naruto 2.webp', 356, 'Comics', 15),

    // Agrega más libros aquí según tu proyecto
];

export { Book, displayBooks };
