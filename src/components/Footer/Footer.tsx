import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

type Props = {
  number: number;
};

export const Footer: React.FC<Props> = ({ number }) => {
  const [isTime, setTime] = useState(new Date());

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
      <div className={styles.number}> Articles on the page : {number}</div>
    </div>
  );
};
