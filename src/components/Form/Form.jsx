import { Fragment, Component } from 'react';

import {FormStyled} from './Form.styled'

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <Fragment>
        <FormStyled onSubmit={this.props.onClick}>
          <h1>Phonebook</h1>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.props.onInput}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.props.onInput}
            />
          </label>
          <button type="submit">Add contact</button>
        </FormStyled>
      </Fragment>
    );
  }
}

export default Form;
