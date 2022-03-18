import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts-selectors';
import { changeFilter } from '../../redux/contacts-actions';
import style from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleChangeFilter = ({ target: { value } }) =>
    dispatch(changeFilter(value));
  return (
    <>
      <label className={style.label}>
        Find contacts by name 🔎
        <input
          className={style.input}
          type="text"
          value={value}
          onChange={handleChangeFilter}
        />
      </label>
    </>
  );
}
