import React from "react";
import styles from "./Tag.module.scss";
import fotos from "../Galeria/fotos.json"

export default function Tags({ filtra, tags, setGaleria }) {

  return (
    <div className={styles.tags}>
      <p>Filtre por Tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => {
          return <li key={tag} onClick={() =>filtra(tag)}>{tag}</li>;
        })}
        <li onClick={()=> setGaleria(fotos)}>Todas</li>
      </ul>
    </div>
  );
}
