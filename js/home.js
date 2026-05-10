'use strict';

// ============================================================
// Ahmad Khan V3 – home.js
// Page‑specific logic for index.html
// ============================================================

document.addEventListener('DOMContentLoaded', initHome);

function initHome() {
  renderPricingCards();
  renderReviews();
  updateContactCards();
  setupAccordion();
  bindWhatsAppLinks();
  setupPrivateGroupLink();
  setFooterYear();
}

// --------------- 1. PRICING CARDS RENDERER ---------------
function renderPricingCards() {
  const container = document.getElementById('pricing-container');
  if (!container) return;

  const plans = CONFIG.pricingPlans;
  if (!plans || !plans.length) {
    container.innerHTML = `
      <div class="glass-card text-center" style="grid-column:1/-1; padding:40px;">
        <p class="en text-muted">No pricing plans available at the moment.</p>
        <p class="ur text-muted">اس وقت کوئی پروموشن پلان دستیاب نہیں ہیں۔</p>
      </div>`;
    return;
  }

  container.innerHTML = '';

  plans.forEach(plan => {
    const isPopular = plan.popular === true;
    const popularBadge = isPopular
      ? `<span class="badge badge-gold" style="position:absolute; top:12px; right:12px;">
           <span class="en">Most Popular</span>
           <span class="ur">سب سے مقبول</span>
         </span>`
      : '';

    const featuresHTML = (plan.featuresEn || []).map((feat, i) => {
      const urFeat = (plan.featuresUr && plan.featuresUr[i]) || '';
      return `<li><i class="fas fa-check text-gold"></i> <span class="en">${feat}</span> <span class="ur">${urFeat}</span></li>`;
    }).join('');

    const card = document.createElement('div');
    card.className = `glass-card pricing-card fade-in${isPopular ? ' popular' : ''}`;
    card.style.position = 'relative';
    card.innerHTML = `
      ${popularBadge}
      <h3><span class="en">${plan.nameEn || ''}</span> <span class="ur">${plan.nameUr || ''}</span></h3>
      <div class="price">Rs. ${plan.price.toLocaleString()}</div>
      <p class="duration"><span class="en">${plan.durationEn || ''}</span> <span class="ur">${plan.durationUr || ''}</span></p>
      <p class="reach text-muted"><span class="en">${plan.reachEn || ''}</span> <span class="ur">${plan.reachUr || ''}</span></p>
      <p class="desc"><span class="en">${plan.descriptionEn || ''}</span> <span class="ur">${plan.descriptionUr || ''}</span></p>
      <ul class="features-list">${featuresHTML}</ul>
      <a href="#" class="btn btn-gold wa-link" data-message-type="promotion" data-context="${plan.nameEn || ''}">
        <i class="fab fa-whatsapp"></i>
        <span class="en">Book Now</span>
        <span class="ur">ابھی بک کریں</span>
      </a>
    `;
    container.appendChild(card);
  });
}

// --------------- 2. REVIEWS RENDERER ---------------
function renderReviews() {
  const container = document.getElementById('reviews-container');
  if (!container) return;

  const reviews = CONFIG.reviews || [];
  if (!reviews.length) {
    container.innerHTML = `
      <div class="glass-card text-center" style="grid-column:1/-1; padding:40px;">
        <p class="en text-muted">No reviews yet. Be the first to leave a review!</p>
        <p class="ur text-muted">ابھی تک کوئی تبصرہ نہیں۔ پہلا تبصرہ کریں!</p>
      </div>`;
    return;
  }

  container.innerHTML = '';

  const likedReviews = JSON.parse(localStorage.getItem('liked_reviews') || '[]');

  reviews.forEach(review => {
    const isLiked = likedReviews.includes(review.id);
    const starsHTML = Array.from({ length: 5 }, (_, i) => {
      return i < review.stars
        ? '<i class="fas fa-star text-gold"></i>'
        : '<i class="far fa-star text-muted"></i>';
    }).join('');

    const card = document.createElement('div');
    card.className = 'glass-card review-card fade-in';
    card.innerHTML = `
      <div class="review-header">
        <div class="avatar">${review.name.charAt(0).toUpperCase()}</div>
        <div class="review-meta">
          <span class="reviewer-name">${review.name}</span>
          <span class="reviewer-city text-muted">${review.city || ''}</span>
        </div>
      </div>
      <div class="stars">${starsHTML}</div>
      <div class="review-text">
        <p class="en">${review.quoteEn || ''}</p>
        <p class="ur">${review.quoteUr || ''}</p>
      </div>
      <div class="review-actions">
        <button class="like-btn ${isLiked ? 'liked' : ''}" data-review-id="${review.id}" ${isLiked ? 'disabled' : ''}>
          <i class="${isLiked ? 'fas' : 'far'} fa-heart"></i>
          <span class="like-count">${review.likes + (isLiked ? 1 : 0)}</span>
        </button>
        <a href="#" class="wa-link review-reply-btn" data-message-type="review-reply" data-context="${review.name}">
          <i class="far fa-comment"></i>
          <span class="en">Reply</span>
          <span class="ur">جواب دیں</span>
        </a>
      </div>
    `;
    container.appendChild(card);
  });

  // Event delegation for like buttons
  container.addEventListener('click', handleLikeClick);
}

