import React from 'react';
// import Ionicon from 'react-ionicons';

const Option = ({ count, contact, handleDeleteContact, handlePick, index }) => (
  <div className="option">

      { <div className="option-intials"><div className="option__bold"><b>{contact.firstName[0]}</b></div></div>}

    <div onClick={() => handlePick(index)}>
      {contact.firstName}
    </div>

    <button
      className="button button--link"
      onClick={(e) => {
        handleDeleteContact(index);
      }}
    > remove
      {/* <Ionicon
        icon="ios-trash"
        rotate={true}
        color="black"
      /> */}
    </button>
  </div>
);

export default Option;
