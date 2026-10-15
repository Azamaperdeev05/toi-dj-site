import './style.css';
import { createClient } from '@supabase/supabase-js';

// Supabase Cloud Configuration for Toi DJ Pro
const SUPABASE_URL = 'https://ckgfbaxnaaniakmnhjya.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrZ2ZiYXhuYWFuaWFrbW5oanlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE3MjkxNDcsImV4cCI6MjEwNzMwNTE0N30.oKY45T6J6gnVJRFrOruepN6_dCMmbceAeAASGkDYxzw';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 64 Hardware Sampler Pads (8x8 Grid matching Photo 2 & VirtualDJ new bank (7))
const PADS = [
  // Row 1 (01-08)
  { id: 1, key: '1', title: 'АААА ВЫХОД НОВ', color: '#ff2d55', file: '/audio/dakansa.mp3' },
  { id: 2, key: '2', title: 'О БОЖЕ КАКОЙ МУЖ', color: '#ffb300', file: '/audio/ache_chapalak.ogg' },
  { id: 3, key: '3', title: 'ОТБ БАНКЕТ', color: '#ff3b30', file: '/audio/drum.mp3' },
  { id: 4, key: '4', title: 'ТУШ ДОМБЫРА1', color: '#00e676', file: '/audio/dombyra_tush.mp3' },
  { id: 5, key: '5', title: 'КОК ЖОТЕЛ ОТБ', color: '#ffc107', file: '/audio/oibai.mp3' },
  { id: 6, key: '6', title: 'КАЗАГЫМ АЙ ТУШ', color: '#ff4081', file: '/audio/dombyra_tush.mp3' },
  { id: 7, key: '7', title: 'АДАЙ ДРАЙВ', color: '#00e5ff', file: '/audio/dombyra_tush.mp3' },
  { id: 8, key: '8', title: 'МАССАЖ1', color: '#94a3b8', file: '/audio/drum.mp3' },

  // Row 2 (09-16)
  { id: 9, key: 'Q', title: 'САУСАК КЫЙМЫЛ', color: '#00e5ff', file: '/audio/ache_chapalak.ogg' },
  { id: 10, key: 'W', title: 'КҮЙ ЕТКЕ САР', color: '#00e5ff', file: '/audio/dombyra_tush.mp3' },
  { id: 11, key: 'E', title: 'ЕТКЕ ФОН ДОМБ', color: '#ffb300', file: '/audio/dombyra_tush.mp3' },
  { id: 12, key: 'R', title: 'ОЗИНДИ АНСАП МИН', color: '#38bdf8', file: '/audio/toibastar.mp3' },
  { id: 13, key: 'T', title: 'КОТЕРЕЙК КАНЕ ДОС', color: '#00e5ff', file: '/audio/chapalak.mp3' },
  { id: 14, key: 'Y', title: 'ДАВАЙ НАЛИВАЙ', color: '#ffc107', file: '/audio/chapalak.mp3' },
  { id: 15, key: 'U', title: 'ЗА БЛИЗКИХ', color: '#00e5ff', file: '/audio/dakansa.mp3' },
  { id: 16, key: 'I', title: 'ЗА ЖЕНЩИН ВСЕХ', color: '#00e676', file: '/audio/toibastar.mp3' },

  // Row 3 (17-24)
  { id: 17, key: 'A', title: '+Шапалақ(бочка)', color: '#ff4081', file: '/audio/chapalak_bochka.mp3' },
  { id: 18, key: 'S', title: 'НЕОБЫКНОВЕННАЯ', color: '#00e5ff', file: '/audio/toibastar.mp3' },
  { id: 19, key: 'D', title: 'ЯМАХАУ..', color: '#2979ff', file: '/audio/ache_chapalak.ogg' },
  { id: 20, key: 'F', title: 'КЫЗЫЛ РАУШ РЕМ', color: '#00e5ff', file: '/audio/chapalak.mp3' },
  { id: 21, key: 'G', title: 'ЖЫЛТЫР КӨЙЛЕК', color: '#ffb300', file: '/audio/chapalak.mp3' },
  { id: 22, key: 'H', title: 'ЗЫН ЗЫН', color: '#ffc107', file: '/audio/dakansa.mp3' },
  { id: 23, key: 'J', title: 'MODERN TALKING-BRO', color: '#ff4081', file: '/audio/chapalak.mp3' },
  { id: 24, key: 'K', title: 'ТАТТИ АРУ', color: '#00e5ff', file: '/audio/toibastar.mp3' },

  // Row 4 (25-32)
  { id: 25, key: 'Z', title: 'НАҒАШЫЛАР', color: '#00e5ff', file: '/audio/chapalak.mp3' },
  { id: 26, key: 'X', title: 'ДОСТАР', color: '#00e5ff', file: '/audio/toibastar.mp3' },
  { id: 27, key: 'C', title: '1 ДОСЫМ БАР', color: '#ff9800', file: '/audio/toibastar.mp3' },
  { id: 28, key: 'V', title: 'КУДА КИРГИЗУ', color: '#00e5ff', file: '/audio/dombyra_tush.mp3' },
  { id: 29, key: 'B', title: '5000 КЛУБ', color: '#00e5ff', file: '/audio/chapalak.mp3' },
  { id: 30, key: 'N', title: 'ТОЙ БАСТАЛДЫ ТАҒЫ', color: '#ff9800', file: '/audio/toibastar.mp3' },
  { id: 31, key: 'M', title: 'ТУСАУ КЕСУ', color: '#00e5ff', file: '/audio/dombyra_tush.mp3' },
  { id: 32, key: ',', title: 'ТАЙТАЙ', color: '#00e5ff', file: '/audio/dombyra_tush.mp3' },

  // Row 5 (33-40)
  { id: 33, title: 'MODERN TALKING', color: '#ffc107', file: '/audio/chapalak.mp3' },
  { id: 34, title: 'ВЫХОД НЕВЕСТЫ', color: '#ff4081', file: '/audio/toibastar.mp3' },
  { id: 35, title: 'ВЫХОД ЖЕНИХА', color: '#ff9800', file: '/audio/toibastar.mp3' },
  { id: 36, title: 'ҒАШЫҚ ОТЫ', color: '#00e5ff', file: '/audio/toibastar.mp3' },
  { id: 37, title: 'ЖАР-ЖАР', color: '#ffb300', file: '/audio/dombyra_tush.mp3' },
  { id: 38, title: 'КҮЙРЫК БАУЫР', color: '#00e5ff', file: '/audio/dombyra_tush.mp3' },
  { id: 39, title: 'КАЛАМБУР', color: '#00e5ff', file: '/audio/ache_chapalak.ogg' },
  { id: 40, title: 'ОБЛОМ', color: '#ffc107', file: '/audio/oblom.mp3' },

  // Row 6 (41-48)
  { id: 41, title: 'ДЖЕККИИ', color: '#ff4081', file: '/audio/jackie.mp3' },
  { id: 42, title: 'ОЙЛАНУҒА УАҚЫТ', color: '#00e5ff', file: '/audio/oibai.mp3' },
  { id: 43, title: 'ЖАМАН ОЙЛАР ТУШ', color: '#00e5ff', file: '/audio/drum.mp3' },
  { id: 44, title: 'ДАКАНСАААА', color: '#00e5ff', file: '/audio/dakansa.mp3' },
  { id: 45, title: 'ЖДИ МЕНЯ', color: '#00e5ff', file: '/audio/toibastar.mp3' },
  { id: 46, title: 'НЕ СТИМ.', color: '#ffc107', file: '/audio/ache_chapalak.ogg' },
  { id: 47, title: 'МИСТЕР ПРОПЕР', color: '#00e5ff', file: '/audio/mister_proper.mp3' },
  { id: 48, title: 'Кин дза дза', color: '#00e5ff', file: '/audio/ache_chapalak.ogg' },

  // Row 7 (49-56)
  { id: 49, title: 'Ойхои күлкі.', color: '#00e5ff', file: '/audio/oikhoi.mp3' },
  { id: 50, title: 'МЕН СЕНИ ЖАҚСЫ КӨРЕМ', color: '#ff9800', file: '/audio/toibastar.mp3' },
  { id: 51, title: 'ТОРТ', color: '#00e5ff', file: '/audio/drum.mp3' },
  { id: 52, title: 'МЕЙЛИ', color: '#ffc107', file: '/audio/toibastar.mp3' },
  { id: 53, title: 'ПАРАМИ', color: '#ff4081', file: '/audio/toibastar.mp3' },
  { id: 54, title: 'С ДНЕМ РОЖД', color: '#00e5ff', file: '/audio/toibastar.mp3' },
  { id: 55, title: 'КЛАССТАСТАР ҚАЙДА', color: '#00e5ff', file: '/audio/toibastar.mp3' },
  { id: 56, title: 'ПОЗВОНИ МНЕ', color: '#00e5ff', file: '/audio/ache_chapalak.ogg' },

  // Row 8 (57-64: Empty Pad Slots matching Photo 2)
  { id: 57, isEmpty: true },
  { id: 58, isEmpty: true },
  { id: 59, isEmpty: true },
  { id: 60, isEmpty: true },
  { id: 61, isEmpty: true },
  { id: 62, isEmpty: true },
  { id: 63, isEmpty: true },
  { id: 64, isEmpty: true },
];

// AIMP Classic Playlist Tracks (Photo 2 Exact Match)
const AIMP_TRACKS = [
  { id: 1, title: '001 MIX', sub: '001 MIX', duration: '20:41', durSeconds: 1241, file: '/audio/toibastar.mp3', isCurrent: true },
  { id: 2, title: '01 MashUP', sub: '01 MashUP', duration: '11:21', durSeconds: 681, file: '/audio/chapalak.mp3', isNext: true },
  { id: 3, title: '01 Partybreak blend', sub: '01 Partybreak blend', duration: '12:53', durSeconds: 773, file: '/audio/dombyra_tush.mp3' },
  { id: 4, title: '01 REC-2025-01-03', sub: '01 REC-2025-01-03', duration: '37:41', durSeconds: 2261, file: '/audio/dakansa.mp3' },
  { id: 5, title: '1 АҚЫЛ ПОП', sub: '1 АҚЫЛ ПОП', duration: '16:55', durSeconds: 1015, file: '/audio/ache_chapalak.ogg' },
  { id: 6, title: '140 ТЕМП ПОПУРРИ_112857', sub: '140 ТЕМП ПОПУРРИ_112857', duration: '12:53', durSeconds: 773, file: '/audio/drum.mp3' },
  { id: 7, title: '2. АЙ ЛАК ТУ МУВЕТТ', sub: '2. АЙ ЛАК ТУ МУВЕТТ', duration: '02:35', durSeconds: 155, file: '/audio/oibai.mp3' },
  { id: 8, title: '2_5260655203190864273', sub: '2_5260655203190864273', duration: '00:04', durSeconds: 4, file: '/audio/horse.mp3' },
  { id: 9, title: '638926', sub: '638926', duration: '04:47', durSeconds: 287, file: '/audio/toibastar.mp3' },
];

