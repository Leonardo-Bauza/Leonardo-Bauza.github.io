/**
 * visitas.js — Bauza Web Studio
 * Uso en cualquier sitio:
 *   <script src="https://leobauza.com.ar/visitas.js" data-repo="NOMBRE-DEL-REPO" defer></script>
 */
(function () {
  var URL_SCRIPT = 'https://script.google.com/macros/s/AKfycby3FPkcN5qH4x_kFjlw9gXGnku4XV6PZ6K9_LoP8urhJAmPU_sovvuwp_eOOcHvafUg/exec';
  var TOKEN = '44ss44d55f5g66h66hH'; // igual que en el .gs

  try {
    // Para no avisarte de tus propias visitas, en tu navegador:
    //   localStorage.setItem('no_track', '1')
    if (localStorage.getItem('no_track')) return;

    // Repo: viene del atributo data-repo; si falta, usa el dominio + primer tramo de la ruta
    var tag = document.currentScript;
    var repo = (tag && tag.getAttribute('data-repo')) ||
      (location.hostname + '/' + (location.pathname.split('/')[1] || ''));

    var vid = localStorage.getItem('vid');
    if (!vid) {
      vid = Math.random().toString(36).slice(2, 10);
      localStorage.setItem('vid', vid);
    }

    var q = new URLSearchParams({
      t: TOKEN,
      repo: repo,
      vid: vid,
      url: location.href,
      ref: document.referrer,
      lang: navigator.language,
      tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
      ua: navigator.userAgent
    });

    fetch(URL_SCRIPT + '?' + q.toString(), { mode: 'no-cors', keepalive: true });
  } catch (e) { /* nunca romper el sitio por el tracking */ }
})();
