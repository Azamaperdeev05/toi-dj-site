import './style.css';

const wa = (text) => 'https://wa.me/77478501822?text=' + encodeURIComponent(text);
const WHATSAPP = wa('Сәлеметсіз бе! TOI DJ PRO лицензиясы туралы сұрағым бар.');

// Демо: сайттағы пэдтер нақты дыбыс шығарады (public/audio). Атаулар — бағдарламадағы банктен.
const PADS = [
  { title: 'Тойбастар', color: '#00D4F5', file: '/audio/toibastar.mp3' },
  { title: 'Домбыра туш', color: '#F0434F', file: '/audio/dombyra_tush.mp3' },
  { title: 'Шапалақ', color: '#00D4F5', file: '/audio/chapalak.mp3' },
  { title: 'Барабан', color: '#A0A6AF', file: '/audio/drum.mp3' },
  { title: 'Ойбай', color: '#F0434F', file: '/audio/oibai.mp3' },
  { title: 'Ойхой', color: '#00D4F5', file: '/audio/oikhoi.mp3' },
  { title: 'Шапалақ (бочка)', color: '#A0A6AF', file: '/audio/chapalak_bochka.mp3' },
  { title: 'Дақанса', color: '#00D4F5', file: '/audio/dakansa.mp3' },
  { title: 'Облом', color: '#F0434F', file: '/audio/oblom.mp3' },
  { title: 'Ат дауысы', color: '#A0A6AF', file: '/audio/horse.mp3' },
  { title: 'Мистер Пропер', color: '#00D4F5', file: '/audio/mister_proper.mp3' },
  { title: 'Джеки', color: '#A0A6AF', file: '/audio/jackie.mp3' },
  { title: 'Әке шапалақ', color: '#00D4F5', file: '/audio/ache_chapalak.ogg' },
];

const TRACKS = [
  ['Тойбастар — кіріспе', '3:24'],
  ['Беташар', '4:10'],
  ['Вальс — жас жұбайлар', '3:48'],
  ['Қара жорға', '2:56'],
  ['Құдалар биі', '3:31'],
  ['Шашу', '2:42'],
  ['Достар әні', '4:05'],
  ['Той соңы', '3:15'],
];

