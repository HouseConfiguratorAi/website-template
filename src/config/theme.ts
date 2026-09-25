/**
 * THEME CONFIGURATION
 * ------------------------------------------------------------------
 * Every colour and type decision the components use comes from here.
 * Components never contain hard-coded colours — they read semantic
 * tokens (--bg, --fg, --muted, --accent …) that change per section tone.
 *
 * Each section on a page is either `dark` or `light`. A theme defines
 * both tones, so the rhythm of dark and light scenes survives any
 * rebrand. Pick a preset, then override individual values if needed.
 */

export type Tone = {
  /** Page background for this tone. */
  background: string;
  /** Slightly raised surface — panels, placeholders, inputs. */
  surface: string;
  /** Primary text. */
  foreground: string;
  /** Secondary text — captions, metadata. Must keep ≥ 4.5:1 contrast on background. */
  muted: string;
  /** Brand accent — rules, active states, primary buttons. */
  accent: string;
  /** Text colour on top of the accent. */
  accentContrast: string;
  /** Hairlines and dividers. */
  border: string;
};

export type Theme = {
  name: string;
  dark: Tone;
  light: Tone;
  type: {
    /** 'serif' = editorial Newsreader display, 'sans' = expanded Archivo display. */
    display: 'serif' | 'sans';
    /** Weight of display/headline type (serif looks best 300–400, sans 500–700). */
    displayWeight: number;
    /** Letter-spacing of display type in em. */
    displayTracking: string;
    /** Width of the sans for display, 100 = normal, 125 = fully expanded. */
    displayWidth: number;
    /** Use italics for emphasised words in headlines (<em>). */
    italicAccents: boolean;
  };
  /** Corner radius for controls and images. 0 keeps everything architectural. */
  radius: { small: string; image: string };
};

export const presets = {
  /** Default: dark luxury dealership — warm black, sand, cream. */
  noir: {
    name: 'Noir',
    dark: {
      background: '#121212',
      surface: '#1A1A1A',
      foreground: '#F4E7C8',
      muted: '#B8AC92',
      accent: '#E8D7B1',
      accentContrast: '#121212',
      border: 'rgba(232, 215, 177, 0.16)',
    },
    light: {
      background: '#F4E7C8',
      surface: '#E8D7B1',
      foreground: '#121212',
      muted: '#5E5443',
      accent: '#121212',
      accentContrast: '#F4E7C8',
      border: 'rgba(18, 18, 18, 0.14)',
    },
    type: { display: 'serif', displayWeight: 340, displayTracking: '-0.025em', displayWidth: 100, italicAccents: true },
    radius: { small: '2px', image: '0px' },
  },

  /** Light premium dealership — gallery white, charcoal, bronze. */
  atelier: {
    name: 'Atelier',
    dark: {
      background: '#1C1B19',
      surface: '#262522',
      foreground: '#F3F1EC',
      muted: '#B3AEA4',
      accent: '#C9A27A',
      accentContrast: '#1C1B19',
      border: 'rgba(243, 241, 236, 0.14)',
    },
    light: {
      background: '#F6F4EF',
      surface: '#ECE8E0',
      foreground: '#1C1B19',
      muted: '#625D55',
      accent: '#1C1B19',
      accentContrast: '#F6F4EF',
      border: 'rgba(28, 27, 25, 0.12)',
    },
    type: { display: 'serif', displayWeight: 300, displayTracking: '-0.03em', displayWidth: 100, italicAccents: true },
    radius: { small: '0px', image: '0px' },
  },

  /** Classic-car specialist — racing green, parchment, brass. */
  heritage: {
    name: 'Heritage',
    dark: {
      background: '#14201A',
      surface: '#1B2A22',
      foreground: '#EFE6D2',
      muted: '#B4B09C',
      accent: '#C7A55E',
      accentContrast: '#14201A',
      border: 'rgba(239, 230, 210, 0.16)',
    },
    light: {
      background: '#EFE6D2',
      surface: '#E4D8BE',
      foreground: '#14201A',
      muted: '#4F5647',
      accent: '#14201A',
      accentContrast: '#EFE6D2',
      border: 'rgba(20, 32, 26, 0.16)',
    },
    type: { display: 'serif', displayWeight: 420, displayTracking: '-0.015em', displayWidth: 100, italicAccents: true },
    radius: { small: '2px', image: '2px' },
  },

  /** Performance showroom — graphite, signal orange, expanded sans. */
  circuit: {
    name: 'Circuit',
    dark: {
      background: '#0E0F10',
      surface: '#18191B',
      foreground: '#EDEDEA',
      muted: '#A2A39F',
      accent: '#FF5A1F',
      accentContrast: '#0E0F10',
      border: 'rgba(237, 237, 234, 0.14)',
    },
    light: {
      background: '#E8E8E4',
      surface: '#DADAD5',
      foreground: '#0E0F10',
      muted: '#51524F',
      accent: '#0E0F10',
      accentContrast: '#E8E8E4',
      border: 'rgba(14, 15, 16, 0.14)',
    },
    type: { display: 'sans', displayWeight: 620, displayTracking: '-0.035em', displayWidth: 118, italicAccents: false },
    radius: { small: '0px', image: '0px' },
  },

  /** Minimalist automotive studio — pure monochrome. */
  studio: {
    name: 'Studio',
    dark: {
      background: '#0A0A0A',
      surface: '#151515',
      foreground: '#FAFAFA',
      muted: '#A3A3A3',
      accent: '#FAFAFA',
      accentContrast: '#0A0A0A',
      border: 'rgba(250, 250, 250, 0.14)',
    },
    light: {
      background: '#FAFAFA',
      surface: '#EFEFEF',
      foreground: '#0A0A0A',
      muted: '#595959',
      accent: '#0A0A0A',
      accentContrast: '#FAFAFA',
      border: 'rgba(10, 10, 10, 0.12)',
    },
    type: { display: 'sans', displayWeight: 500, displayTracking: '-0.04em', displayWidth: 100, italicAccents: false },
    radius: { small: '0px', image: '0px' },
  },
} satisfies Record<string, Theme>;

