import React from 'react';
import Option from './Option';

const Options = ({handleDeleteContacts, numberOfContacts}) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Contacts</h3>
      <button
        className="button button--link"
        onClick={handleDeleteContacts}
      >
        Delete All
    </button>
    </div>

    {numberOfContacts === 0 && <p className="widget__message">Add Contact To Get Started!!</p>}
    {numberOfContacts !== 0 && <p className="widget__message">Add Another Contact.</p>}
  </div>
);

export default Options;
