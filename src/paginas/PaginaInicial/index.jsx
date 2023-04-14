import Cabecalho from "componentes/Cabecalho";
import Galeria from "componentes/Galeria";
import Menu from "componentes/Menu";
import Populares from "componentes/Populares";
import Rodape from "componentes/Rodape";
import banner from "./banner.png";
import styles from "./PaginaInicial.module.scss";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main className={styles.main}>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa de fotos do espaço</h1>
            <img src={banner} alt="Foto da terra" />
          </div>
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Rodape />
    </>
  );
}
