import React from 'react';
import PropTypes from 'prop-types';
import BaseView from '../../utils/rnw-compat/BaseView';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const CardBody = React.forwardRef(function CardBody(props, ref) {
  return (
    <BaseView {...props} ref={ref} essentials={{ className: 'card-body' }} />
  );
});

CardBody.displayName = 'CardBody';
CardBody.propTypes = propTypes;

export default CardBody;
