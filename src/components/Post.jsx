import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'






export function Post({ author, publishedAt, content }){

    const [comments, setComments] = useState(['Post top'])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })


    function handleCreateNewComment(){
        event.preventDefault()


        setComments([...comments, newCommentText])
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    return(
        <article className={styles.post}>
            <header>
                <div>
                    <h2><strong>Aprensentação</strong></h2>

                </div>

            </header>

            <div className={styles.content}>
                <h4>Sou desenvolvedor full-stack, estudante de ciência da computação e apaixonado por tecnologia. Atualmente trabalho com desenvolvimento de software, utilizando linguagens como: JavaScript, HTML, CSS, PHP, AJAX e Banco de Dados.</h4>
            </div>

            
        </article>
    )
}