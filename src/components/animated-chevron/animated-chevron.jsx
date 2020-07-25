import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classes from './component.module.scss';

const AnimatedChevron = () => (
  <div className={classes.AnimatedChevron}>
    <FontAwesomeIcon icon={faChevronDown} />
  </div>
);

export default AnimatedChevron;
