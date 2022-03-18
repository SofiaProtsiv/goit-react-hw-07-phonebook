import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts-selectors';
import propTypes from 'prop-types';
import style from './ContactList.module.css';

export default function ContactsList() {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteBtn = id => dispatch(deleteContact(id));
  return (
    <>
      <ul className={style.list}>
        {visibleContacts.length > 0 ? (
          visibleContacts.map(({ id, name, number }) => (
            <li className={style.item} key={id}>
              <p className={style.name}>
                {name}: <span className={style.number}>{number}</span>
              </p>
              <button
                className={style.button}
                type="button"
                onClick={e => onDeleteBtn(id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className={style.notification}>No matches found.</p>
        )}
      </ul>
    </>
  );
}

ContactsList.propTypes = {
  onDeleteBtn: propTypes.func,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string,
      name: propTypes.string,
      phone: propTypes.string,
    })
  ),
};
