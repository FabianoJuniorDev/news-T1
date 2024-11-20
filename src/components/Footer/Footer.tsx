import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 Portal t1. Todos os direitos reservados.</p>
        <nav>
          <ul className={styles.navList}>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Termos de Uso</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
