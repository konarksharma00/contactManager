import React from 'react';
import Option from './Option';

const ContactList = ({ options, hasOptions, handleDeleteOption, handlePick, numberOfContacts }) => (
	<div className="col-xs-12 pad-0">
		<div className="widget-header">
			<h3 className="widget-header__title">{numberOfContacts} Contacts saved</h3>
		</div>
		<div
			className="big-button"
			disabled={!hasOptions}
		>
			{
				options.map((option, index) => (
					<Option
						key={index}
						index={index}
						contact={option}
						count={index + 1}
						handleDeleteOption={handleDeleteOption}
						handlePick={handlePick}
					/>
				))
			}
		</div>
	</div>
);

export default ContactList;
