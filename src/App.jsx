import styles from './app.module.scss'
import Center from './components/Center/Center'
import Header from './components/Header/Header'

function App() {

  return (    
      <div className={styles['app']}>
          <Header/>
          <Center/>
      </div>
  )
}

export default App
