import ContactListItem from '../contactlistitem/ContactListItem';
import styled from 'styled-components';

const ItemList = styled.ul`
 list-style: none;
 color: darkblue;
`;

const ContactList = ({ contacts, onDeleteContact }) => (
  
    <ItemList>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ItemList>
  );


export default ContactList;