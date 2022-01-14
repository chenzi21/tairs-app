import styles from '../styles/Home.module.scss'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
    </div>
  )
}
