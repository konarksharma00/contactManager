import React from 'react';
import AddOption from '../components/AddOption';
import Action from '../components/Action';
import Header from '../components/Header';
import Options from '../components/Options';
import OptionModal from '../components/OptionModal';
import ContactList from '../components/contactList';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    editContact : {
      firstName: 'Jane',
      lastName: 'Doe',
      email: '42',
      phoneNumber: 9023825856,
      status: true,
    }
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }
  handleDeleteOption = (contactToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => prevState.options[contactToRemove] !== option)
    }));
  };
  handleEdit = (selectedContacted) => {
    this.setState((prevState) => ({
      editContact: prevState.options[selectedContacted]
    }));
  };
  handlePick = (selectedContacted) => {
    // const randomNum = Math.floor(Math.random() * this.state.options.length);
    // const option = this.state.options[randomNum];
    this.setState((prevState) => ({
      selectedOption: prevState.options[selectedContacted]
    }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option.phoneNumber) > -1) {
      console.log('here');
      return 'This option already exists';
    }
    console.log(this.state.options);
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    const subtitle = 'Not knowing a contact when needed is annoying!!!';
    const contactItem = this.state.selectedOption ?
      <Action
        contact={this.state.selectedOption}
        handleEdit={this.handleEdit}
      /> :
      <Action contact={{}} />;

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="col-xs-12">
          <aside className="col-xs-4 ccontacList">
            <ContactList
              options={this.state.options}
              hasOptions={this.state.options.length > 0}
              numberOfContacts={this.state.options.length}
              handleDeleteOption={this.handleDeleteOption}
              handlePick={this.handlePick}
            />
          </aside>
          <div className="col-xs-8 contacListView">
            {contactItem}
            <div className="widget">
              <Options
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
              />
              <AddOption
                handleAddOption={this.handleAddOption}
              />
            </div>
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
