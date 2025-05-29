let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")
let total = 0
function renderCarrito(cartItems) {
    total = 0
    cartItems.forEach((producto) => {
        const cart = document.createElement("div")
        cart.innerHTML = `<h3>${producto.nombre}</h3>
                        <p>${producto.color}</p>
                        <P>${producto.talle}</p>
                        <p>$${producto.precio}</p>`
                        
        cartContainer.appendChild(cart)

        total +=producto.precio
    })

    
        
    const totalContainer = document.createElement("div")
    totalContainer.classList.add("total-container")
    totalContainer.innerText = `Total: $${total}`
    cartContainer.appendChild(totalContainer)

//  botones de eliminar
    
}
renderCarrito(cartStorage)

const btnPagar = document.getElementById("pagar-pedido")

btnPagar.onclick = () => {
    localStorage.setItem("montoTotal", total) 
    window.location.href = "pago.html" 
    
}
cartContainer.appendChild(pagarButton)




const btnBorrarLS = document.getElementById("borrar-carrito")

btnBorrarLS.onclick = () => {
    localStorage.clear() // Borra TODO el localStorage
    location.reload()    // Recarga la página para reflejar los cambios
}

