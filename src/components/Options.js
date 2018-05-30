import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Contacts</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteContacts}
      >
        Delete All
    </button>
    </div>

    {props.contacts.length === 0 && <p className="widget__message">Add Contact To Get Started!!</p>}
  </div>
);

export default Options;
