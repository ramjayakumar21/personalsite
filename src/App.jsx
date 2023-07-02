import { useState, createContext } from "react";
import {
  ChakraProvider,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";
import Info from "./components/Info";
import Contact from "./components/About";

const VisibleWindowContext = createContext();

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [visibleWindow, setVisibleWindow] = useState("projects");
  const vis = { visibleWindow, setVisibleWindow };

  return (
    <BrowserRouter>
      <VisibleWindowContext.Provider value={vis}>
        <ChakraProvider>
          <Tabs variant="solid-rounded" size="lg" colorScheme="purple">
            <div className="menu bg-[#1F2937] text-white md:block p-5 flex font-mono">
              <TabList>
                <div className="text-4xl font-bold p-2 mr-auto">
                  Ram Jayakumar
                </div>
                <div className="gap-1 mr-5 p-1 px-3 hidden md:flex rounded-md text-blue-800">
                  <Link to=".\">
                    <Tab color={"white"}>Home</Tab>
                  </Link>
                  <Link to=".\projects">
                    <Tab color={"white"}>Projects</Tab>
                  </Link>
                  <Link to=".\contact">
                    <Tab color={"white"}>About</Tab>
                  </Link>
                </div>
                <div className="ml-10 block p-2 md:hidden rounded-md">
                  <IconButton
                    colorScheme="blue"
                    aria-label="Sidebar"
                    size="lg"
                    onClick={onOpen}
                    icon={<HamburgerIcon />}
                  ></IconButton>
                </div>
                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton  size="lg"/>
                    <div className="gap-1 mr-5 p-1 px-3 rounded-md flex flex-col justify-end">
                      <div>
                        <Link to=".\" onClick={onClose}>
                          <Tab>Home</Tab>
                        </Link>
                        <Link to=".\projects" onClick={onClose}>
                          <Tab>Projects</Tab>
                        </Link>
                        <Link to=".\contact" onClick={onClose}>
                          <Tab>About</Tab>
                        </Link>
                      </div>
                    <div className="mt-1">
                      github
                    </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </TabList>
            </div>
          </Tabs>

          <div className="bg-[#1F2937] text-white font-mono">
            <Routes>
              <Route path="/" element={<Info />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </ChakraProvider>
      </VisibleWindowContext.Provider>
    </BrowserRouter>
  );
}

export { App, VisibleWindowContext };
