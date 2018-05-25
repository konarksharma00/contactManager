import React from 'react';
import Option from './Option';

const Action = ({options, handlePick, hasOptions, handleDeleteOption, contact}) => (
  <div>
    <button
      className="big-button"
      onClick={handlePick}
      disabled={!hasOptions}
    >
    i am here {contact.firstName}
      </button>
  </div>
);

export default Action;
