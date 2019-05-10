import React from 'react';
import PropTypes from 'prop-types';
import BaseView from '../../utils/rnw-compat/BaseView';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const BlockquoteFooter = React.forwardRef(function BlockquoteFooter(
  props,
  ref,
) {
  return (
    <BaseView
      {...props}
      ref={ref}
      essentials={{ tag: 'footer', className: 'blockquote-footer' }}
    />
  );
});

BlockquoteFooter.propTypes = propTypes;

export default BlockquoteFooter;
