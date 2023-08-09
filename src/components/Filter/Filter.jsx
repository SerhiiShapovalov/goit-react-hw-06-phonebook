import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contactsSlice';
import css from './Filter.module.css';

function Filter({ filter }) {
  const dispatch = useDispatch();
  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={e => dispatch(updateFilter(e.target.value))}
      />
    </label>
  );
}

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
