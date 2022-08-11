import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/LeviAlmeid.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Levi Almeida</strong>
                            <time>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>

                    </header>

                    <p>Parabens pelo projeto</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>33</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}