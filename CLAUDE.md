# payback-coupon-activator – Projektkontext für Claude Code

Aktiviert alle geladenen PAYBACK-Coupons auf payback.de/coupons per einzigem Klick. Für alle Coupons: nach Seiten-Reload einfach erneut klicken.

## Tech-Stack
- JavaScript, als Bookmarklet und Browser-Extension verfügbar
- Firefox (AMO), Chrome Web Store, Microsoft Edge Add-ons

## Wichtige Kontext-Info
- Kompatibel mit dem Next.js/MUI-basierten Redesign von payback.de, das im **März 2026** ausgerollt wurde – bei DOM-bezogenen Fixes im Hinterkopf behalten, dass die Seite auf dieser Basis läuft
- Erkennt nicht-aktivierte Coupons über das `data-testid`-Attribut (`*-not_activated`)

## Struktur
- `extension/` – Browser-Extension-Code
  - `icons/` – Extension-Icons

## Wichtige Konvention
- Da das Projekt direkt gegen die DOM-Struktur von payback.de arbeitet, ist es **fragil gegenüber Website-Änderungen**. Bei Bug-Reports zu "Coupons werden nicht erkannt" o.ä. zuerst prüfen, ob sich das `data-testid`-Attribut-Schema auf payback.de geändert hat, bevor am Code selbst gesucht wird
- Änderungen sollten in allen drei Store-Varianten (Firefox/Chrome/Edge) konsistent bleiben, auch wenn die Store-Einreichung selbst außerhalb des Repos läuft
