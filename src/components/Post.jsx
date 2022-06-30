import styles from './Post.module.css';

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/andrellgrillo.png" className={styles.avatar} />
          <div className={styles.authorInfo}>
            <strong>André Grillo</strong>
            <span>Web Developer</span>
          </div>
        </div>


        <time title="30 de Junho às 14:50h" dateTime='2022-06-30 14:50:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👏</p>
        <p>Acabei de subir mais um projeto no meu portifólio. É um projeto  que fiz na NWL Return, 
          evento da Rocketseat. O nome do projeto é DoctorCar 🚀</p>
        <p><a href="#">planexcon.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#"> #nlw</a>
          <a href="#"> #rocketseat</a>
        </p>
      </div>
    </article>
  )
}