import React from 'react';
import PropTypes from 'prop-types';
import BaseText from '../../utils/rnw-compat/BaseText';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Code = React.forwardRef((props, ref) => (
  <BaseText {...props} ref={ref} essentials={{ tag: 'code' }} />
));

Code.displayName = 'Code';
Code.propTypes = propTypes;

export default Code;
