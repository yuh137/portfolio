import React, { useState, useEffect, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/about.css';

const focusIcons = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  architecture: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
};

function About(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data
            ? (
              <Fade>
                <div
                  className="about-wrapper"
                  style={{ '--about-accent': theme.accentColor }}
                >
                  <Row className="about-row align-items-center">
                    <Col xs={12} md={7} className="about-text-col">
                      {data.eyebrow && (
                        <span className="about-eyebrow">{data.eyebrow}</span>
                      )}
                      {(data.name || data.role) && (
                        <h2 className="about-heading">
                          {data.name}
                          {data.role && (
                            <>
                              <br />
                              <span className="about-heading-accent">
                                {data.role}
                              </span>
                            </>
                          )}
                        </h2>
                      )}
                      <div className="about-intro">
                        {parseIntro(data.about)}
                      </div>

                      {data.tags?.length > 0 && (
                        <div className="about-tags">
                          {data.tags.map((tag) => (
                            <span key={tag} className="about-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </Col>
                    <Col xs={12} md={5} className="about-image-col">
                      <div className="about-image-frame">
                        <img src={data?.imageSource} alt="profile" />
                      </div>
                    </Col>
                  </Row>

                  {data.stats?.length > 0 && (
                    <Row className="about-stats">
                      {data.stats.map((stat) => (
                        <Col xs={4} key={stat.label} className="about-stat">
                          <div className="about-stat-value">{stat.value}</div>
                          <div className="about-stat-label">{stat.label}</div>
                        </Col>
                      ))}
                    </Row>
                  )}

                  {data.focusAreas?.length > 0 && (
                    <Row className="about-focus g-4">
                      {data.focusAreas.map((area) => (
                        <Col xs={12} md={4} key={area.title}>
                          <div className="about-focus-card">
                            {area.icon && focusIcons[area.icon] && (
                              <span className="about-focus-icon">
                                {focusIcons[area.icon]}
                              </span>
                            )}
                            <div className="about-focus-title">
                              {area.title}
                            </div>
                            <div className="about-focus-text">
                              {area.description}
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  )}
                </div>
              </Fade>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
