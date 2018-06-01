import React from 'react';

const Options = ({handleDeleteContacts, numberOfContacts}) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title hidden-xs-down">Your Contacts</h3>
      <h4 className="widget-header__title hidden-sm-up"><a href="#contacts">Your Contacts</a></h4>
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
