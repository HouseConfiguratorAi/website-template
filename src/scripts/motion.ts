/**
 * Motion engine — tiny and dependency-free.
 *
 * 1. Reveals: [data-reveal] and [data-words] get `.is-in` the first time
 *    they enter the viewport (IntersectionObserver, no scroll listeners).
 * 2. Scenes: [data-scene] elements expose their scroll progress as the CSS
 *    variable --p (0 → 1). CSS decides what to do with it, using transforms
 *    and clip-path only. Progress is only computed for scenes currently on
 *    screen, once per animation frame.
 *      data-scene="through"  0 when the top enters the viewport, 1 when the bottom leaves
 *      data-scene="sticky"   0 → 1 while a tall section scrolls past its sticky stage
 *      data-scene="enter"    0 when the top enters, 1 when the top reaches the viewport top
 */

const root = document.documentElement;
const motion = root.classList.contains('motion');

// ---- 1. Reveals -----------------------------------------------------------
const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-words]');
if (motion && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-in'));
}

// ---- 2. Scroll scenes -------------------------------------------------------
const scenes = [...document.querySelectorAll<HTMLElement>('[data-scene]')];
if (motion && scenes.length) {
  const active = new Set<HTMLElement>();
  let frame = 0;

  const clamp = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

  const measure = () => {
    frame = 0;
    const vh = window.innerHeight;
    for (const el of active) {
      const r = el.getBoundingClientRect();
      let p: number;
      switch (el.dataset.scene) {
        case 'sticky':
          p = -r.top / Math.max(1, r.height - vh);
          break;
        case 'enter':
          p = (vh - r.top) / vh;
          break;
        default:
          p = (vh - r.top) / (vh + r.height);
      }
      el.style.setProperty('--p', clamp(p).toFixed(4));
    }
  };

  const request = () => {
    if (!frame) frame = requestAnimationFrame(measure);
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) active.add(e.target as HTMLElement);
        else active.delete(e.target as HTMLElement);
      }
      request();
    },
    { rootMargin: '10% 0px 10% 0px' },
  );
  scenes.forEach((el) => io.observe(el));
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request, { passive: true });
  measure();
}
