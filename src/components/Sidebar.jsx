import { PencilLine, GithubLogo, LinkedinLogo } from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div>
                <img className={styles.cover} src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=50" alt="" />

                <div className={styles.profile}>
                    <Avatar src="https://github.com/LeviAlmeid.png" />
                    <strong>Levi Almeida</strong>
                    <span>Web Developer</span>
                </div>

                <footer>

                    <div className='itensSocialLogo'>
                        <a href="#">
                            <GithubLogo size={32} alt="Git Hub Account" />
                        </a>
                    </div>

                    <div className='itensSocialLogo'>
                        <a href="#" id='githubLogo'>
                            <LinkedinLogo size={32} alt="Linkedin Account" />
                        </a>
                    </div>

                </footer>
            </div>

        </aside>



    )
}