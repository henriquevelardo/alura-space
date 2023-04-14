import React, { useState } from 'react'
import Tags from '../Tags'
import styles from './Galeria.module.scss'
import fotos from './fotos.json'
import Cards from '../Cards'


export default function Galeria() {
  const [galeria, setGaleria] = useState(fotos)
  const tags = [...new Set(fotos.map((foto) => foto.tag))]

  const fitraImagem = (tag) => {
    const imagemFiltrada = fotos.filter((foto) => {
      return foto.tag === tag
    })

    setGaleria(imagemFiltrada)
  }
  
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filtra={fitraImagem} setGaleria={setGaleria} />
        <Cards fotos={galeria} styles={styles} />
    </section>
  )
}
