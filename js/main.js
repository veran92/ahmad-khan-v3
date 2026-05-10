'use strict';

// ============================================================
// Ahmad Khan V3 – main.js (Shared Across All Pages)
// Handles: discount bar, WhatsApp rotation, navigation, 
//           floating button, scroll animations, counters.
// ============================================================

// --------------- GLOBAL STATE ---------------
const CONFIG = window.CONFIG || { nums: [], discountOptions: [0] };
let activeNumber = null;
let busyNumber = null;

// --------------- HELPER: GET ACTIVE / BUSY NUMBERS ---------------
function rotateActiveNumber() {
  if (!Array.isArray(CONFIG.numbers) || CONFIG.numbers.length < 2) {
    // fallback if no numbers defined
    activeNumber = CONFIG.numbers?.[0] || { country: '', number: '', labelEn: '', labelUr: '' };
    busyNumber = CONFIG.numbers?.[1] || { country: '', number: '', labelEn: '', labelUr: '' };
    return;
  }
  const randomIdx = Math.floor(Math.random() * CONFIG.numbers.length);
  activeNumber = CONFIG.numbers[randomIdx];
  busyNumber = CONFIG.numbers[1 - randomIdx]; // assume exactly 2 numbers
}

function getActiveNumber() { return activeNumber; }
function getBusyNumber() { return busyNumber; }
function getActiveNumberClean() {
  if (!activeNumber) return '';
  return activeNumber.number.replace(/[^0-9]/g, '');
}

// --------------- WHATSAPP LINK GENERATOR ---------------
function generateWhatsAppLink(messageEn, messageUr, contextData) {
  // Build bilingual message: English first, blank line, then Urdu
  let parts = [];
  if (messageEn) parts.push(messageEn);
  if (messageUr) parts.push(messageUr);
  const finalMessage = parts.join('\n\n');
  const encoded = encodeURIComponent(finalMessage);
  const cleanNumber = getActiveNumberClean();
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
}

// --------------- PRE‑FILLED MESSAGE TEMPLATES ---------------
function getGeneralInquiryMessage() {
  return generateWhatsAppLink(
    'Assalam-o-Alaikum Ahmad bhai, I am interested in your WhatsApp services. Can you guide me?',
    'السلام علیکم احمد بھائی، میں آپ کی واٹس ایپ سروسز میں دلچسپی رکھتا ہوں۔'
  );
}

function getChannelInquiryMessage(channelName) {
  return generateWhatsAppLink(
    `Assalam-o-Alaikum Ahmad bhai, I am interested in the WhatsApp channel "${channelName}". Please share details.`,
    `السلام علیکم احمد بھائی، میں واٹس ایپ چینل "${channelName}" میں دلچسپی رکھتا ہوں۔ براہ کرم تفصیلات بتائیں۔`
  );
}

function getPromotionMessage(planName) {
  return generateWhatsAppLink(
    `Assalam-o-Alaikum Ahmad bhai, I want to book the promotion plan "${planName}". Please guide me.`,
    `السلام علیکم احمد بھائی، میں پروموشن پلان "${planName}" بک کروانا چاہتا ہوں۔ براہ کرم رہنمائی کریں۔`
  );
}

function getConsultationMessage() {
  return generateWhatsAppLink(
    'Assalam-o-Alaikum Ahmad bhai, I need a consultation session for WhatsApp growth. Please share availability.',
    'السلام علیکم احمد بھائی، مجھے واٹس ایپ گروتھ کے لیے کنسلٹیشن سیشن چاہیے۔ براہ کرم دستیابی بتائیں۔'
  );
}

function getReviewMessage() {
  return generateWhatsAppLink(
    'Assalam-o-Alaikum Ahmad bhai, I want to leave a review about your services.',
    'السلام علیکم احمد بھائی، میں آپ کی سروسز کے بارے میں ریویو لکھنا چاہتا ہوں۔'
  );
}

function getReplyMessage(reviewerName) {
  return generateWhatsAppLink(
    `Assalam-o-Alaikum Ahmad bhai, I want to reply to ${reviewerName}'s review.`,
    `السلام علیکم احمد بھائی، میں ${reviewerName} کے ریویو کا جواب دینا چاہتا ہوں۔`
  );
}

// --------------- DISCOUNT BAR ---------------
function setupDiscountBar() {
  const bar = document.querySelector('.discount-bar');
  if (!bar) return;

  // If user already dismissed, hide permanently
  if (localStorage.getItem('discount-dismissed') === 'true') {
    bar.classList.add('hidden');
    return;
  }

  const options = CONFIG.discountOptions;
  if (!Array.isArray(options) || options.length === 0) {
    bar.classList.add('hidden');
    return;
  }

  const randomDiscount = options[Math.floor(Math.random() * options.length)];

  if (randomDiscount === 0 || randomDiscount === null || randomDiscount === undefined) {
    bar.classList.add('hidden');
    return;
  }

  // Show bar with text
  const textEl = bar.querySelector('.discount-text');
  if (textEl) {
    textEl.textContent = `${randomDiscount}% Off on All Services – Limited Time!`;
  }
  bar.classList.remove('hidden');

  // Close button
  const closeBtn = bar.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      bar.classList.add('hidden');
      localStorage.setItem('discount-dismissed', 'true');
    });
  }
}

// --------------- MOBILE NAVIGATION ---------------
function setupMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') &&
        !navLinks.contains(e.target) &&
        e.target !== hamburger) {
      navLinks.classList.remove('active');
    }
  });
}

// --------------- FLOATING WHATSAPP BUTTON ---------------
function setupFloatingWA() {
  const btn = document.querySelector('.floating-wa');
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const url = getGeneralInquiryMessage(); // already a full URL from generateWhatsAppLink
    window.open(url, '_blank');
  });
}

// --------------- SCROLL FADE‑IN ANIMATIONS ---------------
function setupScrollFade() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // optionally unobserve if you want animation only once
        // observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// --------------- COUNTER ANIMATION ---------------
function setupCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        if (isNaN(target)) return;
        animateCounter(el, target);
        observer.unobserve(el); // animate only once
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
  const duration = 2000; // ms
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutCubic easing
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.round(eased * target);
    element.textContent = currentValue.toLocaleString();
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(update);
}

// --------------- ACTIVE NAV LINK HIGHLIGHTING ---------------
function highlightCurrentNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  // Remove leading/trailing slashes just in case
  const currentPage = currentPath.replace(/\/+$/, '') || 'index.html';

  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    // Extract filename from href
    const hrefPage = href.split('/').pop()?.replace(/\/+$/, '') || '';
    if (hrefPage === currentPage ||
        (currentPage === 'index.html' && (hrefPage === '' || hrefPage === '/' || hrefPage === 'index.html'))) {
      link.classList.add('active');
    }
  });
}

// --------------- FOOTER CREDIT LINK UPDATE ---------------
function setupFooterCredit() {
  const creditLink = document.querySelector('.footer-credit a');
  if (creditLink && CONFIG.credit && CONFIG.credit.channelLink) {
    creditLink.href = CONFIG.credit.channelLink;
  }
}

// --------------- INITIALIZATION ---------------
function initMain() {
  rotateActiveNumber();
  setupDiscountBar();
  setupMobileNav();
  setupFloatingWA();
  setupScrollFade();
  setupCounters();
  highlightCurrentNav();
  setupFooterCredit();
}

document.addEventListener('DOMContentLoaded', initMain);
