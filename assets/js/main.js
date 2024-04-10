$(document).ready(function () {

    // Arreglo inicial vacío, variable de arreglo del front, para almacenar las imágenes seleccionadas
    let imagenesSeleccionadas = [];

    // Función para seleccionar un producto
    function seleccionarProducto(nombreProducto) {
        let productoSeleccionado = document.querySelector(".producto");
        // let imagenSeleccionada = document.querySelector(`img[data-nombre="${nombreProducto}"]`);
        productoSeleccionado.style.opacity = 0.5; // Cambia la opacidad a 50% (opaco)

        // Almacenar la imagen seleccionada en el arreglo
        imagenesSeleccionadas.push(nombreProducto);
        mostrarModal();
    };

    // Función para mostrar los productos seleccionados en el modal
    function mostrarModal() {
        // Mostrar el modal
        $('#carritoModal').modal('show');
        // Limpiar el contenido previo del modal
        $('#imagenesSeleccionadas').empty();

        // Mostrar las imágenes seleccionadas en el array del modal
        let imagenesSeleccionadas = document.querySelector('#imagenesSeleccionadas');
        imagenesSeleccionadas.innerHTML = ' ';  //Limpiar el contenido previo del modal

        imagenesSeleccionadas.forEach(nombreProducto => {
            // Crear elemento de imagen y agregarlo al modal
            let img = document.createElement('img');
            img.src = `/img/${nombreProducto}.png`;
            img.alt = nombreProducto;
            $('#imagenesSeleccionadas').append(img);
        });

    };

});