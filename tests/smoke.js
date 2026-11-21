const fs = require('fs');
const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const root = path.resolve(__dirname, '..');
const errors = [];
const virtualConsole = new VirtualConsole();
virtualConsole.on('jsdomError', (e) => errors.push('jsdom: ' + (e.stack || e.message)));

const appCode = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const serviceWorkerCode = fs.readFileSync(path.join(root, 'service-worker.js'), 'utf8');
const rawHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const html = rawHtml
  .replace(/<script src="vendor\/[^"]+"><\/script>/g, '')
  .replace(/<script src="app\.js\?v=\d+"><\/script>/g, '');

function check(name, fn) {
  try {
    const ok = fn();
    console.log((ok ? 'PASS' : 'FAIL') + ' ' + name);
    if (!ok) errors.push('check failed: ' + name);
  } catch (e) {
    console.log('ERROR ' + name);
    errors.push('check error: ' + name + ': ' + e.stack);
  }
}

check('version bumped to v30', () => rawHtml.includes('styles.css?v=30') && rawHtml.includes('app.js?v=30') && serviceWorkerCode.includes('nexa-shell-v30'));
check('new features present in app.js', () => ['nexa-stats', 'data-queue-play', 'data-advanced', 'renderStatsView'].every((marker) => appCode.includes(marker)));

const dom = new JSDOM(html, { url: 'http://localhost/', runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole });
const { window } = dom;
window.addEventListener('error', (e) => errors.push('window error: ' + ((e.error && e.error.stack) || e.message)));

window.scrollTo = function () {};
const media = window.HTMLMediaElement.prototype;
media.play = function () { this.dispatchEvent(new window.Event('play')); return Promise.resolve(); };
media.pause = function () { this.dispatchEvent(new window.Event('pause')); };
media.load = function () {};
window.HTMLElement.prototype.requestFullscreen = function () { return Promise.resolve(); };
window.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
window.HTMLDialogElement.prototype.close = function () {
  if (this.open) {
    this.open = false;
    this.dispatchEvent(new window.Event('close'));
  }
};

for (const file of ['vendor/compat.js', 'app.js']) {
  try { window.eval(fs.readFileSync(path.join(root, file), 'utf8')); }
  catch (e) { errors.push('eval ' + file + ': ' + e.stack); }
}

const $ = (id) => window.document.getElementById(id);
const click = (el) => el.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
const change = (el, value) => { el.value = value; el.dispatchEvent(new window.Event('change', { bubbles: true })); };

check('home renders', () => $('main-content').innerHTML.includes('hero'));
check('queue count hidden initially', () => $('queue-nav-count').hidden === true);
check('stats navigation exists', () => !!window.document.querySelector('[data-view="estatisticas"]'));

click(window.document.querySelector('[data-view="estatisticas"]'));
check('stats view renders', () => $('main-content').innerHTML.includes('Estat'));
check('stats start empty', () => $('main-content').innerHTML.includes('<strong>0</strong>'));

click(window.document.querySelector('[data-view="filmes"]'));
check('browse view renders', () => !!$('sort-select') && !!$('advanced-toggle'));
click($('advanced-toggle'));
check('advanced filters open', () => $('advanced-filters').hidden === false);
change(window.document.querySelector('[data-advanced="year"]'), 'classicos');
check('advanced filters apply', () => window.document.querySelectorAll('.media-card').length < 25);
click($('advanced-reset'));
check('advanced filters reset', () => window.document.querySelectorAll('.media-card').length > 5);

const firstCard = window.document.querySelector('.media-card');
click(firstCard.querySelector('.card-queue'));
check('queue receives item', () => $('queue-nav-count').hidden === false && $('queue-nav-count').textContent === '1');

click($('queue-nav'));
check('queue dialog opens', () => $('queue-dialog').open === true && $('queue-dialog-list').innerHTML.includes('queue-item'));
click($('queue-dialog-close'));

click(firstCard.querySelector('.card-play'));
check('player opens', () => $('player-dialog').open === true);
check('queue badge updated', () => $('player-queue-count').textContent !== '');

const video = $('video-player');
Object.defineProperty(video, 'duration', { value: 100, configurable: true });
video.currentTime = 10;
video.dispatchEvent(new window.Event('play'));
video.currentTime = 25;
video.dispatchEvent(new window.Event('timeupdate'));
check('play recorded in stats', () => window.localStorage.getItem('nexa-stats') !== null);

click($('player-queue'));
check('queue panel toggles', () => $('queue-panel').hidden === false);
click($('player-close'));
check('player closes', () => $('player-dialog').open === false);

click(window.document.querySelector('[data-view="estatisticas"]'));
check('stats show play count', () => $('main-content').innerHTML.includes('títulos iniciados'));
check('stats show history', () => $('main-content').innerHTML.includes('history-list'));

click(window.document.querySelector('[data-view="filmes"]'));
const cards = window.document.querySelectorAll('.media-card');
click(cards[0].querySelector('.card-play'));
check('queue built from view', () => $('player-queue-count').textContent === String(cards.length));
const nextVideo = $('video-player');
Object.defineProperty(nextVideo, 'duration', { value: 100, configurable: true });
nextVideo.currentTime = 99;
nextVideo.dispatchEvent(new window.Event('ended'));
check('autoplay advances queue', () => $('player-title').textContent === cards[1].querySelector('.poster-title').textContent);
click($('player-close'));

click(window.document.querySelector('[data-view="estatisticas"]'));
const clear = $('stats-clear');
click(clear);
check('stats clear asks confirmation', () => clear.textContent.includes('Confirmar'));
click(clear);
check('stats clear works', () => window.document.querySelectorAll('.history-list').length === 0);

console.log('\nErrors: ' + errors.length);
errors.forEach((e) => console.log(e));
process.exit(errors.length ? 1 : 0);
