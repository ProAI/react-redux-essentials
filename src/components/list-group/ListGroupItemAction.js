import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { COLORS } from '../../utils/constants';
import BaseTouchable from '../../utils/rnw-compat/BaseTouchable';
import useTabbable from '../../hooks/useTabbable';
import TabPropTypes from '../../utils/TabPropTypes';

const propTypes = {
  ...TabPropTypes,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(COLORS),
};

const ListGroupItemAction = React.forwardRef(function ListGroupItemAction(
  props,
  ref,
) {
  const { color = null, active, disabled = false, ...tabProps } = useTabbable(
    props,
    ref,
  );

  const classes = cx(
    // constant classes
    'list-group-item',
    'list-group-item-action',
    // variable classes
    color && `list-group-item-${color}`,
    active && 'active',
    disabled && 'disabled',
  );

  return <BaseTouchable {...tabProps} essentials={{ className: classes }} />;
});

ListGroupItemAction.displayName = 'ListGroupItemAction';
ListGroupItemAction.propTypes = propTypes;

export default ListGroupItemAction;