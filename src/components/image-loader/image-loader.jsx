import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import LoaderAnimation from '../loader-animation/loader-animation';
import classes from './component.module.scss';

const ImageLoader = (
  {
    src,
    alt,
    className,
    imgClassName,
  },
) => {
  const [loading, setLoading] = useState(true);
  const image = useRef();

  useEffect(() => {
    if (image.current.complete) {
      setLoading(true);
    }
  }, []);

  return (
    <div className={clsx(classes.ImageLoader, className)}>
      <div className={clsx(classes.Loader, !loading && 'd-none')}>
        <LoaderAnimation />
      </div>

      <Image
        className={clsx(classes.Image, imgClassName, loading && 'd-none')}
        ref={image}
        onLoad={() => setLoading(false)}
        alt={alt}
        src={src}
      />
    </div>
  );
};

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imgClassName: PropTypes.string,
  className: PropTypes.string,
};

ImageLoader.defaultProps = {
  className: '',
  imgClassName: '',
};

export default ImageLoader;
