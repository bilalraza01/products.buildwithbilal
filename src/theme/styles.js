import colors from './colors';

/* ============================================
   SHARED STYLES
   Reusable style fragments used across components.
   ============================================ */

export const container = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '0 24px',
};

export const section = {
  padding: '80px 0',
};

export const sectionAlt = {
  ...section,
  backgroundColor: colors.bgSurface,
};
