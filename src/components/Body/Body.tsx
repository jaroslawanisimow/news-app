import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { parseISO, format } from "date-fns";
import translateText from '../../services/translateService';
import { useEffect, useState } from "react";


type NewsItem = {
  title: string;
  source: { name: string };
  publishedAt: string;
  urlToImage: string | null;
  description: string;
};

type Props = {
  translationLanguage: string;
};

const getCountryName = (countryCode: string): string => {
  const countryCodes: { [key: string]: string } = {
    pl: "Poland",
    cn: "China",
    ch: "Swiss",
    sg: "Singapore",
    hk: "HongKong",
  };
  return countryCodes[countryCode] || "Unknown";
};

export const Body = ({ translationLanguage }: Props) => {
  const articles = useSelector((state: any) => state.articles.data);
  const view = useSelector((state: any) => state.settings.view);
  const { country } = useParams();
  const countryName = getCountryName(country || "pl");
  const [translatedArticles, setTranslatedArticles] = useState(articles);


  useEffect(() => {
    const translateArticles = async () => {
      if (translationLanguage) {
        const newTranslatedArticles = await Promise.all(
          articles.map(async (newsItem: NewsItem) => {
            const translatedTitle = await translateText(newsItem.title, translationLanguage);
            return {
              ...newsItem,
              title: translatedTitle || newsItem.title,
            };
          })
        );
        setTranslatedArticles(newTranslatedArticles);
      } else {
        setTranslatedArticles(articles);
      }
    };

    translateArticles();
  }, [articles, translationLanguage]);


  return (
    <>
      <div className={styles.main}>
        <div className={styles.title}>
        Najświeższe Wiadomości <p>{countryName}</p>
        </div>
        <div className={styles.line}></div>
        <div
          className={`${styles.news} ${
            view === "grid" ? styles.grid : styles.list
          }`}
        >
          {translatedArticles.map((newsItem: NewsItem) => (
            <div className={styles.newsContainer} key={newsItem.title}>
              <div className={styles.nameTitle}>
                <h2>{newsItem.title}</h2>
              </div>
              <div className={styles.p}>
                <p>{newsItem.source.name}</p>
                <p>{format(parseISO(newsItem.publishedAt), "yyyy-MM-dd")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