// Audio State Engine
const audioCache = {};
let audioCtx = null;
let masterGainNode = null;
let visualizerGain = 0;
let masterVolume = 0.85; // 85% as shown in Photo 2
let currentAimpAudio = null;
let currentTrackIndex = 0;
let isAimpPlaying = false;
let isDeleteMode = false;
let showRemainingTime = false;
let trackElapsedSeconds = 0; // Starts at 00:00 as shown in Photo 2

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
    masterGainNode = audioCtx.createGain();
    masterGainNode.gain.setValueAtTime(masterVolume, audioCtx.currentTime);
    masterGainNode.connect(audioCtx.destination);
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Active Pad Playbacks Map (padId -> { audio, padEl, intervalId })
const activePadPlaybacks = new Map();

function isPadPlaying(padId) {
  return activePadPlaybacks.has(padId);
}

function stopPadPlayback(padId) {
  const playback = activePadPlaybacks.get(padId);
  if (!playback) return;

  if (playback.audio) {
    try {
      playback.audio.pause();
      playback.audio.currentTime = 0;
    } catch (_) {}
  }
  if (playback.intervalId) {
    clearInterval(playback.intervalId);
  }

  const padEl = playback.padEl || document.querySelector(`.sampler-pad-hardware[data-pad-id="${padId}"]`);
  if (padEl) {
    padEl.classList.remove('is-playing', 'active');
    const cd = padEl.querySelector('.pad-hw-countdown');
    if (cd) cd.remove();
  }

  activePadPlaybacks.delete(padId);

  if (activePadPlaybacks.size === 0 && !isAimpPlaying) {
    visualizerGain = 0;
  }
}

function startPadPlayback(pad, padEl) {
  try {
    getAudioContext();

    const audio = new Audio(pad.file);
    audio.volume = masterVolume;

    // Visual State: BLUE/CYAN (Photo 2 & PadButton parity)
    if (padEl) {
      padEl.classList.add('is-playing', 'active');
    }

    // Remaining Countdown Badge
    let countdownBadge = null;
    if (padEl) {
      const oldCd = padEl.querySelector('.pad-hw-countdown');
      if (oldCd) oldCd.remove();

      countdownBadge = document.createElement('span');
      countdownBadge.className = 'pad-hw-countdown';
      countdownBadge.textContent = '...';

      const headerRight = padEl.querySelector('.pad-hw-header-right') || padEl.querySelector('.pad-hw-header');
      const dot = padEl.querySelector('.pad-hw-dot');
      if (headerRight && dot) {
        headerRight.insertBefore(countdownBadge, dot);
      }
    }

    const updateRemaining = () => {
      if (countdownBadge && audio.duration && !isNaN(audio.duration) && audio.duration > 0) {
        const remaining = Math.max(0, audio.duration - audio.currentTime);
        if (remaining < 60) {
          countdownBadge.textContent = `-${remaining.toFixed(1)}s`;
        } else {
          const m = Math.floor(remaining / 60);
          const s = Math.floor(remaining % 60);
          countdownBadge.textContent = `-${m}:${s.toString().padStart(2, '0')}`;
        }
      }
    };

    audio.addEventListener('loadedmetadata', updateRemaining);
    audio.addEventListener('timeupdate', updateRemaining);

    // Auto-stop when audio finishes naturally
    audio.addEventListener('ended', () => {
      stopPadPlayback(pad.id);
    });

    audio.addEventListener('error', () => {
      playSynthFallback(pad, padEl);
    });

    activePadPlaybacks.set(pad.id, {
      audio,
      padEl,
      intervalId: null
    });

    visualizerGain = 1.0;

    audio.play().catch(() => {
      playSynthFallback(pad, padEl);
    });
  } catch (_) {
    playSynthFallback(pad, padEl);
  }
}

function playSynthFallback(pad, padEl) {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220 + (pad.id % 12) * 35, ctx.currentTime);
    gain.gain.setValueAtTime(masterVolume * 0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.5);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();

    if (padEl) {
      padEl.classList.add('is-playing', 'active');
    }

    const timer = setTimeout(() => {
      stopPadPlayback(pad.id);
    }, 2500);

    activePadPlaybacks.set(pad.id, {
      audio: {
        pause: () => {
          try { osc.stop(); } catch (_) {}
        },
        currentTime: 0,
      },
      padEl,
      intervalId: timer
    });
  } catch (_) {
    stopPadPlayback(pad.id);
  }
}

// Toggle pad sound: if playing, stop it; if stopped, play it!
function togglePadSound(pad, padEl) {
  if (!pad || pad.isEmpty) return;

  if (isPadPlaying(pad.id)) {
    stopPadPlayback(pad.id);
    return;
  }

  startPadPlayback(pad, padEl);
}

function stopAllAudio() {
  // Stop all active pad playbacks
  Array.from(activePadPlaybacks.keys()).forEach((padId) => {
    stopPadPlayback(padId);
  });

  // Stop AIMP current audio
  if (currentAimpAudio) {
    try {
      currentAimpAudio.pause();
      currentAimpAudio.currentTime = 0;
    } catch (_) {}
  }
  isAimpPlaying = false;
  visualizerGain = 0;

  // Reset UI
  updateAimpPlayButtonUI();
  updateTrackListActiveRow();
}

function formatDuration(sec) {
  const m = Math.floor(sec / 60).toString().padLeft ? Math.floor(sec / 60).toString().padStart(2, '0') : ('0' + Math.floor(sec / 60)).slice(-2);
  const s = Math.floor(sec % 60).toString().padLeft ? Math.floor(sec % 60).toString().padStart(2, '0') : ('0' + Math.floor(sec % 60)).slice(-2);
  return `${m}:${s}`;
}

// App Template Rendering
const app = document.getElementById('app');

