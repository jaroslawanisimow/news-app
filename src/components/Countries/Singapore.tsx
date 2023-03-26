import React, { FC } from "react";
import singaporeFlag from "./sg.svg";
import styles from "./styles.module.css";

type Props = {};

export const SingaporeFlag: FC<Props> = () => {
  return (
    <div>
      <img src={singaporeFlag} alt="Singapore Flag" className={styles.flag} />
    </div>
  );
};
