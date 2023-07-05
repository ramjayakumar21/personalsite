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
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";
import Info from "./components/Info";
import Contact from "./components/About";
import Article from "./components/Article";
import Experience from "./components/Experience";

const VisibleWindowContext = createContext();

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [visibleWindow, setVisibleWindow] = useState("projects");
  const vis = { visibleWindow, setVisibleWindow };

  // exprience will have uas and ubc rapid blog, projects will also be blog posts about projects

  return (
    <BrowserRouter>
      <VisibleWindowContext.Provider value={vis}>
        <ChakraProvider>
          <Tabs variant="" size="lg" colorScheme="blue">
            <div className="menu dark:bg-[#1F2937] bg-[#f2efef] dark:text-white text-cyan-600 md:block p-5 flex font-mono w-full">
              <TabList>
                <div className="text-4xl font-bold p-2 mr-auto">
                  <Link to=".\">Ram Jayakumar</Link>
                </div>
                <div className="gap-1 mr-5 p-1 px-3 hidden md:flex rounded-md text-white">
                  <div className="group">
                    <Link to=".\">
                      <Tab>Home</Tab>
                      <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"></span>
                    </Link>
                  </div>
                  <div className="group">
                  <Link to=".\projects">
                    <Tab >Projects</Tab>
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"></span>
                  </Link>
                  </div>
                  <div className="group">
                  <Link to=".\experience">
                    <Tab >Experience</Tab>
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"></span>
                  </Link>
                  </div>
                  <div className="group">
                  <Link to=".\contact">
                    <Tab >About</Tab>
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"></span>
                  </Link>
                  </div>
                </div>
                <div className="block p-2 flex ml-20 md:hidden rounded-md">
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
                    <div className="gap-1 mr-5 p-1 px-3 rounded-md flex-col justify-end">
                      <div>
                        <Link to=".\" onClick={onClose}>
                          <Tab>Home</Tab>
                        </Link>
                        <Link to=".\projects" onClick={onClose}>
                          <Tab>Projects</Tab>
                        </Link>
                        <Link to=".\experience" onClick={onClose}>
                          <Tab>Experience</Tab>
                        </Link>
                        <Link to=".\contact" onClick={onClose}>
                          <Tab>About</Tab>
                        </Link>
                      </div>
                    </div>
                    <div className="mt-auto p-1 px-3 mb-8 flex flex-col gap-2">
                      <Divider />
                      <a href="https://github.com/ramjayakumar21"><h1><i class="fa-brands fa-github fa-md"></i> Github </h1></a>
                      <a href="https://www.linkedin.com/in/ram-jayakumar-2a096420b/"><h1><i class="fa-brands fa-linkedin fa-md "></i> Linkedin </h1></a>
                    </div>
                  </DrawerContent>
                </Drawer>
              </TabList>
            </div>
          </Tabs>

          <div className="dark:bg-[#1F2937] bg-[#f2efef] text-white font-mono">
            <Routes>
              <Route path="/projects/:id" element={<Article />} />
              <Route path="/experience" element={<Experience/>}  />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Info />} />
            </Routes>
          </div>
        </ChakraProvider>
      </VisibleWindowContext.Provider>
    </BrowserRouter>
  );
}

export { App, VisibleWindowContext };
