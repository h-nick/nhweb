import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classes from './component.module.scss';

const AnimatedChevron = ({ className }) => (
  <div className={clsx(classes.AnimatedChevron, className)}>
    <FontAwesomeIcon icon={faChevronDown} />
  </div>
);

AnimatedChevron.propTypes = {
  className: PropTypes.string,
};

AnimatedChevron.defaultProps = {
  className: '',
};

export default AnimatedChevron;
