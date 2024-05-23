import TimeLineTime from "../elements/CardLineTime.jsx";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about}>
      <h1>Sobre mim</h1>
      <div className={styles.timelineContainer}>
        
        <TimeLineTime
          ano="2022"
          lineLeft={false}
          ball={true}
          lineRight={true}
          texto="Comprei meu primeiro notebook e iniciei minha jornada como desenvolvedor assistindo video aulas no youtube."
        />
        <TimeLineTime
          ano="2023"
          lineLeft={true}
          ball={true}
          lineRight={true}
          texto="Descobri a escola DNC atraves do instagram e logo de cara me interessei pelo curso de Desenvolvedor Full-Stack."
        />
        <TimeLineTime
          ano="2024"
          lineLeft={true}
          ball={true}
          lineRight={false}
          texto="Estou finalizando meu curso e estou me sentindo muito motivado para me tornar um desenvolvedor Full-Stack."
        />
      </div>
    </section>
  );
}

export default About;
