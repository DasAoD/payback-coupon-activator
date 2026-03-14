const btn = document.getElementById('activate');
const status = document.getElementById('status');

btn.addEventListener('click', async () => {
  btn.disabled = true;
  status.textContent = 'Lädt…';
  status.className = '';

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab?.url?.includes('payback.de')) {
    status.textContent = '⚠️ Bitte auf payback.de/coupons öffnen.';
    status.className = 'error';
    btn.disabled = false;
    return;
  }

  try {
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const btns = document.querySelectorAll('button[data-testid$="-not_activated"]');
        btns.forEach(b => b.click());
        return btns.length;
      }
    });

    const count = results?.[0]?.result ?? 0;

    if (count === 0) {
      status.textContent = '✅ Keine offenen Coupons gefunden.';
      status.className = 'success';
    } else {
      status.textContent = `✅ ${count} Coupon(s) aktiviert!`;
      status.className = 'success';
      setTimeout(() => {
        chrome.tabs.reload(tab.id);
        window.close();
      }, 1200);
    }
  } catch (e) {
    status.textContent = '❌ Fehler: ' + e.message;
    status.className = 'error';
    btn.disabled = false;
  }
});