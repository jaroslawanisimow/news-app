import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

import Header from "../../components/Header/Header";
import { SideMenu } from "../../components/SideMenu/SideMenu";
import { Body } from "../../components/Body/Body";
import { Footer } from "../../components/Footer/Footer";

type Props = {};

export const Main: React.FC<Props> = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=pl&apiKey=0f7b94d0d5e04f2ebd4412f1becf8d76"
        );
        const data = await response.json();
        setNewsData(data.articles); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewsData();
  }, []);

  const [isGrid, setIsGrid] = useState<boolean>(false);

  const handleToggleGrid = () => {
    setIsGrid(!isGrid);
  };
  
  return (
    <div className={styles.main}>
      <Header onClick1={handleToggleGrid}/>
      <SideMenu />
      <Body isGrid={isGrid}/>
      <Footer number={newsData.length} />
    </div>
  );
};