/*
 * Tulco Studio · Consentement cookies (CNIL) + Google Tag Manager
 *
 * - Google Tag Manager n'est chargé qu'après un clic sur « Accepter ».
 * - Consent Mode v2 : tout est refusé par défaut, puis mis à jour selon le choix.
 * - Le choix est gardé 6 mois (localStorage), puis redemandé.
 * - Tout lien vers #gestion-cookies rouvre le bandeau.
 * - Passer de « accepté » à « refusé » efface les cookies Google et recharge la page.
 */
(function () {
  var GTM_ID = 'GTM-55KFWB5S';
  var STORAGE_KEY = 'tulco-consent';
  var MAX_AGE_MS = 182 * 24 * 60 * 60 * 1000; // ~6 mois
  var SETTINGS_HASH = '#gestion-cookies';

  var lang = (document.documentElement.lang || 'fr').slice(0, 2);
  var T = {
    fr: {
      label: 'Gestion des cookies',
      title: 'Cookies de mesure d’audience',
      text: 'Avec votre accord, ce site utilise Google Tag Manager et des cookies de mesure d’audience pour comprendre comment il est consulté. Rien n’est déposé si vous refusez. Vous pouvez changer d’avis à tout moment via « Gestion des cookies » en bas de page.',
      policy: 'En savoir plus',
      policyUrl: '/confidentialite.html',
      refuse: 'Tout refuser',
      accept: 'Tout accepter'
    },
    en: {
      label: 'Cookie settings',
      title: 'Audience measurement cookies',
      text: 'With your consent, this site uses Google Tag Manager and audience measurement cookies to understand how it is used. Nothing is stored if you decline. You can change your mind at any time via “Cookie settings” at the bottom of the page.',
      policy: 'Learn more',
      policyUrl: '/en/privacy.html',
      refuse: 'Decline all',
      accept: 'Accept all'
    }
  }[lang === 'en' ? 'en' : 'fr'];

  // --- Consent Mode v2 : refus par défaut, avant tout chargement de GTM ---
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted'
  });

  function readChoice() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (!data || (data.choice !== 'granted' && data.choice !== 'denied')) return null;
      if (Date.now() - data.ts > MAX_AGE_MS) return null;
      return data.choice;
    } catch (e) { return null; }
  }

  function saveChoice(choice) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice: choice, ts: Date.now() }));
    } catch (e) { /* stockage indisponible : le bandeau reviendra à la prochaine visite */ }
  }

  var gtmLoaded = false;
  function loadGtm() {
    if (gtmLoaded) return;
    gtmLoaded = true;
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    var first = document.getElementsByTagName('script')[0];
    first.parentNode.insertBefore(s, first);
  }

  function grant() {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted'
    });
    loadGtm();
  }

  function clearGoogleCookies() {
    var host = window.location.hostname;
    var parts = host.split('.');
    var domains = ['', host];
    for (var i = 1; i < parts.length - 1; i++) domains.push('.' + parts.slice(i).join('.'));
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (!/^(_ga|_gid|_gat|_gcl|_fbp|_fbc|IDE|_uet)/.test(name)) return;
      domains.forEach(function (d) {
        document.cookie = name + '=; Max-Age=0; path=/' + (d ? '; domain=' + d : '');
      });
    });
  }

  // --- Bandeau ---
  var banner = null;

  function injectStyles() {
    if (document.getElementById('tulco-cc-style')) return;
    var css =
      '.tulco-cc{position:fixed;left:0;right:0;bottom:0;z-index:80;background:#fff;color:#14171C;' +
      'border-top:3px solid #003EC7;box-shadow:0 -8px 24px rgba(20,23,28,.08);' +
      'font-family:"Switzer",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;}' +
      '.tulco-cc[hidden]{display:none}' +
      '.tulco-cc__in{max-width:1200px;margin:0 auto;padding:20px clamp(16px,5vw,64px);display:flex;' +
      'gap:20px 40px;align-items:center;justify-content:space-between;flex-wrap:wrap}' +
      '.tulco-cc__txt{flex:1 1 420px;min-width:0}' +
      '.tulco-cc__title{margin:0 0 6px;font-family:ui-monospace,"SF Mono",Menlo,Consolas,monospace;font-size:11px;' +
      'font-weight:500;text-transform:uppercase;letter-spacing:.05em;color:#003EC7}' +
      '.tulco-cc__p{margin:0;font-size:14px;line-height:1.55;color:#353B45}' +
      '.tulco-cc__link{color:#003EC7;text-decoration:underline;text-underline-offset:3px}' +
      '.tulco-cc__btns{display:flex;gap:12px;flex:0 0 auto;flex-wrap:wrap}' +
      '.tulco-cc__btn{appearance:none;cursor:pointer;font:inherit;font-size:14px;font-weight:600;' +
      'min-width:150px;padding:12px 20px;border-radius:2px;border:1px solid transparent;color:#fff;' +
      'transition:background-color .15s ease}' +
      '.tulco-cc__btn--refuse{background:#14171C;border-color:#14171C}' +
      '.tulco-cc__btn--refuse:hover{background:#353B45}' +
      '.tulco-cc__btn--accept{background:#003EC7;border-color:#003EC7}' +
      '.tulco-cc__btn--accept:hover{background:#0030A0}' +
      '.tulco-cc__btn:focus-visible{outline:2px solid #003EC7;outline-offset:3px}' +
      '@media (max-width:560px){.tulco-cc__btns{width:100%}.tulco-cc__btn{flex:1 1 0;min-width:0}}';
    var style = document.createElement('style');
    style.id = 'tulco-cc-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function buildBanner() {
    injectStyles();
    banner = document.createElement('div');
    banner.className = 'tulco-cc';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', T.label);
    banner.hidden = true;
    banner.innerHTML =
      '<div class="tulco-cc__in">' +
        '<div class="tulco-cc__txt">' +
          '<p class="tulco-cc__title" id="tulco-cc-title"></p>' +
          '<p class="tulco-cc__p"></p>' +
        '</div>' +
        '<div class="tulco-cc__btns">' +
          '<button type="button" class="tulco-cc__btn tulco-cc__btn--refuse" data-cc="denied"></button>' +
          '<button type="button" class="tulco-cc__btn tulco-cc__btn--accept" data-cc="granted"></button>' +
        '</div>' +
      '</div>';
    banner.querySelector('.tulco-cc__title').textContent = T.title;
    var para = banner.querySelector('.tulco-cc__p');
    para.textContent = T.text + ' ';
    var more = document.createElement('a');
    more.href = T.policyUrl;
    more.textContent = T.policy;
    more.className = 'tulco-cc__link';
    para.appendChild(more);
    banner.querySelector('[data-cc="denied"]').textContent = T.refuse;
    banner.querySelector('[data-cc="granted"]').textContent = T.accept;
    banner.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('[data-cc]');
      if (btn) decide(btn.getAttribute('data-cc'));
    });
    document.body.appendChild(banner);
  }

  function showBanner() {
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', showBanner);
      return;
    }
    if (!banner) buildBanner();
    banner.hidden = false;
  }

  function hideBanner() {
    if (banner) banner.hidden = true;
  }

  function decide(choice) {
    var previous = readChoice();
    saveChoice(choice);
    hideBanner();
    if (choice === 'granted') {
      grant();
    } else if (previous === 'granted' || gtmLoaded) {
      // Retrait du consentement : on efface les traceurs déjà posés et on recharge sans GTM.
      gtag('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        functionality_storage: 'denied',
        personalization_storage: 'denied'
      });
      clearGoogleCookies();
      window.location.reload();
    }
  }

  // Lien « Gestion des cookies » (pied de page) : rouvre le bandeau.
  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('a[href="' + SETTINGS_HASH + '"]');
    if (!link) return;
    e.preventDefault();
    showBanner();
  });

  window.tulcoCookies = { open: showBanner };

  // --- Démarrage ---
  var choice = readChoice();
  if (choice === 'granted') grant();
  else if (choice === null) showBanner();
  if (window.location.hash === SETTINGS_HASH) showBanner();
})();