app.innerHTML = `
  <!-- HOME LANDING VIEW -->
  <div id="view-home">
    <!-- Navigation -->
    <header class="navbar">
      <div class="nav-container">
        <a href="/" class="nav-logo">
          <img src="/logo.png" alt="Toi DJ Logo">
          <span class="nav-logo-text">TOI DJ <span>PLAYER</span></span>
        </a>
        <nav class="nav-links">
          <a href="#features" class="nav-link">Мүмкіндіктер</a>
          <a href="#soundboard" class="nav-link">Ойнатқыш</a>
          <a href="#remote" class="nav-link">Wi-Fi Пульт</a>
          <a href="#pricing" class="nav-link">Тарифтер</a>
          <a href="#specs" class="nav-link">Талаптар</a>
        </nav>
        <div class="nav-actions">
          <!-- Theme Toggle Button (Light / Dark) -->
          <button id="themeToggleBtn" class="theme-toggle-btn" type="button" title="Ақ / Қара тақырыпты ауыстыру" aria-label="Тақырыпты ауыстыру">
            <svg class="sun-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            <svg class="moon-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>

          <button id="openResetPasswordBtn" class="nav-reset-btn open-reset-modal-trigger" type="button" title="Құпиясөзді қалпына келтіру">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span>Құпиясөз</span>
          </button>
          <a href="/download" class="btn btn-primary" id="navDownloadBtn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Жүктеп алу</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Auth Confirmation Notice Container -->
    <div id="authNoticeSlot"></div>

    <!-- Hero Section -->
    <section class="section hero">
      <div class="container">
        <div class="hero-pill">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Қазақстанның Той DJ мен Асабаларына арналған №1 Бағдарлама
        </div>

        <h1 class="hero-title">
          TOI DJ PLAYER — Заманауи Той мен <span class="gradient-text">Шоу Бағдарламалардың</span> Басты Құралы
        </h1>

        <p class="hero-subtitle">
          VirtualDJ мен AIMP жылдамдығын біріктірген толыққанды жұмыс үстелі ойнатқышы. Төмендегі интерактивті ойнатқышты дәл бағдарламадағыдай сынап көріңіз: пэдтерді басыңыз, әндерді тыңдаңыз және Wi-Fi пультін қосыңыз.
        </p>

        <div class="hero-cta">
          <a href="/download" class="btn btn-primary btn-lg" id="heroDownloadBtn">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Бағдарламаны Жүктеп Алу</span>
          </a>
          <a href="#soundboard" class="btn btn-outline btn-lg">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
            Ойнатқышты браузерде сынау
          </a>
        </div>

      <!-- ========================================================================= -->
      <!-- TOI DJ PRO IDENTICAL DESKTOP HARDWARE WORKSTATION (Photo 2 Exact Match)    -->
      <!-- ========================================================================= -->
      <div class="player-mockup" id="soundboard">
        <!-- Mac Titlebar (Photo 2) -->
        <div class="window-titlebar">
          <div class="window-dots">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <div class="window-title">
            <span>Toi Dj</span>
          </div>
          <div class="window-top-action-pill">
            <span class="wa-status-dot"></span>
            <span>Жарайды</span>
          </div>
        </div>

        <!-- Master Top Toolbar (1:1 replica of desktop_view.dart & Photo 2) -->
        <div class="toi-master-bar">
          <!-- Logo & Pro Brand -->
          <div class="toi-logo-box">
            <img src="/logo.png" alt="Toi DJ" />
            <span class="toi-brand-text">TOI DJ</span>
          </div>

          <!-- Trial Status Chip (Photo 2: TRIAL (30 күн қалды)) -->
          <div class="hardware-chip trial-badge-chip" id="openLicenseBtn" title="Лицензия мәртебесін көру">
            <span>TRIAL (30 күн қалды)</span>
          </div>

          <!-- User Account Chip (Photo 2) -->
          <div class="hardware-chip user-chip" id="openUserBtn" title="Жеке профиль">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span>azamatperdeev</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </div>

          <!-- Base Folder Button (Photo 2) -->
          <div class="hardware-chip" id="openFolderBtn" title="Музыка папкасы">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            <span>Папка</span>
          </div>

          <!-- Phone Remote QR Button (Photo 2) -->
          <div class="hardware-chip phone-chip" id="openQrBtn" title="Телефоннан басқару пульті">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            <span>Телефонмен қосылу</span>
            <span class="phone-ip-tag">192.168.1.75:8080</span>
          </div>

          <!-- Master Volume Slider Group (Photo 2: 85%) -->
          <div class="master-fader-group">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            <span class="master-fader-label">MASTER</span>
            <input type="range" id="masterVolumeSlider" min="0" max="100" value="85" class="master-slider-track" />
            <span class="master-level-text" id="masterVolVal">85%</span>
          </div>

          <!-- Emergency STOP ALL Button (Photo 2) -->
          <button class="btn-stop-all" id="stopAllBtn" title="Барлық дыбыстарды лезде өшіру (ESC)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>
            <span>STOP ALL (ТОҚТАТУ)</span>
          </button>

          <!-- Settings Button (Photo 2) -->
          <button class="btn-settings" id="openSettingsBtn" title="Баптаулар">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            <span>Баптаулар</span>
          </button>
        </div>

        <!-- Main Two-Rack Workstation (Left: AIMP Engine, Right: 64-Pad Sampler) -->
        <div class="toi-workstation">
          <!-- ============================================== -->
          <!-- LEFT RACK: AIMP PLAYLIST ENGINE (Photo 2)       -->
          <!-- ============================================== -->
          <div class="aimp-panel">
            <!-- Header -->
            <div class="aimp-header">
              <div class="aimp-header-left">
                <span class="aimp-orange-badge">AIMP</span>
                <span class="aimp-title-text">PLAYLIST ENGINE</span>
              </div>
              <button class="aimp-top-btn" id="aimpOpenFolderBtn">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                <span>Папка ашу</span>
              </button>
            </div>

            <!-- Folder Tabs (Photo 2) -->
            <div class="aimp-tabs-bar" id="aimpTabsBar">
              <div class="aimp-tab" data-folder="00 ТЕКСЕРУ КЕРЕК">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                <span>00 ТЕКСЕРУ КЕРЕК</span>
              </div>
              <div class="aimp-tab active" data-folder="01 КЕЛГЕН ҚОНАҚТА">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                <span>01 КЕЛГЕН ҚОНАҚТА...</span>
              </div>
              <div class="aimp-tab add-tab" id="aimpAddTabBtn">+ Папка ашу</div>
            </div>

            <!-- Active Player Box (Photo 2) -->
            <div class="aimp-player-card">
              <div class="aimp-card-top-row">
                <div class="aimp-card-track-name" id="aimpCurrentTitle">001 MIX — Той әні</div>
                <div class="aimp-format-badges">
                  <span class="badge-fmt-mp3">MP3</span>
                  <span class="badge-fmt-bitrate">320K</span>
                  <span class="badge-fmt-hz">44.1K</span>
                </div>
              </div>

              <!-- Elapsed Indicator -->
              <div class="aimp-elapsed-sub">
                <span class="elapsed-dot"></span>
                <span>ӨТКЕН (ELAPSED)</span>
              </div>

              <!-- Digital Clock (00:00 in cyan LED) -->
              <div class="aimp-digital-clock" id="aimpTimeDisplay">00:00</div>

              <!-- Spectrum Visualizer -->
              <div class="aimp-spectrum-container">
                <canvas id="aimpSpectrumCanvas"></canvas>
              </div>

              <!-- Seek Slider Row (00:00 - 00:00) -->
              <div class="aimp-seekbar-row">
                <span id="aimpElapsed">00:00</span>
                <input type="range" min="0" max="100" value="0" class="aimp-slider" id="aimpSeekSlider" />
                <span id="aimpTotal">00:00</span>
              </div>

              <!-- Transport Control Cluster (Photo 2 exact buttons) -->
              <div class="aimp-transport">
                <button class="aimp-ctrl-btn" id="aimpPrevBtn" title="Алдыңғы ән">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5" stroke="currentColor" stroke-width="2.5"/></svg>
                </button>
                <button class="aimp-ctrl-btn play-btn" id="aimpPlayBtn" title="Ойнату / Кідірту (Spacebar)">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" id="aimpPlayIcon"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </button>
                <button class="aimp-ctrl-btn" id="aimpStopBtn" title="Тоқтату">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16"/></svg>
                </button>
                <button class="aimp-ctrl-btn" id="aimpNextBtn" title="Келесі ән">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" stroke-width="2.5"/></svg>
                </button>
                <button class="aimp-ctrl-btn" id="aimpShuffleBtn" title="Кездейсоқ рет">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
                </button>
                <button class="aimp-ctrl-btn repeat-badge-btn" id="aimpRepeatBtn" title="Қайталау режимі">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
                </button>
                <button class="aimp-ctrl-btn automix-lightning-btn" id="aimpAutomixBtn" title="Автомикс">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </button>
              </div>
            </div>

            <!-- Next Track Strip (Photo 2: КЕЛЕСІ 01 MashUP 115 ән) -->
            <div class="aimp-next-strip">
              <span class="next-pill">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" stroke-width="2.5"/></svg>
                КЕЛЕСІ
              </span>
              <span class="next-title-text" id="aimpNextTitle">01 MashUP</span>
              <span class="next-count-text">115 ән</span>
            </div>

            <!-- Queue Search Filter (Photo 2) -->
            <div class="aimp-filter-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff9800" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" class="aimp-search-input" id="aimpSearchInput" placeholder="Плейлисттен іздеу (115 ән)..." />
            </div>

            <!-- Zebra Tracklist (Photo 2: 9 tracks) -->
            <div class="aimp-tracklist" id="aimpTrackList"></div>

            <!-- AIMP Footer Bar (Photo 2) -->
            <div class="aimp-footer">
              <div class="aimp-footer-actions">
                <button class="btn-aimp-mini green-plus">+</button>
                <button class="btn-aimp-mini orange-filter">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                </button>
              </div>
              <span class="aimp-footer-summary">115 ән | 11 сағ 57 мин</span>
            </div>
          </div>

          <!-- ============================================== -->
          <!-- RIGHT RACK: 64-PAD HARDWARE SAMPLER (Photo 2)   -->
          <!-- ============================================== -->
          <div class="sampler-deck-panel">
            <!-- Sampler Header & Actions (Photo 2) -->
            <div class="sampler-topbar">
              <!-- Bank Selector Dropdown -->
              <div class="sampler-preset-chip" id="currentPresetChip" title="Сэмплер банкін ауыстыру">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                <span id="presetChipLabel">new bank (7)</span>
                <span style="font-size: 10px; opacity: 0.85;">(63)</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </div>

              <div class="sampler-actions-right">
                <!-- Add File Button -->
                <button class="sampler-btn-action add" id="samplerAddBtn" title="Жаңа аудио файл қосу">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  <span>+ + ФАЙЛ ҚОСУ</span>
                </button>
                <!-- Delete Mode Toggle -->
                <button class="sampler-btn-action delete-mode" id="samplerDeleteToggle" title="Өшіру режимін қосу/сөндіру">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                  <span id="deleteBtnLabel">ӨШІРУ РЕЖИМІ</span>
                </button>
                <!-- Reset Preset -->
                <button class="sampler-btn-action reset-btn" id="samplerResetBtn" title="Бастапқы күйге қайтару">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><polyline points="3 3 3 8 8 8"/></svg>
                  <span>БАСТАПҚЫ КҮЙ</span>
                </button>
                <!-- Clean All -->
                <button class="sampler-btn-action clean-btn" id="samplerCleanBtn" title="Тазарту">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  <span>ТАЗАРТУ</span>
                </button>
              </div>
            </div>

            <!-- 64-Pad Matrix (8 columns x 8 rows, exact replica of Photo 2) -->
            <div class="sampler-pads-matrix-8x8" id="samplerHardwareGrid"></div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- Key Capabilities (6 Modules) -->
  <section class="section" id="features">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Негізгі Мүмкіндіктер</span>
        <h2 class="section-title">Кәсіби DJ Және Асабаға Арналған Толық Құралдар</h2>
        <p class="section-desc">
          Той, мерейтой, қыз ұзату және корпоративтерді жоғары деңгейде өткізуге арналған технологиялық шешімдер.
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon-box">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
          </div>
          <h3 class="feature-title">357 Қазақша Той Семплі</h3>
          <p class="feature-desc">
            14 тақырыптық банк: Тойбастар, Шапалақ, Домбыра тұштары, Күлкілі приколдар, Қыз ұзату лирикасы және марапаттау фанфаралары бірден дайын.
          </p>
        </div>

        <div class="feature-card gold-theme">
          <div class="feature-icon-box">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="8" x2="6" y2="8"/><line x1="10" y1="8" x2="10" y2="8"/><line x1="14" y1="8" x2="14" y2="8"/><line x1="18" y1="8" x2="18" y2="8"/></svg>
          </div>
          <h3 class="feature-title">0.01 сек Жедел Пернелер (Hotkeys)</h3>
          <p class="feature-desc">
            Жедел пернелер арқылы кідіріссіз басқару. Асаба сөйлеп жатқан сәтте қажетті дыбысты микросекундта қосу мүмкіндігі.
          </p>
        </div>

        <div class="feature-card purple-theme">
          <div class="feature-icon-box">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </div>
          <h3 class="feature-title">64-Пэдтік Кәсіби Сэмплер</h3>
          <p class="feature-desc">
            8x8 матрицалы аппараттық 64 сэмплер пэді, VirtualDJ банктерін қолдау және қазақша той сэмплдеріне жедел қол жеткізу.
          </p>
        </div>


        <div class="feature-card">
          <div class="feature-icon-box">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
          </div>
          <h3 class="feature-title">Wi-Fi Мобильді Пульт</h3>
          <p class="feature-desc">
            Ноутбукке сымсыз қосылыңыз. Телефон камерасымен экрандағы QR кодты сканерлеп, залдың кез келген жерінен дыбыстарды басқарыңыз.
          </p>
        </div>

        <div class="feature-card gold-theme">
          <div class="feature-icon-box">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <h3 class="feature-title">Hardware Node-Lock Қауіпсіздік</h3>
          <p class="feature-desc">
            Әрбір лицензия нақты компьютердің аппараттық кодын бекітеді. 30 күндік тегін сынақ мерзімі әрбір DJ-ге тіркелу кезінде бірден беріледі.
          </p>
        </div>

        <div class="feature-card purple-theme">
          <div class="feature-icon-box">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1l22 22"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.58 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/></svg>
          </div>
          <h3 class="feature-title">7 Күндік Офлайн Grace Period</h3>
          <p class="feature-desc">
            Тойханада немесе мейрамханада интернет байланысы болмаған күннің өзінде бағдарлама 7 күн бойы тоқтаусыз толық жұмыс істейді.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Mobile Remote Showcase -->
  <section class="section section-alt" id="remote">
    <div class="container">
      <div class="remote-showcase">
        <div class="remote-text-col">
          <span class="remote-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
            Сымсыз Ыңғайлылық
          </span>
          <h2 class="section-title">Телефоннан Басқару Пульті</h2>
          <p class="section-desc">
            Ноутбуктің қасында байланып отырудың қажеті жоқ. Залдың ортасында асабамен бірге жүріп, керекті сәтте телефоннан бір түймемен тұш немесе шапалақ беріңіз.
          </p>

          <ul class="remote-features-list">
            <li class="remote-feature-item">
              <div class="remote-feature-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span class="remote-feature-text">Қосымша орнатудың қажеті жоқ — Safari мен Chrome браузерлерінде лезде ашылады</span>
            </li>
            <li class="remote-feature-item">
              <div class="remote-feature-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span class="remote-feature-text">QR код арқылы 2 секундта жедел қосылу</span>
            </li>
            <li class="remote-feature-item">
              <div class="remote-feature-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span class="remote-feature-text">Плейлистті ауыстыру, дыбыс көлемі және барлық 357 семпл жинақтары</span>
            </li>
          </ul>

          <div class="remote-qr-row">
            <div class="qr-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.8">
                <rect x="2" y="2" width="8" height="8" rx="1"/>
                <rect x="14" y="2" width="8" height="8" rx="1"/>
                <rect x="2" y="14" width="8" height="8" rx="1"/>
                <rect x="5" y="5" width="2" height="2" fill="#000"/>
                <rect x="17" y="5" width="2" height="2" fill="#000"/>
                <rect x="5" y="17" width="2" height="2" fill="#000"/>
                <path d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h4v4h-4z"/>
              </svg>
            </div>
            <div class="remote-qr-meta">
              <span class="remote-wifi-badge">Жергілікті Wi-Fi</span>
              <div class="remote-wifi-title">Бір секундта телефоннан қосылу</div>
              <div class="remote-wifi-desc">Ноутбук экранындағы QR кодты телефон камерасымен сканерлеп, бірден басқарыңыз.</div>
            </div>
          </div>
        </div>

        <!-- Phone Mockup -->
        <div class="remote-phone-mockup">
          <div class="phone-screen">
            <div class="phone-dynamic-island"></div>
            <div class="phone-header">
              <span class="phone-title">TOI DJ REMOTE</span>
              <span class="phone-status"><span class="phone-status-dot"></span>ҚОСЫЛДЫ</span>
            </div>
            <div class="phone-now-playing">
              <div class="phone-track-label">ҚАЗІР ОЙНАЛУДА</div>
              <div class="phone-track-name">Дүрсіл-Дүрсіл (Той хит)</div>
              <div class="phone-progress-bar">
                <div class="phone-progress-fill"></div>
              </div>
            </div>
            <div class="phone-pads-grid">
              <div class="phone-pad pad-cyan">
                <span class="phone-pad-dot"></span>
                <span class="phone-pad-text">ШАПАЛАҚ</span>
              </div>
              <div class="phone-pad pad-gold">
                <span class="phone-pad-dot"></span>
                <span class="phone-pad-text">ТОЙБАСТАР</span>
              </div>
              <div class="phone-pad pad-emerald">
                <span class="phone-pad-dot"></span>
                <span class="phone-pad-text">ДОМБЫРА</span>
              </div>
              <div class="phone-pad pad-purple">
                <span class="phone-pad-dot"></span>
                <span class="phone-pad-text">ДАКАНСА</span>
              </div>
            </div>
            <div class="phone-footer-bar">
              <span>Дыбыс деңгейі: 100%</span>
              <span>Wi-Fi 5GHz</span>
            </div>
            <div class="phone-home-indicator"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="section" id="pricing">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Лицензия Және Бағалар</span>
        <h2 class="section-title">Ашық Және Қолжетімді Тарифтер</h2>
        <p class="section-desc">
          Тіркеліп, 30 күн бойы ешқандай төлемсіз толық мүмкіндіктермен тегін сынап көріңіз.
        </p>
      </div>

      <div class="pricing-grid">
        <!-- Trial Card -->
        <div class="pricing-card">
          <h3 class="pricing-plan">30 Күндік Сынақ (Trial)</h3>
          <div class="pricing-price">0 ₸ <span>/ алғашқы 30 күн</span></div>
          <ul class="pricing-features">
            <li class="pricing-feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              357 қазақша той семплдерінің толық топтамасы
            </li>
            <li class="pricing-feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Жедел пернелер (Hotkeys) мен скретч
            </li>
            <li class="pricing-feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Wi-Fi мобильді пульт (телефоннан қосылу)
            </li>
            <li class="pricing-feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              7 күндік офлайн режим кепілдігі
            </li>
          </ul>
          <a href="/download" class="btn btn-outline btn-lg">Тегін Сынауды Бастау</a>
        </div>

        <!-- PRO Card -->
        <div class="pricing-card featured">
          <div class="pricing-badge">ЕҢ ТИІМДІ</div>
          <h3 class="pricing-plan">PRO Өмірлік Лицензия</h3>
          <div class="pricing-price">25 000 ₸ <span>/ бір реттік төлем</span></div>
          <ul class="pricing-features">
            <li class="pricing-feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Барлық мүмкіндіктер шектеусіз мерзімге
            </li>
            <li class="pricing-feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Болашақта шығатын барлық жаңартулар тегін
            </li>
            <li class="pricing-feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Жаңа музыкалық банктерді жүктеу құқығы
            </li>
            <li class="pricing-feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Басқа ноутбукке көшу (құрылғыны босату) мүмкіндігі
            </li>
            <li class="pricing-feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Жеке техникалық қолдау (WhatsApp / Telegram)
            </li>
          </ul>
          <a href="https://wa.me/77000000000?text=Toi%20DJ%20PRO%20лицензиясын%20алғым%20келеді" target="_blank" class="btn btn-gold btn-lg">Лицензия Сатып Алу</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Technical Requirements -->
  <section class="section section-alt" id="specs">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Жүйелік Талаптар</span>
        <h2 class="section-title">Қолдайтын Құрылғылар</h2>
        <p class="section-desc">
          TOI DJ PLAYER заманауи компьютерлер мен операциялық жүйелерде жоғары жылдамдықта жұмыс істейді.
        </p>
      </div>

      <div class="specs-grid">
        <div class="spec-card">
          <div class="spec-card-header">
            <div class="spec-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.71-.93 2.73 1 .08 2.02-.48 2.64-1.23z"/></svg>
            </div>
            <div>
              <h4 class="spec-title">macOS (Apple Silicon & Intel)</h4>
              <span class="spec-badge">Apple M1-M4 & Intel Core</span>
            </div>
          </div>
          <p class="spec-desc">
            Apple Silicon M1, M2, M3, M4 және Intel Core процессорлары. macOS 12 Monterey, macOS 13 Ventura, macOS 14 Sonoma, macOS 15 Sequoia нұсқаларында кідіріссіз жұмыс істейді.
          </p>
          <div class="spec-meta">
            <span>64-бит нативті</span>
            <span>RAM: 2GB+</span>
            <span>Файл: .dmg</span>
          </div>
        </div>

        <div class="spec-card">
          <div class="spec-card-header">
            <div class="spec-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
            </div>
            <div>
              <h4 class="spec-title">Windows</h4>
              <span class="spec-badge">Windows 10 / 11 (64-бит)</span>
            </div>
          </div>
          <p class="spec-desc">
            Windows 10 және Windows 11 (64-бит). Кез келген заманауи ноутбукте жоғары жылдамдықта іске қосылады және барлық дыбыс карталарымен бірден үйлеседі.
          </p>
          <div class="spec-meta">
            <span>x64 сәулеті</span>
            <span>RAM: 2GB+</span>
            <span>Файл: .exe</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <div class="nav-logo">
        <img src="/logo.png" alt="Toi DJ Logo">
        <span class="nav-logo-text">TOI DJ <span>PLAYER</span></span>
      </div>
      <div style="font-size: 14px; color: var(--text-muted);">
        Қазақстанның Той DJ және Асабаларына арналған ресми бағдарламасы.
      </div>
      <div style="display: flex; gap: 14px; align-items: center; flex-wrap: wrap;">
        <button id="footerResetPasswordBtn" class="nav-reset-btn" type="button" style="font-size: 12px; padding: 6px 12px;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Құпиясөзді қалпына келтіру
        </button>
        <a href="/download" class="btn btn-outline" style="font-size: 12px; padding: 6px 14px;">Бағдарламаны Жүктеу</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy; 2026 TOI DJ PLAYER. Барлық құқықтар қорғалған.</div>
      <div>Қазақстанда жасалған</div>
    </div>
  </footer>
</div> <!-- end #view-home -->

<!-- ========================================================================= -->
<!-- DEDICATED MULTI-PLATFORM DOWNLOAD VIEW (/download)                        -->
<!-- ========================================================================= -->
<div id="view-download" style="display: none;">
  <header class="navbar">
    <div class="nav-container">
      <a href="/" class="nav-logo">
        <img src="/logo.png" alt="Toi DJ Logo">
        <span class="nav-logo-text">TOI DJ <span>PLAYER</span></span>
      </a>
      <div class="nav-actions">
        <a href="/" class="btn btn-outline nav-back-to-home">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span>Басты бетке оралу</span>
        </a>
        <button class="theme-toggle-btn" type="button" title="Ақ / Қара тақырыпты ауыстыру" aria-label="Тақырыпты ауыстыру">
          <svg class="sun-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <svg class="moon-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        <button class="nav-reset-btn open-reset-modal-trigger" type="button" title="Құпиясөзді қалпына келтіру">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span>Құпиясөз</span>
        </button>
      </div>
    </div>
  </header>

  <main class="download-page-content">
    <div class="container">
      <div class="download-hero-header">
        <span class="section-tag">Жүктеп Алу Орталығы</span>
        <h1 class="download-hero-title">Операциялық Жүйеңізді Таңдаңыз</h1>
        <p class="download-hero-desc">
          Құрылғыңызды таңдап, TOI DJ PLAYER бағдарламасының 30 күндік сынақ нұсқасын тегін жүктеңіз
        </p>
      </div>

      <!-- Platforms Grid (NO BANNERS) -->
      <div class="os-cards-grid">
        <!-- macOS Card -->
        <div class="os-card os-card-recommended" id="card-macOS" data-os="macOS">
          <div class="os-card-badge" id="badge-macOS">Сіздің жүйеңізге ұсынылады</div>
          <div class="os-card-header">
            <div class="os-platform-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.71-.93 2.73 1 .08 2.02-.48 2.64-1.23z"/></svg>
            </div>
            <div>
              <h3 class="os-card-title">macOS</h3>
              <p class="os-card-subtitle">Apple Silicon & Intel</p>
            </div>
          </div>
          <div class="os-card-specs">
            <div class="os-spec-row">
              <span class="os-spec-label">Қолдау:</span>
              <span class="os-spec-val">macOS 12+ (Monterey, Ventura, Sonoma, Sequoia)</span>
            </div>
            <div class="os-spec-row">
              <span class="os-spec-label">Формат:</span>
              <span class="os-spec-val">Қауіпсіз DMG орнатушысы (.dmg)</span>
            </div>
            <div class="os-spec-row">
              <span class="os-spec-label">Архитектура:</span>
              <span class="os-spec-val">M1 / M2 / M3 / M4 және Intel 64-бит</span>
            </div>
          </div>
          <div class="os-card-actions" style="display: flex; flex-direction: column; gap: 8px;">
            <a href="/Toi DJ-macOS-arm64.dmg" download class="btn btn-primary os-btn" id="macDownloadArm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>Apple Silicon (M1/M2/M3/M4) (.dmg)</span>
            </a>
            <a href="/Toi DJ-macOS-x64.dmg" download class="btn btn-outline os-btn" id="macDownloadIntel" style="font-size: 13px; padding: 10px 14px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>Intel 64-бит (x86_64) (.dmg)</span>
            </a>
          </div>
        </div>

        <!-- Windows Card -->
        <div class="os-card" id="card-Windows" data-os="Windows">
          <div class="os-card-badge" id="badge-Windows" style="display:none;">Сіздің жүйеңізге ұсынылады</div>
          <div class="os-card-header">
            <div class="os-platform-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
            </div>
            <div>
              <h3 class="os-card-title">Windows</h3>
              <p class="os-card-subtitle">Windows 10 / 11 (64-бит)</p>
            </div>
          </div>
          <div class="os-card-specs">
            <div class="os-spec-row">
              <span class="os-spec-label">Қолдау:</span>
              <span class="os-spec-val">Windows 10, Windows 11 (x64)</span>
            </div>
            <div class="os-spec-row">
              <span class="os-spec-label">Формат:</span>
              <span class="os-spec-val">Автономды орнатушы (.exe)</span>
            </div>
            <div class="os-spec-row">
              <span class="os-spec-label">Талап:</span>
              <span class="os-spec-val">Кез келген ноутбук, кемінде 2GB RAM</span>
            </div>
          </div>
          <div class="os-card-actions">
            <a href="/Toi DJ.dmg" download class="btn btn-primary os-btn" id="winDownloadBtn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>Windows (.exe) Жүктеу</span>
            </a>
          </div>
        </div>

        <!-- Linux Card -->
        <div class="os-card" id="card-Linux" data-os="Linux">
          <div class="os-card-badge" id="badge-Linux" style="display:none;">Сіздің жүйеңізге ұсынылады</div>
          <div class="os-card-header">
            <div class="os-platform-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="18" rx="3"/><polyline points="7 9 10 12 7 15"/><line x1="13" y1="15" x2="17" y2="15"/></svg>
            </div>
            <div>
              <h3 class="os-card-title">Linux</h3>
              <p class="os-card-subtitle">Ubuntu, Debian, Fedora, Arch</p>
            </div>
          </div>
          <div class="os-card-specs">
            <div class="os-spec-row">
              <span class="os-spec-label">Қолдау:</span>
              <span class="os-spec-val">Барлық 64-бит заманауи дистрибутивтер</span>
            </div>
            <div class="os-spec-row">
              <span class="os-spec-label">Формат:</span>
              <span class="os-spec-val">Портативті AppImage (.AppImage)</span>
            </div>
            <div class="os-spec-row">
              <span class="os-spec-label">Дыбыс драйвері:</span>
              <span class="os-spec-val">ALSA, PulseAudio, PipeWire</span>
            </div>
          </div>
          <div class="os-card-actions">
            <a href="/Toi DJ.dmg" download class="btn btn-outline os-btn" id="linuxDownloadBtn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>Linux (.AppImage) Жүктеу</span>
            </a>
          </div>
        </div>

        <!-- Phone Remote Card -->
        <div class="os-card" id="card-Mobile" data-os="Mobile">
          <div class="os-card-badge" id="badge-Mobile" style="display:none;">Сіздің жүйеңізге ұсынылады</div>
          <div class="os-card-header">
            <div class="os-platform-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            </div>
            <div>
              <h3 class="os-card-title">Wi-Fi Пульт</h3>
              <p class="os-card-subtitle">iOS (iPhone) және Android</p>
            </div>
          </div>
          <div class="os-card-specs">
            <div class="os-spec-row">
              <span class="os-spec-label">Орнату:</span>
              <span class="os-spec-val">Орнатусыз, кез келген смартфон браузері</span>
            </div>
            <div class="os-spec-row">
              <span class="os-spec-label">Байланыс:</span>
              <span class="os-spec-val">Жергілікті Wi-Fi желісі арқылы</span>
            </div>
            <div class="os-spec-row">
              <span class="os-spec-label">Мүмкіндік:</span>
              <span class="os-spec-val">Залдан 357 сэмпл мен плейлистті қосу</span>
            </div>
          </div>
          <div class="os-card-actions">
            <button class="btn btn-outline os-btn" id="openDownloadQrModalBtn" type="button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              <span>QR Кодты Ашу</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Quick Setup FAQ Cards -->
      <div class="download-faq-grid">
        <div class="download-faq-card">
          <h4 class="download-faq-title">macOS жүйесінде орнату</h4>
          <p class="download-faq-desc">Жүктелген .dmg файлын ашып, Toi DJ белгішесін Applications қалтасына жылжытыңыз. Бағдарлама бірден іске қосылады.</p>
        </div>
        <div class="download-faq-card">
          <h4 class="download-faq-title">30 күндік сынақ мерзімі</h4>
          <p class="download-faq-desc">Бағдарламаны алғаш қосқанда 30 күндік сынақ режимі толық мүмкіндіктермен беріледі. Ешқандай төлем картасы қажет емес.</p>
        </div>
        <div class="download-faq-card">
          <h4 class="download-faq-title">7 күндік офлайн режим</h4>
          <p class="download-faq-desc">Тойханада немесе мейрамханада интернет болмаса да бағдарлама 7 күн бойы тоқтаусыз жұмыс істей береді.</p>
        </div>
      </div>
    </div>
  </main>

  <footer class="footer">
    <div class="footer-content">
      <div class="nav-logo">
        <img src="/logo.png" alt="Toi DJ Logo">
        <span class="nav-logo-text">TOI DJ <span>PLAYER</span></span>
      </div>
      <div style="font-size: 14px; color: var(--text-muted);">
        Қазақстанның Той DJ және Асабаларына арналған ресми бағдарламасы.
      </div>
      <div style="display: flex; gap: 14px; align-items: center; flex-wrap: wrap;">
        <a href="/" class="btn btn-outline nav-back-to-home" style="font-size: 12px; padding: 6px 14px;">Басты бетке оралу</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy; 2026 TOI DJ PLAYER. Барлық құқықтар қорғалған.</div>
      <div>Қазақстанда жасалған</div>
    </div>
  </footer>
</div> <!-- end #view-download -->

  <!-- Phone QR Connect Modal -->
  <div class="toi-modal-backdrop" id="phoneQrModal" style="display:none;">
    <div class="toi-modal-card">
      <div class="toi-modal-header">
        <div class="toi-modal-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00bfea" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          <span>Телефонмен Қосылу (Wi-Fi Пульт)</span>
        </div>
        <button class="toi-modal-close" id="closeQrModal">&times;</button>
      </div>
      <div class="toi-modal-body" style="text-align: center; align-items: center;">
        <div style="font-size: 13px; color: #9ba1ab;">
          Ноутбук пен телефон бір Wi-Fi желісіне қосылуы қажет. Телефон камерасымен QR кодты сканерлеңіз:
        </div>
        <div style="background: #fff; padding: 14px; border-radius: 8px; width: 170px; height: 170px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(0,0,0,0.5);">
          <svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.8" style="width: 100%; height: 100%;">
            <rect x="2" y="2" width="8" height="8" rx="1"/>
            <rect x="14" y="2" width="8" height="8" rx="1"/>
            <rect x="2" y="14" width="8" height="8" rx="1"/>
            <rect x="5" y="5" width="2" height="2" fill="#000"/>
            <rect x="17" y="5" width="2" height="2" fill="#000"/>
            <rect x="5" y="17" width="2" height="2" fill="#000"/>
            <path d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h4v4h-4z"/>
          </svg>
        </div>
        <div style="background: #141b22; border: 1px solid #00bfea; padding: 8px 14px; border-radius: 4px; font-family: monospace; font-size: 13px; color: #00bfea; font-weight: 700;">
          http://192.168.1.105:8080
        </div>
        <div style="font-size: 11px; color: #5a606b;">
          PIN код: <strong style="color: #fff;">8492</strong> &bull; Телефоннан барлық 14 банк қолжетімді
        </div>
      </div>
      <div class="toi-modal-footer">
        <button class="btn btn-outline" style="padding: 6px 14px; font-size: 12px;" id="closeQrModalBtn">Жабу</button>
      </div>
    </div>
  </div>

  <!-- License Status Modal -->
  <div class="toi-modal-backdrop" id="licenseModal" style="display:none;">
    <div class="toi-modal-card">
      <div class="toi-modal-header">
        <div class="toi-modal-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#12c978" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <span>Toi DJ Pro Лицензия Басқару</span>
        </div>
        <button class="toi-modal-close" id="closeLicenseModal">&times;</button>
      </div>
      <div class="toi-modal-body">
        <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(18, 201, 120, 0.1); border: 1px solid #12c978; padding: 10px 14px; border-radius: 4px;">
          <span style="font-size: 12px; font-weight: 700; color: #12c978;">Мәртебесі:</span>
          <span style="font-size: 12px; font-weight: 900; color: #12c978;">30-күндік Сынақ (Белсенді)</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 6px; font-size: 11.5px; color: #9ba1ab;">
          <div style="display: flex; justify-content: space-between;">
            <span>Қалған мерзім:</span>
            <strong style="color: #fff;">30 күн қалды</strong>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span>Құрылғы коды (Hardware ID):</span>
            <strong style="color: #00bfea; font-family: monospace;">TOIDJ-MAC-2026-F91A</strong>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span>Тіркелген пошта:</span>
            <strong style="color: #fff;">azamaperdeev05@gmail.com</strong>
          </div>
        </div>

        <div style="margin-top: 6px;">
          <label style="font-size: 11px; font-weight: 700; color: #9ba1ab; display: block; margin-bottom: 6px;">
            PRO Лицензия кілтін енгізу:
          </label>
          <div style="display: flex; gap: 8px;">
            <input type="text" placeholder="XXXXX-XXXXX-XXXXX-XXXXX" style="flex:1; background:#0f1114; border:1px solid #3b4048; border-radius:3px; padding:8px 10px; font-size:12px; color:#fff; font-family:monospace;" />
            <button class="btn btn-primary" style="padding: 6px 14px; font-size: 11px;" id="activateKeyBtn">Белсендіру</button>
          </div>
        </div>
      </div>
      <div class="toi-modal-footer">
        <button class="btn btn-outline" style="padding: 6px 14px; font-size: 12px;" id="closeLicenseModalBtn">Жабу</button>
      </div>
    </div>
  </div>

  <!-- Password Reset & Recovery Modal -->
  <div class="toi-modal-backdrop" id="resetPasswordModal" style="display:none;">
    <div class="toi-modal-card reset-modal-card">
      <div class="toi-modal-header">
        <div class="toi-modal-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00bfea" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span id="resetModalHeading">Құпиясөзді қалпына келтіру</span>
        </div>
        <button class="toi-modal-close" id="closeResetModal" aria-label="Жабу">&times;</button>
      </div>

      <!-- State A: Request Recovery Link (Email) -->
      <div class="toi-modal-body" id="resetRequestView">
        <p class="reset-modal-desc">
          Тіркелген email поштаңызды енгізіңіз. Біз сізге құпиясөзді ауыстыру сілтемесін жібереміз.
        </p>
        <div class="reset-form-group">
          <label class="reset-label" for="resetEmailInput">Email пошта</label>
          <div class="reset-input-wrap">
            <svg class="reset-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <input type="email" id="resetEmailInput" class="reset-input" placeholder="example@gmail.com" autocomplete="email" />
          </div>
        </div>
        <div id="resetRequestAlert" class="reset-alert" style="display:none;"></div>
        <button type="button" id="sendResetLinkBtn" class="btn btn-primary reset-submit-btn">
          Сілтемені жіберу
        </button>
      </div>

      <!-- State B: Set New Password Form (When ?code=... or recovery session) -->
      <div class="toi-modal-body" id="resetNewPassView" style="display:none;">
        <p class="reset-modal-desc">
          Аккаунтыңыз үшін жаңа сенімді құпиясөз ойлап табыңыз (кемінде 6 таңба).
        </p>
        <div class="reset-form-group">
          <label class="reset-label" for="newPasswordInput">Жаңа құпиясөз</label>
          <div class="reset-input-wrap">
            <svg class="reset-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <input type="password" id="newPasswordInput" class="reset-input" placeholder="Кемінде 6 таңба" autocomplete="new-password" />
            <button type="button" class="reset-eye-btn" id="toggleNewPassEye" aria-label="Құпиясөзді көрсету">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
        </div>

        <div class="reset-form-group">
          <label class="reset-label" for="confirmPasswordInput">Құпиясөзді қайталаңыз</label>
          <div class="reset-input-wrap">
            <svg class="reset-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <input type="password" id="confirmPasswordInput" class="reset-input" placeholder="Құпиясөзді қайта теріңіз" autocomplete="new-password" />
            <button type="button" class="reset-eye-btn" id="toggleConfirmPassEye" aria-label="Құпиясөзді көрсету">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
        </div>

        <div id="resetNewPassAlert" class="reset-alert" style="display:none;"></div>

        <button type="button" id="saveNewPasswordBtn" class="btn btn-primary reset-submit-btn">
          Құпиясөзді сақтау
        </button>
      </div>

      <!-- State C: Success Message -->
      <div class="toi-modal-body" id="resetSuccessView" style="display:none;">
        <div class="reset-success-box">
          <div class="reset-success-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3 class="reset-success-title" id="resetSuccessTitle">Құпиясөз сәтті өзгертілді!</h3>
          <p class="reset-success-desc" id="resetSuccessDesc">
            Енді TOI DJ PRO бағдарламасына жаңа құпиясөзіңізбен кіре аласыз.
          </p>
          <button type="button" id="closeResetSuccessBtn" class="btn btn-primary reset-submit-btn">
            Түсінікті, терезені жабу
          </button>
        </div>
      </div>
    </div>
  </div>
`;

