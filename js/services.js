'use strict';

// ============================================================
// Ahmad Khan V3 – services.js
// Page‑specific logic for services.html
// ============================================================

document.addEventListener('DOMContentLoaded', initServices);

function initServices() {
  setupAccordion();
  bindWhatsAppLinks();
}

// --------------- 1. FAQ ACCORDION TOGGLE ---------------
function setupAccordion() {
  const buttons = document.querySelectorAll('.accordion-btn');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      const parentItem = this.closest('.accordion-item');
      const body = parentItem.querySelector('.accordion-body');

      // Close all other items
      document.querySelectorAll('.accordion-btn').forEach(otherBtn => {
        otherBtn.classList.remove('active');
      });
      document.querySelectorAll('.accordion-body').forEach(otherBody => {
        otherBody.classList.remove('active');
      });

      // Toggle current
      this.classList.toggle('active');
      body.classList.toggle('active');
    });
  });
}

// --------------- 2. WHATSAPP BUTTON BINDING ---------------
function bindWhatsAppLinks() {
  const links = document.querySelectorAll('.wa-link');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const messageType = this.getAttribute('data-message-type') || 'general';
      const context = this.getAttribute('data-context') || '';

      let url;
      // Use globally available functions from main.js
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
