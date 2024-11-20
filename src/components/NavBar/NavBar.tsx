import Input from "../Input/Input";
import styles from "./NavBar.module.css";
import Logo from "../../assets/t1.png";
import { FaSearch } from "react-icons/fa";

interface NavBarProps {
  setSearchTerm: (term: string) => void;
  onSearch: () => void;
}

const NavBar = ({ setSearchTerm, onSearch }: NavBarProps) => {
  return (
    <nav className={styles.navStyles}>
      <img src={Logo} alt="Logo" />
      <div className={styles.searchWrapper}>
        <Input setSearchTerm={setSearchTerm} onSearch={onSearch} />
        <FaSearch className={styles.search} onClick={onSearch} />
      </div>
    </nav>
  );
};

export default NavBar;
