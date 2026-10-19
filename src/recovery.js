// Құпиясөзді қалпына келтіру (ескі email аккаунттар үшін): Supabase recovery / OTP сілтемелері осы бетке келеді.
// Код бұрынғы main.js-тен өзгеріссіз көшірілді; тек модаль терезесі бетке осы файлдан қосылады.
import './recovery.css';
import { createClient } from '@supabase/supabase-js';

// Supabase Cloud Configuration for Toi DJ Pro
const SUPABASE_URL = 'https://ckgfbaxnaaniakmnhjya.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrZ2ZiYXhuYWFuaWFrbW5oanlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE3MjkxNDcsImV4cCI6MjEwNzMwNTE0N30.oKY45T6J6gnVJRFrOruepN6_dCMmbceAeAASGkDYxzw';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.body.insertAdjacentHTML('beforeend', `
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

      <!-- State B: Set New Password Form (When ?code=..., recovery session or OTP verification) -->
      <div class="toi-modal-body" id="resetNewPassView" style="display:none;">
        <p class="reset-modal-desc" id="resetNewPassDesc">
          Аккаунтыңыз үшін жаңа сенімді құпиясөз ойлап табыңыз (кемінде 6 таңба).
        </p>

        <!-- Optional Email input if user arrives directly without known email -->
        <div class="reset-form-group" id="resetOtpEmailGroup" style="display:none;">
          <label class="reset-label" for="resetOtpEmailInput">Email пошта</label>
          <div class="reset-input-wrap">
            <svg class="reset-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <input type="email" id="resetOtpEmailInput" class="reset-input" placeholder="example@gmail.com" autocomplete="email" />
          </div>
        </div>

        <!-- 6-digit OTP Code Input -->
        <div class="reset-form-group" id="resetOtpCodeGroup" style="display:none;">
          <label class="reset-label" for="resetOtpInput">Поштаға келген 6 таңбалы код (OTP)</label>
          <div class="reset-input-wrap">
            <svg class="reset-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <input type="text" id="resetOtpInput" class="reset-input" placeholder="Мысалы: 123456" maxlength="6" autocomplete="one-time-code" inputmode="numeric" />
          </div>
        </div>

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

        <div style="text-align: center; margin-top: 10px;">
          <button type="button" id="backToRequestBtn" style="background:none;border:none;color:#94a3b8;font-size:12px;cursor:pointer;text-decoration:underline;">
            Басқа email енгізу
          </button>
        </div>
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
`);

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

  const otpEmailGroup = document.getElementById('resetOtpEmailGroup');
  const otpEmailInput = document.getElementById('resetOtpEmailInput');
  const otpCodeGroup = document.getElementById('resetOtpCodeGroup');
  const otpInput = document.getElementById('resetOtpInput');
  const newPassDesc = document.getElementById('resetNewPassDesc');
  const newPassInput = document.getElementById('newPasswordInput');
  const confirmPassInput = document.getElementById('confirmPasswordInput');
  const saveBtn = document.getElementById('saveNewPasswordBtn');
  const newPassAlert = document.getElementById('resetNewPassAlert');
  const backToRequestBtn = document.getElementById('backToRequestBtn');
  const successCloseBtn = document.getElementById('closeResetSuccessBtn');

  const openBtn = document.getElementById('openResetPasswordBtn');
  const footerBtn = document.getElementById('footerResetPasswordBtn');

  let activeResetEmail = '';

  function openModal(mode = 'request', options = {}) {
    if (!modal) return;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (reqAlert) reqAlert.style.display = 'none';
    if (newPassAlert) newPassAlert.style.display = 'none';

    if (mode === 'newPassword') {
      const email = options.email || activeResetEmail || '';
      const hasSession = options.hasSession ?? false;

      if (headingEl) headingEl.textContent = 'Жаңа құпиясөз орнату';
      if (requestView) requestView.style.display = 'none';
      if (newPassView) newPassView.style.display = 'flex';
      if (successView) successView.style.display = 'none';

      if (hasSession) {
        if (otpCodeGroup) otpCodeGroup.style.display = 'none';
        if (otpEmailGroup) otpEmailGroup.style.display = 'none';
        if (newPassDesc) {
          newPassDesc.textContent = email
            ? `Расталған аккаунт: ${email}. Жаңа құпиясөзді енгізіңіз (кемінде 6 таңба).`
            : 'Аккаунтыңыз үшін жаңа сенімді құпиясөз ойлап табыңыз (кемінде 6 таңба).';
        }
        setTimeout(() => {
          if (newPassInput) newPassInput.focus();
        }, 100);
      } else {
        if (otpCodeGroup) otpCodeGroup.style.display = 'flex';
        if (email) {
          if (otpEmailGroup) otpEmailGroup.style.display = 'none';
          if (newPassDesc) {
            newPassDesc.textContent = `«${email}» поштаңызға 6 таңбалы растау коды жіберілді. Келген код пен жаңа құпиясөзіңізді енгізіңіз:`;
          }
        } else {
          if (otpEmailGroup) otpEmailGroup.style.display = 'flex';
          if (newPassDesc) {
            newPassDesc.textContent = 'Email поштаңызды, поштаға келген 6 таңбалы кодты және жаңа құпиясөзді енгізіңіз:';
          }
        }
        setTimeout(() => {
          if (otpInput) otpInput.focus();
        }, 100);
      }
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

  async function handleOpenTrigger() {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        openModal('newPassword', { email: session.user?.email, hasSession: true });
      } else {
        openModal('request');
      }
    } catch (_) {
      openModal('request');
    }
  }

  if (openBtn) openBtn.addEventListener('click', handleOpenTrigger);
  if (footerBtn) footerBtn.addEventListener('click', handleOpenTrigger);
  document.querySelectorAll('.open-reset-modal-trigger').forEach(btn => {
    btn.addEventListener('click', handleOpenTrigger);
  });

  if (backToRequestBtn) {
    backToRequestBtn.addEventListener('click', () => openModal('request'));
  }

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
        localStorage.setItem('toi_auth_intent', 'password_recovery');
        localStorage.setItem('toi_recovery_email', email);

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin + '/?type=recovery',
        });
        if (error) throw error;

        activeResetEmail = email;
        if (otpEmailInput) otpEmailInput.value = email;

        // Open new password view with OTP verification immediately
        openModal('newPassword', { email, hasSession: false });
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
        // Step 1: Check if an active session exists
        let { data: sessData } = await supabase.auth.getSession();
        let currentSession = sessData?.session;

        // Step 2: If no active session, verify OTP code!
        if (!currentSession) {
          const otpVal = otpInput?.value?.trim() || '';
          const targetEmail = activeResetEmail || otpEmailInput?.value?.trim() || emailInput?.value?.trim() || '';

          if (!targetEmail) {
            newPassAlert.className = 'reset-alert error';
            newPassAlert.textContent = 'Email поштаңызды енгізіңіз.';
            newPassAlert.style.display = 'block';
            if (otpEmailGroup) otpEmailGroup.style.display = 'flex';
            return;
          }

          if (!otpVal || otpVal.length < 6) {
            newPassAlert.className = 'reset-alert error';
            newPassAlert.textContent = 'Поштаңызға келген 6 таңбалы растау кодын енгізіңіз.';
            newPassAlert.style.display = 'block';
            if (otpCodeGroup) otpCodeGroup.style.display = 'flex';
            if (otpInput) otpInput.focus();
            return;
          }

          const { data: otpData, error: otpErr } = await supabase.auth.verifyOtp({
            email: targetEmail,
            token: otpVal,
            type: 'recovery',
          });

          if (otpErr) {
            newPassAlert.className = 'reset-alert error';
            newPassAlert.textContent = 'Растау коды қате немесе мерзімі өтіп кеткен. Поштаңыздағы соңғы кодты тексеріңіз.';
            newPassAlert.style.display = 'block';
            return;
          }

          currentSession = otpData?.session;
        }

        // Step 3: Session is verified and active! Update user password
        const { error: updateErr } = await supabase.auth.updateUser({
          password: newPass,
        });

        if (updateErr) {
          if (updateErr.message && updateErr.message.includes('Auth session missing')) {
            throw new Error('Сессия табылмады. Поштаңыздағы 6 таңбалы кодты енгізіп, қайталаңыз.');
          }
          throw updateErr;
        }

        // Step 4: Password updated successfully
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
  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === 'PASSWORD_RECOVERY') {
      openModal('newPassword', { email: session?.user?.email, hasSession: true });
    }
  });

  return { openModal, closeModal };
}

