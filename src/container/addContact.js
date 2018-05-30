import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createContact } from '../actions';

const status = ['Active', 'In-Active']

class AddContact extends Component {

  renderField(field) {
    const { meta } = field
    const danger = `form-group ${field.gridWidth} ${meta.touched && meta.error? 'has-danger' : ''}`
    if (field.label === 'Status') {
      return (
        <div className={danger}>
          <label className="addContact__Label">
            {field.label}
          </label>
          <select className="form-control" {...field.input} >
            <option value="">Select...</option>
            {status.map(statusVal => (
              <option value={statusVal} key={statusVal}>
                {statusVal}
              </option>
            ))}
          </select>
          <div className="text-help">
            {meta.touched ? meta.error : ""}
          </div>
        </div>
      )
    } else {
      return (
        <div className={danger}>
          <label className="addContact__Label">
            {field.label}
          </label>
          <input
            className="form-control add-option__input"
            type={field.type}
            {...field.input}
          />
          <div className="text-help">
            {field.meta.touched ? field.meta.error : ""}
          </div>
        </div>
      )
    }
  }
  onSubmit(values) {
    _.isEmpty(this.props.initialValues) ? this.props.handleAddContact(values) : this.props.handleEdit(values);
  }

  render() {
    const { handleSubmit, handleEdit, reset } = this.props;
    return (
      <form className="col-xs-12 pad-0 border-site" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="First name"
          name="firstName"
          type="text"
          gridWidth="col-sm-6 col-xs-12"
          component={this.renderField}
        />
        <Field
          label="Last Name"
          name="lastName"
          type="text"
          gridWidth="col-sm-6 col-xs-12"
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
          gridWidth="col-sm-6 col-xs-12"
          component={this.renderField}
        />
        <Field
          label="Status"
          name="status"
          type="select"
          gridWidth="col-sm-6 col-xs-12"
          component={this.renderField} >
        </Field>
        <button type="submit" className="button col-xs-12">
          Add Contact
         </button>
        <button className="button-clear col-xs-12" >
          Clear Values
           </button>
      </form>
    )
  }
}

// validating form submission
function validate(values) {
  const errors = {}
  if (!values.firstName || (values.firstName ? values.firstName.length <= 3 : false)) {
    errors.firstName = "Name is not valid, min length 3"
  }
  if (!values.email || (values.email ? values.email.length <= 6 : false)) {
    errors.email = "Email is not valid"
  }
  if (!values.phoneNumber || (values.phoneNumber ? values.phoneNumber.length !== 10 : false)) {
    errors.phoneNumber = "Number is not valid, 10 characters are required"
  }

  return errors
};

// handling form submission succes
const afterSubmit = (result, dispatch) => {
  return dispatch(reset('AddContact'));
}

const mapStatetoprops = (state) => {
  return {
    initialValues: state.contact
  }
};

AddContact = reduxForm({
  validate,
  form: 'AddContact',
  enableReinitialize: true,
  onSubmitSuccess: afterSubmit,
})(AddContact);

AddContact = connect(mapStatetoprops)(AddContact);

export default AddContact;
