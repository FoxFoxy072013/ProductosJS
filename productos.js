const ProductosEnVenta = [ {
    nombre: "Procesador",
    precio: 87999,
    stock: 31,
},
{
    nombre: "Memoria RAM",
    precio: 29999,
    stock: 50,
},
{
    nombre: "Disco Rígido",
    precio: 70989,
    stock: 24,
},
{
    nombre: "Placa de video",
    precio: 185000,
    stock: 26,
},
{
    nombre: "Teclado",
    precio: 23500,
    stock: 72,
},
{
    nombre: "Mouse",
    precio: 8999,
    stock: 105,
}
]

const iva = 0.21;
const iva2 = 1.21;

function buscarProducto() {
    
    const nombreProducto = prompt("Ingrese el nombre del producto:");
    const productoEncontrado = ProductosEnVenta.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());

    if (productoEncontrado) {
        alert("Tenemos stock de " + productoEncontrado.nombre + "\nEl precio es de " + productoEncontrado.precio + "\nEl importe de IVA al 21% es de " + productoEncontrado.precio * iva + "\n El precio final es de " + (productoEncontrado.precio * iva2).toFixed(2));
    } else {
        const Nombresdeproductos = ProductosEnVenta.map(producto => producto.nombre);
        alert("No se encuentra el producto. En este momento contamos con stock de: " + Nombresdeproductos.join(",") );
    }
}

buscarProducto();