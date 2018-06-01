import React from 'react';
import Option from './Option';

const ContactList = ({
	contacts,
	handleDeleteContact,
	handlePick,
	numberOfContacts,
	listUpdated }) => (
		<div className="col-xs-12 pad-0" id="contacts">
			<div className="widget-contact-header">
				<h3 className="widget-header__title">{numberOfContacts} Contacts saved</h3>
			</div>
			<div
				className="big-button"
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
