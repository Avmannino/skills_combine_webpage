import { useState } from "react";
import "./App.css";

const REGISTRATION_URL =
  "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=4099945";

const DRIVE_URL = "https://drivehockey.com/";

const BASE_URL = import.meta.env.BASE_URL;

const ASSETS = {
  wingsLogo: `${BASE_URL}wings-logo.png`,
  driveLogo: `${BASE_URL}drive-logo.png`,
  sensors: `${BASE_URL}drive-sensors.png`,
  sensorsTwo: `${BASE_URL}sensor-two.png`,
  sensorsThree: `${BASE_URL}sensor-three.png`,
  qrCode: `${BASE_URL}QR_Registration.png`,
  dataView: `${BASE_URL}data-view.png`,
  metricsPdf: `${BASE_URL}DHA_Skating_Metrics_Explained.pdf`,
  goalieCoach: `${BASE_URL}miro.avif`,
};

const GOALIE_COACH = {
  name: "Miro Recicar",
  instagramUrl: "https://www.instagram.com/nyc_r_goaltending",
  instagramHandle: "@nyc_r_goaltending",
  websiteUrl: "https://www.nycrgoaltending.com/",
  websiteLabel: "nycrgoaltending.com",
};

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

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="inline-icon"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17.4"
        cy="6.6"
        r="1.1"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="inline-icon"
    >
      <path
        d="M9.5 14.5 14.5 9.5M11 7l1.6-1.6a3.5 3.5 0 0 1 5 5L16 12M13 17l-1.6 1.6a3.5 3.5 0 0 1-5-5L8 12"
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

            <div
              className="hero-message-strip"
              aria-label="Test, train, compete"
            >
              <span>Test.</span>
              <span>Train.</span>
              <span>Compete.</span>
            </div>

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

            <div className="drive-promo">
              <div className="powered-by">
                <span>Powered by</span>

                <a
                  href={DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit DRIVE Hockey Analytics"
                >
                  <AssetImage
                    src={ASSETS.driveLogo}
                    alt="DRIVE Hockey Analytics"
                    placeholderTitle="DRIVE"
                    placeholderSubtitle="Hockey Analytics"
                    className="powered-by-logo"
                  />
                </a>
              </div>

              <a
                className="drive-cta"
                href={DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="drive-cta-copy">
                  <strong>
                    Explore{" "}
                    <AssetImage
                      src={ASSETS.driveLogo}
                      alt="DRIVE"
                      placeholderTitle="DRIVE"
                      className="drive-cta-logo"
                    />{" "}
                    Hockey Analytics
                  </strong>
                  <span>
                    See the technology behind the data and learn
                    how DRIVE measures on-ice performance.
                  </span>
                </div>

                <span className="drive-cta-arrow">
                  <ArrowIcon />
                </span>
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

              <a
                className="metrics-pdf-link"
                href={ASSETS.metricsPdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="metrics-pdf-copy">
                  Click here to See the 9 key metrics you’ll
                  receive, why they matter, and how your results
                  compare to age-based percentile benchmarks.
                </span>

                <ArrowIcon />
              </a>

              <AssetImage
                src={ASSETS.dataView}
                alt="DRIVE Hockey Analytics dashboard showing player tracking data"
                placeholderTitle="Analytics Dashboard"
                placeholderSubtitle="Add your DRIVE dashboard screenshot here"
                className="hero-analytics-image"
              />
            </div>

            <div className="technology-callout">
              <span>The ONLY rink in the Tri-State Area</span>
              <strong>with this cutting-edge technology</strong>
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

          <div className="schedule-highlights">
            <span>Open to all!</span>
            <span>Limited Spots Available</span>
            <span>
              Coached by Wings Arena Professional Coaches
            </span>
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
          GOALIE COACHING
      ================================================== */}

      <section className="goalie-section section-spacing">
        <div className="page-width goalie-layout">
          <div className="goalie-photo">
            <AssetImage
              src={ASSETS.goalieCoach}
              alt={`Coach ${GOALIE_COACH.name}`}
              placeholderTitle="Coach Photo"
              placeholderSubtitle="Add goalie coach photo here"
              className="goalie-photo-img"
            />
          </div>

          <div className="goalie-copy">
            <span className="goalie-eyebrow">
              Goalie Development
            </span>

            <h2>
              Goalie Coaching with
              <br />
              {GOALIE_COACH.name}
            </h2>

            <p>
              On Sunday and Monday, Coach {GOALIE_COACH.name}{" "}
              joins the clinic to work exclusively with
              goalies. Each day starts with 20 minutes
              dedicated one-on-one with{" "}
              {GOALIE_COACH.name.split(" ")[0]}, then goalies
              join the rest of the group for game-like
              situation drills, coached by{" "}
              {GOALIE_COACH.name.split(" ")[0]}.
            </p>

            <div className="goalie-links">
              <a
                className="goalie-link"
                href={GOALIE_COACH.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
                <span>{GOALIE_COACH.instagramHandle}</span>
              </a>

              <a
                className="goalie-link"
                href={GOALIE_COACH.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon />
                <span>{GOALIE_COACH.websiteLabel}</span>
              </a>
            </div>
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

                <p className="registration-limit">
                  <span
                    className="limit-dot"
                    aria-hidden="true"
                  />
                  Limited to first 25 spots
                </p>
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