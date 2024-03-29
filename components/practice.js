import React from 'react'

import PropTypes from 'prop-types'

const Practice = (props) => {
  return (
    <>
      <animate-on-reveal
        animation="fadeInUp"
        duration="300ms"
        delay="0s"
        direction="normal"
        easing="ease"
        iteration="1"
        className={`practice-animate-on-reveal ${props.rootClassName} `}
      >
        <div
          data-thq-animate-on-reveal="true"
          className={`practice-practice ${props.rootClassName} `}
        >
          <div className="practice-heading">
            <h3 className="practice-header">{props.Title}</h3>
            <p className="practice-caption">{props.Description}</p>
          </div>
          <div className="read-more">
            <span className="practice-text">Read more</span>
            <img
              alt="image"
              src="/Icons/arrow-2.svg"
              className="practice-image"
            />
          </div>
        </div>
      </animate-on-reveal>
      <style jsx>
        {`
          .practice-animate-on-reveal {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .practice-practice {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .practice-heading {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .practice-header {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .practice-caption {
            max-width: 385px;
            line-height: 24px;
          }
          .practice-text {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .practice-image {
            width: 12px;
            object-fit: cover;
          }
          .practice-root-class-name {
            animation-name: none;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .practice-root-class-name1 {
            animation-name: none;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          @media (max-width: 767px) {
            .practice-animate-on-reveal {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .practice-practice {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .practice-header {
              font-size: 20px;
              line-height: 24px;
            }
            .practice-caption {
              font-size: 14px;
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

Practice.defaultProps = {
  Title: 'Personal Care',
  Description:
    'We provide personalized personal care services to support individuals with their daily activities and personal hygiene needs',
  rootClassName: '',
}

Practice.propTypes = {
  Title: PropTypes.string,
  Description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Practice