const icon = {
  prev: '<path d="M6 6h2v12H6zM20 6v12L9.5 12z"/>',
  play: '<path d="M8 5v14l11-7z"/>',
  pause: '<path d="M7 5h4v14H7zM13 5h4v14h-4z"/>',
  stop: '<path d="M7 7h10v10H7z"/>',
  next: '<path d="M16 6h2v12h-2zM4 6v12l10.5-6z"/>',
  shuffle: '<path d="M10.6 9.2 5.4 4 4 5.4l5.2 5.2zM14.5 4l2 2L4 18.6 5.4 20 18 7.5l2 2V4zm.3 9.4-1.4 1.4 3.1 3.1-2 2H20v-5.5l-2 2z"/>',
  repeat: '<path d="M7 7h10v3l4-4-4-4v3H5v6h2zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2z"/>',
  mix: '<path d="M18.6 6.6c-2.1 0-3.9 1.4-5.5 3.2L12 11l-1.1-1.2C9.3 8 7.5 6.6 5.4 6.6 2.4 6.6 0 9 0 12s2.4 5.4 5.4 5.4c2.1 0 3.9-1.4 5.5-3.2L12 13l1.1 1.2c1.6 1.8 3.4 3.2 5.5 3.2 3 0 5.4-2.4 5.4-5.4s-2.4-5.4-5.4-5.4zM5.4 15c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.2 0 2.4.9 3.9 2.6L10.4 12l-1.1 1.4C7.8 14.1 6.6 15 5.4 15zm13.2 0c-1.2 0-2.4-.9-3.9-2.6L13.6 12l1.1-1.4c1.5-1.7 2.7-2.6 3.9-2.6 1.7 0 3 1.3 3 3s-1.3 3-3 3z"/>',
  vol: '<path d="M3 9v6h4l5 5V4L7 9zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4z"/>',
  gear: '<path d="M19.4 13a7.6 7.6 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a7.4 7.4 0 0 0-1.7-1L14.9 3h-4l-.4 2.7a7.4 7.4 0 0 0-1.7 1l-2.5-1-2 3.5L6.4 11a7.6 7.6 0 0 0 0 2l-2.1 1.6 2 3.5 2.5-1c.5.4 1.1.7 1.7 1l.4 2.7h4l.4-2.7c.6-.3 1.2-.6 1.7-1l2.5 1 2-3.5zM12.9 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/>',
  qr: '<path d="M3 3h8v8H3zm2 2v4h4V5zm8-2h8v8h-8zm2 2v4h4V5zM3 13h8v8H3zm2 2v4h4v-4zm8-2h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm2 2h2v2h-2zm2-2h2v2h-2zm0-4h2v2h-2zm2 6h2v2h-2z"/>',
  plus: '<path d="M11 5h2v14h-2zM5 11h14v2H5z"/>',
  search: '<path d="M10 4a6 6 0 1 0 3.7 10.7l4.3 4.3 1.4-1.4-4.3-4.3A6 6 0 0 0 10 4zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>',
  grid: '<path d="M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 0h7v7h-7z"/>',
  folder: '<path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  trash: '<path d="M8 4V3h8v1h5v2H3V4zm-2 4h12l-1 13H7z"/>',
  check: '<path d="m9 16.2-4.2-4.2-1.4 1.4L9 19 21 7l-1.4-1.4z"/>',
  apple: '<path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.4.8c1.4 0 2.3-1.3 3.1-2.5a11 11 0 0 0 1.4-2.9c-.1 0-2.7-1-2.7-4.1zM13.8 4.9c.7-.9 1.2-2 1.1-3.2-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.1 1.1.1 2.3-.6 3-1.5z"/>',
  windows: '<path d="M3 5.5 10.4 4.5v7H3zm0 13 7.4 1v-7H3zm8.4 1.2L21 21v-8.5h-9.6zm0-15.4v7.2H21V3z"/>',
};
const svg = (name, size = 18) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${icon[name]}</svg>`;

const padButton = (pad, i, compact = false) => pad.file
  ? `<button class="pad" data-pad="${i}" aria-pressed="false" style="--pad:${pad.color}">
       <span class="pad-num">${i + 1}</span><span class="pad-dot"></span>
       <span class="pad-title">${pad.title}</span>
       ${compact ? '' : '<span class="pad-time" aria-hidden="true"></span>'}
       <span class="pad-bar"><span></span></span>
     </button>`
  : `<div class="pad pad-empty" aria-hidden="true"><span class="pad-num">${i + 1}</span></div>`;

const appWindow = `
<div class="win" role="group" aria-label="TOI DJ бағдарламасының демо көшірмесі">
  <div class="win-chrome"><span></span><span></span><span></span><b>Toi Dj</b></div>
  <div class="app-top">
    <div class="brand"><img src="/logo.png" alt="" width="24" height="24"><b>TOI DJ</b><span class="chip">PRO</span></div>
    <div class="top-right">
      <button class="ghost-btn" data-scroll="#remote">${svg('qr', 16)}<span>Телефон</span></button>
      <span class="vol">${svg('vol', 18)}<input type="range" min="0" max="100" value="85" id="master" aria-label="Жалпы дыбыс деңгейі"><output id="masterVal">85%</output></span>
      <button class="stop-btn" id="stopAll">${svg('stop', 14)}<span>ТОҚТАТУ</span></button>
      <span class="icon-btn" aria-hidden="true">${svg('gear', 18)}</span>
    </div>
  </div>
  <div class="app-body">
    <section class="panel playlist" aria-label="Плейлист">
      <div class="panel-head">
        <span class="label">ПЛЕЙЛИСТ</span>
        <span class="select">${svg('folder', 15)}<b>05 БИ</b></span>
        <span class="sq accent" aria-hidden="true">${svg('plus', 16)}</span>
      </div>
      <div class="now">
        <b id="nowTitle">${TRACKS[0][0]}</b>
        <small>Келесі: <span>${TRACKS[1][0]}</span></small>
        <div class="seek"><span id="seekFill"></span></div>
        <div class="times"><span id="tPos">00:00</span><span id="tRem">-00:00</span></div>
      </div>
      <div class="transport">
        <span class="t-btn" aria-hidden="true">${svg('prev')}</span>
        <button class="t-btn t-play" id="playBtn" aria-label="Демо әнді ойнату">${svg('play', 22)}</button>
        <button class="t-btn" id="stopBtn" aria-label="Тоқтату">${svg('stop')}</button>
        <span class="t-btn" aria-hidden="true">${svg('next')}</span>
        <span class="t-icon" aria-hidden="true">${svg('shuffle', 17)}</span>
        <span class="t-icon on" aria-hidden="true">${svg('repeat', 17)}</span>
        <span class="t-icon on" title="Автомикс" aria-hidden="true">${svg('mix', 19)}</span>
      </div>
      <div class="search">${svg('search', 16)}<span>Іздеу</span></div>
      <ol class="tracks">
        ${TRACKS.map(([t, d], i) => `<li class="${i === 0 ? 'cur' : i === 1 ? 'next' : ''}"><span>${i + 1}</span><b>${t}</b><time>${d}</time></li>`).join('')}
      </ol>
      <div class="panel-foot"><span>8 ән · 28 мин</span><span>Сұрыптау</span></div>
    </section>
    <section class="panel sampler" aria-label="Сэмплер">
      <div class="panel-head">
        <span class="label">СЭМПЛЕР</span>
        <span class="select">${svg('grid', 15)}<b>Негізгі</b><small>${PADS.length}</small></span>
        <span class="spacer"></span>
        <span class="out-btn accent" aria-hidden="true">${svg('plus', 15)}Файл қосу</span>
        <span class="out-btn danger" aria-hidden="true">${svg('trash', 15)}Өшіру режимі</span>
      </div>
      <div class="pads">${Array.from({ length: 36 }, (_, i) => padButton(PADS[i] ?? {}, i)).join('')}</div>
    </section>
  </div>
