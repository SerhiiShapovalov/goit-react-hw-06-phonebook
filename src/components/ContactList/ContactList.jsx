import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function ContactList({ contacts }) {
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={() => dispatch(deleteContact(id))}
              contactId={id}
            />
          </li>
        );
      })}
    </ul>
  );
}

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
