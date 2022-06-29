import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>
        <Post
            author="André Grillo"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post
            author="Gréliz"
            content="Laboriosam dolorum amet deserunt odio sequi unde voluptas molestiae, perferendis cupiditate tenetur laborum voluptatibus dolore natus alias officia iure asperiores veritatis facere!"
          />
        </main>
      </div>
    </div>

  )
}