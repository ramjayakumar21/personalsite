import Draggable from 'react-draggable'
import {useState} from 'react'
import Desktop from './components/Desktop'
import DarkModeButton from './components/DarkModeButton'
import { ChakraProvider, Tabs, TabList, Tab} from '@chakra-ui/react'
import "./index.css"
import Projects from './components/Projects'

function App() {
  const [projectsVisible, setProjectsVisible] = useState(false)

  return (
    <div className='desktop bg-gray-800 pt-36'>
        <Desktop 
          projectsVisible={projectsVisible}
          setProjectsVisible={setProjectsVisible}
        />
        <div style={{"display":(projectsVisible) ? "block" : "none"}}>
          <Projects
              projectsVisible={projectsVisible}
              setProjectsVisible={setProjectsVisible}
          />
        </div>
    </div>
  )
}


export default App
