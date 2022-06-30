import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1608153513681-5eed4ecddb61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/26194953?v=4" alt="" />
        <strong>Andre Grillo</strong>
        <span>Wev Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}