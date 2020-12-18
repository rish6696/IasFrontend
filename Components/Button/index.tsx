import React from 'react';
import styles from './Button.module.css'

interface Props{
  style?: React.CSSProperties;
  onClick ?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
  label:string
}


export default function Button(props: Props){

  const {style,onClick,label}= props;
  return (
  <button className={styles.Button} onClick={onClick}  style={{...props.style}}>{label}</button>
);
}