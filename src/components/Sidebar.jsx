import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';


export function Sidebar( ) {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=50" alt="" />
        
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/LeviAlmeid.png" alt="" />

                <strong>Levi Almeida</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}