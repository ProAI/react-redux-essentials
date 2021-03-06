import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { COLORS } from '../../utils/constants';
import BaseView from '../../utils/rnw-compat/BaseView';

const propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(COLORS),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

const ListGroupItem = React.forwardRef((props, ref) => {
  const {
    color = null,
    active = false,
    disabled = false,
    ...elementProps
  } = props;

  const classes = cx(
    // constant classes
    'list-group-item',
    // variable classes
    color && `list-group-item-${color}`,
    active && 'active',
    disabled && 'disabled',
  );

  return (
    <BaseView
      {...elementProps}
      ref={ref}
      accessibilityRole="listitem"
      essentials={{ className: classes }}
    />
  );
});

ListGroupItem.displayName = 'ListGroupItem';
ListGroupItem.propTypes = propTypes;

export default ListGroupItem;
