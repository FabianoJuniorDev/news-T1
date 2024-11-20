import styles from "./Input.module.css";

interface InputProps {
  setSearchTerm: (term: string) => void;
  onSearch: () => void;
}

const Input = ({ setSearchTerm, onSearch }: InputProps) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("ativou");
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <>
      <input
        onChange={handleSearch}
        className={styles.inputSearch}
        type="text"
        placeholder="Pesquise a notícia"
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default Input;
