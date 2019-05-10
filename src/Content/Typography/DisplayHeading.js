import React from 'react';
import PropTypes from 'prop-types';
import BaseText from '../../utils/rnw-compat/BaseText';
import { DISPLAY_HEADING_SIZES } from '../../utils/constants';

const propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(DISPLAY_HEADING_SIZES).isRequired,
};

const DisplayHeading = React.forwardRef(function DisplayHeading(props, ref) {
  const { size, ...elementProps } = props;

  return (
    <BaseText
      {...elementProps}
      ref={ref}
      accessibilityRole="heading"
      essentials={{ className: `display-${size.toString()}`, blockOnly: true }}
    />
  );
});

DisplayHeading.propTypes = propTypes;

export default DisplayHeading;
