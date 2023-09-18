import '../index.css'
import Main from './components/main'
import Sidenav from './components/Sidenav'
import Projects from './components/Projects'
import Work from './components/Work'
import Contact from './components/Contact'
function App() {

  return (
    <div>
     <Sidenav/>
     <Main/>
     <Work />
     <Projects/>
     <Contact/>
    </div>
  )
}

export default App