</div>`;

const phone = `
<div class="phone" role="group" aria-label="Телефон пультінің демо көшірмесі">
  <div class="ph-top">
    <span class="brand"><img src="/logo.png" alt="" width="20" height="20"><b>TOI DJ</b></span>
    <span class="ph-status"><i></i>Қосылды</span>
    <span class="ph-stop">${svg('stop', 12)}ТОҚТАТУ</span>
  </div>
  <div class="ph-card">
    <span class="folder">05 БИ</span>
    <b>${TRACKS[0][0]}</b>
    <div class="ph-next"><i>КЕЛЕСІ</i>${TRACKS[1][0]}</div>
    <div class="seek"><span class="ph-fill"></span></div>
    <div class="times"><span class="ph-pos">00:00</span><span class="ph-rem">-00:00</span></div>
    <div class="ph-transport"><span>${svg('prev', 16)}</span><span class="t-play">${svg('play', 18)}</span><span>${svg('stop', 16)}</span><span>${svg('next', 16)}</span></div>
    <div class="ph-vol">${svg('vol', 16)}<div class="seek"><span style="width:85%"></span></div><b>85%</b></div>
  </div>
  <div class="ph-tabs"><span>Плейлист</span><span class="on">Сэмплер</span></div>
  <div class="pads ph-pads">${PADS.slice(0, 12).map((p, i) => padButton(p, i, true)).join('')}</div>
</div>`;

const features = [
  ['Автомикс және crossfade', 'Ән біткенде келесісі өзі қосылады — 2, 4 не 8 секундта біртіндеп алмасады.'],
  ['64 пэд, кідіріссіз', 'Отбивка, туш, шапалақ басқан сәтте шығады. Бірнеше пэд қатар ойнайды.'],
  ['Музыка өзі бәсеңдейді', 'Сэмпл ойнағанда ән тынышталып, сэмпл біткенде қалпына келеді.'],
  ['Телефон — пульт', 'QR кодпен қосыласыз: зал ортасынан дыбыс, әндер мен пэдтер.'],
  ['Интернетсіз жұмыс', 'Лицензия 30 күн офлайн тексеріледі — той ортасында ештеңе тоқтамайды.'],
  ['MIDI контроллер', 'Akai, Launchkey сияқты USB пультті салсаңыз, пэдтер бірден басқарылады.'],
];

document.querySelector('#app').innerHTML = `
<header class="nav">
  <a class="brand" href="/" aria-label="TOI DJ басты бет"><img src="/logo.png" alt="" width="28" height="28"><b>TOI DJ</b></a>
  <nav aria-label="Негізгі мәзір">
    <a href="#features">Мүмкіндіктер</a>
    <a href="#remote">Пульт</a>
    <a href="#pricing">Баға</a>
  </nav>
  <a class="btn btn-primary btn-sm" href="#download">Жүктеу</a>
</header>

