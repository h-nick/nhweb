import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import classes from './component.module.scss';

const Button = ({
  href, title, newTab, blackVariation, className,
}) => {
  let component;
  const text = (
    <>
      { title }
      <FontAwesomeIcon icon={faChevronRight} />
    </>
  );

  if (newTab) {
    component = (
      <a
        className={clsx(classes.Button, !blackVariation && 'white', className, 'rising-effect')}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.Text}>
          { text }
        </div>
      </a>
    );
  } else {
    component = (
      <a
        className={clsx(classes.Button, !blackVariation && 'white', className, 'rising-effect')}
        href={href}
      >
        <div className={classes.Text}>
          { text }
        </div>
      </a>
    );
  }

  return component;
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  className: PropTypes.string,
  blackVariation: PropTypes.bool,
};

Button.defaultProps = {
  blackVariation: false,
  newTab: false,
  className: '',
};

export default Button;
