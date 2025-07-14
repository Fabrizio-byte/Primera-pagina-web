document.addEventListener('DOMContentLoaded', () => {
    // Array de ejemplo para almacenar los productos
    const productos = [
        {
            nombre: "Laptop Ultrabook",
            precio: 1200,
            descripcion: "Potente y ligera, ideal para trabajo y estudio."
        },
        {
            nombre: "Teléfono Inteligente Pro",
            precio: 850,
            descripcion: "Cámara de alta resolución y batería de larga duración."
        },
        {
            nombre: "Auriculares Inalámbricos",
            precio: 150,
            descripcion: "Sonido envolvente y cancelación de ruido activa."
        }
    ];

    const listaProductosUL = document.getElementById('lista-productos');
    const agregarProductoBtn = document.getElementById('agregar-producto-btn');

    // Función para renderizar los productos en la lista
    function renderizarProductos() {
        listaProductosUL.innerHTML = ''; // Limpia la lista antes de volver a renderizar
        productos.forEach(producto => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p><strong>Precio:</strong> $${producto.precio}</p>
                <p>${producto.descripcion}</p>
            `;
            listaProductosUL.appendChild(li);
        });
    }

    // Función para agregar un nuevo producto
    function agregarNuevoProducto() {
        // Puedes pedir la información al usuario o usar datos predefinidos
        const nuevoNombre = prompt("Ingrese el nombre del producto:");
        if (!nuevoNombre) return; // Si el usuario cancela

        const nuevoPrecio = parseFloat(prompt("Ingrese el precio del producto:"));
        if (isNaN(nuevoPrecio)) return; // Si el usuario ingresa un valor no numérico

        const nuevaDescripcion = prompt("Ingrese una descripción breve:");
        if (!nuevaDescripcion) return; // Si el usuario cancela

        const nuevoProducto = {
            nombre: nuevoNombre,
            precio: nuevoPrecio,
            descripcion: nuevaDescripcion
        };
        productos.push(nuevoProducto);
        renderizarProductos(); // Vuelve a renderizar la lista con el nuevo producto
    }

    // Renderiza los productos al cargar la página
    renderizarProductos();

    // Asocia el evento click al botón "Agregar Nuevo Producto"
    agregarProductoBtn.addEventListener('click', agregarNuevoProducto);
});