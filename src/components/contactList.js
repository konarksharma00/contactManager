import React from 'react';
import Option from './Option';

const ContactList = ({ contacts, hasOptions, handleDeleteContact, handlePick, numberOfContacts, listUpdated }) => (
	<div className="col-xs-12 pad-0">
		<div className="widget-header">
			<h3 className="widget-header__title">{numberOfContacts} Contacts saved</h3>
		</div>
		<div
			className="big-button"
			disabled={!hasOptions}
		>
			{
				contacts.map((contact, index) => (
					<Option
						key={index}
						index={index}
						contact={contact}
						count={index + 1}
						handleDeleteContact={handleDeleteContact}
						handlePick={handlePick}
					/>
				))
			}
		</div>
	</div>
);

export default ContactList;
