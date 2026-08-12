import { useState } from "react";
import "./App.css";

/*
============================================================
EDITABLE EVENT INFORMATION
============================================================
Update these values once the final dates, pricing,
registration URL, and other clinic details are confirmed.
*/

const EVENT = {
  name: "Skills Combine Clinic",
  location: "Wings Arena",
  audience: "Peewee & Bantam",
  registrationUrl: "#registration",
};

const BASE_URL = import.meta.env.BASE_URL;

const ASSETS = {
  wingsLogo: `${BASE_URL}wings-logo.png`,
  driveLogo: `${BASE_URL}drive-logo.png`,
  sensors: `${BASE_URL}drive-sensors.jpg`,
  qrCode: `${BASE_URL}registration-qr.png`,
  dataView: `${BASE_URL}data-view.png`,
};

const combineFacts = [
  {
    value: "3",
    label: "Days",
    detail: "Complete Labor Day weekend clinic",
  },
  {
    value: "8",
    label: "Hours On Ice",
    detail: "Testing, training, and skill development",
  },
  {
    value: "2",
    label: "Hours Off Ice",
    detail: "Performance-focused training",
  },
  {
    value: "Daily",
    label: "Analysis",
    detail: "Performance data reviewed throughout the clinic",
  },
  {
    value: "Day 3",
    label: "Player Data",
    detail: "Complete combine results provided",
  },
];

const technicalMetrics = [
  "Top Speed",
  "Speed Bursts",
  "Agility",
  "Pace",
  "Acceleration",
  "Deceleration",
];

/*
These are temporary performance categories.

Once the final DRIVE measurement list is provided,
replace these titles and descriptions with the exact
metrics being captured during the clinic.
*/

const metrics = [
  {
    title: "Skating Speed",
    text: "See how a player performs during high-speed skating efforts and evaluate their overall skating speed throughout the combine.",
  },
  {
    title: "Acceleration",
    text: "Measure how quickly a player can generate speed during structured skating and testing sessions.",
  },
  {
    title: "Movement Profile",
    text: "Use sensor data to better understand how a player moves during drills instead of relying only on visual observation.",
  },
  {
    title: "Work Rate",
    text: "Evaluate the intensity and volume of a player's movement throughout different portions of the clinic.",
  },
  {
    title: "Skill Testing",
    text: "Combine traditional hockey skill evaluation with objective performance measurements captured during testing.",
  },
  {
    title: "Player Results",
    text: "Finish the clinic with performance data that helps identify strengths, trends, and areas for continued development.",
  },
];

const processSteps = [
  {
    title: "Wear the Sensors",
    text: "Players are equipped with DRIVE performance sensors during designated combine sessions.",
  },
  {
    title: "Perform",
    text: "Players complete structured skating, skill, and testing sessions while performance information is captured.",
  },
  {
    title: "Analyze",
    text: "The collected measurements are translated into useful performance information throughout the clinic.",
  },
  {
    title: "Get Your Data",
    text: "Players receive their complete combine data on Day 3 to better understand how they performed.",
  },
];

const schedules = [
  {
    division: "Peewee",
    age: "U12",
    accent: "red",
    sessions: [
      {
        day: "Day 1",
        date: "Date TBD",
        time: "Time TBD",
        type: "On-Ice Testing",
      },
      {
        day: "Day 2",
        date: "Date TBD",
        time: "Time TBD",
        type: "Skills + Analysis",
      },
      {
        day: "Day 3",
        date: "Date TBD",
        time: "Time TBD",
        type: "Performance Session",
      },
    ],
  },
  {
    division: "Bantam",
    age: "U14",
    accent: "blue",
    sessions: [
      {
        day: "Day 1",
        date: "Date TBD",
        time: "Time TBD",
        type: "On-Ice Testing",
      },
      {
        day: "Day 2",
        date: "Date TBD",
        time: "Time TBD",
        type: "Skills + Analysis",
      },
      {
        day: "Day 3",
        date: "Date TBD",
        time: "Time TBD",
        type: "Performance Session",
      },
    ],
  },
];

const pricing = [
  {
    division: "Peewee",
    age: "U12",
    price: "TBD",
    description: "Full three-day Labor Day Skills Combine Clinic.",
  },
  {
    division: "Bantam",
    age: "U14",
    price: "TBD",
    description: "Full three-day Labor Day Skills Combine Clinic.",
  },
];

