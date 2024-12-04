document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Product 1", price: 300, image: "images/product1.jpg" },
        { id: 2, name: "Product 2", price: 400, image: "images/product2.png" },
        { id: 3, name: "Product 3", price: 400, image: "images/product3.jpg" },
    ];

    const productList = document.querySelector(".product-list");
    const cartList = document.querySelector(".cart-list");
    const cart = [];

    function displayProducts() {
        productList.innerHTML = products.map(product => `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: Rs.${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `).join("");
    }

    window.addToCart = function (id) {
        const product = products.find(p => p.id === id);
        cart.push(product);
        displayCart();
    };

    function displayCart() {
        cartList.innerHTML = cart.map(item => `
            <div class="cart-item">
                <h4>${item.name}</h4>
                <p>Price: Rs.${item.price}</p>
            </div>
        `).join("");
    }

    displayProducts();
});