// --------------- LIKE BUTTON HANDLER (DELEGATION) ---------------
function handleLikeClick(e) {
  const btn = e.target.closest('.like-btn');
  if (!btn) return;
  e.preventDefault();

  const reviewId = parseInt(btn.getAttribute('data-review-id'));
  if (btn.classList.contains('liked') || btn.disabled) return;

  let likedReviews = JSON.parse(localStorage.getItem('liked_reviews') || '[]');
  if (likedReviews.includes(reviewId)) return;

  likedReviews.push(reviewId);
  localStorage.setItem('liked_reviews', JSON.stringify(likedReviews));

  // Update button appearance
  btn.classList.add('liked');
  btn.disabled = true;
  const icon = btn.querySelector('i');
  if (icon) {
    icon.classList.remove('far');
    icon.classList.add('fas');
  }
  const countSpan = btn.querySelector('.like-count');
  if (countSpan) {
    countSpan.textContent = parseInt(countSpan.textContent) + 1;
  }
}

// --------------- 3. CONTACT CARDS (ACTIVE / BUSY) ---------------
function updateContactCards() {
  const cardPK = document.getElementById('wa-card-pk');
  const cardIntl = document.getElementById('wa-card-intl');
  if (!cardPK || !cardIntl) return;

  // Determine active and busy numbers via main.js
  const active = getActiveNumber();
  const busy = getBusyNumber();
  if (!active || !busy) return;

  const numbers = CONFIG.numbers || [];
  // Match which card corresponds to which country
  const pkNumber = numbers.find(n => n.country === 'Pakistan');
  const intlNumber = numbers.find(n => n.country === 'International');

  // Update Pakistan card
  if (pkNumber) {
    const isActive = active.country === 'Pakistan';
    updateSingleContactCard(cardPK, pkNumber, isActive);
  }

  // Update International card
  if (intlNumber) {
    const isActive = active.country === 'International';
    updateSingleContactCard(cardIntl, intlNumber, isActive);
  }
}

function updateSingleContactCard(card, numberObj, isActive) {
  // Update title (optional – could keep original, but we'll set bilingual labels)
  const titleEn = card.querySelector('h3 .en');
  const titleUr = card.querySelector('h3 .ur');
  if (titleEn) titleEn.textContent = numberObj.labelEn || 'Number';
  if (titleUr) titleUr.textContent = numberObj.labelUr || 'نمبر';

  // Update phone number
  const numberSpanEn = card.querySelector('.wa-number .en');
  const numberSpanUr = card.querySelector('.wa-number .ur');
  if (numberSpanEn) numberSpanEn.textContent = numberObj.number;
  if (numberSpanUr) numberSpanUr.textContent = numberObj.number;

  // Update status badge
  const badge = card.querySelector('.wa-status');
  if (badge) {
    if (isActive) {
      badge.className = 'badge badge-green wa-status';
      badge.innerHTML = '<span class="en">Active Now</span> <span class="ur">ابھی آپ اس نمبر پر بات کر سکتے ہیں</span>';
    } else {
      badge.className = 'badge badge-red wa-status';
      badge.innerHTML = '<span class="en">Busy Right Now</span> <span class="ur">ابھی مصروف</span>';
    }
  }

  // The WhatsApp button (wa-link) already exists; its href will be set by the binder.
  // We may want to ensure the button uses the correct number? No, the binder uses the active number from main.js globally.
  // But if the user clicks the busy number's button, we still want to send a message; the binder will use the active number anyway.
  // It's okay.
}

// --------------- 4. ACCORDION FUNCTIONALITY ---------------
function setupAccordion() {
  const accordion = document.querySelector('.glass-accordion');
  if (!accordion) return;

  const buttons = accordion.querySelectorAll('.accordion-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      const currentItem = this.closest('.accordion-item');
      const body = currentItem.querySelector('.accordion-body');

      // Close all other items
      accordion.querySelectorAll('.accordion-btn').forEach(otherBtn => {
        otherBtn.classList.remove('active');
      });
      accordion.querySelectorAll('.accordion-body').forEach(otherBody => {
        otherBody.classList.remove('active');
      });

      // Toggle current
      this.classList.toggle('active');
      body.classList.toggle('active');
    });
  });
}

// --------------- 5. WHATSAPP LINK BINDER (.wa-link) ---------------
function bindWhatsAppLinks() {
  const links = document.querySelectorAll('.wa-link');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const messageType = this.getAttribute('data-message-type') || 'general';
      const context = this.getAttribute('data-context') || '';

      let url;
      switch (messageType) {
        case 'general':
          url = getGeneralInquiryMessage();
          break;
        case 'channel-inquiry':
          url = getChannelInquiryMessage(context || 'this channel');
          break;
        case 'promotion':
          url = getPromotionMessage(context || 'the plan');
          break;
        case 'consultation':
          url = getConsultationMessage();
          break;
        case 'review':
          url = getReviewMessage();
          break;
        case 'review-reply':
          url = getReplyMessage(context || 'the user');
          break;
        default:
          url = getGeneralInquiryMessage();
      }
      if (url) window.open(url, '_blank');
    });
  });
}

// --------------- 6. PRIVATE GROUP LINK ---------------
function setupPrivateGroupLink() {
  const link = document.getElementById('private-group-link');
  if (link && CONFIG.privateGroupLink) {
    link.href = CONFIG.privateGroupLink;
  }
}

// --------------- 7. FOOTER YEAR ---------------
function setFooterYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
                }
