import styles from "./Input.module.css";

interface InputProps {
  setSearchTerm: (term: string) => void;
}

const Input = ({ setSearchTerm }: InputProps) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      onChange={handleSearch}
      className={styles.inputSearch}
      type="search"
      placeholder="Pesquise a notícia"
    />
  );
};

export default Input;
