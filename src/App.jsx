import Draggable from 'react-draggable'
import {useState, createContext} from 'react'
import Desktop from './components/Desktop'
import DarkModeButton from './components/DarkModeButton'
import { ChakraProvider, Tabs, TabList, Tab} from '@chakra-ui/react'
import "./index.css"
import Projects from './components/Projects'

const VisibleWindowContext = createContext()

function App() {
  const [visibleWindow, setVisibleWindow] = useState("projects")
  const vis = {visibleWindow, setVisibleWindow}


  return (
    <VisibleWindowContext.Provider value={vis}>
      <div className='desktop select-none bg-gray-800 pt-10'>
          <Desktop />
      </div>
    </VisibleWindowContext.Provider>
  )
}


export {App, VisibleWindowContext}
