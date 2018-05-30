import React from 'react';
import Option from './Option';
// import Ionicon from 'react-ionicons';
import { editContact } from '../actions';
import { connect } from 'react-redux';

const Action = ({ contact, editContact, info }) => (
  <div>
    <div className="option edit">
      <div>
        {contact.firstName}
      </div>
      <div>
        {contact.phoneNumber}{info}
      </div>
      <div>
        {contact.email}
      </div>
    </div>
    <button
      onClick={() => editContact(contact)}
      className="button-edit col-xs-12"> Edit
    {/* <Ionicon
      icon="ios-edit"
      rotate={true}
      color="black"
    /> */}
    </button>
  </div>
);

export default connect(null, { editContact })(Action);