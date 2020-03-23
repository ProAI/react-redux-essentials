import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { __RouterContext as RouterContext, matchPath } from 'react-router';
import BaseTouchable from '../../utils/rnw-compat/BaseTouchable';
import useAction from '../../hooks/useAction';
import ActionPropTypes from '../../utils/ActionPropTypes';

const propTypes = {
  ...ActionPropTypes,
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  isActive: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object,
};

const NavLink = React.forwardRef(function NavLink(props, ref) {
  const {
    exact = false,
    strict = false,
    isActive: isActiveProp,
    location: locationProp,
    ...elementProps
  } = props;

  const actionProps = useAction(elementProps, ref);

  const context = useContext(RouterContext);

  const path = typeof props.to === 'object' ? props.to.pathname : props.to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  const escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');

  const pathToMatch = locationProp
    ? locationProp.pathname
    : context.location.pathname;

  const match = escapedPath
    ? matchPath(pathToMatch, { path: escapedPath, exact, strict })
    : null;

  const isActive = !!(isActiveProp
    ? isActiveProp(match, context.location)
    : match);

  const classes = cx(
    // constant classes
    'nav-link',
    // variable classes
    isActive && 'active',
  );

  return <BaseTouchable {...actionProps} essentials={{ className: classes }} />;
});

NavLink.displayName = 'NavLink';
NavLink.propTypes = propTypes;

export default NavLink;