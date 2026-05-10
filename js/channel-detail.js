'use strict';

// ============================================================
// Ahmad Khan V3 – channel-detail.js
// Page‑specific logic for channel-detail.html
// ============================================================

document.addEventListener('DOMContentLoaded', initDetailPage);

// --------------- DOM Cache ---------------
let loadingEl, errorEl, cardEl;

function initDetailPage() {
  // Cache DOM elements
  loadingEl = document.getElementById('detail-loading');
  errorEl = document.getElementById('detail-error');
  cardEl = document.getElementById('detail-card');

  // 1. Parse channel ID from URL
  const params = new URLSearchParams(window.location.search);
  const channelId = parseInt(params.get('id'), 10);

  // 2. Validate
  if (isNaN(channelId) || channelId < 1) {
    showError();
    return;
  }

  // 3. Look up channel in global CONFIG
  const channels = (window.CONFIG && CONFIG.channels) ? CONFIG.channels : [];
  const channel = channels.find(ch => ch.id === channelId);

  // 4. Render or show error
  if (!channel) {
    showError();
    return;
  }

  renderDetailCard(channel);
}

// --------------- Show Error State ---------------
function showError() {
  if (loadingEl) loadingEl.style.display = 'none';
  if (errorEl) errorEl.classList.remove('hidden');
  if (cardEl) cardEl.classList.add('hidden');
}

// --------------- Render the Channel Detail Card ---------------
function renderDetailCard(channel) {
  // Hide loading, show card
  if (loadingEl) loadingEl.style.display = 'none';
  if (errorEl) errorEl.classList.add('hidden');
  if (cardEl) {
    cardEl.classList.remove('hidden');
    cardEl.innerHTML = buildDetailHTML(channel);
  }

  // Update page title
  document.title = channel.name + ' – Ahmad Khan';

  // Bind WhatsApp button inside the card
  bindDetailWhatsAppButton();
}

// --------------- Build Card HTML ---------------
function buildDetailHTML(channel) {
  const followersFormatted = formatFollowers(channel.followers);
  const priceFormatted = 'Rs. ' + channel.price.toLocaleString('en-PK');
  const firstLetter = (channel.name || 'C').charAt(0).toUpperCase();

  return `
    <!-- Image Area -->
    <div class="detail-img-wrapper">
      <img src="${channel.image || 'assets/images/placeholder.jpg'}" 
           alt="${channel.name}"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="detail-img-fallback" style="display:none;">
        <i class="fas fa-image"></i>
        <span>${firstLetter}</span>
      </div>
    </div>

    <!-- Category Badge -->
    <span class="badge badge-gold detail-badge">${channel.category}</span>

    <!-- Channel Name -->
    <h1 class="channel-detail-name">${channel.name}</h1>

    <!-- Bilingual Description -->
    <div class="channel-detail-desc">
      <p class="en">${channel.descEn || 'No description available.'}</p>
      <p class="ur">${channel.descUr || 'کوئی تفصیل دستیاب نہیں۔'}</p>
    </div>

    <!-- Stats Row -->
    <div class="detail-stats">
      <div class="detail-stat">
        <i class="fas fa-users"></i>
        <span class="en">Followers</span>
        <span class="ur">فالوورز</span>
        <strong>${followersFormatted}</strong>
      </div>
      <div class="detail-stat">
        <i class="fas fa-tag"></i>
        <span class="en">Price</span>
        <span class="ur">قیمت</span>
        <strong>${priceFormatted}</strong>
      </div>
    </div>

    <!-- WhatsApp Button -->
    <a href="#" class="btn btn-gold btn-large wa-link" 
       data-message-type="channel-inquiry" 
       data-context="${channel.name}">
      <i class="fab fa-whatsapp"></i>
      <span class="en">Buy This Channel</span>
      <span class="ur">یہ چینل خریدیں</span>
    </a>

    <!-- Back to Marketplace Link (bottom) -->
    <a href="channels.html" class="back-link-bottom">
      <i class="fas fa-arrow-left"></i>
      <span class="en">Back to Marketplace</span>
      <span class="ur">واپس بازار میں</span>
    </a>
  `;
}

// --------------- Bind WhatsApp Button ---------------
function bindDetailWhatsAppButton() {
  const btn = document.querySelector('#detail-card .wa-link');
  if (!btn) return;

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const context = this.getAttribute('data-context') || 'this channel';

    // Use global function from main.js if available
    if (typeof getChannelInquiryMessage === 'function') {
      const url = getChannelInquiryMessage(context);
      if (url) window.open(url, '_blank');
    } else {
      // Fallback: manual WhatsApp URL
      const cleanNumber = typeof getActiveNumberClean === 'function' ? getActiveNumberClean() : '';
      const message = encodeURIComponent(
        `Assalam-o-Alaikum Ahmad bhai, I am interested in the WhatsApp channel "${context}". Please share details.\n\n` +
        `السلام علیکم احمد بھائی، میں واٹس ایپ چینل "${context}" میں دلچسپی رکھتا ہوں۔`
      );
      if (cleanNumber) {
        window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank');
      }
    }
  });
}

// --------------- Helper: Format Follower Count ---------------
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
