import styles from './app.module.scss'
import Center from './components/Center/Center'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'

function App() {

  return (    
      <div className={styles['app']}>
          <Header/>
          <Center/>
          <Menu/>
      </div>
  )
}

export default App
