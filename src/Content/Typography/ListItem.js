import React from 'react';
import PropTypes from 'prop-types';
import { BaseView, BaseText } from '../../utils/components';

const propTypes = {
  children: PropTypes.node.isRequired,
};

function List({ children, ...elementProps }) {
  // TODO: Remove pseudo view and add react-native compatible component
  return (
    <BaseView pseudo tag="li" className="" props={elementProps}>
      <BaseText blockOnly>{children}</BaseText>
    </BaseView>
  );
}

List.propTypes = propTypes;

export default List;