import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BaseText } from '../../utils/components';
import { COLORS } from '../../utils/constants';

const propTypes = {
  variant: PropTypes.oneOf(COLORS),
};

const defaultProps = {
  variant: 'primary',
};

function Badge({ variant, ...otherProps }) {
  const classes = cx(
    // constant classes
    'badge',
    `badge-${variant}`,
  );

  return <BaseText {...otherProps} className={classes} inlineOnly />;
}

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
