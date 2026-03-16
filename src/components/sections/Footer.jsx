import SocialLinks from '../common/SocialLinks';
import colors from '../../theme/colors';
import { container } from '../../theme/styles';

const styles = {
  footer: {
    padding: '32px 0',
    borderTop: `1px solid ${colors.border}`,
  },
  // content styles handled by .footer-content class
  text: {
    fontSize: '0.85rem',
    color: colors.textSecondary,
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="footer-content">
        <p style={styles.text}>
          &copy; {new Date().getFullYear()} Build With Bilal. All rights
          reserved.
        </p>
        <SocialLinks size="small" />
      </div>
    </footer>
  );
}
