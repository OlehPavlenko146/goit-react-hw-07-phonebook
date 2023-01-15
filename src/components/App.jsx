import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Loader } from './Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import { GlobalStyle } from './GlobalStyles';
import { Container, Title } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactsForm />
      {isLoading && !error && <Loader />}
      <ContactsList title="Contacts" />

      <GlobalStyle />
    </Container>
  );
};