<main>
  <section class="hero">
    <canvas class="hero-fx" aria-hidden="true"></canvas>
    <p class="eyebrow">macOS · Windows</p>
    <h1>Тойды бір терезеден басқарыңыз</h1>
    <p class="lead">Плейлист, 64 пэдті сэмплер және телефон пульті — той жүргізуге арналған DJ ойнатқыш.</p>
    <div class="cta">
      <a class="btn btn-primary" href="#download">Тегін жүктеу</a>
      <a class="btn btn-ghost" href="#demo">Қалай көрінеді?</a>
    </div>
    <ul class="facts"><li>30 күн тегін</li><li>Интернетсіз жұмыс істейді</li><li>Толық қазақ тілінде</li></ul>
  </section>

  <section id="demo" class="demo" aria-labelledby="demo-title">
    <h2 id="demo-title" class="sr-only">Бағдарлама көрінісі</h2>
    ${appWindow}
    <p class="hint">Бұл — бағдарламаның көшірмесі. Пэдтерді басып көріңіз немесе <kbd>1</kbd>–<kbd>8</kbd> пернелерін басыңыз. ▶ — демо ән; пэд ойнағанда ән бәсеңдейді.</p>
  </section>

  <section id="features" class="section" aria-labelledby="features-title">
    <h2 id="features-title">Тойда керегінің бәрі</h2>
    <dl class="features">
      ${features.map(([t, d]) => `<div><dt>${t}</dt><dd>${d}</dd></div>`).join('')}
    </dl>
  </section>

  <section id="remote" class="section split" aria-labelledby="remote-title">
    <div>
      <h2 id="remote-title">Телефон — қалтадағы пульт</h2>
      <p class="lead">Пульт қасында тұрмай-ақ, зал ортасынан басқарыңыз. Қосымша орнатудың қажеті жоқ — браузер жеткілікті.</p>
      <ol class="steps">
        <li><p><b>Бір желіге қосылыңыз.</b> Мейрамхана Wi-Fi-ы немесе телефонның «Точка доступа»-сы.</p></li>
        <li><p><b>QR кодты сканерлеңіз.</b> Телефон қосылған сәтте QR терезесі өзі жабылады.</p></li>
        <li><p><b>Басқарыңыз.</b> Дыбыс, әндер, пэдтер. Бөгде адам қосыла алмайды — сілтеменің кілті әр іске қосылғанда жаңарады.</p></li>
      </ol>
    </div>
    ${phone}
  </section>

  <section id="pricing" class="section" aria-labelledby="pricing-title">
    <h2 id="pricing-title">Бір рет төлейсіз — мәңгі сіздікі</h2>
    <p class="lead">Ай сайынғы жазылым жоқ. Алдымен 30 күн тегін сынап көріңіз — ұнаса ғана сатып аласыз.</p>
    <div class="plans">
      <div class="plan">
        <h3>Сынақ</h3>
        <p class="price">0 ₸</p>
        <p class="price-note">30 күн, карта керек емес</p>
        <ul><li>Барлық мүмкіндіктер</li><li>Google аккаунтымен кіру</li><li>Бір компьютерге</li></ul>
        <a class="btn btn-ghost" href="#download">Тегін жүктеу</a>
      </div>
      <div class="plan">
        <h3>PRO <span class="offer">Алғашқы 10 адамға</span></h3>
        <p class="price">15 000 ₸</p>
        <p class="price-note">бір рет · кейін <b>29 990 ₸</b></p>
        <ul><li>Мерзімсіз лицензия</li><li>Барлық жаңартулар тегін</li><li>Жаңа ноутбукке көшіру</li><li>WhatsApp арқылы қолдау</li></ul>
        <a class="btn btn-ghost" href="${wa('Сәлеметсіз бе! TOI DJ PRO лицензиясын алғым келеді.')}" target="_blank" rel="noopener">PRO алу</a>
      </div>
      <div class="plan plan-pack">
        <span class="ribbon">Ұсынамыз</span>
        <h3>PRO + Дайын пак</h3>
        <p class="price">49 900 ₸</p>
        <p class="price-note">бір рет · бағдарлама мен музыка бірге</p>
        <p class="pack-pitch">Ашасыз да, той жүргізесіз: музыка іздеп, жинап, реттеп апталап отырудың қажеті жоқ.</p>
        <ul>
          <li><span><b>PRO лицензиясы</b> — оның бәрі кіреді</span></li>
          <li>Той кезеңдері бойынша реттелген дайын плейлисттер</li>
          <li>Отбивка, туш, шапалақ — толтырылған пэд банктері</li>
          <li><span>Бір <b>.toi</b> файлы: бір рет ашсаңыз, бәрі орнына түседі</span></li>
        </ul>
        <a class="btn btn-primary" href="${wa('Сәлеметсіз бе! TOI DJ «PRO + Дайын пак» (49 900 ₸) алғым келеді.')}" target="_blank" rel="noopener">Дайын пакты алу</a>
      </div>
    </div>
    <p class="pay-note">Төлем мен кілт WhatsApp арқылы. Кілтті бағдарламадағы «Кілт енгізу» батырмасына енгізесіз — лицензия бірден қосылады.</p>
  </section>

  <section id="download" class="section" aria-labelledby="download-title">
    <h2 id="download-title">Жүктеу</h2>
    <div class="downloads">
      <div class="dl" data-os="mac">
        <div class="dl-head">${svg('apple', 22)}<h3>macOS</h3><span class="badge">Сізге осы</span></div>
        <p class="muted">macOS 12 немесе жаңасы</p>
        <a class="btn btn-primary" href="/Toi DJ-macOS-Universal.dmg" download>Жүктеу (.dmg)</a>
        <p class="alt">Кішірек: <a href="/Toi DJ-macOS-arm64.dmg" download>Apple Silicon (M1–M4)</a> · <a href="/Toi DJ-macOS-x64.dmg" download>Intel</a></p>
        <p class="note">Бірінші рет ашқанда macOS ескертсе: Жүйе баптаулары → Құпиялылық және қауіпсіздік → «Бәрібір ашу».</p>
      </div>
      <div class="dl" data-os="win">
        <div class="dl-head">${svg('windows', 20)}<h3>Windows</h3><span class="badge">Сізге осы</span></div>
        <p class="muted">Windows 10 / 11, x64</p>
        <a class="btn btn-ghost" href="${WHATSAPP}" target="_blank" rel="noopener">Орнатқышты сұрау</a>
        <p class="note">Windows орнатқышы жақында осы бетке қойылады. Әзірге WhatsApp арқылы жібереміз.</p>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <span>© ${new Date().getFullYear()} TOI DJ</span>
  <a href="${WHATSAPP}" target="_blank" rel="noopener">WhatsApp</a>
  <button type="button" id="footerResetPasswordBtn" class="link-btn">Құпиясөзді қалпына келтіру</button>
