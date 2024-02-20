import { setFilter } from '../../redux/filter/filter-slice';
import { useDispatch } from 'react-redux';
import style from '../Filter/filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));
  // changeFilter = { changeFilter };
  return (
    <div className={style.filter}>
      <label htmlFor="filterID">Find contact by name</label>
      <input
        className={style.input}
        onChange={changeFilter}
        id="filterID"
        name="filter"
        placeholder="Search"
      />
    </div>
  );
};
