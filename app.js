* {
  box-sizing: border-box;
}

:root {
  --bg: #f5f7ff;
  --panel: #ffffff;
  --panel-soft: #eef2ff;
  --line: #dfe7ff;
  --purple: #5b4ae3;
  --purple-dark: #3f32b5;
  --blue: #2f8ef6;
  --teal: #2ac7b8;
  --text: #172033;
  --muted: #5b6787;
  --danger: #ef5b6b;
  --warning: #f8b84e;
  --success: #2bb673;
  --shadow: 0 20px 45px rgba(35, 47, 81, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: linear-gradient(180deg, #eef4ff 0%, #f7f8ff 100%);
  color: var(--text);
  font-family: "Inter", sans-serif;
}

button, input, select, textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 60px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(86, 111, 177, 0.12);
  border-radius: 18px;
  backdrop-filter: blur(12px);
  position: sticky;
  top: 16px;
  z-index: 10;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  color: white;
  font-weight: 800;
  background: linear-gradient(135deg, var(--purple), var(--blue));
}

.brand-name {
  font-weight: 800;
  letter-spacing: 0.08em;
}

.brand-tag {
  color: var(--muted);
  font-size: 0.72rem;
}

.topnav {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.topnav a {
  text-decoration: none;
  color: var(--text);
  font-weight: 600;
}

.primary-btn, .secondary-btn {
  border: none;
  border-radius: 12px;
  padding: 0.8rem 1.1rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--purple), var(--blue));
  color: white;
  box-shadow: 0 12px 24px rgba(91, 74, 227, 0.25);
}

.secondary-btn {
  background: white;
  color: var(--purple);
  border: 1px solid rgba(91, 74, 227, 0.15);
}

.primary-btn.small, .secondary-btn.small {
  padding: 0.65rem 0.9rem;
}

.primary-btn:hover, .secondary-btn:hover {
  transform: translateY(-1px);
}

.hero {
  margin-top: 34px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 22px;
  align-items: center;
}

.hero-copy, .hero-panel {
  background: transparent;
}

.eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--purple);
  font-weight: 800;
}

.eyebrow.small {
  font-size: 0.7rem;
}

.hero-copy h1 {
  margin: 10px 0 14px;
  font-size: clamp(2.5rem, 4vw, 4.2rem);
  line-height: 1.05;
}

.hero-copy p {
  color: var(--muted);
  font-size: 1.05rem;
  max-width: 640px;
}

.cta-row {
  display: flex;
  gap: 12px;
  margin-top: 18px;
  flex-wrap: wrap;
}

.hero-stats {
  display: flex;
  gap: 24px;
  margin-top: 22px;
  flex-wrap: wrap;
}

.hero-stats div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hero-stats strong {
  font-size: 1.8rem;
}

.hero-stats span {
  color: var(--muted);
}

.hero-panel {
  display: grid;
  gap: 18px;
}

.mini-card {
  border-radius: 22px;
  padding: 22px;
  box-shadow: var(--shadow);
}

.mini-card.glass {
  background: linear-gradient(135deg, #ffffff, #edf3ff);
  border: 1px solid var(--line);
}

.mini-card.accent {
  background: linear-gradient(135deg, rgba(91, 74, 227, 0.09), rgba(42, 199, 184, 0.12));
  border: 1px solid rgba(91, 74, 227, 0.08);
}

.mini-card span {
  color: var(--muted);
}

.mini-card h3 {
  margin: 8px 0 8px;
  font-size: 1.7rem;
}

.meter {
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: #e8ebff;
  overflow: hidden;
  margin-top: 12px;
}

.meter i {
  display: block;
  height: 100%;
  width: 82%;
  background: linear-gradient(90deg, var(--teal), var(--blue));
}

.card, .panel {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(90, 107, 150, 0.1);
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.panel {
  padding: 22px;
}

.panel-grid {
  margin-top: 28px;
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 24px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-bottom: 18px;
}

.panel-header h2 {
  margin: 8px 0 0;
  font-size: 1.5rem;
}

.badge {
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  font-size: 0.76rem;
  font-weight: 700;
}

.badge.neutral {
  background: #edf2ff;
  color: var(--purple);
}

.stacked-form {
  display: grid;
  gap: 16px;
}

label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--text);
}

input, select, textarea {
  width: 100%;
  padding: 0.8rem 0.9rem;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: #fbfbff;
  color: var(--text);
}

textarea {
  resize: vertical;
}

.form-row {
  display: grid;
  gap: 16px;
}

.form-row.two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.form-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}

.skill-pill {
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  font-weight: 700;
  background: #eef3ff;
  color: var(--purple);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.skill-pill button {
  border: none;
  background: transparent;
  color: inherit;
  font-weight: 700;
}

.mini-form {
  display: flex;
  gap: 12px;
}

#opportunities {
  margin-top: 28px;
}

.filters {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.opportunity-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.opportunity-card {
  padding: 18px;
  border-radius: 18px;
  border: 1px solid rgba(91, 74, 227, 0.12);
  background: linear-gradient(180deg, #ffffff 0%, #f7f8ff 100%);
}

.opportunity-card h3 {
  margin: 0 0 8px;
}

.meta-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 10px 0 14px;
}

.meta-pill {
  font-size: 0.72rem;
  font-weight: 700;
  background: #edf3ff;
  color: var(--purple);
  border-radius: 999px;
  padding: 0.35rem 0.55rem;
}

.opportunity-card p {
  margin: 0 0 14px;
  color: var(--muted);
  line-height: 1.5;
}

.requirements {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.requirements span {
  padding: 0.32rem 0.5rem;
  border-radius: 8px;
  font-size: 0.72rem;
  color: var(--text);
  background: #eefaf6;
}

.opportunity-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.ghost-btn {
  border: 1px solid rgba(91, 74, 227, 0.12);
  background: white;
  color: var(--text);
  border-radius: 10px;
  padding: 0.55rem 0.8rem;
  font-weight: 700;
}

.dashboard-grid {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.checklist {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.checklist li {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #f8f9ff;
  padding: 0.8rem 0.9rem;
}

.checklist li::before {
  content: "✓";
  display: inline-grid;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(43, 182, 115, 0.14);
  color: var(--success);
  font-weight: 800;
}

.compact-list {
  display: grid;
  gap: 12px;
}

.compact-item {
  padding: 0.9rem 1rem;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fbfbff;
}

.compact-item h4 {
  margin: 0 0 4px;
  font-size: 1rem;
}

.compact-item p {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(15, 20, 35, 0.58);
  display: grid;
  place-items: center;
  z-index: 40;
  padding: 20px;
}

.modal.hidden {
  display: none;
}

.modal-card {
  width: min(540px, 100%);
  background: white;
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 22px;
}

.icon-btn {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: #f8f9ff;
  font-size: 1.5rem;
  line-height: 1;
}

@media (max-width: 900px) {
  .hero, .panel-grid, .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-wrap: wrap;
  }

  .topnav {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 560px) {
  .app-shell {
    padding-left: 12px;
    padding-right: 12px;
  }

  .form-row.two,
  .mini-form {
    grid-template-columns: 1fr;
    display: grid;
  }

  .hero-copy h1 {
    font-size: 2.4rem;
  }
}
