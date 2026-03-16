import colors from '../theme/colors';
import { container } from '../theme/styles';

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgPrimary,
  },
  wrapper: {
    ...container,
    textAlign: 'center',
    maxWidth: '600px',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: colors.textPrimary,
    marginBottom: '16px',
  },
  subheading: {
    fontSize: '1.2rem',
    color: colors.textSecondary,
    lineHeight: 1.6,
    marginBottom: '24px',
  },
  steps: {
    textAlign: 'left',
    backgroundColor: colors.bgSurface,
    borderRadius: '12px',
    padding: '24px 32px',
    margin: '0 auto',
    maxWidth: '420px',
  },
  step: {
    fontSize: '1rem',
    color: colors.textPrimary,
    lineHeight: 1.8,
  },
  accent: {
    color: colors.accent,
    fontWeight: 600,
  },
};

export default function ThankYou() {
  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>Thank You!</h1>
        <p style={styles.subheading}>
          You're almost there. Check your inbox to confirm your subscription and get the guide.
        </p>
        <div style={styles.steps}>
          <p style={styles.step}>1. Open your email inbox</p>
          <p style={styles.step}>2. Find the <span style={styles.accent}>confirmation email</span></p>
          <p style={styles.step}>3. Click the link to confirm</p>
          <p style={styles.step}>4. You'll receive the guide right away</p>
        </div>
      </div>
    </div>
  );
}