// =========================================================================
// 1. HARDWARE SAMPLER 64-PAD INJECTION (8x8 Grid matching Photo 2)
// =========================================================================
const samplerGrid = document.getElementById('samplerHardwareGrid');

function renderSamplerGrid() {
  samplerGrid.innerHTML = '';
  PADS.forEach((pad) => {
    if (pad.isEmpty) {
      const emptyEl = document.createElement('div');
      emptyEl.className = 'empty-pad-slot';
      emptyEl.dataset.slotId = pad.id;
      emptyEl.innerHTML = `
        <span class="empty-slot-num">${pad.id}</span>
      `;
      emptyEl.addEventListener('click', () => {
        if (!isDeleteMode) {
          alert(`Слот #${pad.id}: Жаңа аудио файлды осы жерге қосуға болады.`);
        }
      });
      samplerGrid.appendChild(emptyEl);
      return;
    }

    const padEl = document.createElement('div');
    padEl.className = 'sampler-pad-hardware';
    padEl.dataset.padId = pad.id;
    if (pad.key) padEl.dataset.key = pad.key;
    padEl.style.setProperty('--pad-accent', pad.color);

    padEl.innerHTML = `
      <div class="pad-hw-header">
        <span class="pad-hw-num">${pad.id.toString().padStart(2, '0')}</span>
        <div class="pad-hw-header-right">
          <span class="pad-hw-dot" style="background: ${pad.color}; box-shadow: 0 0 6px ${pad.color};"></span>
        </div>
      </div>
      <div class="pad-hw-title" title="${pad.title}">${pad.title}</div>
      <div class="pad-accent-line" style="background: ${pad.color};"></div>
    `;

    padEl.addEventListener('click', () => {
      if (isDeleteMode) {
        padEl.classList.toggle('deleted-pad');
        return;
      }
      togglePadSound(pad, padEl);
    });

    samplerGrid.appendChild(padEl);
  });
}

