/**
 * NEXUS STORE - Comprehensive Game Store Engine
 */

// EXTENSIVE REAL GAMES DATABASE
const MOCK_GAMES = [
    {
        id: 'g1',
        title: 'Cyberpunk 2077: Phantom Liberty',
        genre: 'RPG',
        platform: 'Steam',
        priceARS: 28999,
        downloadUrl: 'https://store.steampowered.com/app/1245620/ELDEN_RING/',
        oldPriceARS: 57999,
        discount: 50,
        rating: 4.8,
        hasDemo: true,
        badge: 'OFERTA',
        img: 'https://th.bing.com/th/id/OIP.-smFfeJ3WTDbxe-sG3pZ6QHaDt?w=323&h=175&c=7&r=0&o=7&pid=1.7&rm=3',
        desc: 'Adéntrate en el peligroso distrito de Dogtown como un agente secreto de la NUSA. Acción, espionaje cibernético y decisiones morales.',
        requirements: 'Intel i7-8700K / RTX 2060 / 16GB RAM / 70GB SSD'
    },
    {
        id: 'g2',
        title: 'Elden Ring: Shadow of the Erdtree',
        genre: 'RPG',
        platform: 'Steam',
        priceARS: 39999,
        oldPriceARS: 39999,
        discount: 0,
        rating: 4.9,
        hasDemo: false,
        badge: 'TOP',
        img: 'https://th.bing.com/th/id/OIP.Vlto2vO-Ws0hHb3h-6DY-wHaEK?w=272&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
        desc: 'Explora el Reino de la Sombra y descubre los oscuros secretos de Miquella en la aclamada expansión de FromSoftware.',
        requirements: 'Intel i5-8400 / GTX 1060 / 12GB RAM'
    },
    {
        id: 'g3',
        title: 'Black Myth: Wukong',
        genre: 'Acción',
        platform: 'Steam',
        priceARS: 44999,
        oldPriceARS: 44999,
        discount: 0,
        rating: 4.8,
        hasDemo: true,
        badge: 'NUEVO',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNg_Mao6zV0p1oiHOa7evMvLOZxnjUJMseLxNU5rp-ZQ&s=10',
        desc: 'RPG de acción basado en la mitología china. Encarna al Destinado y enfrenta desafíos en un mundo fantástico deslumbrante.',
        requirements: 'Intel i5-8400 / RTX 2060 / 16GB RAM / 130GB SSD'
    },
    {
        id: 'g4',
        title: 'Baldur\'s Gate 3',
        genre: 'RPG',
        platform: 'GOG',
        priceARS: 32999,
        oldPriceARS: 46999,
        discount: 30,
        rating: 5.0,
        hasDemo: false,
        badge: 'OFERTA',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3tn3SdIqH1CGbkd4vbyzudIfEOPkoXHvq-z73JSlCUQ&s=10',
        desc: 'Una aventura RPG basada en Dungeons & Dragons. Libertad de elección absoluta, cooperativo y narrativa profunda.',
        requirements: 'Intel i5-4690 / GTX 970 / 8GB RAM'
    },
    {
        id: 'g5',
        title: 'Red Dead Redemption 2',
        genre: 'Acción',
        platform: 'Steam',
        priceARS: 19999,
        oldPriceARS: 49999,
        discount: 60,
        rating: 4.9,
        hasDemo: false,
        badge: 'OFERTA',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbm-fRIP5nmdMLHWr6JkBGrvl1jNYoWdlsG1tTBdVA-w&s=10',
        desc: 'La épica historia del forajido Arthur Morgan y la banda de Van der Linde al final de la era del Salvaje Oeste.',
        requirements: 'Intel i5-2500K / GTX 770 / 12GB RAM'
    },
    {
        id: 'g6',
        title: 'Grand Theft Auto V: Premium',
        genre: 'Acción',
        platform: 'Epic Games',
        priceARS: 14999,
        oldPriceARS: 29999,
        discount: 50,
        rating: 4.7,
        hasDemo: false,
        badge: 'POPULAR',
        img: 'data:image/webp;base64,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   ',
        desc: 'Explora Los Santos y el mundo en línea de GTA Online con bonificaciones en dinero digital.',
        requirements: 'Intel i5-3470 / GTX 660 / 8GB RAM'
    },
    {
        id: 'g7',
        title: 'Helldivers 2',
        genre: 'Shooter',
        platform: 'Steam',
        priceARS: 34999,
        oldPriceARS: 34999,
        discount: 0,
        rating: 4.7,
        hasDemo: false,
        badge: 'POPULAR',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVb6mAyTsAn0M8zQiD-6k8wEcakVpoY9BjVKq_8S93kQ&s=10',
        desc: 'Únete a la fuerza militar galáctica y combate por la Libertad en intensas batallas cooperativas en tercera persona.',
        requirements: 'Intel i7-4790K / GTX 1060 / 16GB RAM'
    },
    {
        id: 'g8',
        title: 'Resident Evil 4 Remake',
        genre: 'Terror',
        platform: 'Steam',
        priceARS: 26999,
        oldPriceARS: 44999,
        discount: 40,
        rating: 4.9,
        hasDemo: true,
        badge: 'OFERTA',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnu30rn4maswQbFiHI5N6pqggS5s931BVB5TD6pcyQ0g&s=10',
        desc: 'Leon S. Kennedy enfrenta una pesadilla en una aldea europea dominada por el parásito Las Plagas.',
        requirements: 'AMD Ryzen 3 1200 / RX 560 / 8GB RAM'
    },
    {
        id: 'g9',
        title: 'EA Sports FC 25',
        genre: 'Deportes',
        platform: 'EA App',
        priceARS: 49999,
        oldPriceARS: 49999,
        discount: 0,
        rating: 4.3,
        hasDemo: true,
        badge: 'NUEVO',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSN__01KAGgsiuT72_7zVIeflMzWQvf9NaJGCf-K15w&s=10',
        desc: 'La experiencia futbolística más avanzada con licencias oficiales, Ultimate Team e HyperMotionV.',
        requirements: 'Intel i5-6600K / GTX 1050 Ti / 8GB RAM'
    },
    {
        id: 'g10',
        title: 'Hollow Knight: Silksong',
        genre: 'Aventura',
        platform: 'GOG',
        priceARS: 0,
        oldPriceARS: 0,
        discount: 0,
        rating: 5.0,
        hasDemo: true,
        badge: 'DEMO',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6wwcnTbNvizvE0QxVptUJTYXDSl9yzkgEfY1AJXCgQ&s=10',
        desc: 'Prueba la esperada aventura de Hornet en un reino dominado por la seda y la canción.',
        requirements: 'Intel i3-3220 / GTX 560 / 4GB RAM'
    },
    {
        id: 'g11',
        title: 'God of War Ragnarök',
        genre: 'Acción',
        platform: 'Steam',
        priceARS: 42999,
        oldPriceARS: 42999,
        discount: 0,
        rating: 4.9,
        hasDemo: false,
        badge: 'TOP',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAXWrJxS5qefKMZNEVlYXgEF6AOJjZ-VSMJdspzhQkQ&s=10',
        desc: 'Kratos y Atreus emprenden un viaje mítico a través de los Nueve Reinos antes del fatídico Ragnarök.',
        requirements: 'Intel i5-8600 / RTX 2060 / 16GB RAM'
    },
    {
        id: 'g12',
        title: 'Starfield: Digital Premium',
        genre: 'RPG',
        platform: 'Xbox',
        priceARS: 31999,
        oldPriceARS: 63999,
        discount: 50,
        rating: 4.2,
        hasDemo: false,
        badge: 'OFERTA',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBB_AnW3AFkH23whoolCwU_RfqJuv6NiQhlvvrP8N-A&s=10',
        desc: 'Embárcate en un viaje espacial épico de los creadores de Skyrim y Fallout 4.',
        requirements: 'Intel i7-6800K / RX 5700 / 16GB RAM / SSD'
    }
];

