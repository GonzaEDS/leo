let carrito = [];

class PorductoCarrito {
    constructor(nombre , precio , imagen , id){
        this.nombre=nombre;
        this.precio=precio;
        this.imagen=imagen;
        this.id=id;

    }
}

let divContainer = document.getElementById("row");


function rellenarPagina(arrayProductos){
        
        for( let producto of arrayProductos){

            let div = document.createElement("div");
            div.classList = "col-4 mt-3"

            div.innerHTML =` 
            <div class="card" style="width: 18rem;">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$ <strong>${producto.precio}</strong></p>
                        <button id="btnSweet" class="btn btn-primary anadirCarrito">Añadir al carrito</button>
                </div>
            </div>`

            divContainer.appendChild(div)

        } 
}

rellenarPagina(productos);


let botones = document.querySelectorAll(".anadirCarrito");

botones.forEach(elemtno => {
    elemtno.addEventListener("click",anadirCarrito)
})

function anadirCarrito(e){

    let carritoLocalStorage=JSON.parse(localStorage.getItem("carrito"))

    console.log(carritoLocalStorage);

    let nombre  = e.target.parentNode.children[0].textContent;
    let precio     = e.target.parentNode.children[1].children[0].textContent;
    let imagen  = e.target.parentNode.parentNode.children[0].src;
    let id            = e.target.parentNode.parentNode.children[0].alt;

    const producto = new PorductoCarrito(nombre,precio, imagen, id);

    carrito.push(producto);
    
    localStorage.setItem("carrito",JSON.stringify(carrito))
}

agregadoAlCarrito();