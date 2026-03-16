import SocialLinks from '../common/SocialLinks';
import colors from '../../theme/colors';

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 48px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: colors.textPrimary,
  },
  logoAccent: {
    color: colors.accent,
  },
};

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <span style={styles.logoAccent}>buildwithbilal</span>
      </div>
      <SocialLinks />
    </nav>
  );
}
