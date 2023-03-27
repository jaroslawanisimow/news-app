import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";


export const Footer = () => {
  const [isTime, setTime] = useState(new Date());

  const articles = useSelector((state: any) => state.articles);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.footer}>
      <div className={styles.time}>{isTime.toLocaleTimeString()}</div>
      <div className={styles.number}> News on the page : {articles.data.length}</div>
    </div>
  );
};
