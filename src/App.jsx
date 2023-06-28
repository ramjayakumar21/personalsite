
import {useState, createContext} from 'react'
import Desktop from './components/Desktop'
import { ChakraProvider, Tabs, TabList, Tab, TabPanels, TabPanel} from '@chakra-ui/react'
import "./index.css"
import Projects from './components/Projects'
import Info from './components/Info'

const VisibleWindowContext = createContext()

function App() {
  const [visibleWindow, setVisibleWindow] = useState("projects")
  const vis = {visibleWindow, setVisibleWindow}


  return (
    <VisibleWindowContext.Provider value={vis}>
      <ChakraProvider>
       
          <Tabs variant='solid-rounded' size="lg" colorScheme='red'>
              <div className="menu bg-[#1F2937] text-white md:block p-3 flex">
                <TabList>
                  <div className='text-4xl font-bold p-2 mr-auto'>
                    Ram Jayakumar
                  </div>
                  <div className='flex gap-1 mr-5 bg-white p-1 px-3 rounded-md'>
                    <Tab>Home</Tab>
                    <Tab>Projects</Tab>
                    <Tab>About</Tab>
                  </div>
                </TabList>
              </div>

              {/* <div className="menu p-5 md:hidden flex justify-center">
                <TabList>
                  <div className='text-4xl mr-auto'>
                    Ram Jayakumar
                  </div>
                    <Tab>Home</Tab>
                    <Tab>Projects</Tab>
                    <Tab>About</Tab>
                </TabList>
              </div> */}


              <TabPanels>
                  <TabPanel>
                    <Info/>
                  </TabPanel>
                  <TabPanel>
                  <p>two!</p>
                  </TabPanel>
              </TabPanels>
            </Tabs>
      </ChakraProvider>
    </VisibleWindowContext.Provider>
  )
}


export {App, VisibleWindowContext}
