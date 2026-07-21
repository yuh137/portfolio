import React, { useEffect, useState, useContext } from 'react';
import { Chrono } from 'react-chrono';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';
import '../css/education.css';

function Education(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);
  const [certifications, setCertifications] = useState(null);
  const [width, setWidth] = useState('50vw');
  const [mode, setMode] = useState('VERTICAL_ALTERNATING');

  useEffect(() => {
    fetch(endpoints.education, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);

    fetch(endpoints.certificates, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setCertifications(res))
      .catch((err) => err);

    if (window?.innerWidth < 576) {
      setMode('VERTICAL');
    }

    if (window?.innerWidth < 576) {
      setWidth('90vw');
    } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
      setWidth('90vw');
    } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
      setWidth('75vw');
    } else {
      setWidth('50vw');
    }
  }, []);

  return (
    <>
      <Header title={header} />
      {data ? (
        <Fade>
          <div className="section-content-container">
            <div style={{ width }}>
              <Container>
                <Chrono
                  hideControls
                  allowDynamicUpdate
                  useReadMore={false}
                  items={data.education}
                  cardHeight={250}
                  mode={mode}
                  theme={{
                    primary: theme.accentColor,
                    secondary: theme.accentColor,
                    cardBgColor: theme.chronoTheme.cardBgColor,
                    cardForeColor: theme.chronoTheme.cardForeColor,
                    titleColor: theme.chronoTheme.titleColor,
                  }}
                >
                  <div className="chrono-icons">
                    {data.education.map((education) => (education.icon ? (
                      <img
                        key={education.icon.src}
                        src={education.icon.src}
                        alt={education.icon.alt}
                      />
                    ) : null))}
                  </div>
                </Chrono>
              </Container>
            </div>

            {certifications?.certificates?.length > 0 && (
              <Container className="certifications-section" style={{ width }}>
                <div className="certifications-title">
                  {certifications.title || 'Online Certification'}
                </div>
                <Row xs={2} sm={2} md={3} className="g-4">
                  {certifications.certificates.map((certificate) => (
                    <Col key={certificate.title}>
                      <div
                        className="certification-card"
                        title={certificate.title}
                      >
                        {certificate.image ? (
                          <img
                            src={certificate.image}
                            alt={certificate.title}
                          />
                        ) : (
                          <span className="certification-card-fallback">
                            {certificate.title}
                          </span>
                        )}
                        <div className="certification-overlay">
                          <span className="certification-corner top-left" />
                          <span className="certification-corner bottom-right" />
                          <div className="certification-overlay-title">
                            {certificate.title}
                          </div>
                          {certificate.link && (
                            <a
                              className="certification-link"
                              href={certificate.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${certificate.title} certificate`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                              </svg>
                            </a>
                          )}
                          {/* <div className="certification-badge">Certificate</div> */}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            )}
          </div>
        </Fade>
      ) : <FallbackSpinner /> }
    </>
  );
}

Education.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Education;
