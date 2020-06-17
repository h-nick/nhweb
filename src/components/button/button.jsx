import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import classes from './component.module.scss';

const Button = ({
  href, title, newTab, blackVariation, width,
}) => {
  let component;

  if (newTab) {
    component = (
      <a
        className={clsx(classes.Button, !blackVariation && 'white')}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ width: `${width}%` }}
      >
        { title }
      </a>
    );
  } else {
    component = (
      <a
        className={clsx(classes.Button, !blackVariation && 'white')}
        href={href}
        style={{ width: `${width}%` }}
      >
        { title }
      </a>
    );
  }

  return component;
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  width: PropTypes.number,
  blackVariation: PropTypes.bool,
};

Button.defaultProps = {
  blackVariation: false,
  newTab: false,
  width: 100,
};

export default Button;
