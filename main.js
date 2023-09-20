const bebidas = [
    {
        nombre: "Jack Daniel's",
        precio: 13000,
        tipo: "Whiskey",
        mililitros: 750,
    },
    {
        nombre: "Johnnie Walker",
        precio: 11900,
        tipo: "Whiskey",
        mililitros: 700,
    },
    {
        nombre: "Jägermeister",
        precio: 9600,
        tipo: "Licor",
        mililitros: 750,
    },
    {
        nombre: "Baileys Irish Cream",
        precio: 5700,
        tipo: "Licor",
        mililitros: 750,
    },
    {
        nombre: "Beefeater",
        precio: 5000,
        tipo: "Gin",
        mililitros: 750,
    },
    {
        nombre: "Cobos",
        precio: 5700,
        tipo: "Vino Tinto",
        mililitros: 750,
    }

]

function indicarCantidad(bebida, cantidad) {
    let total = cantidad * bebida.precio;
    if (cantidad >= 6){
        let descuento = 0.1
        total -= total * descuento;
        alert(`Has seleccionado ${cantidad} unidad(es) de ${bebida.nombre}. El total a pagar es $${total} con un descuento del 10%.`);
    } else {
        alert(`Has seleccionado ${cantidad} unidad(es) de ${bebida.nombre}. El total a pagar es $${total}.`);
    }
}

function confirmacionProducto(bebida) {
    let seleccion = confirm("Seleccionaste:\n" + bebida.nombre + "\nEs correcto?");
    if (seleccion) {
        let cantidad = Number(prompt("Cantidad a comprar:"));
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("La cantidad ingresada no es válida.");
            confirmacionProducto(bebida);
        } else {
            indicarCantidad(bebida, cantidad);
        }
    } else {
        seleccionarProducto();
    }
}

function seleccionarProducto() {
    let bebidaElegida = prompt("Ingrese el nombre de la bebida que desea comprar:");
    let resultado = bebidas.find(bebida => bebida.nombre.toLowerCase() === bebidaElegida.toLowerCase());
    if (resultado) {
        confirmacionProducto(resultado);
    } else {
        alert("No se encontró la bebida ingresada.");
        seleccionarProducto();
    }
}

function elegirProducto() {
    let tipoBebidaElegida = prompt("Ingrese el tipo de bebida que desea comprar. \n \n Bebidas en stock: \n Whiskey \n Vino Tinto \n Gin \n Licor");

    let resultados = bebidas.filter(bebida => bebida.tipo.toLowerCase() === tipoBebidaElegida.toLowerCase());

    if (resultados.length > 0) {
        let mensaje = "Resultados de la búsqueda:\n";
        mensaje += resultados.map(bebida => `- ${bebida.nombre} (${bebida.tipo}) - Precio: $${bebida.precio}`).join("\n");
        alert(mensaje);
        if (resultados.length === 1) {
            confirmacionProducto(resultados[0]);
        } else {
            seleccionarProducto();
        }
    } else {
        alert("No se encontraron resultados para ese tipo de bebida.");
        elegirProducto();
    }
}

function bienvenida() {
    let usuario = prompt("¿Cuál es su nombre?");
    let edad = Number(prompt("Ingrese su edad"));

    if (edad < 18 && edad > 0) {
        alert("Lo sentimos, " + usuario + " usted es menor de edad.");
    } else if (isNaN(edad) || edad < 0) {
        alert("La edad ingresada no es válida");
        bienvenida();
    } else {
        alert("¡Hola " + usuario + "! Bienvenido a la tienda online de bebidas");
        elegirProducto();
    };
}

bienvenida();