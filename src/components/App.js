import { ReactComponent as AddUserBtn } from '../icons/addUser.svg';
import { ReactComponent as CloseBtn } from '../icons/close.svg';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './ContactForm/index';
import Filter from './Filter';
import ContactsList from './ContactsList';
import Container from './Container';
import Modal from './Modal';
import Section from './Section';
import IconButton from './IconButton';
import { ImSpinner } from 'react-icons/im';
import { fetchContacts } from '../redux/contacts-operations';

function App() {
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.loading);

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm toggleModal={toggleModal} />
          <IconButton onClick={toggleModal}>
            <CloseBtn className="closeModal" />
          </IconButton>
        </Modal>
      )}

      <Section title="Phonebook">
        <IconButton onClick={toggleModal}>
          <AddUserBtn className="openModal" />
        </IconButton>
      </Section>
      {isLoading && (
        <div className="backdrop">
          <ImSpinner size="32" className="loader" />
        </div>
      )}
      <Section title="Contacts">
        {contacts.length > 0 && <Filter />}
        {contacts.length > 0 ? (
          <ContactsList />
        ) : (
          <p className="notification">
            Your phonebook is empty. Please add contact.
          </p>
        )}
      </Section>
    </Container>
  );
}

export default App;
