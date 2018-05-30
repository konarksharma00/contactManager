import React from 'react';
import { connect } from 'react-redux';
import AddContact from '../container/addContact';
import Action from '../components/Action';
import Header from '../components/Header';
import Options from '../components/Options';
import OptionModal from '../components/OptionModal';
import ContactList from '../components/contactList';
import { resetForm } from '../actions';

class IndecisionApp extends React.Component {
  state = {
    contacts: [],
    selectedOption: undefined,
    listUpdated: false,
  };
  //to remove all the contacts
  handleDeleteContacts = () => {
    this.setState(() => ({ contacts: [], selectedOption: undefined}));
    this.props.resetForm();
  };

  //to clear updated contact
  // invoked from **"optionModal"** component
  handleClearUpdate = () => {
    this.setState(() => ({ listUpdated: false }));
    this.props.history.push('/')
    this.props.resetForm();
  }

  //to remove single contact
  handleDeleteContact = (contactToRemove) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((option) => prevState.contacts[contactToRemove] !== option)
    }));
  };
  // to update action component with selected contact
  handleEdit = (selectedContacted) => {
    this.state.contacts[this.state.index] = selectedContacted;
    this.setState((prevState) => ({
      listUpdated: true,
    }));
    const json = JSON.stringify(this.state.contacts);
    localStorage.setItem('contacts', json);
    this.props.history.push('/modal')
  };
  handlePick = (index) => {
    this.setState((prevState) => ({
      selectedOption: prevState.contacts[index],
      index
    }));
  };

  //Adding new contact
  handleAddContact = (option) => {
    option.uid = this.state.contacts.length + 1;

    var found = this.state.contacts.some(function (val) {
      return val.phoneNumber === option.phoneNumber;
    });

    if (!found) {
      this.setState((prevState) => ({
        contacts: prevState.contacts.concat(option)
      }));
    }
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('contacts');
      const contacts = JSON.parse(json);

      if (contacts) {
        this.setState(() => ({ contacts }));
      }
    } catch (e) {
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      const json = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    const subtitle = 'Not knowing a contact when needed is annoying!!!';
    const info = 'Click on the contact to select'
    const contactItem = this.state.selectedOption ?
      <Action
        contact={this.state.selectedOption}
        index={this.state.index}
      /> :
      <Action contact={{}} info={info} />;

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="col-xs-12">
          <aside className="col-xs-4 ccontacList">
            <ContactList
              contacts={this.state.contacts}
              numberOfContacts={this.state.contacts.length}
              handleDeleteContact={this.handleDeleteContact}
              handlePick={this.handlePick}
              listUpdated={this.state.listUpdated}
            />
          </aside>
          <div className="col-xs-8 contacListView">
            {contactItem}
            <div className="widget">
              <Options
                handleDeleteContacts={this.handleDeleteContacts}
                numberOfContacts={this.state.contacts.length}
              />
              <AddContact
                handleAddContact={this.handleAddContact}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
        <OptionModal
          listUpdated={this.state.listUpdated}
          handleClearUpdate={this.handleClearUpdate}
        />
      </div>
    );
  }
}

export default connect(null, { resetForm })(IndecisionApp);
