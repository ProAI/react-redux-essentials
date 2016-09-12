import React, { PropTypes } from 'react';
import cx from 'classnames';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

function CardBlock({ children, className, ...attributes }) {
  const classes = cx(
    'card-block',
    className,
  );

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
}

CardBlock.propTypes = propTypes;

export default CardBlock;
