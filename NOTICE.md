# NOTICE

Chawso PDF is a modified version of
[BentoPDF](https://github.com/alam00000/bentopdf), licensed under the GNU
Affero General Public License v3.0 (AGPL-3.0). BentoPDF is copyright its
upstream authors. Chawso PDF is distributed under the same licence; see
LICENSE.

Upstream version this fork is based on: BentoPDF v2.8.11
(upstream commit cc97429413ee13fa977d18627003b9b69e1787e6).

## Modifications made by Chawso

- Rebranded the interface as "Chawso PDF" (name, logo, footer).
- Simple-mode build: reduced tool set; office-conversion tools and the
  digital-signature / signature-validation tools are disabled.
- WASM engines (coherentpdf, Ghostscript) and the editor's fallback fonts
  are served from the same origin as the site instead of third-party CDNs
  where the deployment supports it.
- Editor font fallback URLs are resolved to absolute same-origin URLs so
  that pages using non-embedded base-14 fonts (Helvetica, Times, Courier)
  render correctly in the editor.
- The Edit PDF download flow warns before downloading a document with
  applied redactions, because redactions may not remove all sensitive
  information from the file's properties, bookmarks, or embedded files.
- The privacy policy and licensing pages describe Chawso PDF's own
  deployment and bundled components.

The complete corresponding source code of the version running on this site
will be published in a public source repository linked from the
[licensing page](/licensing.html) before this site is made publicly
available. (DRAFT-CONDITIONAL: the repository does not exist yet; do not
publish this notice until the link is live and verified.)

## Bundled components

See the `licenses/` directory for the licence texts of bundled third-party
components (BentoPDF, bentopdf-pdfium / PDFium, bentopdf-viewer,
hyper-compress-wasm, coherentpdf.js, gs-wasm, PDF.js, Tesseract.js, pdf-lib,
jsPDF, and the Noto font families).
