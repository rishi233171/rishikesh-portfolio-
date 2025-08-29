import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="portfolio-container">
          <div className="hero-section">
            <h1 className="name-title">Rishikesh Mohapatra</h1>
            <h2 className="job-title">Lead Supply Chain Data Analyst</h2>
            <p className="tagline">15+ Years of Data Analytics Excellence</p>
          </div>
          
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="metric-card">
              <h3>$5M+</h3>
              <p>Cost Savings</p>
            </div>
            <div className="metric-card">
              <h3>99.9%</h3>
              <p>Accuracy Rate</p>
            </div>
            <div className="metric-card">
              <h3>500+</h3>
              <p>Projects</p>
            </div>
          </div>

          <div className="skills-section">
            <h3>Technical Expertise</h3>
            <div className="skills-grid">
              <span className="skill-tag">Power BI (95%)</span>
              <span className="skill-tag">SQL (90%)</span>
              <span className="skill-tag">Python (85%)</span>
              <span className="skill-tag">Tableau (92%)</span>
              <span className="skill-tag">Excel/VBA (98%)</span>
              <span className="skill-tag">Process Automation (93%)</span>
            </div>
          </div>

          <div className="achievements-section">
            <h3>Key Achievements</h3>
            <div className="achievement-grid">
              <div className="achievement-card">
                <h4>Process Automation</h4>
                <p>Automated Monthly SRM Pack across 15+ countries, eliminating 240+ manual hours annually</p>
              </div>
              <div className="achievement-card">
                <h4>Cost Optimization</h4>
                <p>Implemented USD Pay Cycle Optimization achieving $25K annual savings</p>
              </div>
              <div className="achievement-card">
                <h4>Dashboard Excellence</h4>
                <p>Created Production Dashboards increasing operational visibility by 90%</p>
              </div>
            </div>
          </div>

          <div className="contact-section">
            <h3>Get In Touch</h3>
            <div className="contact-info">
              <p>📧 rishi233171@gmail.com</p>
              <p>📱 +91-7483532369</p>
              <p>📍 Bhubaneswar, Odisha</p>
              <p>🔗 LinkedIn: linkedin.com/in/rishikesh-mohapatra</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
