import style from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { getName } from '../../redux/actions/actions';
import { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    dispatch(getName(searchQuery));
  };

  const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      handleSearch();
    }
  };

  return (
    <div className={style.container}>
      <input 
        className={style.input}
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} 
      />
      <button className={style.button} onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar;

