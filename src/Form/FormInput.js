import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Field from './Field';

const propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['color', 'email', 'number', 'password', 'range', 'tel', 'text', 'url']),
  size: PropTypes.oneOf(['sm']),
  info: PropTypes.string,
  multiline: PropTypes.bool,
  // redux form props
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  autoFocus: PropTypes.bool,
};

const defaultProps = {
  label: null,
  placeholder: null,
  type: 'text',
  size: null,
  info: null,
  multiline: false,
  autoFocus: false,
};

function FormInput({
  label, placeholder, type, size, info, input, meta, multiline, autoFocus,
}) {
  const labelClasses = cx('form-control-label', { active: meta.active });

  const inputClasses = cx('form-control', {
    'is-invalid': meta.error,
    'form-control-sm': size === 'sm',
  });

  /* eslint-disable jsx-a11y/no-autofocus */
  return (
    <Field meta={meta} info={info}>
      {label && (
        <label htmlFor={`${meta.form}-${input.name}`} className={labelClasses}>
          {label}
        </label>
      )}
      {!multiline && (
        <input
          type={type}
          id={`${meta.form}-${input.name}`}
          name={input.name}
          value={input.value}
          onChange={input.onChange}
          onFocus={input.onFocus}
          onBlur={() => {
            input.onBlur(input.value);
          }}
          placeholder={placeholder}
          className={inputClasses}
          autoFocus={autoFocus}
        />
      )}
      {multiline && (
        <textarea
          id={`${meta.form}-${input.name}`}
          name={input.name}
          value={input.value}
          onChange={input.onChange}
          onFocus={input.onFocus}
          onBlur={() => {
            input.onBlur(input.value);
          }}
          placeholder={placeholder}
          rows="7"
          className={inputClasses}
          autoFocus={autoFocus}
        />
      )}
    </Field>
  );
  /* eslint-enable */
}

FormInput.propTypes = propTypes;
FormInput.defaultProps = defaultProps;

export default FormInput;
