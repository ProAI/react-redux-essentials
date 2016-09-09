import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node.isRequired,
  legend: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

function RadioButtonGroup({ legend, input, meta, children }) {
  const fieldsetClasses = classNames([
    'form-group',
    { 'has-danger': meta.error },
  ]);

  const childrenWithProps = React.Children.map(children,
    child => React.cloneElement(child, {
      input,
      meta,
    })
  );

  console.log(childrenWithProps);

  return (
    <fieldset className={fieldsetClasses}>
      {legend && (
        <legend className="form-group-legend">{legend}</legend>
      )}
      {childrenWithProps}
      {meta.touched && meta.error && (
        <small className="text-danger">
          {meta.error}
        </small>
      )}
    </fieldset>
  );
}

RadioButtonGroup.propTypes = propTypes;

export default RadioButtonGroup;
