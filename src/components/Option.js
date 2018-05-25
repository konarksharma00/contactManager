import React from 'react';

const Option = ({count, contact, handleDeleteOption, handlePick, index}) => (
  <div className="option">
    {<p className="option__text">{count}.</p>}
    <div>
      {contact.firstName[0]}
    </div>
    <div>
      {contact.firstName}
    </div>
     <button
      className="button button--link"
      onClick={(e) => {
        handleDeleteOption(index);
      }}
    >
      remove
      </button>
  </div>
);

export default Option;
