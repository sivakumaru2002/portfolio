import './App.css'

const stats = [
  { value: '2+', label: 'Years in cloud and DevOps execution' },
  { value: '5', label: 'Technical publications on Medium' },
  { value: '24/7', label: 'Production reliability mindset' },
  { value: '8.986', label: 'CGPA in Computer Science Engineering' },
]

const impactAreas = [
  'Terraform-led environment provisioning and CI/CD automation.',
  'Kubernetes delivery across Helm, Istio, Azure, and K3s.',
  'Identity implementation with Keycloak, Azure AD B2C, and Microsoft Graph.',
  'Release automation for web and mobile platforms through Azure DevOps.',
]

const recruiterSignals = [
  'SRE & Cloud Engineer with live production delivery experience.',
  'Strong fit for Cloud Engineer, DevOps Engineer, Platform Engineer, and SRE roles.',
  'Depth across infrastructure automation, Kubernetes operations, and identity platforms.',
  'Visible engineering footprint through technical writing and shipped work.',
]

const topSkills = [
  'Azure',
  'Kubernetes',
  'Terraform',
  'Helm',
  'Istio',
  'Azure DevOps',
  'Keycloak',
  'Azure AD B2C',
  'Docker Swarm',
  'K3s',
]

const experience = [
  {
    period: '03/2024 - Present',
    role: 'SRE & Cloud Engineer',
    company: 'Peninsular Research Operation India',
    achievements: [
      'Automated infrastructure deployments with Terraform, bundling environment setup and CI/CD pipelines into a single repeatable execution.',
      'Managed Kubernetes workloads with Helm and Istio to improve release reliability and deployment speed.',
      'Configured Azure Front Door with custom domains, caching, and routing rules for production delivery.',
      'Deployed Docker Swarm workloads on Linux servers and built Bash-based K3s installation automation.',
      'Implemented Keycloak authentication, Azure AD B2C SUSI customization, Strapi hosting, and mobile delivery pipelines for Play Store and App Store releases.',
    ],
  },
  {
    period: '03/2024 - 06/2024',
    role: 'Software Developer Intern',
    company: 'Peninsular Research Operation India',
    achievements: [
      'Built reusable Angular components integrated with .NET APIs, reducing UI latency by 20%.',
      'Developed an Outlook extension with Microsoft Graph API for centralized meeting room booking across organizations.',
    ],
  },
]

const projects = [
  {
    title: 'IaC Deployment Framework',
    summary: 'Terraform architecture that provisions full environments and delivery pipelines in one orchestrated run.',
    tags: ['Terraform', 'Azure', 'CI/CD'],
  },
  {
    title: 'GPMD Platform',
    summary: 'Implemented Keycloak authentication across UI and APIs to secure enterprise access patterns.',
    tags: ['Keycloak', 'Identity', 'Platform Security'],
  },
  {
    title: 'Outlook Meeting Room Extension',
    summary: 'Cross-organization booking workflow powered by Microsoft Graph API for operational efficiency.',
    tags: ['Microsoft Graph', 'Outlook', 'Productivity'],
  },
  {
    title: 'Reward Rally',
    summary: 'Automated Azure AD B2C app registration workflow to streamline onboarding and tenant setup.',
    tags: ['Azure AD B2C', 'Automation', 'Identity'],
  },
  {
    title: '.NET Core Modernization',
    summary: 'Upgraded enterprise applications from .NET Core 4 to .NET Core 8 to improve security, performance, and maintainability.',
    tags: ['.NET 8', 'Modernization', 'Performance'],
  },
]

const skillGroups = [
  {
    title: 'Cloud & DevOps',
    items: ['Azure', 'Kubernetes', 'Helm', 'Istio', 'Terraform', 'Docker Swarm', 'K3s', 'Azure DevOps'],
  },
  {
    title: 'Frameworks & Platforms',
    items: ['Angular', 'React', 'Ionic', 'Node.js', '.NET Core 8', 'Strapi'],
  },
  {
    title: 'Identity & Data',
    items: ['Keycloak', 'Azure AD B2C', 'Microsoft Graph API', 'MongoDB', 'MySQL', 'SQL Server'],
  },
  {
    title: 'Languages & Systems',
    items: ['Python', 'JavaScript', 'SQL', 'Java', 'C', 'C++', 'C#', 'Bash', 'Linux Administration'],
  },
]

