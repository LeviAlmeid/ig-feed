import { Header } from "./components/Header"

import styles from './App.module.css'
import './global.css'
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/LeviAlmeid.png',
      name: 'Levi Almeida',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera'},
      {type: 'paragraph', content:       'Acabei de subir mais um projeto no meu portifólio.É um projeto que fiz no Ignite.',
    },
    {type: 'link', content: 'levi.design/doctorcate'}

    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera'},
      {type: 'paragraph', content:       'Acabei de subir mais um projeto no meu portifólio.É um projeto que fiz no Ignite.',
    },
    {type: 'link', content: 'levi.design/doctorcate'}

    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
  
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />

            ) 
          })}
        </main>
      </div>

    </>
  )
}

export default App
