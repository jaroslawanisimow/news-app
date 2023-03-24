import React from 'react';
import s from './styles.module.css';

type Props = {
  title: string;
}

export const Header: React.FC<Props> = () => {
  return (
    <div className={s.header}>

    </div>
  );
};