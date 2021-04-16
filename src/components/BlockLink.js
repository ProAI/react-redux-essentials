import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BaseTouchable from '../utils/rnw-compat/BaseTouchable';
import useAction, { ActionPropTypes } from '../hooks/useAction';
import useTrigger, { TriggerPropTypes } from '../hooks/useTrigger';
import useLink, { LinkPropTypes } from '../hooks/useLink';
import concatClasses from '../utils/concatClasses';
import concatTouchableProps from '../utils/concatTouchableProps';
import optional from '../utils/optional';

const propTypes = {
  ...TriggerPropTypes,
  ...LinkPropTypes,
  ...ActionPropTypes,
  children: PropTypes.node.isRequired,
};

const BlockLink = React.forwardRef((props, ref) => {
  const {
    toggle,
    target,
    to,
    replace = false,
    external = false,
    keepFocus = false,
    ...elementProps
  } = props;

  const trigger = useTrigger(toggle, target);
  const link = useLink(to, replace, external);
  const action = useAction(keepFocus);

  const classes = cx(
    // variable classes
    ...concatClasses(trigger),
  );

  return (
    <BaseTouchable
      {...concatTouchableProps({ ...elementProps, ref }, action, link, trigger)}
      {...optional(!to, {
        // tabIndex is not working with this react-native-web version, we need
        // to re-check with the latest version.
        tabIndex: 0,
      })}
      essentials={{ tag: 'a', className: classes }}
    />
  );
});

BlockLink.displayName = 'BlockLink';
BlockLink.propTypes = propTypes;

export default BlockLink;
