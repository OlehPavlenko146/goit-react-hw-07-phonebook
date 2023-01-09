import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Contact, ContactDetails, DeleteBtn } from './Contacts.List.styled';

export const ContactItem = ({ id, number, name }) => {
  const dispatch = useDispatch();

  return (
    <Contact>
      <ContactDetails>{name}</ContactDetails>
      <ContactDetails>{number}</ContactDetails>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteBtn>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
