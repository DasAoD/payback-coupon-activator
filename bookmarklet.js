/**
 * PAYBACK Coupon Activator – Bookmarklet
 *
 * Activates all not-yet-activated coupons on payback.de/coupons
 * and reloads the page after a short delay.
 *
 * Usage: Copy the one-liner below into a browser bookmark's URL field.
 */

// ── Readable version ──────────────────────────────────────────────────────────
(() => {
  const btns = document.querySelectorAll('button[data-testid$="-not_activated"]');
  btns.forEach(b => b.click());
  console.log(`[PAYBACK] ${btns.length} Coupon(s) aktiviert`);
  setTimeout(() => location.reload(), 1500);
})();

// ── Bookmarklet (one-liner for browser bookmark URL) ─────────────────────────
// javascript:(() => {const btns=document.querySelectorAll('button[data-testid$="-not_activated"]');btns.forEach(b=>b.click());console.log(`[PAYBACK] ${btns.length} Coupon(s) aktiviert`);setTimeout(()=>location.reload(),1500);})();