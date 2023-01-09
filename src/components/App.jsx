import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';

import { GlobalStyle } from './GlobalStyles';
import { Container, Title } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactsForm />
      <ContactsList title="Contacts" />
      <GlobalStyle />
    </Container>
  );
};
