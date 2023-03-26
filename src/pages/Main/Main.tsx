import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

import Header from "../../components/Header/Header";
import { Body } from "../../components/Body/Body";
import { Footer } from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { load } from "../../articleSlice";

import { useDispatch } from "react-redux";

export const Main = () => {
  const dispatch = useDispatch();
  const { country } = useParams();

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${
            country || "pl"
          }&apiKey=0f7b94d0d5e04f2ebd4412f1becf8d76`
        );
        const data = await response.json();
        dispatch(load(data.articles));
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewsData();
  }, [country]);

  return (
    <div className={styles.main}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