renderSamplerGrid();

// Delete Mode Toggle
const deleteToggleBtn = document.getElementById('samplerDeleteToggle');
const deleteBtnLabel = document.getElementById('deleteBtnLabel');
deleteToggleBtn.addEventListener('click', () => {
  isDeleteMode = !isDeleteMode;
  deleteToggleBtn.classList.toggle('active', isDeleteMode);
  deleteBtnLabel.textContent = isDeleteMode ? 'ӨШІРУДІ ТОҚТАТУ' : 'ӨШІРУ РЕЖИМІ';
  document.querySelectorAll('.sampler-pad-hardware').forEach((el) => {
    el.classList.toggle('delete-mode-active', isDeleteMode);
  });
});

// Reset Pads
document.getElementById('samplerResetBtn').addEventListener('click', () => {
  isDeleteMode = false;
  deleteToggleBtn.classList.remove('active');
  deleteBtnLabel.textContent = 'ӨШІРУ РЕЖИМІ';
  document.querySelectorAll('.sampler-pad-hardware').forEach((el) => {
    el.classList.remove('delete-mode-active', 'deleted-pad');
  });
});

// Clean Pads / Clear Active Audio
document.getElementById('samplerCleanBtn').addEventListener('click', () => {
  stopAllAudio();
  document.querySelectorAll('.sampler-pad-hardware').forEach((el) => {
    el.classList.remove('active');
  });
});

