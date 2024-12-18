import { useEffect, useState } from "react";
import styles from "./News.module.css";
import Loading from "../Load/Loading";

interface NewsItem {
  id: string;
  titulo: string;
  introducao: string;
  link: string;
  data_publicacao: string;
  editorias: string[];
}

interface NewsProps {
  searchTerm: string;
  triggerSearch: boolean;
  setTriggerSearch: (value: boolean) => void;
}

const News = ({ searchTerm, triggerSearch, setTriggerSearch }: NewsProps) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Carregar as notícias com um delay simulado (para fins de loading)
  useEffect(() => {
    setIsLoading(true);
    fetch("https://servicodados.ibge.gov.br/api/v3/noticias/")
      .then((res) => res.json())
      .then((items: { items: NewsItem[] }) => {
        setNews(items.items);
        setFilteredNews(items.items); // Inicializar com todas as notícias
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (triggerSearch) {
      setIsLoading(true);

      const timeoutId = setTimeout(() => {
        if (searchTerm.trim() === "") {
          setFilteredNews(news);
        } else {
          const filtered = news.filter(
            (item) =>
              item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.introducao.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredNews(filtered);
        }

        setTriggerSearch(false);
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [triggerSearch, searchTerm, news, setTriggerSearch]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {!filteredNews.length && <p>Nenhuma notícia encontrada.</p>}
          {filteredNews.map((item) => (
            <div className={styles.contentNews} key={item.id}>
              <div>
                <h1 className={styles.title}>{item.titulo}</h1>
                <p className={styles.titleTwo}>{item.introducao}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  continuar lendo ..
                </a>
                <p>
                  {item.data_publicacao} -{" "}
                  {Array.isArray(item.editorias)
                    ? item.editorias.join(", ")
                    : item.editorias || "Sem editoria"}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default News;