async function checkAuthConfirmation(resetFlow) {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  const type = urlParams.get('type');
  const tokenHash = urlParams.get('token_hash');
  const hash = window.location.hash;

  // 1. If hash contains access_token and refresh_token
  if (hash && hash.includes('access_token=')) {
    try {
      const hashParams = new URLSearchParams(hash.startsWith('#') ? hash.slice(1) : hash);
      const accessToken = hashParams.get('access_token');
      const refreshToken = hashParams.get('refresh_token');
      const hashType = hashParams.get('type');
      if (accessToken && refreshToken) {
        const { data, error: sessErr } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
        if (!sessErr && (hashType === 'recovery' || type === 'recovery')) {
          resetFlow.openModal('newPassword', { email: data?.user?.email, hasSession: true });
          return;
        }
      }
    } catch (e) {
      console.warn('setSession from hash error:', e);
    }
  }

  // 2. If token_hash exists in query params
  if (tokenHash) {
    try {
      const { data, error: otpErr } = await supabase.auth.verifyOtp({
        token_hash: tokenHash,
        type: type === 'recovery' ? 'recovery' : 'email',
      });
      if (!otpErr && type === 'recovery') {
        resetFlow.openModal('newPassword', { email: data?.user?.email, hasSession: true });
        return;
      }
    } catch (e) {
      console.warn('verifyOtp with token_hash error:', e);
    }
  }

  // 3. If PKCE code exists in query params
  if (code) {
    try {
      const { data, error: authErr } = await supabase.auth.exchangeCodeForSession(code);
      if (authErr) throw authErr;

      // Smart recovery detection:
      // A) explicit URL type=recovery
      // B) intent saved in localStorage
      // C) user has recent recovery_sent_at
      const storedIntent = localStorage.getItem('toi_auth_intent');
      const recSentAt = data?.user?.recovery_sent_at ? new Date(data.user.recovery_sent_at).getTime() : 0;
      const emailConfAt = data?.user?.email_confirmed_at ? new Date(data.user.email_confirmed_at).getTime() : 0;
      const isRecentRecovery = recSentAt > 0 && (Date.now() - recSentAt < 24 * 3600 * 1000) && (recSentAt >= emailConfAt - 120000);

      const isRecovery = type === 'recovery' || storedIntent === 'password_recovery' || isRecentRecovery;

      if (isRecovery) {
        localStorage.removeItem('toi_auth_intent');
        resetFlow.openModal('newPassword', { email: data?.user?.email, hasSession: true });
        return;
      }

      // If not definitely recovery, show notification card with BOTH new password and download actions
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
            <div class="auth-notice-title">Аккаунтыңыз Сәтті Расталды!</div>
            <div class="auth-notice-desc">
              Toi DJ жүйесіндегі аккаунтыңыз белсендірілді (${data?.user?.email || ''}). Егер құпиясөзді ауыстыруға келсеңіз, төмендегі батырманы басыңыз.
            </div>
            <div class="auth-notice-actions" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
              <button type="button" id="cardResetPassBtn" class="btn btn-primary" style="font-size: 13px; padding: 8px 16px; background:#00bfea; color:#000;">
                Жаңа құпиясөз орнату
              </button>
              <a href="/Toi DJ-macOS-Universal.dmg" download class="btn btn-secondary" style="font-size: 13px; padding: 8px 16px; border:1px solid rgba(255,255,255,0.2);">
                Жүктеп алу
              </a>
            </div>
          </div>
        `;
        document.getElementById('cardResetPassBtn')?.addEventListener('click', () => {
          resetFlow.openModal('newPassword', { email: data?.user?.email, hasSession: true });
        });
        const closeBtn = document.getElementById('closeAuthNotice');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => {
            const card = document.getElementById('authNotice');
            if (card) card.remove();
          });
        }
      }
      return;
    } catch (err) {
      console.warn('exchangeCodeForSession error:', err);
    }
  }

  // 4. Direct trigger via hash or query (e.g. ?type=recovery or #reset-password)
  if (type === 'recovery' || hash.includes('type=recovery') || hash.includes('reset-password')) {
    const { data: sessData } = await supabase.auth.getSession();
    const hasSession = !!sessData?.session;
    resetFlow.openModal('newPassword', { email: sessData?.session?.user?.email || '', hasSession });
    return;
  }
}

const passwordResetFlow = initPasswordResetFlow();
checkAuthConfirmation(passwordResetFlow);
