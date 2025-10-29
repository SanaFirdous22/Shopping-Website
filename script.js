const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Experience crystal-clear sound with these high quality wireless headphones.",
        price: 999.99,
        image: "https://images.unsplash.com/photo-1748189517364-cda16989c1c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpcmVsZXNzaGVhZHBob25lfGVufDB8fDB8fHww"
    },
    {
        id: 2,
        name: "Smart Watch",
        description: "Stay connected and track your fitness goals with this sleek smart watch.",
        price: 1449.99,
        image: "https://images.unsplash.com/photo-1542541864-4abf21a55761?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with excellent sound quality.",
        price: 499.99,
        image: "https://images.unsplash.com/photo-1507878566509-a0dbe19677a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsdWV0b290aCUyMHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 4,
        name: "Gaming Mouse",
        description: "Ergonomic gaming mouse with customizable buttons.",
        price: 639.99,
        image: "https://images.unsplash.com/photo-1662323861979-0538474387e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fEdhbWluZyUyME1vdXNlfGVufDB8fDB8fHww"
    },
    {
        id: 5,
        name: "Laptop",
        description: "High performance laptop for work and gaming.",
        price: 80099.99,
        image: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 6,
        name: "Digital Camera",
        description: "Capture your moments with this high resolution digital camera.",
        price: 20099.99,
        image: "https://images.unsplash.com/photo-1526556838038-5d9deb7998bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERpZ2l0YWwlMjBDYW1lcmF8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 7,
        name: "Tablet",
        description: "Portable tablet with high resolution display.",
        price: 10199.99,
        image: "https://images.unsplash.com/photo-1628591459313-a64214c5bfac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fFRhYmxldHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 8,
        name: "Smartphone",
        description: "Latest model smartphone with advanced features.",
        price: 6999.99,
        image: "https://images.unsplash.com/photo-1598327106026-d9521da673d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fFNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 9,
        name: "Wireless Charger",
        description: "Fast wireless charger compatible with multiple devices.",
        price: 2009.99,
        image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFdpcmVsZXNzJTIwQ2hhcmdlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 10,
        name: "External Hard Drive",
        description: "Portable external hard drive with 2TB storage capacity.",
        price: 2000.99,
        image: "https://images.unsplash.com/photo-1689535090070-647b1b194631?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fEV4dGVybmFsJTIwSGFyZCUyMERyaXZlfGVufDB8fDB8fHww"
    },
    {
        id: 11,
        name: "Gaming Keyboard",
        description: "Mechanical gaming keyboard with RGB lighting.",
        price: 999.99,
        image: "https://images.unsplash.com/photo-1645802106095-765b7e86f5bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fEdhbWluZyUyMEtleWJvYXJkfGVufDB8fDB8fHww"
    },
    {
        id: 12,
        name: "Smart Home Speaker",
        description: "Voice-controlled smart home speaker with excellent sound.",
        price: 3029.99,
        image: "https://images.unsplash.com/photo-1720969834816-efc2e87404e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxTbWFydCUyMEhvbWUlMjBTcGVha2VyfGVufDB8fDB8fHww"
    },
    {
        id: 13,
        name: "Fitness Tracker",
        description: "Waterproof fitness tracker with heart rate monitor.",
        price: 4449.99,
        image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Rml0bmVzcyUyMFRyYWNrZXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 14,
        name: "Drone",
        description: "High performance drone with HD camera.",
        price: 49999.99,
        image: "https://images.unsplash.com/photo-1514505213055-b456c4420f67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxEcm9uZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 15,
        name: "VR Headset",
        description: "Immersive virtual reality headset for gaming and entertainment.",
        price: 20099.99,
        image: "https://images.unsplash.com/photo-1702471897393-47ec1ba1192b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VlIlMjBIZWFkc2V0fGVufDB8fDB8fHww"
    },
    {
        id: 16,
        name: "Smart Light Bulb",
        description: "Energy efficient smart light bulb with color control.",
        price: 1000.99,
        image: "https://images.unsplash.com/photo-1717172448983-2b0c098be9f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxTbWFydCUyMExpZ2h0JTIwQnVsYnxlbnwwfHwwfHx8MA%3D%3D"
    }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to render products on the page (only on index.html)
function renderProducts() {
    if (!document.getElementById("product-list")) return;

    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">Rs.${product.price.toFixed(2)}</div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productCard.addEventListener("click", () => {
            openProductModal(product);
        });

        productList.appendChild(productCard);
    });
}

function openProductModal(product) {
    const modal = document.getElementById("product-modal");
    const modalImage = document.getElementById("modal-image");
    const modalName = document.getElementById("modal-name");
    const modalDescription = document.getElementById("modal-description");
    const modalPrice = document.getElementById("modal-price");
    // Removed modalAddToCart since button is removed from modal

    // Hide modal content first
    modal.style.display = "none";

    // Set content
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalName.textContent = product.name;
    modalDescription.textContent = product.description;  // Show description as per user feedback
    modalPrice.textContent = `Rs.${product.price.toFixed(2)}`;

    // Removed modalAddToCart.onclick handler since button is removed

    // Show modal after content is set
    setTimeout(() => {
        modal.style.display = "block";
    }, 100);
}

function closeProductModal() {
    const modal = document.getElementById("product-modal");
    modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCart();
    updateCartCount();

    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", filterProducts);
    }

    const modalClose = document.getElementById("modal-close");
    if (modalClose) {
        modalClose.addEventListener("click", closeProductModal);
    }

    window.addEventListener("click", (event) => {
        const modal = document.getElementById("product-modal");
        if (event.target === modal) {
            closeProductModal();
        }
    });
});

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.product.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ product, quantity: 1 });
    }
    saveCart();
    updateCartCount();
    alert(`${product.name} added to cart.`);
}

function removeFromCart(productId) {
    const cartItem = cart.find(item => item.product.id === productId);
    if (!cartItem) return;

    if (cartItem.quantity > 1) {
        cartItem.quantity--;
    } else {
        cart = cart.filter(item => item.product.id !== productId);
    }
    saveCart();
    updateCart();
    updateCartCount();
}

// Function to update cart display (only on cart.html)
function updateCart() {
    if (!document.getElementById("cart-items")) return;

    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItemsContainer.innerHTML = "";
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.innerHTML = "";
        return;
    }

    let total = 0;
    cart.forEach(item => {
        total += item.product.price * item.quantity;

        const cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";
        cartItemDiv.innerHTML = `
            <span>${item.product.name} x ${item.quantity}</span>
            <span>Rs.${(item.product.price * item.quantity).toFixed(2)}</span>
            <button onclick="removeFromCart(${item.product.id})" class="remove-btn">&times;</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });

    cartTotal.textContent = `Total: Rs.${total.toFixed(2)}`;
}

// Function to update cart count in header (both pages)
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    }
}

function filterProducts() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">Rs.${product.price.toFixed(2)}</div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(productCard);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCart();
    updateCartCount();

    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", filterProducts);
    }
});
