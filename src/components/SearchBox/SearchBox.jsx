import css from "./SearchBox.module.css";

const SearchBox = ({ filterContacts, setFilterContacts }) => {
  const handleFilter = (event) => {
    const value = event.target.value;
    setFilterContacts(value);
  };

  return (
    <div>
      <h2 className={css.titleSearch}>Find contacts by name</h2>
      <input
        className={css.input}
        type="text"
        value={filterContacts}
        onChange={handleFilter}
      ></input>
    </div>
  );
};

export default SearchBox;
