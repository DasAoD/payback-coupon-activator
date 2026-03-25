# PAYBACK Coupon Activator

Activates all loaded PAYBACK coupons on [payback.de/coupons](https://www.payback.de/coupons) with a single click. For all coupons, simply click again after the page reloads.

## Install from Store

| Browser | Link |
|---------|------|
| 🦊 Firefox | [Firefox Add-ons (AMO)](https://addons.mozilla.org/de/firefox/addon/payback-coupon-activator/) |
| 🌐 Chrome / Brave | [Chrome Web Store](https://chromewebstore.google.com/detail/payback-coupon-activator/injjlkjddolbodmjpkadeodhjkkkhihk) |
| 🔷 Edge | [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/nggadpampmdhmkbjhbfigpplimpojpii) |

> **⚠️ Chrome / Edge:** When installing a new extension with few users, Chrome may show a "not trusted by Enhanced Safe Browsing" warning. This is normal and will go away automatically as the extension gains more users. Click **"Install anyway"** to proceed.

---

## Bookmarklet

### Installation

1. Show your browser's bookmarks bar
2. Create a new bookmark (any page)
3. Give it a name, e.g. `PAYBACK Activate`
4. Paste the following code as the URL:

```
javascript:(() => {const btns=document.querySelectorAll('button[data-testid$="-not_activated"]');btns.forEach(b=>b.click());console.log(`[PAYBACK] ${btns.length} Coupon(s) activated`);setTimeout(()=>location.reload(),1500);})();
```

### Usage

1. Open [payback.de/coupons](https://www.payback.de/coupons) and log in
2. Click the bookmark
3. Done — the page reloads after 1.5 seconds
4. Repeat if more coupons are available

---

## Browser Extension (local / unpacked)

No store installation required. Works in Chrome, Edge, Brave, and Firefox.

### Chrome / Edge / Brave

1. Clone this repo or download and extract the ZIP
2. Open `chrome://extensions/`
3. Enable **Developer mode** (top right)
4. Click **"Load unpacked"**
5. Select the `extension/` folder

### Firefox

1. Open `about:debugging`
2. Click **"This Firefox"**
3. Click **"Load Temporary Add-on…"**
4. Select `extension/manifest.json`

### Usage

1. Open [payback.de/coupons](https://www.payback.de/coupons) and log in
2. Click the extension icon in the toolbar
3. Click **"Alle aktivieren"**
4. Repeat after the page reloads if more coupons are available

---

## Notes

- Compatible with the Next.js/MUI-based redesign of payback.de rolled out in **March 2026**
- Detects unactivated coupons via the `data-testid` attribute (`*-not_activated`)
- If Payback updates their frontend again: inspect an "Jetzt aktivieren" button and update the selector accordingly

---

## License

[MIT](LICENSE)