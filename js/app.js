/**
 * STYLEVA - CORE APPLICATION & INTERACTIVE FRONTEND ENGINE
 * Version 1.0.0
 */

// ==========================================================================
// MOCK PRODUCT DATASET (FASHION & BEAUTY IN NIGERIAN NAIRA ₦)
// ==========================================================================
const STYLEVA_PRODUCTS = [
  {
    id: 'prod-01',
    name: 'Satin Corset Mini Dress',
    category: 'Clothing',
    type: 'Dresses',
    price: 45000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    colors: ['#E56B7F', '#171717', '#F8DDE2'],
    sizes: ['XS', 'S', 'M', 'L'],
    tryOnAvailable: true,
    description: 'Sculpting satin corsetry featuring a delicate sweetheart neckline and structured boning. Designed for unforgettable evening glamour.'
  },
  {
    id: 'prod-02',
    name: 'Oversized Streetwear Blazer',
    category: 'Clothing',
    type: 'Jackets',
    price: 68000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
    colors: ['#171717', '#6B6B6B', '#D1C2A5'],
    sizes: ['S', 'M', 'L', 'XL'],
    tryOnAvailable: true,
    description: 'Tailored oversized silhouette crafted from structured wool blend with padded shoulders and custom horn buttons.'
  },
  {
    id: 'prod-03',
    name: 'Pleated High-Waist Wide Trousers',
    category: 'Clothing',
    type: 'Trousers',
    price: 38000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    colors: ['#171717', '#FFF4F6', '#6B6B6B'],
    sizes: ['S', 'M', 'L'],
    tryOnAvailable: true,
    description: 'Fluid wide-leg trousers featuring deep front pleats and a flattering high-rise waistband.'
  },
  {
    id: 'prod-04',
    name: 'Soft Glam Velvet Lip Duo',
    category: 'Beauty',
    type: 'Lip',
    price: 18500,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    colors: ['#B83F58', '#E56B7F', '#C87265'],
    shades: ['Rose Kiss', 'Deep Velvet', 'Blush Nude'],
    tryOnAvailable: false,
    makeupStudio: true,
    description: 'Hydrating matte liquid lipstick paired with a matching precision contour pencil for plush, full-looking lips.'
  },
  {
    id: 'prod-05',
    name: 'Rose Glow Liquid Silk Blush',
    category: 'Beauty',
    type: 'Blush',
    price: 16000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    colors: ['#E56B7F', '#F8DDE2', '#D84B66'],
    shades: ['Petal Pop', 'Warm Sunset', 'Soft Berry'],
    tryOnAvailable: false,
    makeupStudio: true,
    description: 'Weightless, buildable liquid blush infused with hyaluronic acid for a lit-from-within flush.'
  },
  {
    id: 'prod-06',
    name: 'Hydrating Dewy Skin Tint SPF 30',
    category: 'Beauty',
    type: 'Skin Tint',
    price: 24000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    colors: ['#E3C5AA', '#C49A76', '#8D5B3A'],
    shades: ['Shade 100 Fair', 'Shade 200 Medium', 'Shade 300 Deep'],
    tryOnAvailable: false,
    makeupStudio: true,
    description: 'Breathable, skin-perfecting filter in a bottle that evens skin tone while boosting hydration.'
  },
  {
    id: 'prod-07',
    name: 'Cropped Sculpt Knit Top',
    category: 'Clothing',
    type: 'Tops',
    price: 22000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    colors: ['#FFFFFF', '#171717', '#E56B7F'],
    sizes: ['XS', 'S', 'M', 'L'],
    tryOnAvailable: true,
    description: 'Ribbed contour knit with a asymmetric square neck and sleek body-hugging stretch fit.'
  },
  {
    id: 'prod-08',
    name: 'Luxe Metallic Chain Leather Shoulder Bag',
    category: 'Accessories',
    type: 'Bags',
    price: 52000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    colors: ['#171717', '#E56B7F'],
    sizes: ['One Size'],
    tryOnAvailable: false,
    description: 'Supple full-grain leather handbag finished with a gold-tone heavy link chain and magnetic lock.'
  }
];

