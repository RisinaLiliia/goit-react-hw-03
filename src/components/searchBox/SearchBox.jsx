import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchBox}>
      <label htmlFor="search" className={css.label}>
        Search by name:
      </label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
        className={css.input}
      />
    </div>
  );
}
