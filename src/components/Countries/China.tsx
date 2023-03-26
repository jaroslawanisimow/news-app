import React, { FC } from "react";
import chinaFlag from "./cn.svg";
import styles from "./styles.module.css";

type Props = {};

export const ChinaFlag: FC<Props> = () => {
  return (
    <div>
      <img src={chinaFlag} alt="China Flag" className={styles.flag} />
    </div>
  );
};
