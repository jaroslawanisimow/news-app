import React, { FC } from "react";
import polandFlag from "./pl.svg";
import styles from "./styles.module.css";

type Props = {};

export const PolandFlag: FC<Props> = () => {
  return (
    <div>
      <img src={polandFlag} alt="Poland Flag" className={styles.flag}/>
    </div>
  );
};
