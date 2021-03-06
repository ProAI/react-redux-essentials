import React from 'react';
import BaseView from '../../utils/rnw-compat/BaseView';

const DropdownDivider = React.forwardRef((props, ref) => (
  <BaseView
    {...props}
    ref={ref}
    essentials={{ className: 'dropdown-divider' }}
  />
));

DropdownDivider.displayName = 'DropdownDivider';

export default DropdownDivider;
