import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BaseView from '../../utils/rnw-compat/BaseView';

const propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
};

const defaultProps = {
  fluid: false,
};

const Jumbotron = React.forwardRef(function Jumbotron(props, ref) {
  const { fluid, ...elementProps } = props;

  const classes = cx(
    // constant classes
    'jumbotron',
    // variable classes
    fluid && 'jumbotron-fluid',
  );

  return (
    <BaseView {...elementProps} ref={ref} essentials={{ className: classes }} />
  );
});

Jumbotron.displayName = 'Jumbotron';
Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;

export default Jumbotron;
