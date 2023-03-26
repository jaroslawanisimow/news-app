import React, { FC } from "react";
import swissFlag from "./ch.svg";
import styles from "./styles.module.css";

type Props = {};

export const SwissFlag: FC<Props> = () => {
  return (
    <div>
      <img src={swissFlag} alt="Swiss Flag" className={styles.flag} />
      {/* <div> Swiss </div> */}
    </div>
  );
};
