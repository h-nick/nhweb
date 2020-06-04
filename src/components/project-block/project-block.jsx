import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import classes from './component.module.scss';

const ProjectBlock = ({
  title, slug, mainPhoto, className,
}) => (
  <div className={clsx(classes.Project, className)}>
    <div className={classes.Data}>
      <h4 className="white text-center m-0">{title}</h4>
      <button type="button" className="mt-2 mx-auto d-block text-center">
        PLACEHOLDER
      </button>
    </div>

    <div className={classes.Cover} />

    <div className={classes.Image}>
      <img src={mainPhoto} alt={slug} />
    </div>
  </div>
);

ProjectBlock.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  mainPhoto: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ProjectBlock.defaultProps = {
  className: '',
};

export default ProjectBlock;
