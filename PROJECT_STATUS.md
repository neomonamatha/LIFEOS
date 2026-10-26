const STORAGE_KEY = 'lifeos-demo-data';

const defaultState = {
  profile: {
    fullName: 'Aaliyah Ndlovu',
    careerInterest: 'Product Analyst',
    summary: 'I turn complex business questions into clear recommendations and measurable outcomes.',
    education: 'BSc Information Systems',
    status: 'Open to work'
  },
  skills: ['SQL', 'Data Analysis', 'Stakeholder Management', 'Power BI', 'UX Research'],
  saved: ['Product Analyst', 'Graduate Data Associate'],
  applications: [
    { name: 'Data Insights Graduate', status: 'Screening' },
    { name: 'Junior Product Analyst', status: 'Interview' },
    { name: 'Operations Analyst', status: 'Applied' }
  ],
  opportunities: [
    {
      id: 1,
      title: 'Product Analyst',
      company: 'Sentech Digital',
      track: 'Product',
      type: 'Job',
      location: 'Johannesburg',
      match: 92,
      summary: 'Support product discovery, experimentation, and insight delivery across growth and retention initiatives.',
      requirements: ['SQL', 'Analytics', 'Stakeholder Management'],
      saved: true
    },
    {
      id: 2,
      title: 'Graduates Data Associate',
      company: 'BriteMotive',
      track: 'Data',
      type: 'Graduate',
      location: 'Cape Town',
      match: 88,
      summary: 'Turn data into clear dashboards and operational insights for a multi-brand retail team.',
      requirements: ['Excel', 'Power BI', 'Communication'],
      saved: true
    },
    {
      id: 3,
      title: 'Operations Learnership',
      company: 'OpenRoad Logistics',
      track: 'Operations',
      type: 'Learnership',
      location: 'Durban',
      match: 76,
      summary: 'Learn how operations teams improve service quality, planning, and supplier coordination.',
      requirements: ['Project Coordination', 'Data Analysis', 'Problem Solving'],
      saved: false
    },
    {
      id: 4,
      title: 'Junior Software Engineer',
      company: 'NexaLabs',
      track: 'Software',
      type: 'Job',
      location: 'Remote',
      match: 71,
      summary: 'Collaborate with product and design teams to build accessible experiences and internal tools.',
      requirements: ['JavaScript', 'Git', 'Problem Solving'],
      saved: false
    }
  ],
  completed: false
};

const elements = {
  profileForm: document.getElementById('profileForm'),
  onboardingForm: document.getElementById('onboardingForm'),
  onboardingModal: document.getElementById('onboardingModal'),
  startOnboardingBtn: document.getElementById('startOnboardingBtn'),
  closeOnboardingBtn: document.getElementById('closeOnboardingBtn'),
  profileCompletionBadge: document.getElementById('profileCompletionBadge'),
  readinessBar: document.getElementById('readinessBar'),
  readyScore: document.getElementById('ready-score'),
  skillsList: document.getElementById('skillsList'),
  newSkillInput: document.getElementById('newSkillInput'),
  addSkillBtn: document.getElementById('addSkillBtn'),
  opportunityList: document.getElementById('opportunityList'),
  trackFilter: document.getElementById('trackFilter'),
  typeFilter: document.getElementById('typeFilter'),
  priorityList: document.getElementById('priorityList'),
  savedList: document.getElementById('savedList'),
  applicationList: document.getElementById('applicationList'),
  resetDemoBtn: document.getElementById('resetDemoBtn'),
  statReadiness: document.getElementById('stat-readiness'),
  statSaved: document.getElementById('stat-saved'),
  statApps: document.getElementById('stat-apps')
};

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultState));
    return structuredClone(defaultState);
  }

  try {
    return { ...structuredClone(defaultState), ...JSON.parse(raw) };
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultState));
    return structuredClone(defaultState);
  }
}

let state = loadState();

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function calculateProfileCompletion() {
  const profile = state.profile;
  const fields = [
    profile.fullName,
    profile.careerInterest,
    profile.summary,
    profile.education,
    profile.status
  ];
  const completed = fields.filter(Boolean).length;
  return Math.round((completed / fields.length) * 100);
}

function calculateReadiness() {
  const skillSet = new Set(state.skills.map((s) => s.toLowerCase()));
  const matchedSkills = state.opportunities.filter((op) => op.saved).reduce((count, op) => {
    return count + op.requirements.filter((skill) => skillSet.has(skill.toLowerCase())).length;
  }, 0);

  const score = Math.min(97, 54 + matchedSkills * 8 + (state.skills.length > 4 ? 8 : 0));
  return Math.max(62, Math.round(score));
}

function renderProfileForm() {
  Object.entries(state.profile).forEach(([key, value]) => {
    const input = elements.profileForm.elements.namedItem(key);
    if (input) {
      input.value = value;
    }
  });
}

function renderSkills() {
  elements.skillsList.innerHTML = '';

  state.skills.forEach((skill, index) => {
    const pill = document.createElement('div');
    pill.className = 'skill-pill';
    pill.innerHTML = `
      <span>${skill}</span>
      <button type="button" data-index="${index}" aria-label="Remove ${skill}">×</button>
    `;
    elements.skillsList.appendChild(pill);
  });

  elements.skillsList.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = Number(btn.dataset.index);
      state.skills.splice(index, 1);
      saveState();
      renderApp();
    });
  });
}