</footer>`;

// ---------- Демо: ән, пэдтер, ducking ----------
const $ = (s, el = document) => el.querySelector(s);
const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
let master = 0.85;
const track = new Audio('/audio/toibastar.mp3');
const padAudio = new Map(); // пэд индексі → Audio

const ducked = () => [...padAudio.values()].some((a) => !a.paused);
const applyVolumes = () => {
  // Бағдарламадағыдай: пэд ойнағанда ән -75% бәсеңдейді.
  track.volume = master * (ducked() ? 0.25 : 1);
  padAudio.forEach((a) => { a.volume = master; });
};

const playBtn = $('#playBtn');
const setPlayIcon = () => {
  playBtn.innerHTML = svg(track.paused ? 'play' : 'pause', 22);
  playBtn.setAttribute('aria-label', track.paused ? 'Демо әнді ойнату' : 'Кідірту');
  document.querySelectorAll('.ph-transport .t-play').forEach((el) => { el.innerHTML = svg(track.paused ? 'play' : 'pause', 18); });
};
playBtn.addEventListener('click', () => {
  if (track.paused) { applyVolumes(); track.play().catch(() => {}); } else track.pause();
});
$('#stopBtn').addEventListener('click', () => { track.pause(); track.currentTime = 0; });
['play', 'pause', 'ended'].forEach((e) => track.addEventListener(e, setPlayIcon));
['play', 'pause', 'ended'].forEach((e) => track.addEventListener(e, () => heroFx?.update('wave', { amplitude: track.paused ? 0.35 : 1 })));
track.addEventListener('timeupdate', () => {
  const d = track.duration || 0;
  const pct = d ? (track.currentTime / d) * 100 : 0;
  $('#seekFill').style.width = `${pct}%`;
  $('.ph-fill').style.width = `${pct}%`;
  $('#tPos').textContent = $('.ph-pos').textContent = fmt(track.currentTime);
  $('#tRem').textContent = $('.ph-rem').textContent = `-${fmt(Math.max(0, d - track.currentTime))}`;
});

function stopPad(i) {
  const a = padAudio.get(i);
  if (a) { a.pause(); a.currentTime = 0; }
}
function togglePad(i) {
  const pad = PADS[i];
  if (!pad?.file) return;
  let a = padAudio.get(i);
  if (a && !a.paused) return stopPad(i);
  if (!a) {
    a = new Audio(pad.file);
    padAudio.set(i, a);
    const sync = () => {
      const on = !a.paused;
      document.querySelectorAll(`[data-pad="${i}"]`).forEach((b) => {
        b.classList.toggle('playing', on);
        b.setAttribute('aria-pressed', String(on));
        if (!on) b.style.setProperty('--p', '0%');
      });
      applyVolumes();
    };
    ['play', 'pause', 'ended'].forEach((e) => a.addEventListener(e, sync));
    a.addEventListener('timeupdate', () => {
      const d = a.duration || 0;
      document.querySelectorAll(`[data-pad="${i}"]`).forEach((b) => {
        b.style.setProperty('--p', d ? `${(a.currentTime / d) * 100}%` : '0%');
        const t = b.querySelector('.pad-time');
        if (t) t.textContent = d ? `-${fmt(d - a.currentTime)}` : '';
      });
    });
  }
  a.currentTime = 0;
  a.volume = master;
  a.play().catch(() => {});
}

document.addEventListener('click', (e) => {
  const pad = e.target.closest('[data-pad]');
  if (pad) togglePad(Number(pad.dataset.pad));
  const jump = e.target.closest('[data-scroll]');
  if (jump) $(jump.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' });
});
document.addEventListener('keydown', (e) => {
  if (e.target.closest('input, textarea') || e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.key >= '1' && e.key <= '8') togglePad(Number(e.key) - 1);
  if (e.key === 'Escape') { padAudio.forEach((_, i) => stopPad(i)); }
});
$('#stopAll').addEventListener('click', () => {
  padAudio.forEach((_, i) => stopPad(i));
  track.pause();
  track.currentTime = 0;
});
$('#master').addEventListener('input', (e) => {
  master = e.target.value / 100;
  $('#masterVal').textContent = `${e.target.value}%`;
  applyVolumes();
});

// ---------- Жүктеу: қолданушының жүйесін белгілеу; /download сілтемесі ----------
const ua = navigator.userAgent;
const os = /Mac/i.test(ua) && !/iPhone|iPad/i.test(ua) ? 'mac' : /Windows/i.test(ua) ? 'win' : null;
if (os) $(`.dl[data-os="${os}"]`)?.classList.add('recommended');
if (location.pathname.replace(/\/+$/, '') === '/download') {
  requestAnimationFrame(() => $('#download').scrollIntoView());
}

// ---------- Әсемдік: hero фонындағы эквалайзер толқыны (shaders кітапханасы, WebGPU) ----------
// Кітапхана ауыр (~700 KB gzip), сондықтан бет толық жүктелген соң ғана, тек WebGPU бар және
// "қозғалысты азайту" өшік болғанда жүктеледі. Болмаса фон жай қалады — бет бәрібір толық жұмыс істейді.
// Телеметрия (shaders.com-ға браузер мәліметтерін жіберу) өшірілген.
let heroFx = null;
if ('gpu' in navigator && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const startFx = async () => {
    try {
      const { createShader, isWebGPUSupported } = await import('shaders/js');
      if (!isWebGPUSupported()) return;
      const canvas = $('.hero-fx');
      heroFx = await createShader(
        canvas,
        {
          components: [{
            type: 'Waveform',
            id: 'wave',
            props: {
              style: 'bars',
              colorA: '#103540',
              colorB: '#00d4f5',
              // Эквалайзер hero-ның төменгі жиегінен жоғары өседі — мәтін мен батырмаларға тимейді.
              from: { x: 0, y: 1 },
              to: { x: 1, y: 1 },
              align: 'top',
              amplitude: track.paused ? 0.35 : 1,
              height: 0.3,
            },
          }],
        },
        { disableTelemetry: true, observeElement: true },
      );
      canvas.classList.add('on');
    } catch (err) {
      console.info('Hero shader өшірулі:', err?.message ?? err);
    }
  };
  if (document.readyState === 'complete') startFx();
  else addEventListener('load', startFx, { once: true });
}

// Құпиясөзді қалпына келтіру: бет салынғаннан кейін (футердегі батырма табылуы үшін) және бөлек жүктеледі.
import('./recovery.js');
