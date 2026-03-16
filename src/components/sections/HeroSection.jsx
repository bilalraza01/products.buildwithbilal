import Navbar from './Navbar';
import Hero from './Hero';
import colors from '../../theme/colors';

const styles = {
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: colors.bgPrimary,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  gridBackground: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(${colors.border}40 1px, transparent 1px),
      linear-gradient(90deg, ${colors.border}40 1px, transparent 1px)
    `,
    backgroundSize: '48px 48px',
    pointerEvents: 'none',
    zIndex: 0,
  },
  gridFade: {
    position: 'absolute',
    inset: 0,
    background: `radial-gradient(ellipse at center, transparent 30%, ${colors.bgPrimary} 80%)`,
    pointerEvents: 'none',
    zIndex: 0,
  },
};

export default function HeroSection() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.gridBackground} />
      <div style={styles.gridFade} />
      <Navbar />
      <Hero />
    </div>
  );
}
