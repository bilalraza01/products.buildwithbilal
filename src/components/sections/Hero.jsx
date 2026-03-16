import { useEffect, useState } from 'react';
import OptInForm from '../common/OptInForm';
import colors from '../../theme/colors';
import { container } from '../../theme/styles';

const stats = [
  { value: '300', label: 'Interview Questions' },
  { value: '4', label: 'Core Pillars' },
  { value: '100%', label: 'Free Forever' },
  { value: '500+', label: 'Engineers Joined' },
];

const circles = [
  { size: 150, top: '8%', left: '5%', duration: 4, delay: 0 },
  { size: 120, top: '20%', right: '8%', duration: 3.5, delay: 0.5 },
  { size: 160, top: '55%', left: '2%', duration: 5, delay: 1 },
  { size: 130, top: '40%', right: '3%', duration: 3, delay: 1.5 },
  { size: 100, top: '70%', left: '15%', duration: 4.5, delay: 0.8 },
  { size: 140, top: '65%', right: '15%', duration: 3.8, delay: 2 },
  { size: 110, top: '10%', left: '35%', duration: 4.2, delay: 0.3 },
  { size: 150, top: '75%', right: '25%', duration: 5.5, delay: 1.2 },
  { size: 120, top: '30%', left: '80%', duration: 3.2, delay: 0.7 },
  { size: 100, top: '50%', left: '45%', duration: 4.8, delay: 1.8 },
];

const keyframesInjected = (() => {
  if (typeof document === 'undefined') return false;
  const style = document.createElement('style');
  style.textContent = `
    @keyframes heroFloat {
      0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
      50% { transform: translateY(-20px) scale(1.2); opacity: 0.8; }
    }
    @keyframes heroFlicker {
      0%, 100% { opacity: 0.3; }
      25% { opacity: 0.7; }
      50% { opacity: 0.2; }
      75% { opacity: 0.6; }
    }
  `;
  document.head.appendChild(style);
  return true;
})();

const styles = {
  section: {
    textAlign: 'center',
    padding: '60px 0 0',
    position: 'relative',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: colors.accent,
    filter: 'blur(60px)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  content: {
    position: 'relative',
    zIndex: 1,
  },
  badge: {
    display: 'inline-block',
    backgroundColor: colors.accentSubtle,
    color: colors.accent,
    fontSize: '0.8rem',
    fontWeight: 600,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    padding: '8px 20px',
    borderRadius: '100px',
    border: `1px solid ${colors.accentBorder}`,
    marginBottom: '28px',
  },
  // h1 styles handled by .hero-title class
  accent: {
    color: colors.accent,
  },
  // subheadline styles handled by .hero-subheadline class
  divider: {
    maxWidth: '900px',
    margin: '60px auto 0',
    borderTop: `1px solid ${colors.border}`,
  },
  // stats styles handled by CSS classes
};

export default function Hero() {
  return (
    <section style={styles.section}>
      {circles.map((c, i) => (
        <div
          key={i}
          style={{
            ...styles.circle,
            width: c.size,
            height: c.size,
            top: c.top,
            left: c.left,
            right: c.right,
            animation: `heroFloat ${c.duration}s ease-in-out ${c.delay}s infinite, heroFlicker ${c.duration * 0.8}s ease-in-out ${c.delay}s infinite`,
          }}
        />
      ))}

      <div style={{ ...container, ...styles.content }}>
        <div style={styles.badge}>Free PDF Guide</div>
        <h1 className="hero-title">
          Ace Your System Design<br />
          <span style={styles.accent}>Interview.</span>
        </h1>
        <p className="hero-subheadline">
          300 curated questions covering every topic interviewers actually ask
          from load balancers to distributed databases.
        </p>
        <OptInForm note="Join 500+ engineers. No spam, unsubscribe anytime." />

        <div style={styles.divider} />

        <div className="hero-stats-row">
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
