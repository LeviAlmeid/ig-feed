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
                <h4>Apaixonado pela área de tecnologia e por programação desde que a conheci. 
                    Gosto de aprender ferramentas novas e de pensar em como resolver os problemas da melhor maneira. Atualmente, trabalho na área de desenvolvimento, utilizo algumas tecnologias como: JavaScript, HTML, CSS e PHP, como também algumas relacionadas a banco de dados: SQL e MySql.
                    Estou estudando ReactJS, junto também com Typescript, NodeJS, SASS e REST API. 
                    Por questões de preferencias, sou mais familiarizado com o front-end, porém meu foco é me tornar um desenvolvedor full-stack.</h4>
            </div>

            
        </article>
    )
}