// Add File Button Demo Action
document.getElementById('samplerAddBtn').addEventListener('click', () => {
  alert('Жаңа аудио файл қосу үшін қалаған бос слотты басыңыз немесе файлды тікелей тартып тастаңыз (Drag & Drop).');
});

// Bank Selector Dropdown Click
document.getElementById('currentPresetChip').addEventListener('click', () => {
  alert('Ағымдағы белсенді банк: new bank (7) (63 сэмпл). Бағдарламада барлығы 14 дайын той банкі бар.');
});

// =========================================================================
// 2. AIMP PLAYLIST ENGINE & TRACKLIST (Photo 2)
// =========================================================================
const trackListEl = document.getElementById('aimpTrackList');
const aimpTimeDisplay = document.getElementById('aimpTimeDisplay');
const aimpElapsed = document.getElementById('aimpElapsed');
const aimpTotal = document.getElementById('aimpTotal');
const aimpPlayBtn = document.getElementById('aimpPlayBtn');
const aimpPlayIcon = document.getElementById('aimpPlayIcon');
const aimpCurrentTitle = document.getElementById('aimpCurrentTitle');
const aimpNextTitle = document.getElementById('aimpNextTitle');

function renderAimpTrackList(filteredTracks = AIMP_TRACKS) {
  trackListEl.innerHTML = '';

  filteredTracks.forEach((track, idx) => {
    const isPlayingThis = isAimpPlaying && currentTrackIndex === (track.id - 1);
    const isFirstSelected = !isAimpPlaying && track.id === 1;
    const isSecondTrack = track.id === 2;

    const row = document.createElement('div');
    row.className = `aimp-track-row ${isPlayingThis ? 'playing-now' : ''} ${isFirstSelected ? 'selected-row' : ''} ${isSecondTrack ? 'next-row-cyan' : ''}`;
    row.dataset.trackIndex = track.id - 1;

    let numOrIconHtml = '';
    if (track.id === 1) {
      numOrIconHtml = `<span class="aimp-track-icon-orange"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></span>`;
    } else {
      numOrIconHtml = `<span class="aimp-track-num ${isSecondTrack ? 'num-cyan' : ''}">${track.id}.</span>`;
    }

    row.innerHTML = `
      ${numOrIconHtml}
      <div class="aimp-track-info">
        <div class="aimp-track-title ${track.id === 1 ? 'title-orange' : isSecondTrack ? 'title-cyan' : ''}">${track.title}</div>
        <div class="aimp-track-sub">${track.sub}</div>
      </div>
      <span class="aimp-track-dur ${isSecondTrack ? 'dur-cyan' : ''}">${track.duration}</span>
      <span class="aimp-track-menu">&#8942;</span>
    `;

    row.addEventListener('click', () => {
      selectAndPlayAimpTrack(track.id - 1);
    });

    trackListEl.appendChild(row);
  });
}

function updateTrackListActiveRow() {
  const rows = trackListEl.querySelectorAll('.aimp-track-row');
  rows.forEach((row) => {
    const idx = parseInt(row.dataset.trackIndex, 10);
    row.classList.toggle('playing-now', isAimpPlaying && currentTrackIndex === idx);
  });
}

function updateAimpPlayButtonUI() {
  if (isAimpPlaying) {
    aimpPlayBtn.classList.add('playing');
    aimpPlayIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`;
  } else {
    aimpPlayBtn.classList.remove('playing');
    aimpPlayIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"/>`;
  }
}

function selectAndPlayAimpTrack(index) {
  currentTrackIndex = index;
  const track = AIMP_TRACKS[index];
  if (!track) return;

  if (currentAimpAudio) {
    try {
      currentAimpAudio.pause();
      currentAimpAudio.currentTime = 0;
    } catch (_) {}
  }

  currentAimpAudio = new Audio(track.file);
  currentAimpAudio.volume = masterVolume;
  currentAimpAudio.play().catch(() => {});

  isAimpPlaying = true;
  visualizerGain = 1.0;
  trackElapsedSeconds = 0;

  if (aimpCurrentTitle) {
    aimpCurrentTitle.textContent = `${track.title} — Той әні`;
  }
  const nextTrack = AIMP_TRACKS[(index + 1) % AIMP_TRACKS.length];
  if (aimpNextTitle && nextTrack) {
    aimpNextTitle.textContent = nextTrack.title;
  }
  if (aimpTotal) {
    aimpTotal.textContent = track.duration;
  }

  updateAimpPlayButtonUI();
  updateTrackListActiveRow();
}

// AIMP Transport buttons
aimpPlayBtn.addEventListener('click', () => {
  if (isAimpPlaying) {
    if (currentAimpAudio) currentAimpAudio.pause();
    isAimpPlaying = false;
    updateAimpPlayButtonUI();
    updateTrackListActiveRow();
  } else {
    if (currentAimpAudio) {
      currentAimpAudio.play().catch(() => {});
      isAimpPlaying = true;
    } else {
      selectAndPlayAimpTrack(currentTrackIndex);
    }
    updateAimpPlayButtonUI();
    updateTrackListActiveRow();
  }
});

document.getElementById('aimpStopBtn').addEventListener('click', () => {
  if (currentAimpAudio) {
    currentAimpAudio.pause();
    currentAimpAudio.currentTime = 0;
  }
  isAimpPlaying = false;
  visualizerGain = 0;
  trackElapsedSeconds = 0;
  aimpTimeDisplay.textContent = '00:00';
  aimpElapsed.textContent = '00:00';
  updateAimpPlayButtonUI();
  updateTrackListActiveRow();
});

document.getElementById('aimpNextBtn').addEventListener('click', () => {
  const nextIdx = (currentTrackIndex + 1) % AIMP_TRACKS.length;
  selectAndPlayAimpTrack(nextIdx);
});

document.getElementById('aimpPrevBtn').addEventListener('click', () => {
  const prevIdx = (currentTrackIndex - 1 + AIMP_TRACKS.length) % AIMP_TRACKS.length;
  selectAndPlayAimpTrack(prevIdx);
});

// AIMP Time Display toggle (elapsed / remaining)
aimpTimeDisplay.addEventListener('click', () => {
  showRemainingTime = !showRemainingTime;
});

// AIMP Search Filter
const searchInput = document.getElementById('aimpSearchInput');
searchInput.addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase().trim();
  const filtered = AIMP_TRACKS.filter((t) => t.title.toLowerCase().includes(q) || t.sub.toLowerCase().includes(q));
  renderAimpTrackList(filtered);
});

renderAimpTrackList();