function renderOpportunities() {
  const trackValue = elements.trackFilter.value;
  const typeValue = elements.typeFilter.value;

  const filtered = state.opportunities.filter((opportunity) => {
    const trackMatch = trackValue === 'all' || opportunity.track === trackValue;
    const typeMatch = typeValue === 'all' || opportunity.type === typeValue;
    return trackMatch && typeMatch;
  });

  elements.opportunityList.innerHTML = '';

  filtered.forEach((opportunity) => {
    const card = document.createElement('article');
    card.className = 'opportunity-card';
    card.innerHTML = `
      <div class="panel-header">
        <h3>${opportunity.title}</h3>
        <span class="badge neutral">${opportunity.match}% match</span>
      </div>
      <div class="meta-row">
        <span class="meta-pill">${opportunity.company}</span>
        <span class="meta-pill">${opportunity.track}</span>
        <span class="meta-pill">${opportunity.type}</span>
      </div>
      <p>${opportunity.summary}</p>
      <div class="requirements">
        ${opportunity.requirements.map((req) => `<span>${req}</span>`).join('')}
      </div>
      <div class="opportunity-actions">
        <button class="primary-btn small" data-action="apply" data-id="${opportunity.id}">Apply</button>
        <button class="ghost-btn" data-action="toggle-save" data-id="${opportunity.id}">
          ${opportunity.saved ? 'Unsave' : 'Save'}
        </button>
      </div>
    `;
    elements.opportunityList.appendChild(card);
  });

  elements.opportunityList.querySelectorAll('[data-action="toggle-save"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const opp = state.opportunities.find((item) => item.id === id);
      if (!opp) return;
      opp.saved = !opp.saved;
      saveState();
      renderApp();
    });
  });

  elements.opportunityList.querySelectorAll('[data-action="apply"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const opp = state.opportunities.find((item) => item.id === id);
      if (!opp) return;
      const exists = state.applications.some((item) => item.name === opp.title);
      if (!exists) {
        state.applications.unshift({ name: opp.title, status: 'Applied' });
      }
      saveState();
      renderApp();
    });
  });
}

function renderDashboard() {
  const readiness = calculateReadiness();
  const completion = calculateProfileCompletion();

  elements.readinessBar.style.width = `${readiness}%`;
  elements.readyScore.textContent = `${readiness}%`;
  elements.profileCompletionBadge.textContent = `${completion}% complete`;
  elements.statReadiness.textContent = `${readiness}%`;
  elements.statSaved.textContent = String(state.opportunities.filter((op) => op.saved).length);
  elements.statApps.textContent = String(state.applications.length);

  const priorities = [
    `Strengthen ${state.skills[0] || 'core'} capabilities for your target roles`,
    'Refine your professional summary to match your ideal career path',
    'Apply to at least 3 matching opportunities this week',
    'Build a portfolio proof point aligned with your strengths'
  ];

  elements.priorityList.innerHTML = priorities.map((item) => `<li>${item}</li>`).join('');

  const savedItems = state.opportunities.filter((op) => op.saved);
  elements.savedList.innerHTML = savedItems.length
    ? savedItems.map((item) => `
      <div class="compact-item">
        <h4>${item.title}</h4>
        <p>${item.company} · ${item.type}</p>
      </div>
    `).join('')
    : '<div class="compact-item"><p>No saved roles yet.</p></div>';

  elements.applicationList.innerHTML = state.applications.length
    ? state.applications.map((item) => `
      <div class="compact-item">
        <h4>${item.name}</h4>
        <p>Status: ${item.status}</p>
      </div>
    `).join('')
    : '<div class="compact-item"><p>No applications yet.</p></div>';
}

function renderApp() {
  renderProfileForm();
  renderSkills();
  renderDashboard();
  renderOpportunities();
}

function handleProfileSubmit(event) {
  event.preventDefault();
  const formData = new FormData(elements.profileForm);
  state.profile = Object.fromEntries(formData.entries());
  saveState();
  renderApp();
}

function handleOnboardingSubmit(event) {
  event.preventDefault();
  const formData = new FormData(elements.onboardingForm);
  state.profile = {
    fullName: formData.get('name'),
    careerInterest: formData.get('interest'),
    summary: formData.get('summary'),
    education: state.profile.education || 'Qualification pending',
    status: 'Open to work'
  };
  state.completed = true;
  saveState();
  elements.onboardingModal.classList.add('hidden');
  renderApp();
}

function initEvents() {
  elements.profileForm.addEventListener('submit', handleProfileSubmit);
  elements.onboardingForm.addEventListener('submit', handleOnboardingSubmit);
  elements.startOnboardingBtn.addEventListener('click', () => elements.onboardingModal.classList.remove('hidden'));
  elements.closeOnboardingBtn.addEventListener('click', () => elements.onboardingModal.classList.add('hidden'));

  elements.addSkillBtn.addEventListener('click', () => {
    const skill = elements.newSkillInput.value.trim();
    if (!skill) return;
    if (!state.skills.includes(skill)) {
      state.skills.push(skill);
      saveState();
      renderApp();
    }
    elements.newSkillInput.value = '';
  });

  elements.trackFilter.addEventListener('change', renderOpportunities);
  elements.typeFilter.addEventListener('change', renderOpportunities);

  document.getElementById('jumpToProfileBtn').addEventListener('click', () => {
    document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('mockPrivacyBtn').addEventListener('click', () => {
    const privacyBtn = document.getElementById('mockPrivacyBtn');
    const current = privacyBtn.textContent.includes('Public') ? 'Private profile' : 'Public profile';
    privacyBtn.textContent = `Privacy: ${current}`;
  });

  document.getElementById('resetDemoBtn').addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultState));
    state = loadState();
    renderApp();
  });
}

function init() {
  initEvents();
  if (!state.completed) {
    elements.onboardingModal.classList.remove('hidden');
  }
  renderApp();
}

init();

window.addEventListener('beforeunload', saveState);
