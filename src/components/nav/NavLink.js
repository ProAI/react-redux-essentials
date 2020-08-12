import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BaseTouchable from '../../utils/rnw-compat/BaseTouchable';
import useTabbable from '../../hooks/useTabbable';
import TabPropTypes from '../../utils/TabPropTypes';

const propTypes = {
  ...TabPropTypes,
  children: PropTypes.node.isRequired,
};

const NavLink = React.forwardRef(function NavLink(props, ref) {
  const { active, disabled = false, ...tabProps } = useTabbable(props, ref);

  const classes = cx(
    // constant classes
    'nav-link',
    // variable classes
    active && 'active',
    disabled && 'disabled',
  );

  if (disabled) {
    tabProps['aria-disabled'] = true;
    tabProps.tabIndex = -1;
  }

  return <BaseTouchable {...tabProps} essentials={{ className: classes }} />;
});

NavLink.displayName = 'NavLink';
NavLink.propTypes = propTypes;

export default NavLink;
