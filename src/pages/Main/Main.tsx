import React from "react";
import s from "./styles.module.css";

import  Header  from "../../components/Header/Header";
import { SideMenu } from "../../components/SideMenu/SideMenu";
import { Body } from "../../components/Body/Body";
import { Footer } from "../../components/Footer/Footer";
import StepsLine from "../../components/StepsLine/StepsLine";

type Props = {
};

export const Main: React.FC<Props> = () => {
  return (
    <div className={s.main}>

      <Header />
      <SideMenu />
      <Body />
      <Footer />
    </div>
  );
};
