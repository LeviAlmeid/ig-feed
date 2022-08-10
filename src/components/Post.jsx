import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/LeviAlmeid.png" />
                    <div className={styles.authorInfo}>
                        <strong>Levi Almeida</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time dateTime=''>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala Galera</p>

                <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite.</p>
                
                <p>#tec #nextlevel</p>
            </div>
        </article>
    )
}