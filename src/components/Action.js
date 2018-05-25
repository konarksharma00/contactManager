import React from 'react';
import Option from './Option';
import Ionicon from 'react-ionicons';

const Action = ({ contact }) => (
  <div className="option big-button">
    <div>
      {contact.firstName}
    </div>
    <div>
      {contact.phoneNumber}
    </div>
    <div>
      {contact.email}
    </div>
    <button
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