// Clock & Time Tracker Interval
setInterval(() => {
  if (isAimpPlaying) {
    trackElapsedSeconds += 1;
    const curTrack = AIMP_TRACKS[currentTrackIndex];
    const totalSec = curTrack ? curTrack.durSeconds : 1241;

    if (trackElapsedSeconds >= totalSec) {
      const nextIdx = (currentTrackIndex + 1) % AIMP_TRACKS.length;
      selectAndPlayAimpTrack(nextIdx);
      return;
    }

    const elapsedStr = formatDuration(trackElapsedSeconds);
    const remStr = '-' + formatDuration(totalSec - trackElapsedSeconds);

    aimpElapsed.textContent = elapsedStr;
    aimpTimeDisplay.textContent = showRemainingTime ? remStr : elapsedStr;

    const seekSlider = document.getElementById('aimpSeekSlider');
    if (seekSlider) {
      seekSlider.value = (trackElapsedSeconds / totalSec) * 100;
    }

    visualizerGain = Math.max(visualizerGain, 0.65);
  }
}, 1000);

// =========================================================================
// 3. MASTER CONTROLS & EMERGENCY STOP
// =========================================================================
const masterSlider = document.getElementById('masterVolumeSlider');
const masterVolVal = document.getElementById('masterVolVal');

masterSlider.addEventListener('input', (e) => {
  masterVolume = e.target.value / 100;
  masterVolVal.textContent = `${e.target.value}%`;
  if (currentAimpAudio) {
    currentAimpAudio.volume = masterVolume;
  }
  activePadPlaybacks.forEach((playback) => {
    if (playback.audio && 'volume' in playback.audio) {
      playback.audio.volume = masterVolume;
    }
  });
});

document.getElementById('stopAllBtn').addEventListener('click', () => {
  stopAllAudio();
});

// =========================================================================
// 4. AUTHENTIC 16-BAND AIMP SPECTRUM ANALYZER
// =========================================================================
const spectrumCanvas = document.getElementById('aimpSpectrumCanvas');
const specCtx = spectrumCanvas.getContext('2d');

function resizeSpectrum() {
  if (spectrumCanvas.parentElement) {
    spectrumCanvas.width = spectrumCanvas.parentElement.clientWidth;
    spectrumCanvas.height = spectrumCanvas.parentElement.clientHeight;
  }
}
window.addEventListener('resize', resizeSpectrum);
resizeSpectrum();

const BANDS = 16;
const SEGMENTS = 9;
const bandLevels = new Array(BANDS).fill(0);
const peakDots = new Array(BANDS).fill(0);

function drawAimpSpectrum() {
  const w = spectrumCanvas.width;
  const h = spectrumCanvas.height;
  specCtx.clearRect(0, 0, w, h);

  const colWidth = (w - (BANDS - 1) * 3) / BANDS;
  const segHeight = (h - (SEGMENTS - 1) * 2) / SEGMENTS;

  for (let i = 0; i < BANDS; i++) {
    let targetLevel = 0;
    if (isAimpPlaying || visualizerGain > 0.05) {
      const freqFactor = Math.sin(Date.now() * 0.008 + i * 0.4) * 0.5 + 0.5;
      const beatBoost = visualizerGain * (Math.sin(Date.now() * 0.02 + i) * 0.4 + 0.6);
      targetLevel = Math.min(SEGMENTS, Math.floor((freqFactor * 0.6 + beatBoost * 0.5) * SEGMENTS));
    }

    if (targetLevel > bandLevels[i]) {
      bandLevels[i] = targetLevel;
    } else {
      bandLevels[i] = Math.max(0, bandLevels[i] - 0.25);
    }

    if (bandLevels[i] > peakDots[i]) {
      peakDots[i] = bandLevels[i];
    } else {
      peakDots[i] = Math.max(0, peakDots[i] - 0.08);
    }

    const x = i * (colWidth + 3);

    for (let s = 0; s < SEGMENTS; s++) {
      const y = h - (s + 1) * (segHeight + 2);
      const isLit = s <= bandLevels[i];

      if (isLit) {
        if (s < 5) {
          specCtx.fillStyle = '#00e676';
        } else if (s < 7) {
          specCtx.fillStyle = '#ffb300';
        } else {
          specCtx.fillStyle = '#ff3d00';
        }
      } else {
        specCtx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      }

      specCtx.fillRect(x, y, colWidth, segHeight);
    }

    if (peakDots[i] > 0.5) {
      const peakY = h - Math.ceil(peakDots[i]) * (segHeight + 2);
      specCtx.fillStyle = '#ffffff';
      specCtx.fillRect(x, peakY, colWidth, 1.5);
    }
  }

  if (visualizerGain > 0.01) {
    visualizerGain *= 0.96;
  }

  requestAnimationFrame(drawAimpSpectrum);
}
requestAnimationFrame(drawAimpSpectrum);

// =========================================================================
// 5. INTERACTIVE MODALS (QR & LICENSE)
// =========================================================================
const qrModal = document.getElementById('phoneQrModal');
const licenseModal = document.getElementById('licenseModal');

document.getElementById('openQrBtn').addEventListener('click', () => {
  qrModal.style.display = 'flex';
});

document.getElementById('closeQrModal').addEventListener('click', () => {
  qrModal.style.display = 'none';
});
document.getElementById('closeQrModalBtn').addEventListener('click', () => {
  qrModal.style.display = 'none';
});

document.getElementById('openLicenseBtn').addEventListener('click', () => {
  licenseModal.style.display = 'flex';
});

document.getElementById('closeLicenseModal').addEventListener('click', () => {
  licenseModal.style.display = 'none';
});
document.getElementById('closeLicenseModalBtn').addEventListener('click', () => {
  licenseModal.style.display = 'none';
});

[qrModal, licenseModal].forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

document.getElementById('activateKeyBtn').addEventListener('click', () => {
  alert('Сынақ мерзімі қазірдің өзінде белсенді (30 күн қалды). Лицензияны толық сатып алу үшін сайттағы WhatsApp сілтемесіне өтіңіз.');
});

// =========================================================================
// 6. KEYBOARD HOTKEYS (1-8, Q-I, A-K, Z-M, Space, Escape)
// =========================================================================
window.addEventListener('keydown', (e) => {
  // If user is typing in search input, don't hijack keys
  if (e.target.tagName === 'INPUT') return;

  const pressed = e.key.toUpperCase();

  // Escape: STOP ALL
  if (e.key === 'Escape') {
    e.preventDefault();
    stopAllAudio();
    return;
  }

  // Spacebar: Play/Pause AIMP
  if (e.key === ' ' || e.code === 'Space') {
    e.preventDefault();
    aimpPlayBtn.click();
    return;
  }

  // Sampler Pads: 1, 2, 3, 4, Q, W, E, R
  const pad = PADS.find((p) => p.key === pressed);
  if (pad) {
    e.preventDefault();
    const padEl = document.querySelector(`.sampler-pad-hardware[data-key="${pressed}"]`);
    togglePadSound(pad, padEl);
  }
});

// =========================================================================
// 8. PASSWORD RECOVERY & AUTH CONFIRMATION
// =========================================================================
function initPasswordResetFlow() {
  const modal = document.getElementById('resetPasswordModal');
  const closeBtn = document.getElementById('closeResetModal');
  const headingEl = document.getElementById('resetModalHeading');
  const requestView = document.getElementById('resetRequestView');
  const newPassView = document.getElementById('resetNewPassView');
  const successView = document.getElementById('resetSuccessView');
  const emailInput = document.getElementById('resetEmailInput');
  const sendBtn = document.getElementById('sendResetLinkBtn');
  const reqAlert = document.getElementById('resetRequestAlert');

  const newPassInput = document.getElementById('newPasswordInput');
  const confirmPassInput = document.getElementById('confirmPasswordInput');
  const saveBtn = document.getElementById('saveNewPasswordBtn');
  const newPassAlert = document.getElementById('resetNewPassAlert');
  const successCloseBtn = document.getElementById('closeResetSuccessBtn');

  const openBtn = document.getElementById('openResetPasswordBtn');
  const footerBtn = document.getElementById('footerResetPasswordBtn');

  function openModal(mode = 'request') {
    if (!modal) return;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (reqAlert) reqAlert.style.display = 'none';
    if (newPassAlert) newPassAlert.style.display = 'none';

    if (mode === 'newPassword') {
      if (headingEl) headingEl.textContent = 'Жаңа құпиясөз орнату';
      if (requestView) requestView.style.display = 'none';
      if (newPassView) newPassView.style.display = 'flex';
      if (successView) successView.style.display = 'none';
      setTimeout(() => {
        if (newPassInput) newPassInput.focus();
      }, 100);
    } else {
      if (headingEl) headingEl.textContent = 'Құпиясөзді қалпына келтіру';
      if (requestView) requestView.style.display = 'flex';
      if (newPassView) newPassView.style.display = 'none';
      if (successView) successView.style.display = 'none';
      setTimeout(() => {
        if (emailInput) emailInput.focus();
      }, 100);
    }
  }

  function closeModal() {
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (successCloseBtn) successCloseBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (openBtn) openBtn.addEventListener('click', () => openModal('request'));
  if (footerBtn) footerBtn.addEventListener('click', () => openModal('request'));
  document.querySelectorAll('.open-reset-modal-trigger').forEach(btn => {
    btn.addEventListener('click', () => openModal('request'));
  });

  // Eye toggles for passwords
  const toggleNewPass = document.getElementById('toggleNewPassEye');
  if (toggleNewPass && newPassInput) {
    toggleNewPass.addEventListener('click', () => {
      newPassInput.type = newPassInput.type === 'password' ? 'text' : 'password';
    });
  }
  const toggleConfirmPass = document.getElementById('toggleConfirmPassEye');
  if (toggleConfirmPass && confirmPassInput) {
    toggleConfirmPass.addEventListener('click', () => {
      confirmPassInput.type = confirmPassInput.type === 'password' ? 'text' : 'password';
    });
  }

  // Send reset link
  if (sendBtn && emailInput && reqAlert) {
    sendBtn.addEventListener('click', async () => {
      const email = emailInput.value.trim().toLowerCase();
      if (!email || !email.includes('@')) {
        reqAlert.className = 'reset-alert error';
        reqAlert.textContent = 'Дұрыс email пошта мекенжайын енгізіңіз.';
        reqAlert.style.display = 'block';
        return;
      }

      sendBtn.disabled = true;
      sendBtn.textContent = 'Жіберілуде...';
      reqAlert.style.display = 'none';

      try {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin + '/?type=recovery',
        });
        if (error) throw error;

        if (headingEl) headingEl.textContent = 'Сілтеме жіберілді';
        if (requestView) requestView.style.display = 'none';
        if (newPassView) newPassView.style.display = 'none';
        if (successView) successView.style.display = 'flex';
        const titleEl = document.getElementById('resetSuccessTitle');
        const descEl = document.getElementById('resetSuccessDesc');
        if (titleEl) titleEl.textContent = 'Сілтеме сәтті жіберілді!';
        if (descEl) {
          descEl.textContent =
            `«${email}» поштаңызға құпиясөзді қалпына келтіру сілтемесі жіберілді. Поштаңызды және спам папкасын тексеріп, хаттағы сілтемені басыңыз.`;
        }
      } catch (err) {
        reqAlert.className = 'reset-alert error';
        reqAlert.textContent = err.message || 'Сілтеме жіберу кезінде қате орын алды. Қайта тексеріңіз.';
        reqAlert.style.display = 'block';
      } finally {
        sendBtn.disabled = false;
        sendBtn.textContent = 'Сілтемені жіберу';
      }
    });
  }

  // Save new password
  if (saveBtn && newPassInput && confirmPassInput && newPassAlert) {
    saveBtn.addEventListener('click', async () => {
      const newPass = newPassInput.value;
      const confirmPass = confirmPassInput.value;

      if (!newPass || newPass.length < 6) {
        newPassAlert.className = 'reset-alert error';
        newPassAlert.textContent = 'Құпиясөз кемінде 6 таңбадан тұруы керек.';
        newPassAlert.style.display = 'block';
        return;
      }

      if (newPass !== confirmPass) {
        newPassAlert.className = 'reset-alert error';
        newPassAlert.textContent = 'Енгізілген екі құпиясөз бір-біріне сәйкес келмейді.';
        newPassAlert.style.display = 'block';
        return;
      }

      saveBtn.disabled = true;
      saveBtn.textContent = 'Сақталуда...';
      newPassAlert.style.display = 'none';

      try {
        const { error } = await supabase.auth.updateUser({
          password: newPass,
        });
        if (error) throw error;

        if (headingEl) headingEl.textContent = 'Құпиясөз өзгертілді';
        if (requestView) requestView.style.display = 'none';
        if (newPassView) newPassView.style.display = 'none';
        if (successView) successView.style.display = 'flex';
        const titleEl = document.getElementById('resetSuccessTitle');
        const descEl = document.getElementById('resetSuccessDesc');
        if (titleEl) titleEl.textContent = 'Құпиясөз сәтті жаңартылды!';
        if (descEl) {
          descEl.textContent =
            'Енді TOI DJ PRO бағдарламасына жаңа құпиясөзіңізбен кіре аласыз.';
        }

        // Clean URL params so refreshing doesn't cause code replay errors
        if (window.history.replaceState) {
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      } catch (err) {
        newPassAlert.className = 'reset-alert error';
        newPassAlert.textContent = err.message || 'Құпиясөзді сақтау мүмкін болмады. Сілтеме ескірген болуы мүмкін.';
        newPassAlert.style.display = 'block';
      } finally {
        saveBtn.disabled = false;
        saveBtn.textContent = 'Құпиясөзді сақтау';
      }
    });
  }

  // Supabase auth state change: listen for PASSWORD_RECOVERY event
  supabase.auth.onAuthStateChange(async (event) => {
    if (event === 'PASSWORD_RECOVERY') {
      openModal('newPassword');
    }
  });

  return { openModal, closeModal };
}