// BUNDLES DATABASE
const MOCK_BUNDLES = [
    {
        id: 'b1',
        title: 'Pack RPG Legendario',
        games: ['Cyberpunk 2077', 'Baldur\'s Gate 3', 'Elden Ring'],
        priceARS: 69999,
        oldPriceARS: 128997,
        discount: 45,
        img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'b2',
        title: 'Colección Acción Total',
        games: ['Helldivers 2', 'Red Dead Redemption 2', 'GTA V'],
        priceARS: 44999,
        oldPriceARS: 89997,
        discount: 50,
        img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80'
    }
];




// APP STATE
let currentCurrency = 'ARS';
const exchangeRates = { ARS: 1, USD: 0.00075, EUR: 0.00069 };
let activePlatformFilter = 'all';
let activeGenreFilter = 'all';
let activeSort = 'popular';
let searchQuery = '';
let cart = [];
let wishlist = [];
let library = [];
let appliedCouponDiscount = 0;
let selectedPaymentMethod = 'mercadopago';

// DOM INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    initHeroCarousel();
    renderCatalog();
    renderBundles();
    updateBadges();
    renderAdminTable();
});

// CURRENCY CONVERTER
function formatPrice(amountARS) {
    if (amountARS === 0) return 'GRATIS';
    const converted = amountARS * exchangeRates[currentCurrency];
    if (currentCurrency === 'ARS') return `$${Math.round(converted).toLocaleString('es-AR')} ARS`;
    if (currentCurrency === 'USD') return `$${converted.toFixed(2)} USD`;
    if (currentCurrency === 'EUR') return `€${converted.toFixed(2)} EUR`;
}