export type PresetName = keyof typeof presets;

/**
 * ACTIVE THEME
 * Change `preset`, then override anything you need. For example, a new
 * accent colour: overrides: { dark: { accent: '#9FB4C7' } }
 */
export const themeConfig: { preset: PresetName; overrides?: DeepPartial<Theme> } = {
  preset: 'noir',
  overrides: {},
};

// ------------------------------------------------------------------

type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

export function resolveTheme(name: PresetName = themeConfig.preset, overrides = themeConfig.overrides): Theme {
  const base = presets[name] as Theme;
  const o = overrides ?? {};
  return {
    ...base,
    ...(o as object),
    dark: { ...base.dark, ...(o.dark ?? {}) },
    light: { ...base.light, ...(o.light ?? {}) },
    type: { ...base.type, ...(o.type ?? {}) },
    radius: { ...base.radius, ...(o.radius ?? {}) },
  } as Theme;
}

/** Serialises a theme into CSS custom properties. Injected once in <head>. */
export function themeToCss(theme: Theme): string {
  const tone = (t: Tone, p: string) =>
    [
      `--${p}-bg:${t.background}`,
      `--${p}-surface:${t.surface}`,
      `--${p}-fg:${t.foreground}`,
      `--${p}-muted:${t.muted}`,
      `--${p}-accent:${t.accent}`,
      `--${p}-accent-contrast:${t.accentContrast}`,
      `--${p}-border:${t.border}`,
    ].join(';');
  const serif = theme.type.display === 'serif';
  return `:root{${tone(theme.dark, 'dark')};${tone(theme.light, 'light')};--font-display:${
    serif ? 'var(--font-serif)' : 'var(--font-sans)'
  };--display-weight:${theme.type.displayWeight};--display-tracking:${theme.type.displayTracking};--display-stretch:${
    serif ? 100 : theme.type.displayWidth
  }%;--display-italic:${theme.type.italicAccents ? 'italic' : 'normal'};--em-accent:${theme.type.italicAccents ? 0 : 1};--radius-s:${theme.radius.small};--radius-img:${theme.radius.image}}`;
}
