import React from 'react'
import Facebook from './facebook.svg'
import Instagram from './instagram.svg'
import Twitter from './twitter.svg'
import styles from './Rodape.module.scss'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <div>
            <img src={Facebook} alt="Logo do Facebook" />
            <img src={Instagram} alt="Logo do Twitter" />
            <img src={Twitter} alt="Logo do Instagram" />
        </div>
        <p>Desenvolvido por Henrique.</p>
    </footer>
  )
}
