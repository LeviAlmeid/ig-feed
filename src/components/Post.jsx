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

            <div className={styles.content}></div>
        </article>
    )
}