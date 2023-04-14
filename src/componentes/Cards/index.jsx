import React from "react";
import Card from "../Card";


export default function Cards({fotos, styles}) {
  return (
    <ul className={styles.galeria__cards}>
      <Card fotos={fotos} styles={styles}/>
    </ul>
  );
}