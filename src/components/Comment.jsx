import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'


export function Comment({content}){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/LeviAlmeid.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Levi Almeida</strong>
                            <time>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>{content}</p>
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