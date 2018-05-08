import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import checkClassProp from '../checkClassProp';

const propTypes = {
  source: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  props: PropTypes.shape({
    class: PropTypes.arrayOf(checkClassProp),
  }),
  className: PropTypes.string.isRequired,
};

const defaultProps = {
  props: {
    class: null,
  },
};

function BaseImage(props) {
  const {
    source,
    label,
    props: { class: utils, ...otherProps },
    className,
  } = props;

  const classes = cx(
    // add (mostly) bootstrap styles
    className,
    // add utils styles
    utils.join(' '),
  );

  return <img {...otherProps} source={source} alt={label} className={classes} />;
}

BaseImage.propTypes = propTypes;
BaseImage.defaultProps = defaultProps;

export default BaseImage;