@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:wght@400;600&display=swap');

:root {
  --primary: #0f172a;
  --accent: #2563eb;
  --text-main: #111827;
  --text-muted: #6b7280;
  --bg-main: #ffffff;
  --bg-soft: #f9fafb;
  --border-soft: #e5e7eb;
}

body {
  background-color: var(--bg-main);
  color: var(--text-main);
  font-family: "Source Serif 4", Georgia, serif;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* --- Profile Layout --- */
.profile-section {
  display: flex;
  align-items: center;
  gap: 56px;
  margin-bottom: 64px;
}

.profile-image img {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

/* --- Typography --- */
.name-header {
  font-family: "Inter", sans-serif;
  font-size: 2.6em;
  font-weight: 600;
  margin-bottom: 0.2em;
  letter-spacing: -0.5px;
}

.name-native {
  font-size: 0.6em;
  font-weight: 400;
  color: var(--text-muted);
  margin-left: 0.4em;
}

.affiliation {
  font-size: 1.05em;
  margin-bottom: 1.2em;
  color: var(--text-muted);
}

.affiliation a {
  color: var(--accent);
  text-decoration: none;
}

.affiliation a:hover {
  text-decoration: underline;
}

/* --- Research Section --- */
.research-focus {
  font-size: 1.05em;
  margin-top: 1.4em;
}

/* --- Section Headers --- */
.section-header {
  font-family: "Inter", sans-serif;
  font-size: 1.6em;
  font-weight: 600;
  margin-top: 72px;
  margin-bottom: 24px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--border-soft);
}

/* --- Lists --- */
.research-inline-list {
  margin-top: 10px;
  padding-left: 20px;
}

.research-inline-list li {
  margin-bottom: 6px;
}

/* --- Contact --- */
.contact-card {
  font-size: 1.05em;
  line-height: 1.8;
}

/* --- Publications --- */
.publication-item {
  margin-bottom: 24px;
  padding: 18px 20px;
  background: var(--bg-soft);
  border-radius: 12px;
  border: 1px solid var(--border-soft);
  transition: all 0.2s ease;
}

.publication-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
}

.publication-title {
  font-family: "Inter", sans-serif;
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 6px;
}

.publication-authors {
  font-size: 0.95em;
  color: var(--text-muted);
  margin-bottom: 8px;
}

/* arXiv links */
.publication-item a {
  color: #b91c1c;
  text-decoration: none;
  font-weight: 500;
}

.publication-item a:hover {
  text-decoration: underline;
}

/* --- Mobile --- */
@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    text-align: center;
  }

  .profile-image img {
    width: 260px;
    height: 260px;
  }
}
