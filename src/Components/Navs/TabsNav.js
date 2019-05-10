import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BaseView from '../../utils/rnw-compat/BaseView';
import TabsNavTab from './TabsNavTab';

const propTypes = {
  children: PropTypes.node.isRequired,
  activeKey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  pills: PropTypes.bool,
  stacked: PropTypes.bool,
};

const defaultProps = {
  pills: false,
  stacked: false,
};

const TabsNav = React.forwardRef(function TabsNav(props, ref) {
  const {
    children,
    activeKey,
    onChange,
    pills,
    stacked,
    ...elementProps
  } = props;

  const classes = cx(
    // constant classes
    'nav',
    // variable classes
    !pills && 'nav-tabs',
    pills && 'nav-pills',
    stacked && 'flex-column',
  );

  const clonedChildren = React.Children.map(children, child =>
    React.cloneElement(child, {
      active: activeKey === child.props.toPane,
      onChange,
    }),
  );

  return (
    <BaseView
      {...elementProps}
      ref={ref}
      accessibilityRole="tablist"
      essentials={{ className: classes }}
    >
      {clonedChildren}
    </BaseView>
  );
});

TabsNav.propTypes = propTypes;
TabsNav.defaultProps = defaultProps;

TabsNav.Tab = TabsNavTab;

export default TabsNav;
