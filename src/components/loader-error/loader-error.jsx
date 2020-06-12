import React from 'react';
import clsx from 'clsx';
import classes from './component.module.scss';

const LoaderError = () => (
  <div className={clsx(classes.LoaderError, 'p-5')}>
    <p className="white m-0">
      There was an error loading the website. Some assets were not loaded, therefore the page may appear
      incomplete. Please
      {' '}
      <a href="." className="white">reload</a>
      {' '}
      the site or try again later.
    </p>
  </div>
);

export default LoaderError;