function changeCurrency(val) {
    currentCurrency = val;
    renderCatalog();
    renderBundles();
    updateCartUI();
}

// HERO CAROUSEL ENGINE
function initHeroCarousel() {
    const featured = MOCK_GAMES.filter(g => g.badge === 'OFERTA' || g.badge === 'TOP')[0] || MOCK_GAMES[0];
    document.getElementById('hero-bg').src = featured.img;
    document.getElementById('hero-title').innerText = featured.title;
    document.getElementById('hero-desc').innerText = featured.desc;
    document.getElementById('hero-platform').innerText = featured.platform;
    document.getElementById('hero-price').innerText = formatPrice(featured.priceARS);
    document.getElementById('hero-old-price').innerText = featured.oldPriceARS > 0 ? formatPrice(featured.oldPriceARS) : '';
    document.getElementById('hero-buy-btn').onclick = () => addToCart(featured.id);
    document.getElementById('hero-demo-btn').onclick = () => openDemoModal(featured.id);
}

// ROUTING / VIEW SWITCHER
function switchView(viewName) {
    ['store', 'bundles', 'library', 'wishlist', 'admin'].forEach(v => {
        document.getElementById(`view-${v}`).classList.add('hidden');
    });
    document.getElementById(`view-${viewName}`).classList.remove('hidden');

    if (viewName === 'library') renderLibrary();
    if (viewName === 'wishlist') renderWishlist();
    if (viewName === 'admin') renderAdminTable();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// FILTER & SEARCH HANDLERS
function setFilter(type, val) {
    if (type === 'platform') {
        activePlatformFilter = val;
        document.querySelectorAll('.platform-btn').forEach(b => b.classList.remove('active'));
        if (event) event.currentTarget.classList.add('active');
    }
    if (type === 'genre') activeGenreFilter = val;
    renderCatalog();
}

function filterByTag(tag) {
    switchView('store');
    if (tag === 'oferta') {
        activeSort = 'discount';
        document.getElementById('sort-filter').value = 'discount';
    }
    renderCatalog();
}

function setSort(val) {
    activeSort = val;
    renderCatalog();
}

function handleSearch(val) {
    searchQuery = val.toLowerCase();
    renderCatalog();
}

// RENDER CATALOG GRID
function renderCatalog() {
    const grid = document.getElementById('games-grid');
    grid.innerHTML = '';

    let list = MOCK_GAMES.filter(game => {
        const platformMatch = activePlatformFilter === 'all' || game.platform === activePlatformFilter;
        const genreMatch = activeGenreFilter === 'all' || game.genre === activeGenreFilter;
        const searchMatch = game.title.toLowerCase().includes(searchQuery) || game.genre.toLowerCase().includes(searchQuery);
        return platformMatch && genreMatch && searchMatch;
    });

    if (activeSort === 'price-low') list.sort((a, b) => a.priceARS - b.priceARS);
    if (activeSort === 'price-high') list.sort((a, b) => b.priceARS - a.priceARS);
    if (activeSort === 'discount') list.sort((a, b) => b.discount - a.discount);
    if (activeSort === 'rating') list.sort((a, b) => b.rating - a.rating);

    document.getElementById('results-count').innerText = `${list.length} títulos disponibles`;

    list.forEach(game => {
        const inWishlist = wishlist.includes(game.id);
        const card = document.createElement('div');
        card.className = "bg-[#121620] border border-nexus-border rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group";

        card.innerHTML = `
            <div class="relative overflow-hidden cursor-pointer" onclick="openGameDetails('${game.id}')">
                <img src="${game.img}" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute top-3 left-3 flex gap-1">
                    <span class="bg-indigo-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">${game.platform}</span>
                    ${game.discount > 0 ? `<span class="bg-pink-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">-${game.discount}%</span>` : ''}
                </div>
                <button onclick="event.stopPropagation(); toggleWishlist('${game.id}')" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-xs ${inWishlist ? 'text-pink-500' : 'text-slate-300'} hover:scale-110 transition-transform">
                    <i class="fa-${inWishlist ? 'solid' : 'regular'} fa-heart"></i>
                </button>
            </div>

            <div class="p-4 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                        <span>${game.genre}</span>
                        <span class="text-amber-400 font-bold"><i class="fa-solid fa-star mr-1"></i>${game.rating}</span>
                    </div>
                    <h3 class="font-gaming font-bold text-base text-white line-clamp-1 group-hover:text-indigo-400 transition-colors">${game.title}</h3>
                </div>

                <div class="space-y-3 pt-2 border-t border-nexus-border">
                    <div class="flex items-baseline justify-between">
                        <div>
                            ${game.discount > 0 ? `<span class="text-[10px] line-through text-slate-500 block">${formatPrice(game.oldPriceARS)}</span>` : ''}
                            <span class="font-gaming font-bold text-lg text-emerald-400">${formatPrice(game.priceARS)}</span>
                        </div>
                        ${game.hasDemo ? `<button onclick="openDemoModal('${game.id}')" class="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-1 rounded hover:bg-emerald-500 hover:text-white transition-colors"><i class="fa-solid fa-gamepad mr-1"></i>Demo</button>` : ''}
                    </div>

                    <button onclick="addToCart('${game.id}')" class="w-full bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 py-2 rounded-lg font-semibold text-xs transition-all flex items-center justify-center gap-2">
                        <i class="fa-solid fa-cart-plus"></i> Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// BUNDLES RENDERER
function renderBundles() {
    const container = document.getElementById('bundles-container');
    container.innerHTML = '';

    MOCK_BUNDLES.forEach(bundle => {
        container.innerHTML += `
            <div class="bg-[#121620] border border-nexus-border rounded-xl p-6 flex flex-col justify-between space-y-4 glow-indigo">
                <div class="flex justify-between items-start">
                    <div>
                        <span class="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-bold px-2 py-0.5 rounded uppercase">BUNDLE ESPECIAL -${bundle.discount}%</span>
                        <h3 class="font-gaming text-2xl font-bold text-white mt-1">${bundle.title}</h3>
                    </div>
                    <span class="font-gaming text-2xl font-bold text-emerald-400">${formatPrice(bundle.priceARS)}</span>
                </div>
                <div class="bg-[#0a0c10] p-3 rounded-lg border border-nexus-border text-xs text-slate-300 space-y-1">
                    <p class="font-bold text-slate-400 mb-1">Incluye los siguientes juegos:</p>
                    ${bundle.games.map(g => `<p><i class="fa-solid fa-check text-emerald-400 mr-2"></i>${g}</p>`).join('')}
                </div>
                <button onclick="addBundleToCart('${bundle.id}')" class="w-full bg-amber-500 hover:bg-amber-400 text-black py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all">
                    Comprar Pack Completo
                </button>
            </div>
        `;
    });
}

// WISHLIST LOGIC
function toggleWishlist(gameId) {
    const index = wishlist.indexOf(gameId);
    if (index > -1) wishlist.splice(index, 1);
    else wishlist.push(gameId);
    updateBadges();
    renderCatalog();
}

function renderWishlist() {
    const container = document.getElementById('wishlist-container');
    container.innerHTML = '';
    const items = MOCK_GAMES.filter(g => wishlist.includes(g.id));

    if (items.length === 0) {
        container.innerHTML = `<p class="col-span-full text-slate-500 text-sm italic">Tu lista de deseos está vacía.</p>`;
        return;
    }

    items.forEach(game => {
        container.innerHTML += `
            <div class="bg-[#121620] border border-nexus-border p-4 rounded-xl flex flex-col justify-between space-y-3">
                <img src="${game.img}" class="h-32 w-full object-cover rounded-lg">
                <h4 class="font-gaming font-bold text-white">${game.title}</h4>
                <p class="text-xs text-emerald-400 font-bold">${formatPrice(game.priceARS)}</p>
                <div class="flex gap-2">
                    <button onclick="addToCart('${game.id}')" class="flex-1 bg-indigo-600 text-white text-xs py-2 rounded-lg font-bold">Comprar</button>
                    <button onclick="toggleWishlist('${game.id}'); renderWishlist();" class="bg-red-500/20 text-red-400 px-3 py-2 rounded-lg text-xs"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;
    });
}

// CART OPERATIONS
function addToCart(gameId) {
    const game = MOCK_GAMES.find(g => g.id === gameId);
    if (!cart.some(item => item.id === gameId)) {
        cart.push(game);
        updateBadges();
        updateCartUI();
    }
    toggleCartDrawer(true);
}

function addBundleToCart(bundleId) {
    const bundle = MOCK_BUNDLES.find(b => b.id === bundleId);
    const mockItem = {
        id: bundle.id,
        title: bundle.title,
        platform: 'BUNDLE',
        priceARS: bundle.priceARS,
        img: bundle.img
    };
    if (!cart.some(item => item.id === bundleId)) {
        cart.push(mockItem);
        updateBadges();
        updateCartUI();
    }
    toggleCartDrawer(true);
}

function removeFromCart(gameId) {
    cart = cart.filter(item => item.id !== gameId);
    updateBadges();
    updateCartUI();
}

function toggleCartDrawer(show = null) {
    const modal = document.getElementById('modal-cart');
    if (show === true) modal.classList.remove('hidden');
    else if (show === false) modal.classList.add('hidden');
    else modal.classList.toggle('hidden');
}

function applyCoupon() {
    const code = document.getElementById('promo-code-input').value.trim().toUpperCase();
    if (code === 'SUMMER50') {
        appliedCouponDiscount = 50;
        alert('¡Cupón del 50% de descuento aplicado!');
    } else if (code === 'INDIE20') {
        appliedCouponDiscount = 20;
        alert('¡Cupón del 20% aplicado!');
    } else {
        alert('Código promocional no válido');
    }
    updateCartUI();
}

function updateCartUI() {
    const list = document.getElementById('cart-items-list');
    list.innerHTML = '';

    let subtotalARS = 0;
    cart.forEach(item => {
        subtotalARS += item.priceARS;
        list.innerHTML += `
            <div class="flex items-center justify-between bg-[#0a0c10] p-3 rounded-xl border border-nexus-border">
                <div class="flex items-center gap-3">
                    <img src="${item.img}" class="w-12 h-12 object-cover rounded-lg">
                    <div>
                        <p class="font-gaming font-bold text-xs text-white line-clamp-1">${item.title}</p>
                        <span class="text-[10px] text-indigo-400 font-semibold">${item.platform}</span>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-xs font-bold text-emerald-400">${formatPrice(item.priceARS)}</p>
                    <button onclick="removeFromCart('${item.id}')" class="text-[10px] text-red-400 hover:underline">Eliminar</button>
                </div>
            </div>
        `;
    });

    const discountARS = (subtotalARS * appliedCouponDiscount) / 100;
    const totalARS = subtotalARS - discountARS;

    document.getElementById('cart-subtotal').innerText = formatPrice(subtotalARS);
    document.getElementById('cart-discount').innerText = `-${formatPrice(discountARS)}`;
    document.getElementById('cart-total').innerText = formatPrice(totalARS);
}

// CHECKOUT & PAYMENTS
function openCheckoutModal() {
    if (cart.length === 0) return alert('El carrito está vacío');
    toggleCartDrawer(false);

    const summary = document.getElementById('checkout-items-summary');
    summary.innerHTML = '';
    let totalARS = 0;

    cart.forEach(item => {
        totalARS += item.priceARS;
        summary.innerHTML += `
            <div class="flex justify-between py-1">
                <span>${item.title} (${item.platform})</span>
                <span class="font-bold text-white">${formatPrice(item.priceARS)}</span>
            </div>
        `;
    });

    const finalTotalARS = totalARS - ((totalARS * appliedCouponDiscount) / 100);
    document.getElementById('checkout-total-amount').innerText = formatPrice(finalTotalARS);

    document.getElementById('modal-checkout').classList.remove('hidden');
}

function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.pm-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`pm-${method}`).classList.add('active');

    document.querySelectorAll('.payment-body').forEach(b => b.classList.add('hidden'));
    document.getElementById(`payment-body-${method}`).classList.remove('hidden');
}

