import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/diego3g.png" />
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
                
                <a href='#'>#tec</a>{' '}
                <a href='#'>#nextlevel</a>
            </div>


            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />
                <footer>
                <button type='submit'>Publicar</button>

                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}