import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { BaseView } from '../../utils/components';
import FormText from './FormText';
import FormInput from './FormInput';
import FormPicker from '../../Extend/Forms/FormPicker';
import FormDatePicker from '../../Extend/Forms/FormDatePicker';
import FormChoice from './FormChoice';
import FormCheckbox from './FormCheckbox';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  initialValues: PropTypes.object.isRequired,
  validate: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

const defaultProps = {
  validate: null,
};

function Form(props) {
  const {
    children, initialValues, validate, onSubmit, ...elementProps
  } = props;

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur={false}
      validateOnChange={false}
      validate={validate}
      onSubmit={onSubmit}
      render={form => (
        <BaseView elementProps={elementProps} tag="form" onSubmit={form.handleSubmit} className="form">
          {typeof children === 'function' ? children(form) : children}
        </BaseView>
      )}
    />
  );
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

Form.Text = FormText;
Form.Input = FormInput;
Form.Picker = FormPicker;
Form.DatePicker = FormDatePicker;
Form.Choice = FormChoice;
Form.Checkbox = FormCheckbox;

export default Form;
