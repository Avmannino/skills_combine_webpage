import { useState } from "react";
import "./App.css";

const REGISTRATION_URL =
  "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=4099945";

const BASE_URL = import.meta.env.BASE_URL;

const ASSETS = {
  wingsLogo: `${BASE_URL}wings-logo.png`,
  driveLogo: `${BASE_URL}drive-logo.png`,
  sensors: `${BASE_URL}drive-sensors.png`,
  sensorsTwo: `${BASE_URL}sensor-two.png`,
  sensorsThree: `${BASE_URL}sensor-three.png`,
  qrCode: `${BASE_URL}QR_Registration.png`,
  dataView: `${BASE_URL}data-view.png`,
};

const technicalMetrics = [
  "Top Speed",
  "Speed Bursts",
  "Agility",
  "Pace",
  "Acceleration",
  "Deceleration",
];

const schedules = [
  {
    division: "Peewee",
    age: "U12",
    accent: "red",
    sessions: [
      {
        day: "Day 1",
        date: "Sat 9/5",
        time: "10:30am–11:30am",
        type: "Combine testing with data collection",
      },
      {
        day: "Day 2",
        date: "Sun 9/6",
        time: "10:30am–11:30am",
        type: "Skills practice with data collection",
      },
      {
        day: "Day 3",
        date: "Mon 9/7",
        time: "10:30am–11:30am",
        type: "Personalized data report plus skills practice & game play",
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
        date: "Sat 9/5",
        time: "11:40am–12:40pm",
        type: "Combine testing with data collection",
      },
      {
        day: "Day 2",
        date: "Sun 9/6",
        time: "11:40am–12:40pm",
        type: "Skills practice with data collection",
      },
      {
        day: "Day 3",
        date: "Mon 9/7",
        time: "11:40am–12:40pm",
        type: "Personalized data report plus skills practice & game play",
      },
    ],
  },
];

const pricing = {
  division: "Peewee & Bantam",
  age: "U12 & U14",
};

const pricingTiers = [
  { label: "1 Day", price: "$90" },
  { label: "2 Days", price: "$160" },
  { label: "3 Days", price: "$210" },
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
            <AssetImage
              src={ASSETS.wingsLogo}
              alt="Wings Arena"
              placeholderTitle="Wings Arena"
              placeholderSubtitle="Logo"
              className="hero-logo"
            />

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
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="analytics-preview">
              <div className="analytics-preview-top">
                <div>
                  <h2>Your Game, Measured.</h2>
                </div>
              </div>

              <AssetImage
                src={ASSETS.dataView}
                alt="DRIVE Hockey Analytics dashboard showing player tracking data"
                placeholderTitle="Analytics Dashboard"
                placeholderSubtitle="Add your DRIVE dashboard screenshot here"
                className="hero-analytics-image"
              />

              <div className="hero-tagline">
                <span>Test.</span>
                <span>Train.</span>
                <span>Compete.</span>
              </div>
            </div>

            <p className="hero-visual-note">
              Exclusive performance-tracking technology,
              only at Wings Arena.
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

          <h2>Every Player Is Measured For:</h2>
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
                Visualize your game{" "}
                <span>By the Numbers.</span>
              </h2>
            </div>
          </div>

          <div className="sensor-feature">
            <div className="sensor-image-wrap">
              <AssetImage
                src={ASSETS.sensors}
                alt="DRIVE performance sensors"
                placeholderTitle="Sensor Image"
                placeholderSubtitle="Add your DRIVE sensor photo here"
                className="sensor-photo sensor-photo-1"
              />

              <AssetImage
                src={ASSETS.sensorsTwo}
                alt="DRIVE performance sensors"
                placeholderTitle="Sensor Image"
                placeholderSubtitle="Add your DRIVE sensor photo here"
                className="sensor-photo sensor-photo-2"
              />

              <AssetImage
                src={ASSETS.sensorsThree}
                alt="DRIVE performance sensors"
                placeholderTitle="Sensor Image"
                placeholderSubtitle="Add your DRIVE sensor photo here"
                className="sensor-photo sensor-photo-3"
              />
            </div>

            <div className="sensor-copy">
              <h3>Get NHL-Level Data Analytics</h3>

              <ul className="sensor-day-list">
                <li>
                  <strong>Day 1:</strong> Combine testing with
                  data collection
                </li>

                <li>
                  <strong>Day 2:</strong> Skills practice with
                  data collection
                </li>

                <li>
                  <strong>Day 3:</strong> Personalized data
                  report plus skills practice & game play
                </li>
              </ul>

              <p className="sensor-day-note">
                *Must sign up for Day 1 or Day 2 for data
                access
              </p>

              <p>
                Players wear DRIVE sensors during designated
                testing and training sessions. The collected
                information provides another way to
                understand skating performance and physical
                output throughout the clinic.
              </p>

              <p>
                Fixed sensor nodes mounted around the rink
                track player position and movement in real
                time, working alongside the wearable sensors
                to build a complete picture of what happens
                on the ice.
              </p>

              <div className="sensor-highlights">
                <span>Open to all!</span>
                <span>Goalies are free!</span>
                <span>
                  Coached by Wings Arena Professional
                  Coaches
                </span>
              </div>
            </div>
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
          <div className="section-heading">
            <h2>CLINIC SCHEDULE</h2>
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
            <h2>Pricing & Registration</h2>
          </div>

          <div className="pricing-grid">
            <article className="price-card">
              <div className="price-card-top">
                <span>{pricing.age}</span>

                <h3>{pricing.division}</h3>
              </div>

              <div className="price-tiers">
                {pricingTiers.map((tier) => (
                  <div
                    className="price-tier"
                    key={tier.label}
                  >
                    <strong>{tier.price}</strong>

                    <span>{tier.label}</span>
                  </div>
                ))}
              </div>

              <div className="price-card-body">
                <div className="price-qr">
                  <h4>Scan or Click to Register</h4>

                  <div className="price-qr-wrap">
                    <AssetImage
                      src={ASSETS.qrCode}
                      alt="Registration QR code"
                      placeholderTitle="QR Code"
                      placeholderSubtitle="Add registration QR here"
                      className="qr-image"
                    />
                  </div>
                </div>
              </div>

              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="price-button"
              >
                Register Now
                <ArrowIcon />
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;