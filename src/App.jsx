
import {useState, createContext} from 'react'
import { ChakraProvider, Tabs, TabList, Tab, TabPanels, TabPanel, Button, Drawer, 
    DrawerBody, DrawerOverlay, DrawerContent, useDisclosure, DrawerCloseButton} from '@chakra-ui/react'
import "./index.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Projects from './components/Projects'
import Info from './components/Info'

const VisibleWindowContext = createContext()

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [visibleWindow, setVisibleWindow] = useState("projects")
  const vis = {visibleWindow, setVisibleWindow}


  return (
    <BrowserRouter>
      <VisibleWindowContext.Provider value={vis}>
        <ChakraProvider>

            <Tabs variant='' size="lg" colorScheme='blackAlpha'>
                <div className="menu bg-[#1F2937] text-white md:block p-5 flex">
                  <TabList>
                    <div className='text-4xl font-bold p-2 mr-auto'>
                      Ram Jayakumar
                    </div>
                    <div className='gap-1 mr-5 p-1 px-3 hidden md:flex rounded-md'>
                      <Link to=".\"><Tab>Home</Tab></Link>
                      <Link to=".\projects"><Tab>Projects</Tab></Link>
                      <Link to=".\about"><Tab>About</Tab></Link>
                    </div>
                    <div className='ml-10 block p-2 md:hidden rounded-md'>
                      <Button colorScheme='blue' onClick={onOpen}>Menu</Button>
                    </div>
                    <Drawer
                      isOpen={isOpen}
                      placement='right'
                      onClose={onClose}
                    >
                      <DrawerOverlay />
                      <DrawerContent>
                        <DrawerCloseButton />
                      </DrawerContent>
                    </Drawer>
                  </TabList>
                </div>
              </Tabs>

            <div className='px-10 bg-[#1F2937] text-white'>
              <Routes>
                <Route path="/" element={<Info />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<Info />} />
              </Routes>
            </div>
        </ChakraProvider>
      </VisibleWindowContext.Provider>
    </BrowserRouter>
  )
}


export {App, VisibleWindowContext}