function AssetImage({
  src,
  alt,
  placeholderTitle,
  placeholderSubtitle,
  className = "",
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`asset-placeholder ${className}`}>
        <strong>{placeholderTitle}</strong>

        {placeholderSubtitle && (
          <span>{placeholderSubtitle}</span>
        )}
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="button-arrow"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  return (
    <main className="site-shell">
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="hero" id="top">
        <div className="hero-layout page-width">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              Labor Day Weekend
            </div>

            <h1>
              Skills Combine
              <span>Clinic</span>
            </h1>

            <div className="division-callout">
              <span>For</span>
              <strong>Peewee & Bantam Players</strong>
            </div>

            <p className="hero-description">
              Three days of hockey development, performance
              testing, and DRIVE Hockey Analytics at Wings
              Arena. Players train, compete, and leave with
              data that gives them another way to understand
              their game.
            </p>

            <div className="hero-actions">
              <a
                className="primary-button"
                href="#registration"
              >
                Registration Coming Soon
                <ArrowIcon />
              </a>

              <a
                className="text-button"
                href="#analytics"
              >
                See How the Data Works
              </a>
            </div>
          </div>

          <div className="analytics-preview">
            <div className="analytics-preview-top">
              <div>
                <span>Performance Analysis</span>
                <h2>Your Game. Measured.</h2>
              </div>
            </div>

            <div className="preview-metrics">
              <div>
                <strong>Speed</strong>
                <span>Measured</span>
              </div>

              <div>
                <strong>Acceleration</strong>
                <span>Measured</span>
              </div>

              <div>
                <strong>Movement</strong>
                <span>Measured</span>
              </div>
            </div>

            <AssetImage
              src={ASSETS.dataView}
              alt="DRIVE Hockey Analytics dashboard showing player tracking data"
              placeholderTitle="Analytics Dashboard"
              placeholderSubtitle="Add your DRIVE dashboard screenshot here"
              className="hero-analytics-image"
            />

            <p className="preview-note">
              Sample visualization. Final player reports will
              reflect the actual DRIVE metrics collected
              during the clinic.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          TECHNICAL METRICS
      ================================================== */}

      <section className="facts-section">
        <div className="facts-heading page-width">
          <span>DRIVE Performance Tracking</span>

          <h2>Every Player Is Measured On:</h2>
        </div>

        <div className="facts-grid page-width">
          {technicalMetrics.map((metric) => (
            <article
              className="fact"
              key={metric}
            >
              <h3>{metric}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* ==================================================
          INTRO
      ================================================== */}

      <section className="intro-section section-spacing">
        <div className="page-width intro-layout">
          <div className="section-heading">
            <h2>
              More than a
              <br />
              skills clinic.
            </h2>
          </div>

          <div className="intro-copy">
            <p className="lead-copy">
              The Labor Day Skills Combine Clinic adds
              objective performance data to the traditional
              hockey clinic experience.
            </p>

            <div className="clinic-format">
              <h3>3-Day Clinic Format</h3>

              <p className="clinic-format-times">
                <strong>Ice Times (all 3 days):</strong>{" "}
                PeeWee 10:30–11:30am | Bantam
                11:40am–12:40pm
              </p>

              <div className="clinic-format-days">
                <div className="clinic-format-day">
                  <span>Day 1</span>

                  <p>
                    <strong>Sat 9/5:</strong> Combine
                    testing with data collection
                  </p>
                </div>

                <div className="clinic-format-day">
                  <span>Day 2</span>

                  <p>
                    <strong>Sun 9/6:</strong> Skills
                    practice with data collection
                  </p>
                </div>

                <div className="clinic-format-day">
                  <span>Day 3</span>

                  <p>
                    <strong>Mon 9/7:</strong> Personalized
                    data report from Days 1 and 2, plus
                    skills practice and game play
                  </p>
                </div>
              </div>

              <p className="clinic-format-note">
                Sign up for 1, 2, or 3 days. Must attend
                Day 1 or Day 2 for data access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          ANALYTICS
      ================================================== */}

      <section
        className="analytics-section section-spacing"
        id="analytics"
      >
        <div className="page-width">
          <div className="analytics-heading">
            <div>
              <h2>
                Visualize your game
                <br />
                <span>By the Numbers.</span>
              </h2>
            </div>

            <p>
              DRIVE performance sensors add another layer to
              the clinic by measuring what happens during
              testing and translating it into useful player
              information.
            </p>
          </div>

          <div className="sensor-feature">
            <div className="sensor-image-wrap">
              <AssetImage
                src={ASSETS.sensors}
                alt="DRIVE performance sensors"
                placeholderTitle="Sensor Image"
                placeholderSubtitle="Add your DRIVE sensor photo here"
                className="sensor-photo"
              />
            </div>

            <div className="sensor-copy">
              <h3>
                From what coaches see
                <br />
                to what the data shows.
              </h3>

              <p>
                Players wear DRIVE sensors during designated
                testing and training sessions. The collected
                information provides another way to
                understand skating performance and physical
                output throughout the clinic.
              </p>

              <div className="sensor-data-strip">
                <div>
                  <span>Capture</span>
                  <strong>Player Movement</strong>
                </div>

                <div>
                  <span>Measure</span>
                  <strong>Performance</strong>
                </div>

                <div>
                  <span>Review</span>
                  <strong>Results</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="metrics-heading-row">
            <div>
              <h3>What We Measure</h3>
            </div>
          </div>

          <div className="metrics-list">
            {metrics.map((metric) => (
              <article
                className="metric-row"
                key={metric.title}
              >
                <h4>{metric.title}</h4>

                <p>{metric.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          HOW IT WORKS
      ================================================== */}

      <section className="process-section section-spacing">
        <div className="page-width">
          <div className="center-section-heading">
            <h2>How the Combine Works</h2>

            <p>
              The analytics process is integrated directly
              into the clinic rather than treated as a
              separate add-on.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article
                className="process-card"
                key={step.title}
              >
                <span className="process-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div className="combine-stats">
            {combineFacts.map((fact) => (
              <div
                className="combine-stat"
                key={fact.label}
              >
                <strong>{fact.value}</strong>

                <span>{fact.label}</span>

                <p>{fact.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SCHEDULE
      ================================================== */}

      <section
        className="schedule-section section-spacing"
        id="schedule"
      >
        <div className="page-width">
          <div className="split-section-heading">
            <div>
              <h2>
                Peewee & Bantam
                <br />
                Schedule
              </h2>
            </div>

            <p>
              Exact Labor Day weekend dates and session
              times will be added here once the final ice
              schedule is confirmed.
            </p>
          </div>

          <div className="schedule-grid">
            {schedules.map((schedule) => (
              <article
                className={`schedule-card ${schedule.accent}`}
                key={schedule.division}
              >
                <div className="schedule-card-heading">
                  <div>
                    <span>{schedule.age}</span>

                    <h3>{schedule.division}</h3>
                  </div>

                  <span className="schedule-status">
                    Schedule TBD
                  </span>
                </div>

                <div className="session-list">
                  {schedule.sessions.map((session) => (
                    <div
                      className="session-row"
                      key={`${schedule.division}-${session.day}`}
                    >
                      <strong>{session.day}</strong>

                      <div>
                        <span>{session.date}</span>

                        <small>{session.type}</small>
                      </div>

                      <span className="session-time">
                        {session.time}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          PRICING
      ================================================== */}

      <section
        className="pricing-section section-spacing"
        id="pricing"
      >
        <div className="page-width">
          <div className="center-section-heading">
            <h2>Clinic Pricing</h2>

            <p>
              Pricing will be added once final registration
              details are confirmed.
            </p>
          </div>

          <div className="pricing-grid">
            {pricing.map((option) => (
              <article
                className="price-card"
                key={option.division}
              >
                <div className="price-card-top">
                  <span>{option.age}</span>

                  <h3>{option.division}</h3>

                  <p>{option.description}</p>
                </div>

                <div className="price">
                  <strong>{option.price}</strong>
                </div>

                <div className="price-includes">
                  <h4>Clinic Includes</h4>

                  <p>3 days of clinic programming</p>
                  <p>8 hours of on-ice activity</p>
                  <p>2 hours of off-ice activity</p>
                  <p>Daily performance analysis</p>
                  <p>Player data provided on Day 3</p>
                </div>

                <a
                  href="#registration"
                  className="price-button"
                >
                  Registration Coming Soon
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          REGISTRATION
      ================================================== */}

      <section
        className="registration-section section-spacing"
        id="registration"
      >
        <div className="page-width registration-layout">
          <div className="registration-copy">
            <h2>
              Labor Day
              <br />
              Skills Combine
            </h2>

            <p>
              Registration details for the Skills Combine
              Clinic will be available here. Scan the QR
              code or use the registration button once
              enrollment opens.
            </p>

            <div className="registration-tags">
              <span>Peewee</span>
              <span>Bantam</span>
              <span>3-Day Clinic</span>
            </div>

            <a
              href={EVENT.registrationUrl}
              className="registration-button"
            >
              Registration Link Coming Soon
              <ArrowIcon />
            </a>
          </div>

          <div className="qr-panel">
            <h3>Scan to Register</h3>

            <div className="qr-wrap">
              <AssetImage
                src={ASSETS.qrCode}
                alt="Registration QR code"
                placeholderTitle="QR Code"
                placeholderSubtitle="Add registration QR here"
                className="qr-image"
              />
            </div>

            <div className="partner-lockup">
              <div className="partner-logo">
                <AssetImage
                  src={ASSETS.wingsLogo}
                  alt="Wings Arena"
                  placeholderTitle="Wings Arena"
                  placeholderSubtitle="Logo"
                  className="footer-logo"
                />
              </div>

              <span>+</span>

              <div className="partner-logo">
                <AssetImage
                  src={ASSETS.driveLogo}
                  alt="DRIVE Hockey Analytics"
                  placeholderTitle="DRIVE"
                  placeholderSubtitle="Logo"
                  className="footer-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;