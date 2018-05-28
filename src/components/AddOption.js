import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createContact } from '../actions';

const data = {
  // used to populate "account" reducer when "Load" is clicked
  firstName: 'Jane',
  lastName: 'Doe',
  email: '42',
  phoneNumber: 9023825856,
  status: true,
};

class AddOption extends Component {
  renderField(field) {
    return (
      <div className={"form-group " + field.gridWidth}>
        <label className="addContact__Label">
          {field.label}
        </label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.touched ? field.meta.error : ""}
      </div>
    )
  }

  onSubmit(values) {
    this.props.handleAddOption(values);
    // this.props.createContact(values);
  }

  render() {
    const { handleSubmit, load, handleEdit } = this.props;
    return (
      <form className="col-xs-12 pad-0" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <button type="button" onClick={() => load(data)}>Load Account</button>
        </div>
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
          gridWidth="col-xs-12"
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
          className="button col-xs-12"
        >
          Add Option
         </button>
        <Link className="btn btn-danger button col-xs-12" to="/" >
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
  if (!values.phoneNumber) {
    errors.phoneNumber = "Number is not valid"
  }

  return errors
};

export default reduxForm({
  validate,
  form: 'AddOption'
})(
  connect(state => ({
    initialValues: state.editContact, // pull initial values from account reducer
  }))(AddOption)
);