// Configura aquí la URL a la que quieres redirigir al usuario
const LINK_DESTINO = "https://store.steampowered.com/about/"; // <-- Cambia esta URL por la que quieras

function confirmAndGenerateKeys() {
    if (!cart || cart.length === 0) return;

    let itemsHtml = '';

    cart.forEach(item => {
        // Enlace individual único del juego (o fallback dinámico basado en su ID)
        const gameLink = item.downloadUrl || `https://nexusstore.com/download/${item.id}`;
        
        // Generación de clave de activación
        const generatedKey = `${item.platform.substring(0, 4).toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

        // Guardar copia en la biblioteca personal
        library.push({ 
            ...item, 
            key: generatedKey, 
            downloadUrl: gameLink,
            purchaseDate: new Date().toLocaleDateString() 
        });

        // Generar bloque HTML por juego con su enlace único justo debajo
        itemsHtml += `
            <div class="bg-[#121620] p-3 rounded-lg border border-nexus-border/60 space-y-2">
                <div>
                    <p class="text-xs font-bold text-white">
                        ¡Felicidades! Obtuviste <span class="text-emerald-400">${item.title}</span>
                    </p>
                    <p class="text-[10px] text-slate-400 font-mono mt-0.5">Clave: ${generatedKey}</p>
                </div>
                <div class="pt-1.5 border-t border-nexus-border/40">
                    <a href="${gameLink}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-[11px] text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                        <i class="fa-solid fa-download text-[10px]"></i>
                        Enlace individual de ${item.title}
                    </a>
                </div>
            </div>
        `;
    });

    // Inyectar HTML generado en el modal
    document.getElementById('success-message').innerHTML = itemsHtml;

    // Resetear variables del carrito
    cart = [];
    appliedCouponDiscount = 0;

    // Actualizar interfaz
    updateBadges();
    if (typeof updateCartUI === 'function') updateCartUI();

    // Abrir cartel de felicitaciones
    closeModal('modal-checkout');
    document.getElementById('modal-success').classList.remove('hidden');
}

// Función auxiliar para cerrar modales por id
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
}

// LIBRARY RENDERER
function renderLibrary() {
    const container = document.getElementById('library-container');
    container.innerHTML = '';

    if (library.length === 0) {
        container.innerHTML = `<p class="col-span-full text-slate-500 text-sm italic">No has adquirido ningún juego aún.</p>`;
        return;
    }

    library.forEach(item => {
        container.innerHTML += `
            <div class="bg-[#121620] border border-nexus-border rounded-xl p-5 space-y-4">
                <div class="flex items-center gap-4">
                    <img src="${item.img}" class="w-16 h-16 object-cover rounded-lg">
                    <div>
                        <h4 class="font-gaming font-bold text-white text-base">${item.title}</h4>
                        <span class="text-xs text-indigo-400 font-semibold">${item.platform} Licencia</span>
                        <p class="text-[10px] text-slate-500">Fecha: ${item.purchaseDate}</p>
                    </div>
                </div>

                <div class="bg-[#0a0c10] p-3 rounded-lg border border-nexus-border flex items-center justify-between">
                    <code class="font-mono text-emerald-400 text-xs">${item.key}</code>
                    <button onclick="navigator.clipboard.writeText('${item.key}'); alert('Clave copiada');" class="text-xs text-slate-400 hover:text-white">
                        <i class="fa-regular fa-copy"></i>
                    </button>
                </div>
            </div>
        `;
    });
}

// ADMIN DASHBOARD DATA
function renderAdminTable() {
    const body = document.getElementById('admin-table-body');
    body.innerHTML = '';

    let totalRev = 1480000;
    let totalSales = 340 + library.length;

    document.getElementById('admin-total-revenue').innerText = formatPrice(totalRev);
    document.getElementById('admin-total-sales').innerText = `${totalSales} Licencias`;

    MOCK_GAMES.forEach(game => {
        body.innerHTML += `
            <tr>
                <td class="p-3 font-semibold text-white">${game.title}</td>
                <td class="p-3">${game.platform}</td>
                <td class="p-3 text-emerald-400">${formatPrice(game.priceARS)}</td>
                <td class="p-3 text-pink-400">-${game.discount}%</td>
                <td class="p-3 font-mono">99+ Claves</td>
                <td class="p-3"><span class="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded font-bold">DISPONIBLE</span></td>
            </tr>
        `;
    });
}

// MODAL CONTROLS
function openGameDetails(gameId) {
    const game = MOCK_GAMES.find(g => g.id === gameId);
    const content = document.getElementById('modal-details-content');

    content.innerHTML = `
        <div class="space-y-4">
            <div class="h-64 rounded-xl overflow-hidden relative">
                <img src="${game.img}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-[#121620] via-transparent to-transparent"></div>
            </div>
            <div class="flex items-center justify-between">
                <h2 class="font-gaming text-3xl font-bold text-white">${game.title}</h2>
                <span class="text-xl font-bold text-emerald-400">${formatPrice(game.priceARS)}</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${game.desc}</p>
            <div class="bg-[#0a0c10] p-4 rounded-xl space-y-2 border border-nexus-border">
                <h4 class="font-gaming font-bold text-xs text-slate-400">REQUISITOS DEL SISTEMA:</h4>
                <p class="text-xs text-slate-300 font-mono">${game.requirements}</p>
            </div>
            <button onclick="addToCart('${game.id}'); closeModal('modal-details');" class="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider">
                Agregar al Carrito por ${formatPrice(game.priceARS)}
            </button>
        </div>
    `;
    document.getElementById('modal-details').classList.remove('hidden');
}

function openDemoModal(gameId) {
    const game = MOCK_GAMES.find(g => g.id === gameId);
    document.getElementById('demo-game-title').innerText = game.title;
    document.getElementById('modal-demo').classList.remove('hidden');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

function launchDemoSimulation() {
    closeModal('modal-demo');
    alert('🎮 Iniciando descarga del paquete demo...');
}

function updateBadges() {
    document.getElementById('cart-badge').innerText = cart.length;
    document.getElementById('wishlist-badge').innerText = wishlist.length;
}