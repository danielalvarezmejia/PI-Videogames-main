import style from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={style.container}>
      <input className={style.input} type="text" />
      <button className={style.button}>Search</button>
    </div>
  )
}

export default SearchBar;