const publications = [
  {
    title: 'Deploying OpenMetadata on Docker Swarm (Step-by-Step Guide)',
    date: 'Apr 2026',
    href: 'https://medium.com/@sivakumar_2002/deploying-openmetadata-on-docker-swarm-step-by-step-guide-c855f1184867',
    summary: 'A practical deployment walkthrough for orchestrating OpenMetadata with PostgreSQL, Elasticsearch, NGINX, and Portainer on Docker Swarm.',
  },
  {
    title: 'Azure AD B2C: Phone-Based Sign-Up & Sign-In Using Custom Policies',
    date: 'Jan 2026',
    href: 'https://medium.com/@sivakumar_2002/azure-ad-b2c-phone-based-sign-up-sign-in-using-custom-policies-e01bdd879ff2',
    summary: 'Explains how to implement PH-SUSI with Azure AD B2C custom policies for a branded, mobile-first authentication flow.',
  },
  {
    title: 'One-Click K3s Installation on Ubuntu Server (With Helm, Istio & ACR)',
    date: 'Jan 2026',
    href: 'https://medium.com/@sivakumar_2002/one-click-k3s-installation-on-ubuntu-server-with-helm-istio-acr-210d789330ab',
    summary: 'Shows how to bootstrap K3s, Helm, Istio, and Azure Container Registry integration with a minimal automated setup.',
  },
  {
    title: 'Efficient Data Migration in Go Using Goroutines',
    date: 'Nov 2025',
    href: 'https://medium.com/@sivakumar_2002/efficient-data-migration-in-go-using-goroutines-270ff9984daf',
    summary: 'Demonstrates concurrent migration pipelines in Go for high-throughput data movement and platform reliability.',
  },
  {
    title: 'A Simple Guide to Concurrency in Go',
    date: 'Nov 2025',
    href: 'https://medium.com/@sivakumar_2002/a-simple-guide-to-concurrency-in-go-6cf7997b9b84',
    summary: 'Introduces goroutines and wait groups through approachable examples aimed at scalable backend engineering.',
  },
  {
    title: 'Deploying MinIO on Kubernetes with Custom Domain',
    date: 'Jun 2025',
    href: 'https://medium.com/@sivakumar_2002/deploying-minio-on-kubernetes-with-custom-domain-da0270bd828e',
    summary: 'Covers secure MinIO deployment on Kubernetes with ingress, TLS, and custom-domain routing.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">SK</span>
          <span>
            <strong>Siva Kumar U</strong>
            <small>Cloud & DevOps Engineer</small>
          </span>
        </a>
        <nav className="topnav" aria-label="Primary">
          <a href="#summary">Summary</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero-section panel reveal">
          <div className="hero-copy">
            <p className="eyebrow">Cloud Engineer | DevOps | Kubernetes | Azure</p>
            <h1>Cloud and DevOps for scale.</h1>
            <p className="hero-summary">
              Siva Kumar U. Cloud & DevOps Engineer with hands-on experience in Kubernetes,
              Terraform, CI/CD, Azure, and identity systems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:sivakumaru2002@gmail.com">
                Schedule a recruiter conversation
              </a>
              <a className="button button-secondary" href="https://www.linkedin.com/in/siva-kumar-u-076318234" target="_blank" rel="noreferrer">
                View LinkedIn
              </a>
            </div>
            <ul className="hero-meta" aria-label="Key profile details">
              <li>Chennai, India</li>
              <li>Peninsular Research Operation India</li>
              <li>Azure, Kubernetes, Terraform, Identity</li>
            </ul>
          </div>

          <div className="hero-visual">
            <div className="canvas-frame" aria-hidden="true">
              <div className="royal-stage">
                <div className="aura-ring aura-ring-one"></div>
                <div className="aura-ring aura-ring-two"></div>
                <div className="crown-shadow"></div>
                <div className="crown-model">
                  <span className="crown-peak crown-peak-left"></span>
                  <span className="crown-peak crown-peak-mid-left"></span>
                  <span className="crown-peak crown-peak-center"></span>
                  <span className="crown-peak crown-peak-mid-right"></span>
                  <span className="crown-peak crown-peak-right"></span>
                  <span className="crown-band"></span>
                  <span className="crown-gem crown-gem-left"></span>
                  <span className="crown-gem crown-gem-center"></span>
                  <span className="crown-gem crown-gem-right"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="summary" className="two-column reveal recruiter-priority">
          <article className="panel narrative-card">
            <p className="section-kicker">Professional Summary</p>
            <h2>Cloud Engineer with DevOps and platform depth.</h2>
            <p>
              2 years of experience across cloud infrastructure, deployment automation, Kubernetes
              operations, and enterprise identity delivery. Strong hands in Azure, Terraform, Helm,
              Istio, Azure DevOps, Keycloak, and Azure AD B2C.
            </p>
            <div className="summary-points">
              <div className="summary-pill">Best fit: Cloud Engineer / DevOps Engineer / SRE</div>
              <div className="summary-pill">Strengths: Platform automation, Kubernetes, Identity</div>
            </div>
          </article>

          <article className="panel recruiter-card">
            <p className="section-kicker">Career Highlights</p>
            <div className="recruiter-list">
              {recruiterSignals.map((signal) => (
                <div key={signal} className="recruiter-item">
                  <p>{signal}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="stats-grid reveal" aria-label="Highlights">
          {stats.map((item) => (
            <article key={item.label} className="stat-card panel">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section id="experience" className="content-section reveal">
          <div className="section-heading">
            <p className="section-kicker">Experience</p>
            <h2>Infrastructure, Kubernetes, identity.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.role}-${item.period}`} className="timeline-card panel">
                <div className="timeline-meta">
                  <span>{item.period}</span>
                  <p>{item.company}</p>
                </div>
                <div>
                  <h3>{item.role}</h3>
                  <ul className="detail-list">
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section reveal recruiter-skills-section">
          <div className="section-heading">
            <p className="section-kicker">Skills Snapshot</p>
            <h2>Core stack.</h2>
          </div>
          <div className="two-column recruiter-skills-layout">
            <article className="panel focus-card">
              <p className="section-kicker">Core Impact</p>
              <div className="impact-list">
                {impactAreas.map((area) => (
                  <div key={area} className="impact-item">
                    <span className="impact-dot"></span>
                    <p>{area}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel skill-priority-card">
              <p className="section-kicker">Top Skills Recruiters Will See</p>
              <div className="tag-row dense priority-tags">
                {topSkills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card panel">
                <h3>{group.title}</h3>
                <div className="tag-row dense">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section reveal">
          <div className="section-heading">
            <p className="section-kicker">Selected Work</p>
            <h2>Selected work.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card panel">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="three-column reveal">
          <article className="panel education-card">
            <p className="section-kicker">Education</p>
            <h3>B.E. Computer Science Engineering</h3>
            <p>Sri Venkateswara Engineering College, Chennai</p>
            <strong>CGPA 8.986</strong>
          </article>
          <article className="panel education-card">
            <p className="section-kicker">Direct Reach</p>
            <h3>Open for recruiter outreach</h3>
            <p>sivakumaru2002@gmail.com</p>
            <p>+91 8667564173</p>
          </article>
          <article className="panel education-card">
            <p className="section-kicker">Profiles</p>
            <h3>Public engineering footprint</h3>
            <div className="profile-links">
              <a href="https://github.com/sivakumaru2002" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://medium.com/@sivakumar_2002" target="_blank" rel="noreferrer">Medium</a>
              <a href="https://www.linkedin.com/in/siva-kumar-u-076318234" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </article>
        </section>

        <section id="publications" className="content-section reveal">
          <div className="section-heading">
            <p className="section-kicker">Publications</p>
            <h2>Writing that reinforces platform depth, operational clarity, and hands-on credibility.</h2>
          </div>
          <div className="publication-grid">
            {publications.map((article) => (
              <a key={article.title} className="publication-card panel" href={article.href} target="_blank" rel="noreferrer">
                <span className="publication-date">{article.date}</span>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <span className="publication-link">Read on Medium</span>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="cta-section panel reveal">
          <div className="cta-copy">
            <p className="section-kicker">Recruiter CTA</p>
            <h2>Let&apos;s build reliable cloud platforms.</h2>
            <p>
              Open to Cloud Engineer, DevOps Engineer, Platform Engineer, and SRE opportunities
              across infrastructure automation, Kubernetes delivery, and identity systems.
            </p>
            <div className="cta-mini-grid">
              <div className="cta-mini-card">
                <span className="cta-mini-label">Email</span>
                <strong>sivakumaru2002@gmail.com</strong>
              </div>
              <div className="cta-mini-card">
                <span className="cta-mini-label">Location</span>
                <strong>Chennai, India</strong>
              </div>
              <div className="cta-mini-card">
                <span className="cta-mini-label">Focus</span>
                <strong>Azure, Kubernetes, Terraform</strong>
              </div>
            </div>
          </div>
          <div className="cta-actions cta-actions-compact">
            <a className="cta-link-card cta-link-primary" href="mailto:sivakumaru2002@gmail.com">
              <span className="cta-link-label">Primary Contact</span>
              <strong>Email Siva Kumar</strong>
            </a>
            <a className="cta-link-card" href="https://github.com/sivakumaru2002" target="_blank" rel="noreferrer">
              <span className="cta-link-label">Work Samples</span>
              <strong>Review GitHub</strong>
            </a>
            <a className="cta-link-card" href="https://www.linkedin.com/in/siva-kumar-u-076318234" target="_blank" rel="noreferrer">
              <span className="cta-link-label">Professional Profile</span>
              <strong>Open LinkedIn</strong>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
