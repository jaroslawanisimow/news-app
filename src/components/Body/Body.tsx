import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { parseISO, format } from "date-fns";

type NewsItem = {
  title: string;
  source: { name: string };
  publishedAt: string;
  urlToImage: string | null;
  description: string;
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

export const Body = () => {
  const articles = useSelector((state: any) => state.articles.data);
  const view = useSelector((state: any) => state.settings.view);
  const { country } = useParams();
  const countryName = getCountryName(country || "pl");
  console.log(articles);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.title}>
          Breaking News <p>{countryName}</p>
        </div>
        <div className={styles.line}></div>
        <div
          className={`${styles.news} ${
            view === "grid" ? styles.grid : styles.list
          }`}
        >
          {articles.map((newsItem: NewsItem) => (
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
