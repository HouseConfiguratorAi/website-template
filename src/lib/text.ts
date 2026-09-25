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

/**
 * Splits a headline into words for the mask reveal. `*emphasis*` may span
 * several words. Returns visual HTML only; pair it with the plain text for
 * assistive technology (see Heading.astro).
 */
export function splitWords(text: string): string {
  let em = false;
  let i = 0;
  return text
    .split(/\s+/)
    .filter(Boolean)
    .map((raw) => {
      const opens = raw.startsWith('*');
      if (opens) em = true;
      const isEm = em;
      if (/\*[.,!?;:]*$/.test(raw) && (!opens || raw.length > 1)) em = false;
      const word = escapeHtml(raw.replace(/\*/g, ''));
      const inner = isEm ? `<em>${word}</em>` : word;
      return `<span class="wm"><span class="wi" style="--i:${i++}">${inner}</span></span>`;
    })
    .join(' ');
}
