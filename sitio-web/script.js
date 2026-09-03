/* ==========================================
   DATA DE PRODUCTOS (20 PRODUCTOS REALES)
   ========================================== */
const productsData = [
    { id: 1, name: "Remera Training Pro", category: "Gym", gender: "Hombre", price: 29999, oldPrice: 35999, isNew: true, discount: 15, rating: 4.8, reviews: 32, img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop", desc: "Diseñada para entrenamientos intensos con tecnología de secado rápido." },
    { id: 2, name: "Short Performance", category: "Gym", gender: "Hombre", price: 24999, oldPrice: 0, isNew: false, discount: 0, rating: 4.6, reviews: 18, img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=600&auto=format&fit=crop", desc: "Ajuste cómodo con libertad total de movimiento." },
    { id: 3, name: "Campera Running Air", category: "Running", gender: "Hombre", price: 59999, oldPrice: 74999, isNew: true, discount: 20, rating: 4.9, reviews: 45, img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=600&auto=format&fit=crop", desc: "Rompeviento ultraliviano con detalles reflectivos para la noche." },
    { id: 4, name: "Calza Flex Mujer", category: "Gym", gender: "Mujer", price: 34999, oldPrice: 0, isNew: false, discount: 0, rating: 4.7, reviews: 29, img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=600&auto=format&fit=crop", desc: "Cintura alta reforzada, compresión media y cero transparencias." },
    { id: 5, name: "Buzo Essential Sport", category: "Gym", gender: "Hombre", price: 49999, oldPrice: 58999, isNew: false, discount: 15, rating: 4.5, reviews: 22, img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop", desc: "Tejido frizado liviano ideal para entrada en calor." },
    { id: 6, name: "Remera Football Elite", category: "Fútbol", gender: "Hombre", price: 39999, oldPrice: 0, isNew: true, discount: 0, rating: 4.9, reviews: 54, img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=600&auto=format&fit=crop", desc: "Indumentaria ligera para máxima agilidad en la cancha." },
    { id: 7, name: "Pantalón Training Pro", category: "Gym", gender: "Hombre", price: 54999, oldPrice: 64999, isNew: false, discount: 15, rating: 4.4, reviews: 14, img: "https://images.unsplash.com/photo-1483721061946-dc63b98003b6?q=80&w=600&auto=format&fit=crop", desc: "Corte anatómico con cierres en los tobillos." },
    { id: 8, name: "Musculosa Dry Fit", category: "Gym", gender: "Mujer", price: 27999, oldPrice: 0, isNew: false, discount: 0, rating: 4.6, reviews: 19, img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600&auto=format&fit=crop", desc: "Espalda deportiva para máxima frescura en días calurosos." },
    { id: 9, name: "Top Deportivo Impact", category: "Gym", gender: "Mujer", price: 31999, oldPrice: 39999, isNew: true, discount: 20, rating: 4.8, reviews: 38, img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=600&auto=format&fit=crop", desc: "Sostén de alto impacto para running y rutinas intensas." },
    { id: 10, name: "Short Running Speed", category: "Running", gender: "Mujer", price: 26999, oldPrice: 0, isNew: false, discount: 0, rating: 4.5, reviews: 11, img: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=600&auto=format&fit=crop", desc: "Incluye calza interna y bolsillo con cierre para llaves." },
    { id: 11, name: "Camiseta Basket Heritage", category: "Básquet", gender: "Hombre", price: 42999, oldPrice: 0, isNew: false, discount: 0, rating: 4.9, reviews: 27, img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop", desc: "Corte holgado de estilo urbano y tejido mallas respirables." },
    { id: 12, name: "Remera Running Aero", category: "Running", gender: "Mujer", price: 28999, oldPrice: 34999, isNew: true, discount: 15, rating: 4.7, reviews: 16, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600&auto=format&fit=crop", desc: "Ultra liviana con microperforaciones para ventilación activa." }
];

let cart = [];
let favorites = [];

/* ==========================================
   APP INITIALIZATION
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(productsData);
    setupScrollEffect();
    setupMobileMenu();
});

/* ==========================================
   RENDER PRODUCTS
   ========================================== */
function renderProducts(products) {
    const grid = document.getElementById("products-grid");
    grid.innerHTML = "";

    if (products.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 1rem;">No encontramos productos que coincidan con tu búsqueda.</p>
                <button class="btn btn-primary" onclick="resetFilters()">Ver todos los productos</button>
            </div>
        `;
        return;
    }

    products.forEach(p => {
        const isFav = favorites.includes(p.id);
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            ${p.isNew ? `<span class="product-badge">NUEVO</span>` : (p.discount > 0 ? `<span class="product-badge" style="background:#ff4757; color:#fff;">${p.discount}% OFF</span>` : '')}
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFav(${p.id})"><i class="fa-solid fa-heart"></i></button>
            
            <div class="product-img-wrap" onclick="openQuickview(${p.id})">
                <img src="${p.img}" alt="${p.name}" class="product-img">
            </div>

            <div class="product-info">
                <span class="product-cat">${p.gender} • ${p.category}</span>
                <h3 class="product-name" onclick="openQuickview(${p.id})">${p.name}</h3>
                
                <div class="product-rating">
                    <i class="fa-solid fa-star"></i>
                    <span>${p.rating} (${p.reviews})</span>
                </div>

                <div class="product-bottom">
                    <div class="price-box">
                        <span class="current-price">$${p.price.toLocaleString('es-AR')}</span>
                        ${p.oldPrice > 0 ? `<span class="old-price">$${p.oldPrice.toLocaleString('es-AR')}</span>` : ''}
                    </div>
                    <button class="add-cart-btn" onclick="addToCart(${p.id})"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

/* ==========================================
   FILTERS & SEARCH
   ========================================== */
function applyFilters() {
    const searchValue = document.getElementById("search-input").value.toLowerCase();
    const sortValue = document.getElementById("sort-select").value;
    const maxPrice = parseInt(document.getElementById("price-range").value);
    const selectedCategory = document.querySelector('input[name="cat"]:checked').value;

    let filtered = productsData.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchValue) || p.category.toLowerCase().includes(searchValue);
        const matchesPrice = p.price <= maxPrice;
        
        let matchesCategory = true;
        if (selectedCategory === "Ofertas") {
            matchesCategory = p.discount > 0;
        } else if (selectedCategory !== "all") {
            matchesCategory = p.category === selectedCategory || p.gender === selectedCategory;
        }

        return matchesSearch && matchesPrice && matchesCategory;
    });

    // Sorting
    if (sortValue === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortValue === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    renderProducts(filtered);
}

function setCategoryFilter(cat) {
    const radio = document.querySelector(`input[name="cat"][value="${cat}"]`);
    if (radio) {
        radio.checked = true;
    } else {
        document.querySelector('input[name="cat"][value="all"]').checked = true;
    }
    applyFilters();
    document.getElementById("catalog").scrollIntoView({ behavior: 'smooth' });
}

function resetFilters() {
    document.getElementById("search-input").value = "";
    document.querySelector('input[name="cat"][value="all"]').checked = true;
    document.getElementById("price-range").value = 80000;
    updatePriceLabel(80000);
    applyFilters();
}

function updatePriceLabel(val) {
    document.getElementById("price-val").innerText = `$${parseInt(val).toLocaleString('es-AR')}`;
}

function scrollToCatalogSearch() {
    document.getElementById("catalog").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("search-input").focus();
}

/* ==========================================
   CART FUNCTIONS
   ========================================== */
function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1, selectedSize: 'M' });
    }

    updateCartUI();
    showToast(`"${product.name}" agregado al carrito ✓`);
}

function updateCartQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const cartContainer = document.getElementById("cart-items");
    const countBadge = document.getElementById("cart-count");
    
    cartContainer.innerHTML = "";
    let subtotal = 0;
    let totalCount = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p style="text-align: center; color: var(--text-muted); margin-top: 2rem;">Tu carrito está vacío.</p>`;
    } else {
        cart.forEach(item => {
            subtotal += item.price * item.qty;
            totalCount += item.qty;

            const cartElem = document.createElement("div");
            cartElem.className = "cart-item";
            cartElem.innerHTML = `
                <img src="${item.img}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-meta">Talle: ${item.selectedSize}</div>
                    <div class="cart-item-price">$${(item.price * item.qty).toLocaleString('es-AR')}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
                    </div>
                </div>
            `;
            cartContainer.appendChild(cartElem);
        });
    }

    countBadge.innerText = totalCount;
    document.getElementById("cart-subtotal").innerText = `$${subtotal.toLocaleString('es-AR')}`;
    document.getElementById("cart-total").innerText = `$${subtotal.toLocaleString('es-AR')}`;
}

function openCart() {
    document.getElementById("cart-drawer").classList.add("open");
    document.getElementById("overlay").classList.add("open");
}

function closeCart() {
    document.getElementById("cart-drawer").classList.remove("open");
    document.getElementById("overlay").classList.remove("open");
}

/* ==========================================
   FAVORITES & QUICKVIEW MODAL
   ========================================== */
function toggleFav(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
        showToast("Producto removido de favoritos");
    } else {
        favorites.push(id);
        showToast("Producto guardado en favoritos ❤️");
    }
    applyFilters();
}

function openQuickview(id) {
    const p = productsData.find(item => item.id === id);
    const content = document.getElementById("qv-content");
    content.innerHTML = `
        <div class="qv-gallery">
            <img src="${p.img}" alt="${p.name}">
        </div>
        <div>
            <span style="font-size:0.8rem; color:var(--text-muted);">${p.gender} • ${p.category}</span>
            <h2 class="qv-title">${p.name}</h2>
            <div class="qv-price">$${p.price.toLocaleString('es-AR')}</div>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem;">${p.desc}</p>
            
            <span class="selector-label">Seleccionar Talle:</span>
            <div class="size-selector">
                <span class="size-opt">S</span>
                <span class="size-opt selected">M</span>
                <span class="size-opt">L</span>
                <span class="size-opt">XL</span>
            </div>

            <button class="btn btn-primary" style="width:100%; margin-top:1rem;" onclick="addToCart(${p.id}); closeQuickview();">
                Agregar al Carrito
            </button>
        </div>
    `;
    document.getElementById("qv-modal").classList.add("open");
}

function closeQuickview() {
    document.getElementById("qv-modal").classList.remove("open");
}

/* ==========================================
   MODALS & OTHER UTILS
   ========================================== */
function openSizeModal() { document.getElementById("size-modal").classList.add("open"); }
function closeSizeModal() { document.getElementById("size-modal").classList.remove("open"); }

function openCheckout() {
    if (cart.length === 0) {
        showToast("El carrito está vacío");
        return;
    }
    closeCart();
    document.getElementById("checkout-modal").classList.add("open");
}
function closeCheckout() { document.getElementById("checkout-modal").classList.remove("open"); }

function processOrder(e) {
    e.preventDefault();
    closeCheckout();
    cart = [];
    updateCartUI();
    alert("¡COMPRA REALIZADA CON ÉXITO!\n\nNúmero de pedido: #NV-" + Math.floor(Math.random() * 899999 + 100000) + "\nRecibirás un email con la confirmación.");
}

function handleNewsletter(e) {
    e.preventDefault();
    const input = document.getElementById("news-email");
    showToast("¡Gracias por suscribirte a NOVA SPORT!");
    input.value = "";
}

function showToast(msg) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--accent)"></i> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function setupScrollEffect() {
    window.addEventListener("scroll", () => {
        const header = document.getElementById("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

function setupMobileMenu() {
    const btn = document.getElementById("hamburger");
    const menu = document.getElementById("nav-menu");
    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
}

// Overlay listener
document.getElementById("overlay").addEventListener("click", () => {
    closeCart();
});