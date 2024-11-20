import Input from "../Input/Input";
import styles from "./NavBar.module.css";

interface NavBarProps {
  setSearchTerm: (term: string) => void;
  onSearch: () => void;
}

const NavBar = ({ setSearchTerm, onSearch }: NavBarProps) => {
  return (
    <nav className={styles.navStyles}>
      <img src="logo.png" alt="Logo" />
      <Input setSearchTerm={setSearchTerm} />
      <button onClick={onSearch} className={styles.searchButton}>
        Buscar
      </button>
    </nav>
  );
};

export default NavBar;