async function checkAuthConfirmation(resetFlow) {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  const type = urlParams.get('type');
  const error = urlParams.get('error_description') || urlParams.get('error');
  const hash = window.location.hash;

  // Direct trigger via hash or query (e.g. ?type=recovery or #reset-password)
  if (type === 'recovery' || hash.includes('type=recovery') || hash.includes('reset-password')) {
    if (!code) {
      resetFlow.openModal('newPassword');
      return;
    }
  }

  if (code) {
    try {
      const { data, error: authErr } = await supabase.auth.exchangeCodeForSession(code);
      if (authErr) throw authErr;

      if (data?.redirectType === 'recovery' || type === 'recovery') {
        // This was a password recovery click from email!
        resetFlow.openModal('newPassword');
        return;
      }

      // Otherwise: Email confirmation for registration
      const authSlot = document.getElementById('authNoticeSlot');
      if (authSlot) {
        authSlot.innerHTML = `
          <div class="auth-notice-card" id="authNotice" style="border-color: var(--green); box-shadow: 0 16px 40px rgba(0,0,0,0.6), 0 0 30px rgba(16, 185, 129, 0.4);">
            <div class="auth-notice-header">
              <span class="auth-badge" style="color: var(--green); background: rgba(16, 185, 129, 0.15);">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                СӘТТІ РАСТАЛДЫ
              </span>
              <button id="closeAuthNotice" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:18px;">&times;</button>
            </div>
            <div class="auth-notice-title">Email Поштаңыз Сәтті Расталды!</div>
            <div class="auth-notice-desc">
              Toi DJ жүйесіндегі аккаунтыңыз белсендірілді (${data?.user?.email || ''}). 30 күндік сынақ мерзімін пайдалану үшін бағдарламаны ашып, кіріңіз.
            </div>
            <div class="auth-notice-actions">
              <a href="/Toi DJ.dmg" download class="btn btn-primary" style="font-size: 13px; padding: 8px 16px;">
                Toi DJ Жүктеп алу
              </a>
            </div>
          </div>
        `;
        const closeBtn = document.getElementById('closeAuthNotice');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => {
            const card = document.getElementById('authNotice');
            if (card) card.remove();
          });
        }
      }
    } catch (err) {
      // If code was invalid or already exchanged, check if we have an active session
      const { data: sessData } = await supabase.auth.getSession();
      if (type === 'recovery' || hash.includes('type=recovery') || sessData?.session) {
        resetFlow.openModal('newPassword');
        return;
      }

      const authSlot = document.getElementById('authNoticeSlot');
      if (authSlot) {
        authSlot.innerHTML = `
          <div class="auth-notice-card" id="authNotice" style="border-color: var(--primary);">
            <div class="auth-notice-header">
              <span class="auth-badge" style="color: var(--primary); background: rgba(0, 242, 254, 0.15);">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                АККАУНТ ДАЙЫН
              </span>
              <button id="closeAuthNotice" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:18px;">&times;</button>
            </div>
            <div class="auth-notice-title">Email Мәртебесі Жаңартылды</div>
            <div class="auth-notice-desc">
              Сіздің поштаңыз расталды. Енді Toi DJ бағдарламасында тіркелген поштаңыз және құпиясөзіңізбен жүйеге кіре аласыз.
            </div>
            <div class="auth-notice-actions">
              <a href="/Toi DJ.dmg" download class="btn btn-primary" style="font-size: 13px; padding: 8px 16px;">
                Toi DJ Жүктеп алу
              </a>
            </div>
          </div>
        `;
        const closeBtn = document.getElementById('closeAuthNotice');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => {
            const card = document.getElementById('authNotice');
            if (card) card.remove();
          });
        }
      }
    }
  } else if (error) {
    const authSlot = document.getElementById('authNoticeSlot');
    if (authSlot) {
      authSlot.innerHTML = `
        <div class="auth-notice-card" id="authNotice" style="border-color: var(--danger);">
          <div class="auth-notice-header">
            <span class="auth-badge" style="color: var(--danger); background: rgba(239, 68, 68, 0.15);">ҚАТЕ</span>
            <button id="closeAuthNotice" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:18px;">&times;</button>
          </div>
          <div class="auth-notice-title">Растау сілтемесі ескірген</div>
          <div class="auth-notice-desc">${error}</div>
        </div>
      `;
      const closeBtn = document.getElementById('closeAuthNotice');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          const card = document.getElementById('authNotice');
          if (card) card.remove();
        });
      }
    }
  }
}

const passwordResetFlow = initPasswordResetFlow();
checkAuthConfirmation(passwordResetFlow);

// =========================================================================
// COOKIE UTILITIES
// =========================================================================
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^|;\\s*)' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

// =========================================================================
// THEME MANAGER (LIGHT & DARK - MOBBIN SPEC)
// =========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('toi_theme') || getCookie('toi_theme');
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('toi_theme', theme);
  setCookie('toi_theme', theme, 365);
}

// =========================================================================
// OPERATING SYSTEM DETECTION (PURE HARDWARE DETECTION - ZERO COOKIE OVERRIDE)
// =========================================================================

// 1. Immediately delete any legacy 'toi_user_os' cookie so previous downloads
//    (such as clicking Linux on a MacBook) never persist and corrupt the OS detection.
document.cookie = 'toi_user_os=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax;';

function detectClientOS() {
  const ua = (navigator.userAgent || '').toLowerCase();
  const platform = (navigator.platform || '').toLowerCase();

  // Mobile / Tablet devices
  if (/android|iphone|ipad|ipod|mobile/i.test(ua)) {
    return 'Mobile';
  }
  // macOS / MacBooks (Apple Silicon & Intel)
  if (/macintosh|macintel|macppc|mac68k|mac os x/i.test(ua) || /mac/i.test(platform)) {
    return 'macOS';
  }
  // Windows
  if (/win32|win64|windows|winnt/i.test(ua) || /win/i.test(platform)) {
    return 'Windows';
  }
  // Linux (desktop)
  if (/linux/i.test(ua) || /linux/i.test(platform)) {
    return 'Linux';
  }

  return 'macOS';
}

function applyOSRecommendation() {
  const detectedOs = detectClientOS();

  // Reset all badges and recommendation states
  const allCards = document.querySelectorAll('.os-card');
  allCards.forEach(c => {
    c.classList.remove('os-card-recommended');
    const badge = c.querySelector('.os-card-badge');
    if (badge) badge.style.display = 'none';
  });

  // Highlight only the genuinely detected user device (e.g. macOS on MacBook)
  const targetCard = document.getElementById(`card-${detectedOs}`);
  if (targetCard) {
    targetCard.classList.add('os-card-recommended');
    const badge = document.getElementById(`badge-${detectedOs}`);
    if (badge) badge.style.display = 'block';
  }
}

// =========================================================================
// CLIENT-SIDE ROUTER: / (Home) <-> /download (OS Selection)
// =========================================================================
function renderRoute() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const homeView = document.getElementById('view-home');
  const downloadView = document.getElementById('view-download');

  if (path === '/download') {
    if (homeView) homeView.style.display = 'none';
    if (downloadView) {
      downloadView.style.display = 'block';
      applyOSRecommendation();
    }
    document.title = 'TOI DJ PLAYER - Бағдарламаны Жүктеп Алу (macOS, Windows, Linux)';
  } else {
    if (homeView) homeView.style.display = 'block';
    if (downloadView) downloadView.style.display = 'none';
    document.title = 'TOI DJ PLAYER - Той DJ және Асабаларға арналған ойнатқыш';
  }

  // Force scroll reset to top of viewport
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function navigateTo(path) {
  if (window.location.pathname !== path) {
    window.history.pushState({}, '', path);
  }
  renderRoute();
}

window.addEventListener('popstate', renderRoute);

// Intercept routing links
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;
  const href = link.getAttribute('href');
  if (href === '/download') {
    e.preventDefault();
    navigateTo('/download');
  } else if (href === '/' || link.classList.contains('nav-back-to-home')) {
    e.preventDefault();
    navigateTo('/');
  }
});

// Setup Download QR modal button
const openDownloadQrBtn = document.getElementById('openDownloadQrModalBtn');
if (openDownloadQrBtn) {
  openDownloadQrBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const modal = document.getElementById('phoneQrModal');
    if (modal) modal.style.display = 'flex';
  });
}

// Initialize Theme & Route
initTheme();
renderRoute();



