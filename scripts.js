const productos= [
    {
        id: 1, 
        nombre: "Camiseta", 
        color: "Rojo",
        talle: "M",
        precio: 5000
    },
    {
        id: 2, 
        nombre: "Jeans", 
        color: "Azul",
        talle: "L",
        precio: 8000
    },
    {
        id: 3, 
        nombre: "Zapatillas", 
        color: "Negro",
        talle: "42",
        precio: 12000
    },
    {
        id: 4, 
        nombre: "pulover",
        color: "Verde",
        talle: "M", 
        precio: 4000
    },
    {
        id: 5, 
        nombre: "Buzo",
        color: "Celeste",
        talle: "S", 
        precio: 13000
    },
]
let cartProducts = []
let productsContainer = document.getElementById("products-container")

function renderProductos(productsArray) {
    productsArray.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                        <p>${producto.color}</p>
                        <P>${producto.talle}</p>
                        <p>$${producto.precio}</p>
                        <button class="productoAgregar" id="${producto.id}">Agregar</button>`
        productsContainer.appendChild(card)
    })
    addToCartButton()
}
renderProductos(productos)


function addToCartButton () {
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selecterProducts = productos.find(producto => producto.id == productId)
            cartProducts.push(selecterProducts)
            console.log(cartProducts)

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
}