// Complete Look Preset Bundles
const STYLEVA_LOOKS = [
  {
    id: 'look-01',
    name: 'Night Out Glamour',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    productsIncluded: ['Corset Mini Dress', 'Soft Glam Lip Duo', 'Luxe Shoulder Bag'],
    price: 115500
  },
  {
    id: 'look-02',
    name: 'Sleek Corporate Chic',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80',
    productsIncluded: ['Streetwear Blazer', 'Wide Trousers', 'Dewy Skin Tint'],
    price: 130000
  }
];

// ==========================================================================
// APPLICATION STATE MANAGEMENT
// ==========================================================================
class StylevaApp {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('styleva_cart')) || [];
    this.wishlist = JSON.parse(localStorage.getItem('styleva_wishlist')) || [];
    this.selectedTryOnProduct = STYLEVA_PRODUCTS[0];
    this.uploadedPhotoSrc = null;
    
    // Makeup Studio Active Palette
    this.makeupState = {
      lipShade: '#B83F58',
      blushShade: '#E56B7F',
      eyeShade: '#8D5B3A',
      highlighter: '#FFD700',
      skinToneTint: 'rgba(227, 197, 170, 0.25)'
    };

    this.init();
  }

  init() {
    this.updateCartBadge();
    this.updateWishlistBadge();
    this.setupNavbarScroll();
    this.renderCartItems();
    this.renderCartPage();
    this.setupGlobalEventListeners();
  }

  // Contact Form Submission
  handleContactSubmit() {
    const name = document.getElementById('contactName')?.value || 'Valued Client';
    const email = document.getElementById('contactEmail')?.value || '';
    const form = document.getElementById('contactForm');
    
    this.showToast(`Thank you, ${name}! Your inquiry has been sent to client care.`);
    if (form) form.reset();
  }

  // Full Cart Page Logic
  renderCartPage() {
    const listContainer = document.getElementById('cartPageItemsList');
    if (!listContainer) return;

    const countEl = document.getElementById('cartTotalItemsCount');
    const subtotalEl = document.getElementById('cartSummarySubtotal');

    if (this.cart.length === 0) {
      listContainer.innerHTML = `
        <div class="text-center py-5">
          <i class="bi bi-bag text-styleva-gray" style="font-size: 3rem;"></i>
          <h4 class="font-serif text-white mt-3 mb-2">Your Shopping Cart is Empty</h4>
          <p class="text-styleva-gray small mb-4">Discover the latest luxury fashion and virtual try-on collections.</p>
          <a href="index.html#shopSection" class="btn btn-styleva-primary">Browse Collections</a>
        </div>
      `;
      if (countEl) countEl.textContent = '0';
      if (subtotalEl) subtotalEl.textContent = this.formatCurrency(0);
      this.updateCartPageSummary(0);
      return;
    }

    let subtotal = 0;
    let totalItems = 0;

    listContainer.innerHTML = this.cart.map((item, index) => {
      subtotal += item.price * item.quantity;
      totalItems += item.quantity;
      return `
        <div class="d-flex flex-column flex-sm-row gap-3 align-items-sm-center py-3 border-bottom border-secondary">
          <img src="${item.image}" alt="${item.name}" class="rounded" style="width: 80px; height: 100px; object-fit: cover; background:#121212;">
          <div class="flex-grow-1">
            <h5 class="text-white h6 mb-1 font-serif">${item.name}</h5>
            <div class="text-styleva-gray small mb-2">
              Size: <strong class="text-white">${item.size}</strong> | Color: <span style="display:inline-block; width:12px; height:12px; background-color:${item.color}; border-radius:50%; vertical-align:middle;"></span>
            </div>
            <div class="text-styleva-rose fw-bold">${this.formatCurrency(item.price)}</div>
          </div>
          <div class="d-flex align-items-center gap-3">
            <div class="quantity-picker">
              <button class="quantity-btn" onclick="app.updateQuantity(${index}, -1); app.renderCartPage();">-</button>
              <span class="quantity-val">${item.quantity}</span>
              <button class="quantity-btn" onclick="app.updateQuantity(${index}, 1); app.renderCartPage();">+</button>
            </div>
            <div class="text-white fw-bold me-2" style="min-width: 90px; text-align: right;">
              ${this.formatCurrency(item.price * item.quantity)}
            </div>
            <button class="btn btn-link text-styleva-gray hover-text-white p-0 border-0" onclick="app.removeFromCart(${index}); app.renderCartPage();">
              <i class="bi bi-trash fs-5"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (countEl) countEl.textContent = totalItems;
    if (subtotalEl) subtotalEl.textContent = this.formatCurrency(subtotal);
    this.updateCartPageSummary(subtotal);
  }

  updateCartPageSummary(subtotal) {
    const shippingSelect = document.querySelectorAll('input[name="shippingMethod"]:checked');
    let shippingCost = 3500;
    if (shippingSelect.length > 0) {
      shippingCost = parseInt(shippingSelect[0].value) || 3500;
    }

    let discount = this.promoDiscount || 0;
    const discountAmount = Math.round(subtotal * discount);
    const grandTotal = Math.max(0, subtotal - discountAmount + (subtotal > 0 ? shippingCost : 0));

    const shipEl = document.getElementById('cartSummaryShipping');
    if (shipEl) shipEl.textContent = subtotal > 0 ? this.formatCurrency(shippingCost) : '₦0';

    const grandTotalEls = document.querySelectorAll('.cartGrandTotalText');
    grandTotalEls.forEach(el => {
      el.textContent = this.formatCurrency(grandTotal);
    });

    const discountRow = document.getElementById('discountRow');
    const discountAmountEl = document.getElementById('discountAmount');
    if (discountRow && discountAmountEl) {
      if (discount > 0 && subtotal > 0) {
        discountRow.classList.remove('d-none');
        discountAmountEl.textContent = `-${this.formatCurrency(discountAmount)}`;
      } else {
        discountRow.classList.add('d-none');
      }
    }
  }

  applyPromoCode() {
    const input = document.getElementById('promoInput');
    const code = input?.value.trim().toUpperCase();
    if (code === 'STYLEVA10') {
      this.promoDiscount = 0.10;
      this.showToast('Promo code STYLEVA10 applied! 10% discount added.');
      this.renderCartPage();
    } else {
      this.showToast('Invalid promo code. Try STYLEVA10');
    }
  }

  updateShippingCost() {
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    this.updateCartPageSummary(subtotal);
  }

  handlePlaceOrder() {
    if (this.cart.length === 0) {
      this.showToast('Your shopping cart is empty.');
      return;
    }

    const name = document.getElementById('shippingName')?.value || 'Valued Customer';
    const grandTotalEl = document.querySelector('.cartGrandTotalText');
    const totalPaid = grandTotalEl ? grandTotalEl.textContent : '₦0';

    const orderNum = 'STV-' + Math.floor(10000 + Math.random() * 90000);

    const modalOrderNum = document.getElementById('modalOrderNumber');
    const modalRecipient = document.getElementById('modalRecipient');
    const modalTotal = document.getElementById('modalTotalPaid');

    if (modalOrderNum) modalOrderNum.textContent = orderNum;
    if (modalRecipient) modalRecipient.textContent = name;
    if (modalTotal) modalTotal.textContent = totalPaid;

    // Show modal
    const modalEl = document.getElementById('orderSuccessModal');
    if (modalEl && window.bootstrap) {
      const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
      modal.show();
    }

    // Clear cart
    this.cart = [];
    this.promoDiscount = 0;
    this.saveCart();
    this.renderCartPage();
  }

  // Currency Formatter
  formatCurrency(amount) {
    return '₦' + Number(amount).toLocaleString('en-NG');
  }

  // LocalStorage Sync
  saveCart() {
    localStorage.setItem('styleva_cart', JSON.stringify(this.cart));
    this.updateCartBadge();
    this.renderCartItems();
    this.renderCartPage();
  }

  saveWishlist() {
    localStorage.setItem('styleva_wishlist', JSON.stringify(this.wishlist));
    this.updateWishlistBadge();
  }

  // Cart Operations
  addToCart(productId, selectedSize = null, selectedColor = null, quantity = 1) {
    const product = STYLEVA_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const size = selectedSize || (product.sizes ? product.sizes[0] : 'Default');
    const color = selectedColor || (product.colors ? product.colors[0] : 'Default');
    const existingIndex = this.cart.findIndex(
      item => item.id === productId && item.size === size && item.color === color
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: size,
        color: color,
        quantity: quantity
      });
    }

    this.saveCart();
    this.showToast(`${product.name} added to bag`);

    // Open Offcanvas Cart Automatically
    const cartEl = document.getElementById('offcanvasCart');
    if (cartEl && window.bootstrap) {
      const bsCart = bootstrap.Offcanvas.getOrCreateInstance(cartEl);
      bsCart.show();
    }
  }

  removeFromCart(index) {
    this.cart.splice(index, 1);
    this.saveCart();
    this.showToast('Item removed from bag');
  }

  updateQuantity(index, delta) {
    if (this.cart[index]) {
      this.cart[index].quantity += delta;
      if (this.cart[index].quantity <= 0) {
        this.cart.splice(index, 1);
      }
      this.saveCart();
    }
  }

  renderCartItems() {
    const container = document.getElementById('cartItemsContainer');
    const subtotalEl = document.getElementById('cartSubtotal');
    if (!container) return;

    if (this.cart.length === 0) {
      container.innerHTML = `
        <div class="text-center py-5">
          <div class="mb-3 text-styleva-gray" style="font-size: 2.5rem;">
            <i class="bi bi-bag-heart"></i>
          </div>
          <h6 class="font-serif">Your shopping bag is empty</h6>
          <p class="text-styleva-gray small mb-4">Discover luxury pieces and add them to your style collection.</p>
          <a href="index.html#shopSection" class="btn btn-styleva-dark btn-sm">Explore Collection</a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = this.formatCurrency(0);
      return;
    }

    let subtotal = 0;
    container.innerHTML = this.cart.map((item, index) => {
      subtotal += item.price * item.quantity;
      return `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="flex-grow-1">
            <div class="d-flex justify-content-between align-items-start mb-1">
              <h6 class="mb-0 text-styleva-black font-weight-bold" style="font-size: 0.9rem;">${item.name}</h6>
              <button class="btn btn-link p-0 text-muted border-0" onclick="app.removeFromCart(${index})" title="Remove item">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
            <div class="text-styleva-gray small mb-2">
              Size: ${item.size} | Color: <span style="display:inline-block; width:10px; height:10px; background-color:${item.color}; border-radius:50%; vertical-align:middle;"></span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="quantity-picker">
                <button class="quantity-btn" onclick="app.updateQuantity(${index}, -1)">-</button>
                <span class="quantity-val">${item.quantity}</span>
                <button class="quantity-btn" onclick="app.updateQuantity(${index}, 1)">+</button>
              </div>
              <span class="fw-bold">${this.formatCurrency(item.price * item.quantity)}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (subtotalEl) subtotalEl.textContent = this.formatCurrency(subtotal);
  }

  updateCartBadge() {
    const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('.cart-count-badge');
    badges.forEach(b => {
      b.textContent = totalItems;
      b.style.display = totalItems > 0 ? 'flex' : 'none';
    });
  }

  // Wishlist Operations
  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
      this.showToast('Removed from wishlist');
    } else {
      this.wishlist.push(productId);
      this.showToast('Saved to wishlist');
    }
    this.saveWishlist();
    this.updateWishlistUI();
  }

  updateWishlistBadge() {
    const badges = document.querySelectorAll('.wishlist-count-badge');
    badges.forEach(b => {
      b.textContent = this.wishlist.length;
      b.style.display = this.wishlist.length > 0 ? 'flex' : 'none';
    });
  }

  updateWishlistUI() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
      const pid = btn.dataset.productId;
      if (this.wishlist.includes(pid)) {
        btn.classList.add('active');
        btn.innerHTML = `<i class="bi bi-heart-fill"></i>`;
      } else {
        btn.classList.remove('active');
        btn.innerHTML = `<i class="bi bi-heart"></i>`;
      }
    });
  }

  // Navbar behavior
  setupNavbarScroll() {
    const nav = document.querySelector('.navbar-styleva');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  // UI Toast Alerts
  showToast(message) {
    let toastContainer = document.getElementById('stylevaToastContainer');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'stylevaToastContainer';
      toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      toastContainer.style.zIndex = '1090';
      document.body.appendChild(toastContainer);
    }

    const toastEl = document.createElement('div');
    toastEl.className = 'toast toast-styleva align-items-center text-white show';
    toastEl.setAttribute('role', 'alert');
    toastEl.innerHTML = `
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2">
          <i class="bi bi-check-circle-fill text-styleva-rose"></i>
          <span>${message}</span>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    `;
    toastContainer.appendChild(toastEl);
    setTimeout(() => toastEl.remove(), 3000);
  }

  // Quick View Modal Renderer
  openQuickView(productId) {
    const product = STYLEVA_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modalTitle = document.getElementById('quickViewTitle');
    const modalBody = document.getElementById('quickViewBody');
    if (!modalTitle || !modalBody) return;

    modalTitle.textContent = product.name;
    modalBody.innerHTML = `
      <div class="row g-4">
        <div class="col-md-6">
          <img src="${product.image}" alt="${product.name}" class="img-fluid rounded-3 w-100" style="object-fit: cover; max-height: 400px;">
        </div>
        <div class="col-md-6 d-flex flex-column">
          <span class="text-styleva-gray text-uppercase small tracking-wider mb-1">${product.category}</span>
          <h4 class="font-serif mb-2">${product.name}</h4>
          <div class="product-rating mb-2">
            <i class="bi bi-star-fill"></i> <span>${product.rating} / 5.0</span>
          </div>
          <div class="h4 font-sans font-weight-bold mb-3">${this.formatCurrency(product.price)}</div>
          <p class="text-styleva-gray small mb-4">${product.description}</p>
          
          ${product.sizes ? `
            <div class="mb-3">
              <label class="form-label small text-uppercase fw-bold text-styleva-black">Select Size</label>
              <div class="d-flex gap-2" id="qvSizes">
                ${product.sizes.map((s, i) => `<button type="button" class="btn btn-outline-dark btn-sm ${i===0?'active':''}" onclick="app.selectQvOption(this, '#qvSizes')">${s}</button>`).join('')}
              </div>
            </div>
          ` : ''}

          ${product.colors ? `
            <div class="mb-4">
              <label class="form-label small text-uppercase fw-bold text-styleva-black">Select Color</label>
              <div class="d-flex gap-2" id="qvColors">
                ${product.colors.map((c, i) => `<div class="swatch-circle ${i===0?'active':''}" style="background-color:${c}" onclick="app.selectQvOption(this, '#qvColors')"></div>`).join('')}
              </div>
            </div>
          ` : ''}

          <div class="mt-auto d-flex flex-column gap-2">
            <button class="btn btn-styleva-primary w-100" onclick="app.addToCart('${product.id}')">
              <i class="bi bi-bag-plus"></i> Add to Bag
            </button>
            ${product.tryOnAvailable ? `
              <a href="try-on.html?product=${product.id}" class="btn btn-styleva-dark w-100">
                <i class="bi bi-camera"></i> Virtual Try-On
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    const qvModalEl = document.getElementById('quickViewModal');
    if (qvModalEl && window.bootstrap) {
      const qvModal = bootstrap.Modal.getOrCreateInstance(qvModalEl);
      qvModal.show();
    }
  }

  selectQvOption(element, containerSelector) {
    document.querySelectorAll(`${containerSelector} .active`).forEach(el => el.classList.remove('active'));
    element.classList.add('active');
  }

  setupGlobalEventListeners() {
    // Search Filter
    const searchInput = document.getElementById('globalSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        this.renderFilteredProducts(query);
      });
    }
  }

  renderFilteredProducts(query = '', categoryFilter = 'All', sortOption = 'featured') {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    let filtered = [...STYLEVA_PRODUCTS];

    if (query) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
    }

    if (categoryFilter !== 'All') {
      filtered = filtered.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase());
    }

    // Sort
    if (sortOption === 'price-low') {
      filtered.sort((a,b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      filtered.sort((a,b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      filtered.sort((a,b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="bi bi-search text-styleva-gray" style="font-size: 3rem;"></i>
          <h5 class="font-serif mt-3">No products match your filter</h5>
          <p class="text-styleva-gray">Try adjusting your search terms or category selection.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(p => `
      <div class="col-6 col-md-4 col-lg-3">
        <div class="product-card">
          <div class="product-image-container">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <div class="product-badge-group">
              ${p.tryOnAvailable ? `<span class="product-badge product-badge-tryon"><i class="bi bi-camera"></i> Try On</span>` : ''}
              ${p.category === 'Beauty' ? `<span class="product-badge product-badge-beauty"><i class="bi bi-sparkles"></i> Beauty</span>` : ''}
            </div>
            <button class="wishlist-btn ${this.wishlist.includes(p.id)?'active':''}" data-product-id="${p.id}" onclick="app.toggleWishlist('${p.id}')">
              <i class="bi ${this.wishlist.includes(p.id)?'bi-heart-fill':'bi-heart'}"></i>
            </button>
            <div class="quick-view-overlay">
              <button class="btn btn-light btn-sm w-100 shadow-sm fw-bold" onclick="app.openQuickView('${p.id}')">
                Quick View
              </button>
            </div>
          </div>
          <div class="product-card-body">
            <div class="product-category">${p.category}</div>
            <h6 class="product-title">${p.name}</h6>
            <div class="product-rating">
              <i class="bi bi-star-fill"></i> <span>${p.rating}</span>
            </div>
            <div class="product-price">${this.formatCurrency(p.price)}</div>
            <div class="d-flex gap-2 mt-3">
              <button class="btn btn-styleva-dark btn-sm flex-grow-1" onclick="app.addToCart('${p.id}')">
                Add to Bag
              </button>
              ${p.tryOnAvailable ? `
                <a href="try-on.html?product=${p.id}" class="btn btn-styleva-soft btn-sm" title="Try On Virtually">
                  <i class="bi bi-camera"></i>
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Global App Instance
const app = new StylevaApp();
window.app = app;

// ==========================================================================
// VIRTUAL TRY-ON ENGINE (PAGE 2 FUNCTIONALITY)
// ==========================================================================
/**
 * ISOLATABLE ENTRY POINT FOR AI VIRTUAL TRY-ON API INTEGRATION
 * In production, this function handles garment alignment & segmentation.
 */
function applyVirtualTryOn(productId, userPhotoSrc) {
  console.log(`[STYLEVA AI ENGINE] Simulating garment segmentation model for product: ${productId}`);
  const laserLine = document.getElementById('tryOnLaserScan');
  const statusEl = document.getElementById('tryOnStatusBadge');
  
  if (laserLine) laserLine.classList.add('active');
  if (statusEl) statusEl.textContent = 'AI Segmentation Running...';

  setTimeout(() => {
    if (laserLine) laserLine.classList.remove('active');
    if (statusEl) statusEl.textContent = 'Preview Updated';
    
    // Update preview layer
    const overlayImg = document.getElementById('tryOnProductOverlay');
    const product = STYLEVA_PRODUCTS.find(p => p.id === productId);
    if (overlayImg && product) {
      overlayImg.src = product.image;
      overlayImg.style.display = 'block';
      overlayImg.style.opacity = '0.85';
    }
  }, 1800);
}

// Camera Access helper
async function startWebcamStream(videoElementId) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.getElementById(videoElementId);
    if (video) {
      video.srcObject = stream;
      video.style.display = 'block';
      return true;
    }
  } catch (err) {
    console.warn('Camera access denied or unavailable:', err);
    alert('Camera access unavailable. Falling back to high-resolution photo upload.');
    return false;
  }
}

// ==========================================================================
// VIRTUAL MAKEUP STUDIO ENGINE (PAGE 3 FUNCTIONALITY)
// ==========================================================================
/**
 * ISOLATABLE ENTRY POINT FOR AR MAKEUP OVERLAY ENGINE
 * In production, this receives 68 facial landmark coordinates and renders GL shaders.
 */
function applyMakeupEffect(makeupPalette) {
  console.log('[STYLEVA MAKEUP ENGINE] Updating visual cosmetic filter palette:', makeupPalette);
  
  const lipOverlay = document.getElementById('lipMakeupOverlay');
  const blushOverlay = document.getElementById('blushMakeupOverlay');
  const eyeOverlay = document.getElementById('eyeMakeupOverlay');
  const skinOverlay = document.getElementById('skinTintOverlay');

  if (lipOverlay) {
    lipOverlay.style.backgroundColor = makeupPalette.lipShade;
    lipOverlay.style.opacity = '0.55';
  }
  if (blushOverlay) {
    blushOverlay.style.backgroundColor = makeupPalette.blushShade;
    blushOverlay.style.opacity = '0.35';
  }
  if (eyeOverlay) {
    eyeOverlay.style.backgroundColor = makeupPalette.eyeShade;
    eyeOverlay.style.opacity = '0.4';
  }
  if (skinOverlay) {
    skinOverlay.style.backgroundColor = makeupPalette.skinToneTint;
  }
}
