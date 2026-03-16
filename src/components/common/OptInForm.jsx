import { useNavigate } from 'react-router-dom';
import Button from './Button';
import colors from '../../theme/colors';

const styles = {
  form: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '16px',
  },
  // input styles handled by .opt-in-input class
  note: {
    fontSize: '0.85rem',
    color: colors.textSecondary,
  },
};

export default function OptInForm({ note = 'No spam. Unsubscribe anytime.' }) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    try {
      await fetch('https://api.convertkit.com/v3/forms/9195613/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: 'xJ9xSS_ySGgTxEa01LT3Ew',
          email,
        }),
      });
      navigate('/thank-you');
    } catch {
      navigate('/thank-you');
    }
  };

  return (
    <div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          required
          className="opt-in-input"
        />
        <Button type="submit">Get Free Guide</Button>
      </form>
      <p style={styles.note}>{note}</p>
    </div>
  );
}
