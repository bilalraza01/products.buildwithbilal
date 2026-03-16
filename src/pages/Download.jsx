import colors from '../theme/colors';
import { container } from '../theme/styles';
import Button from '../components/common/Button';

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
    marginBottom: '32px',
  },
};

export default function Download() {
  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>You're In!</h1>
        <p style={styles.subheading}>
          Your subscription is confirmed. Click below to download the guide.
        </p>
        <a href="/300-system-design-interview-questions.pdf" download>
          <Button>Download the Guide</Button>
        </a>
      </div>
    </div>
  );
}
