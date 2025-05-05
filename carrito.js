let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")

function renderCarrito(cartItems) {
    let total = 0
    cartItems.forEach(producto => {
        const cart = document.createElement("div")
        cart.innerHTML = `<h3>${producto.nombre}</h3>
                        <p>${producto.color}</p>
                        <P>${producto.talle}</p>
                        <p>${producto.precio}</p>`
        cartContainer.appendChild(cart)

        total +=producto.precio
    })
    const totalContainer = document.createElement("div")
    totalContainer.classList.add("total-container")
    totalContainer.innerText = `Total: $${total}`
    cartContainer.appendChild(totalContainer)
}
renderCarrito(cartStorage)