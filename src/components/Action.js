import React from 'react';
import Option from './Option';
import Ionicon from 'react-ionicons';
import { editContact } from '../actions';
import { connect } from 'react-redux';

const Action = ({ contact, editContact, info }) => (
  <div>
    <div className=" option-header option edit">
      <div>
        {contact.firstName} {contact.lastName}
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
      className="button-edit col-xs-12"> Edit Selected Contact
    <Ionicon
      icon="ios-edit"
      rotate={true}
      color="black"
    />
    </button>
  </div>
);

export default connect(null, { editContact })(Action);