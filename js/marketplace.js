'use strict';

// ============================================================
// Ahmad Khan V3 – marketplace.js
// Page‑specific logic for channels.html
// ============================================================

document.addEventListener('DOMContentLoaded', initMarketplace);

// --------------- DOM REFERENCES ---------------
let grid, loading, noResults, filterCategory, filterFollowers, filterPrice, filterSort, filterReset;
let allChannels = [];

function initMarketplace() {
  // Cache DOM elements
  grid = document.getElementById('channels-grid');
  loading = document.getElementById('channels-loading');
  noResults = document.getElementById('no-results');
  filterCategory = document.getElementById('filter-category');
  filterFollowers = document.getElementById('filter-followers');
  filterPrice = document.getElementById('filter-price');
  filterSort = document.getElementById('filter-sort');
  filterReset = document.getElementById('filter-reset');

  if (!grid) return;

  // Load channels from global CONFIG
  allChannels = (window.CONFIG && CONFIG.channels) ? CONFIG.channels : [];

  // Initial render
  filterAndRender();

  // Event listeners for filters
  if (filterCategory) filterCategory.addEventListener('change', filterAndRender);
  if (filterFollowers) filterFollowers.addEventListener('change', filterAndRender);
  if (filterPrice) filterPrice.addEventListener('change', filterAndRender);
  if (filterSort) filterSort.addEventListener('change', filterAndRender);

  // Reset button
  if (filterReset) {
    filterReset.addEventListener('click', function () {
      if (filterCategory) filterCategory.value = 'all';
      if (filterFollowers) filterFollowers.value = '0';
      if (filterPrice) filterPrice.value = '999999';
      if (filterSort) filterSort.value = 'default';
      filterAndRender();
    });
  }
}

// --------------- FILTER & SORT ENGINE ---------------
function filterAndRender() {
  if (!allChannels.length) {
    renderCards([]);
    return;
  }

  // Read filter values
  const cat = filterCategory ? filterCategory.value : 'all';
  const minFollowers = filterFollowers ? parseInt(filterFollowers.value, 10) : 0;
  const maxPrice = filterPrice ? parseInt(filterPrice.value, 10) : 999999;
  const sort = filterSort ? filterSort.value : 'default';

  // Filter
  let filtered = allChannels.filter(ch => {
    if (cat !== 'all' && ch.category !== cat) return false;
    if (ch.followers < minFollowers) return false;
    if (ch.price > maxPrice) return false;
    return true;
  });

  // Sort
  switch (sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'followers-desc':
      filtered.sort((a, b) => b.followers - a.followers);
      break;
    default: // 'default' – keep original order (by id)
      break;
  }

  renderCards(filtered);
}

// --------------- RENDER CHANNEL CARDS ---------------
function renderCards(channels) {
  if (!grid) return;

  // Hide loading spinner
  if (loading) loading.style.display = 'none';

  // Clear grid
  grid.innerHTML = '';

  if (!channels.length) {
    // Show no‑results, hide grid
    grid.style.display = 'none';
    if (noResults) noResults.classList.remove('hidden');
    return;
  }

  // Show grid, hide no‑results
  grid.style.display = '';
  if (noResults) noResults.classList.add('hidden');

  // Build each card
  channels.forEach(channel => {
    const card = createChannelCard(channel);
    grid.appendChild(card);
  });

  // Bind WhatsApp buttons inside the freshly rendered cards
  bindChannelWhatsAppLinks();
}

// --------------- CREATE A SINGLE CHANNEL CARD ---------------
function createChannelCard(channel) {
  const card = document.createElement('div');
  card.className = 'glass-card channel-card fade-in';

  const followersFormatted = formatFollowers(channel.followers);
  const priceFormatted = 'Rs. ' + channel.price.toLocaleString('en-PK');
  const firstLetter = (channel.name || 'C').charAt(0).toUpperCase();

  card.innerHTML = `
    <div class="channel-img-wrapper">
      <img src="${channel.image || 'assets/images/placeholder.jpg'}" 
           alt="${channel.name}" 
           loading="lazy"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="channel-img-fallback" style="display:none;">
        <i class="fas fa-image"></i>
        <span>${firstLetter}</span>
      </div>
    </div>
    <span class="badge badge-gold">${channel.category}</span>
    <h3 class="channel-name">${channel.name}</h3>
    <p class="channel-desc">
      <span class="en">${channel.descEn || ''}</span>
      <span class="ur">${channel.descUr || ''}</span>
    </p>
    <div class="channel-stats">
      <span class="followers"><i class="fas fa-users"></i> ${followersFormatted}</span>
      <span class="price"><i class="fas fa-tag"></i> ${priceFormatted}</span>
    </div>
    <a href="#" class="btn btn-gold wa-link" data-message-type="channel-inquiry" data-context="${channel.name}">
      <i class="fab fa-whatsapp"></i>
      <span class="en">Inquire Now</span>
      <span class="ur">ابھی پوچھیں</span>
    </a>
  `;

  return card;
}

// --------------- BIND WHATSAPP BUTTONS IN THE GRID ---------------
function bindChannelWhatsAppLinks() {
  const buttons = document.querySelectorAll('#channels-grid .wa-link');
  buttons.forEach(btn => {
    // Avoid binding multiple times by checking a data attribute
    if (btn.dataset.bound === 'true') return;
    btn.dataset.bound = 'true';

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const context = this.getAttribute('data-context') || 'this channel';
      // Use the globally available function from main.js
      if (typeof getChannelInquiryMessage === 'function') {
        const url = getChannelInquiryMessage(context);
        if (url) window.open(url, '_blank');
      } else {
        // Fallback: build URL manually using the active number
        const cleanNumber = typeof getActiveNumberClean === 'function' ? getActiveNumberClean() : '';
        const message = encodeURIComponent(
          `Assalam-o-Alaikum Ahmad bhai, I am interested in the WhatsApp channel "${context}". Please share details.\n\n` +
          `السلام علیکم احمد بھائی، میں واٹس ایپ چینل "${context}" میں دلچسپی رکھتا ہوں۔`
        );
        window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank');
      }
    });
  });
}

// --------------- HELPER: FORMAT FOLLOWER COUNT ---------------
function formatFollowers(n) {
  if (n >= 1e6) {
    const m = n / 1e6;
    return (m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)) + 'M';
  }
  if (n >= 1e3) {
    const k = n / 1e3;
    return (k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)) + 'K';
  }
  return n.toString();
}
