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
  //   onClick1: () => void;
  // newsData: NewsItem[];
};

export const Body: React.FC<Props> = ({ isGrid }) => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  // const [isGrid, setIsGrid] = useState<boolean>(false);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=pl&apiKey=0f7b94d0d5e04f2ebd4412f1becf8d76"
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
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.title}>News App : Poland</div>
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
              {/* {newsItem.urlToImage && (
                <img src={newsItem.urlToImage} alt="thumbnail" />
              )} */}
              {/* <p>{newsItem.description}</p> */}
            </div>
          ))}
        </div>
        {/* <button onClick={() => setIsGrid(!isGrid)} className={styles.button}>
          Toggle
        </button> */}
      </div>
    </>
  );
};

export default Body;