import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BaseText } from '../../utils/components';
import { COLORS } from '../../utils/constants';
import { action } from '../../utils';

const propTypes = {
  ...action.propTypes,
  color: PropTypes.oneOf(COLORS),
};

const contextTypes = {
  ...action.contextTypes,
};

const defaultProps = {
  ...action.defaultProps,
  color: 'primary',
};

function BadgeLink(props, context) {
  const { color, ...elementProps } = props;
  const classes = cx(
    // constant classes
    'badge',
    `badge-${color}`,
  );

  const linkProps = action.createLinkProps(elementProps, context);

  return <BaseText {...linkProps} className={classes} inlineOnly />;
}

BadgeLink.propTypes = propTypes;
BadgeLink.contextTypes = contextTypes;
BadgeLink.defaultProps = defaultProps;

export default BadgeLink;
