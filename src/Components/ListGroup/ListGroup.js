import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BaseView } from '../../utils/components';
import ListGroupItem from './ListGroupItem';

const propTypes = {
  children: PropTypes.node.isRequired,
  flush: PropTypes.bool,
};

const defaultProps = {
  flush: false,
};

function ListGroup({ children, flush, ...elementProps }) {
  const classes = cx(
    // constant classes
    'list-group',
    // variable classes
    flush && 'list-group-flush',
  );

  return (
    <BaseView tag="ul" props={elementProps} className={classes}>
      {children}
    </BaseView>
  );
}

ListGroup.propTypes = propTypes;
ListGroup.defaultProps = defaultProps;

ListGroup.Item = ListGroupItem;

export default ListGroup;
