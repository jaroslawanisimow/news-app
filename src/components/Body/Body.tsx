import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type NewsItem = {
  title: string;
  source: { name: string };
  publishedAt: string;
  urlToImage: string | null;
  description: string;
};

type Props = {
  isGrid: boolean;
  country: string;
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

export const Body: React.FC<Props> = ({ isGrid, country }) => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=0f7b94d0d5e04f2ebd4412f1becf8d76`
        );
        const data = await response.json();
        const articles = data.articles.map((article: NewsItem) => {
          const date = article.publishedAt.split("T")[0]; //
          return { ...article, publishedAt: date };
        });
        setNewsData(articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewsData();
  }, [country]);

  const countryName = getCountryName(country);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.title}>
          Breaking News <p>{countryName}</p>
        </div>
        <div className={styles.line}></div>
        <div className={`${styles.news} ${isGrid ? styles.grid : styles.list}`}>
          {newsData.map((newsItem: NewsItem) => (
            <div className={styles.newsContainer} key={newsItem.title}>
              <div className={styles.nameTitle}>
                <h2>{newsItem.title}</h2>
              </div>
              <div className={styles.p}>
                <p>{newsItem.source.name}</p>
                <p>{newsItem.publishedAt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// {
//   /* {newsItem.urlToImage && (
//                 <img src={newsItem.urlToImage} alt="thumbnail" />
//               )} */
// }
// {
//   /* <p>{newsItem.description}</p> */
// }
// {
//   /* <button onClick={() => setIsGrid(!isGrid)} className={styles.button}>
//           Toggle
//         </button> */
// }
