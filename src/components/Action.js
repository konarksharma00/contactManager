import React from 'react';
import Option from './Option';
import Ionicon from 'react-ionicons';
import { editContact } from '../actions';

const Action = ({ contact, handleEdit }) => (
  <div className="option big-button">
    <div>
      {contact.firstName}
    </div>
    <div>
      {contact.phoneNumber}
    </div>
    <div  onClick={() => handleEdit(index)}>
      {contact.email}
    </div>
    <button
    onClick={() => handleEdit(index)}
      className="button button--link">
      <Ionicon
        icon="ios-edit"
        rotate={true}
        color="black"
      />
    </button>
  </div>
);

export default Action;