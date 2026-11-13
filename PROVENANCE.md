# PROVENANCE (DRAFT - pending reviewer confirmation)

Exact source provenance for the compiled/vendored engines distributed with
Chawso PDF (all inherited unchanged from upstream BentoPDF v2.8.11).

## bentopdf-pdfium (AGPL-3.0) - editor engine, `vendor/bentopdf-pdfium/bentopdf-pdfium-3f6b6114b166.tgz`

- Built from: https://github.com/alam00000/bentopdf-pdfium-viewer
  commit `3f6b6114b166760de18923d9e737932a5c0adbcb` (2026-10-31).
- Provenance claim and tarball checksums published in upstream PR:
  https://github.com/alam00000/bentopdf/pull/964
  Our vendored tarball sha256 matches the PR's published CI checksum exactly:
  `2e724420325c0da1357283e5b7f24a713764bbefa43d4c1246c1bd8421ca991a`.
- Corresponding source at that commit:
  - C++ engine source: `packages/pdfium/build/code/editcore/*.cpp`,
    `packages/pdfium/build/code/cpp/*`, HarfBuzz glue under
    `packages/pdfium/build/code/harfbuzz/`
  - PDFium patch: `packages/pdfium/build/patch/editcore-pdfium.patch`
  - PDFium source submodule: https://github.com/embedpdf/pdfium
    branch `embedpdf/main`, pinned commit
    `fce2b000cc7a9e2cabc92db41cd57ca03233f07d` (gitlink at
    `packages/pdfium/pdfium-src`)
  - Build instructions: `packages/pdfium/Makefile`, `Dockerfile`,
    `docker-compose.yml`, `README.md`

## bentopdf-viewer (MIT) - `vendor/bentopdf-viewer/bentopdf-viewer-3f6b6114b166.tgz`

- Same fork and commit as above; tarball sha256 matches PR #964 checksum
  `181c26f31824d114d3de2652033a7fe2c4e8f25d8bd40c49f0f86fcf6612753e`.

## hyper-compress-wasm (AGPL-3.0-only) - `vendor/hyper-compress-wasm/hyper-compress-wasm-1.0.3.tgz`

- Source repo: https://github.com/alam00000/bentopdf-hyper-compress
  tag `v1.0.3` = commit `148f20f3f4cd11035fdd53dd1c20fb5a5d21cf3b`
  (includes C++/wasm build sources, BUILDING instructions, pack script, and
  the SDK wrapper preferred source).
- Build instructions: repo + https://hyper.bentopdf.com/docs/building
  (pinned PDFium, source patches, `make wasm`).
- Byte-verified on 2026-11-13 against the upstream release
  archive
  https://github.com/alam00000/bentopdf-hyper-compress/releases/download/v1.0.3/hyper-compress-v1.0.3-wasm.tar.gz
  (archive sha256 `d8bd4f9ebdc28453b17694bd8797d9973d7bea8bf28b4bf9fc830752b7ccf189`);
  both vendored engine files are byte-identical to it:
  js `a9f38b79612890d0682c581691960ee68bd551bd78cd66d5f92b65b5434516d7`,
  wasm `186e2b485142e04f24703ad98644c52204a3b50223ca4d5a519d174208048b97`.
- Caveat: whole-tgz reproduction from a fresh build of the tag is untested;
  verification is at the engine-file level.

## gs-wasm (AGPL-3.0-only) - `public/wasm/gs/`

- npm `@bentopdf/gs-wasm@0.1.1`; repo
  https://github.com/alam00000/bentopdf-gs-wasm tag `v0.1.1` = commit
  `9eb6ab47e19ee2ff01fd73c3ee5f8bbc9e50e36e`
  (build scripts + source instructions in repo).
- Our `gs.js` / `gs.wasm` verified byte-identical (sha256) to the files in
  the npm 0.1.1 tarball:
  `5e7e3b3dfc7afc5e60de8dd6dab66145c75afb74f7d671f711f390b3bb69c6d0` (gs.js),
  `c3373cd4a123f05b68513b57969db485d7f60f4b90145299de8c3182ea28f9b9` (gs.wasm).

## coherentpdf.js (AGPL-3.0-or-later) - `public/wasm/cpdf/`

- npm `coherentpdf@2.5.5`, installed from the public npm registry (integrity
  pinned in package-lock.json).
- Source repo: https://github.com/coherentgraphics/coherentpdf.js
  tag `v2.5.5` (OCaml source, Makefile, build docs).

## Notes

- PDFium itself is BSD-3-Clause (Google); the AGPL obligation attaches to the
  editcore wrapper/engine, whose corresponding source is pinned above.
- This file records evidence, not legal conclusions.
