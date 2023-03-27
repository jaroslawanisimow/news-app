import React, { FC } from "react";
import hongFlag from "./hk.svg";
import styles from "./styles.module.css";

type Props = {};

export const HongKongFlag: FC<Props> = () => {
  return (
    <div>
      <img src={hongFlag} alt="Hong Kong Flag" className={styles.flag}/>
    </div>
  );
};
