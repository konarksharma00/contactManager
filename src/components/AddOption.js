import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createContact } from '../actions';

class AddOption extends Component {
  renderField(field) {
    const {gridWidth} = field
    return (
      <div className={"form-group " + gridWidth}>
        <label>
          {field.label}
        </label>
        <input
          className="form-control add-option__input"
          type="text"
          {...field.input}
        />
        {field.meta.touched ? field.meta.error : ""}
      </div>
    )
  }

  onSubmit(values) {
    // this.props.handleAddOption(values);
    this.props.createContact(values);
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form className="container add-option" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="First name"
          name="firstName"
          type="text"
          gridWidth="col-xs-6"
          component={this.renderField}
        />
        <Field
          label="Last Name"
          name="lastName"
          type="text"
          gridWidth="col-xs-6"
          component={this.renderField}
        />
        <Field
          label="E-mail"
          name="email"
          type="email"
          component={this.renderField}
        />
        <Field
          label="Phone Number"
          name="phoneNumber"
          type="number"
          gridWidth="col-xs-6"
          component={this.renderField}
        />
        <Field
          label="Status"
          name="status"
          type="text"
          gridWidth="col-xs-6"
          component={this.renderField}
        />
        <button type="submit"
          className="button"
          disabled={pristine || submitting}
        >
          Add Option
         </button>
        <Link className="btn btn-danger button" to="/" >
          Cancel
           </Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}
  if (!values.firstName || (values.firstName ? values.firstName.length <= 3 : false)) {
      errors.firstName = "Name is not valid"
  }
  if (!values.email || (values.email ? values.email.length <= 6 : false)) {
      errors.email = "Email is not valid"
  }
  if (!values.phoneNumber || (values.phoneNumber ? values.phoneNumber.length <= 10 : false)) {
      errors.phoneNumber = "Number is not valid"
  }

  return errors
};

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createContact })(AddOption)
  );
