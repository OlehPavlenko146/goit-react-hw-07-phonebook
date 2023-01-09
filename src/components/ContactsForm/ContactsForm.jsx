import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { Filter } from '../Filter/Filter';
import { Form, Input, Label, AddBtn } from './ContactsForm.styled';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const newName = event.target.name.value;
    const number = event.target.number.value;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      return alert(`${newName} is already in contacts.`);
    } else {
      dispatch(addContact(newName, number));
    }

    event.target.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <AddBtn type="submit">Add contact</AddBtn>
      </Form>
      {contacts.length > 0 && <Filter />}
    </>
  );
};


