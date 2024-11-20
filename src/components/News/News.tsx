import { useEffect, useState } from "react";
import styles from "./News.module.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://servicodados.ibge.gov.br/api/v3/noticias/")
      .then((res) => res.json())
      .then((items) => {
        setNews(items.items);
        console.log(items);
      });
  }, []);

  return (
    <>
      <div className={styles.container}>
        {news.map((item) => (
          <div className={styles.contentNews} key={item.id}>
            <div>
              <h1 className={styles.title}>{item.titulo}</h1>
              <p>{item.introducao}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
