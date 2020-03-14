import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BaseView from '../../utils/rnw-compat/BaseView';
import ListGroupItem from './ListGroupItem';

const propTypes = {
  children: PropTypes.node.isRequired,
  flush: PropTypes.bool,
  horizontal: PropTypes.bool,
  horizontalSm: PropTypes.bool,
  horizontalMd: PropTypes.bool,
  horizontalLg: PropTypes.bool,
  horizontalXl: PropTypes.bool,
};

const ListGroup = React.forwardRef(function ListGroup(props, ref) {
  const {
    children,
    flush = false,
    horizontal = false,
    horizontalSm = false,
    horizontalMd = false,
    horizontalLg = false,
    horizontalXl = false,
    ...elementProps
  } = props;

  const classes = cx(
    // constant classes
    'list-group',
    // variable classes
    flush && 'list-group-flush',
    horizontal && 'list-group-horizontal',
    horizontalSm && 'list-group-horizontal-sm',
    horizontalMd && 'list-group-horizontal-md',
    horizontalLg && 'list-group-horizontal-lg',
    horizontalXl && 'list-group-horizontal-xl',
  );

  return (
    <BaseView
      {...elementProps}
      ref={ref}
      accessibilityRole="list"
      essentials={{ className: classes }}
    >
      {children}
    </BaseView>
  );
});

ListGroup.displayName = 'ListGroup';
ListGroup.propTypes = propTypes;

ListGroup.Item = ListGroupItem;

export default ListGroup;
