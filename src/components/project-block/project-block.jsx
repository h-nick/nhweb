import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from '../button/button';
import ImageLoader from '../image-loader/image-loader';
import classes from './component.module.scss';

const ProjectBlock = (props) => {
  const {
    title, slug, picture, className,
  } = props;

  return (
    <div className={clsx(classes.Project, className)}>
      <div className={classes.Data}>
        <h1 className="size-125 white text-center m-0 px-2">{title}</h1>

        <Button
          className="w-75 mt-2 mx-auto d-block text-center"
          href={`./project/${slug}`}
          title="SEE PROJECT"
        />
      </div>

      <div className={classes.Cover} />

      <div className={classes.Image}>
        <ImageLoader
          src={`https://api.nicolashurtado.dev${picture}`}
          alt={slug}
          className={classes.Image}
        />
      </div>
    </div>
  );
};

ProjectBlock.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ProjectBlock.defaultProps = {
  className: '',
};

export default ProjectBlock;
