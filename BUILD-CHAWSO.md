# Chawso PDF candidate v2 - build reconciliation

Upstream: https://github.com/alam00000/bentopdf @ cc97429413ee13fa977d18627003b9b69e1787e6 (v2.8.11)
Local change commit: c63179c (see chawso-v2.patch; touches simple-index.html, package-lock.json, adds public/wasm/{cpdf,gs}/, public/fonts-embedpdf/)
Build host: node v22.23.4, npm 10.9.9, Linux x64
Build command env:
SIMPLE_MODE=true
VITE_BRAND_NAME="Chawso PDF"
VITE_FOOTER_TEXT="Chawso"
DISABLE_GITHUB_STARS=true
VITE_WASM_CPDF_URL=/wasm/cpdf/
VITE_WASM_GS_URL=/wasm/gs/
VITE_EMBEDPDF_FONTS_URL=/fonts-embedpdf
DISABLE_TOOLS="word-to-pdf,excel-to-pdf,powerpoint-to-pdf,odt-to-pdf,ods-to-pdf,odp-to-pdf,odg-to-pdf,rtf-to-pdf,pages-to-pdf,wpd-to-pdf,wps-to-pdf,pub-to-pdf,vsd-to-pdf,digital-sign-pdf,validate-signature-pdf"
npm run build
Post-build: dist/libreoffice-wasm removed (leftover of disabled office tools; 47MB+28MB gz exceed Pages file cap).
dist tarball sha256: 2ab71c74aae6972973eef346fb67c53aa0376e00267e775df09efe8004d5e3b2
Self-hosted component provenance: npm coherentpdf@2.5.5 (dist/coherentpdf.browser.min.js), npm @bentopdf/gs-wasm@0.1.1 (assets/gs.js, gs.wasm), npm @embedpdf/fonts-\*@1.0.0 (Regular font files only).

## v3 additions (commit 94fd0e2)

- Editor font fallback URL resolved to absolute same-origin (fixes whole-page blank render for base-14 non-embedded fonts).
- Redaction-scope warning in Edit PDF download flow when applied area redactions carry no extractable text.
- Chawso-specific privacy.html / licensing.html rewrites (drafts, CONTACT-PENDING and SOURCE-REPO-PENDING placeholders).
- licenses/ directory with bundled component licence texts; NOTICE.md at repo root.
- texteditor base14 registration REMOVED (verify-or-exclude; edit-pdf-text renders without it).
- DEPLOYMENT ENV REQUIRED: set SITE_URL=https://<final origin> at build time, otherwise canonical/hreflang/OG tags point at https://www.bentopdf.com (upstream default). When SITE_URL differs from upstream, the build marks pages noindex unless ALLOW_INDEXING=true - decide per deployment policy.
