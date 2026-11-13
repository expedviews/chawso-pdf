import { MarkdownEditor } from '../utils/markdown-editor.js';
import { isToolDisabled } from '../utils/disabled-tools.js';

import { onPageReady } from '../i18n/i18n.js';

onPageReady(() => {
  const container = document.getElementById('markdown-editor-container');

  if (isToolDisabled('markdown-to-pdf')) {
    // Disabled in this deployment: the renderer fetches remote images
    // referenced in the Markdown, which leaks document-derived URLs.
    if (container) {
      container.innerHTML =
        '<p class="text-gray-400 text-center py-12">This tool is not available in this deployment.</p>';
    }
    return;
  }

  if (!container) {
    console.error('Markdown editor container not found');
    return;
  }

  const editor = new MarkdownEditor(container, {});

  console.log('Markdown editor initialized');

  const backButton = document.getElementById('back-to-tools');
  if (backButton) {
    backButton.addEventListener('click', () => {
      window.location.href = import.meta.env.BASE_URL;
    });
  }
});
