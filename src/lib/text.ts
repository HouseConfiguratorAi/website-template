const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Escapes text and turns *word* into <em>word</em> for display type. */
export function rich(text: string): string {
  return escapeHtml(text).replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

/** Plain text version (for <title>, aria-labels, structured data). */
export function plain(text: string): string {
  return text.replace(/\*/g, '');
}
