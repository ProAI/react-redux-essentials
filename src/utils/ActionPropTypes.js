import PropTypes from 'prop-types';

const ActionPropTypes = {
  to: PropTypes.string,
  replace: PropTypes.bool,
  external: PropTypes.bool,
  onPress: PropTypes.func,
  keepFocus: PropTypes.bool,
};

export default ActionPropTypes;