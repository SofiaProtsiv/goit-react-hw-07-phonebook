import { ReactComponent as AddUserBtn } from '../icons/addUser.svg';
import { ReactComponent as CloseBtn } from '../icons/close.svg';
import { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import ContactForm from './ContactForm/index';
import Filter from './Filter';
import ContactsList from './ContactsList';
import Container from './Container';
import Modal from './Modal';
import Section from './Section';
import IconButton from './IconButton';
import { ImSpinner } from 'react-icons/im';
import { fetchContacts } from '../redux/contacts-operations';

function App({ contacts, isLoading }) {
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
        {contacts.items.length > 0 && <Filter />}
        {contacts.items.length > 0 ? (
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

const mapStateToProps = state => ({
  contacts: state.contacts,
  isLoading: state.contacts.loading,
});

export default connect(mapStateToProps)(App);
