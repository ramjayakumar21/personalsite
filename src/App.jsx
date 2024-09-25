import { useState, createContext, useEffect } from "react";
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
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";
import Main from "./components/Main";
import Contact from "./components/About";
import Article from "./components/Article";
import Experience from "./components/Experience";
import { Sugar } from "react-preloaders";

const VisibleWindowContext = createContext();

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [visibleWindow, setVisibleWindow] = useState("projects");
  const vis = { visibleWindow, setVisibleWindow };
  const [colorScheme, setColorScheme] = useState("light");
  const [loading, setLoading] = useState(true);
  // exprience will have uas and ubc rapid blog, projects will also be blog posts about projects

  useEffect(() => {
    applyPreferredColorScheme(colorScheme);
    new Promise((res) => setTimeout(res, 500))
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  // function taken from stackoverflow
  function applyPreferredColorScheme(scheme) {
    if (colorScheme == "light") {
      setColorScheme("dark");
      document
        .querySelector(":root")
        .style.setProperty("background-color", "#f2efef");
    } else {
      setColorScheme("light");
      document
        .querySelector(":root")
        .style.setProperty("background-color", "#1F2937");
    }

    console.log(document.styleSheets);
    for (let s = 0; s < document.styleSheets.length; s++) {
      try {
        for (let i = 0; i < document.styleSheets[s].cssRules.length; i++) {
          let rule = document.styleSheets[s].cssRules[i];

          if (
            rule &&
            rule.media &&
            rule.media.mediaText.includes("prefers-color-scheme")
          ) {
            switch (colorScheme) {
              case "light":
                rule.media.appendMedium("original-prefers-color-scheme");
                if (rule.media.mediaText.includes("light"))
                  rule.media.deleteMedium("(prefers-color-scheme: light)");
                if (rule.media.mediaText.includes("dark"))
                  rule.media.deleteMedium("(prefers-color-scheme: dark)");
                break;
              case "dark":
                rule.media.appendMedium("(prefers-color-scheme: light)");
                rule.media.appendMedium("(prefers-color-scheme: dark)");
                if (rule.media.mediaText.includes("original"))
                  rule.media.deleteMedium("original-prefers-color-scheme");
                break;
              default:
                rule.media.appendMedium("(prefers-color-scheme: dark)");
                if (rule.media.mediaText.includes("light"))
                  rule.media.deleteMedium("(prefers-color-scheme: light)");
                if (rule.media.mediaText.includes("original"))
                  rule.media.deleteMedium("original-prefers-color-scheme");
                break;
            }
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <BrowserRouter>
      <VisibleWindowContext.Provider value={vis}>
        <ChakraProvider>
          <Tabs variant="" size="lg" colorScheme="blue">
            <div className="menu  dark:bg-[#1F2937] bg-[#f2efef] dark:text-white text-cyan-600 md:block p-7 flex font-sans w-full align-center">
              <TabList>
                <div className="text-4xl font-bold p-2 mr-auto w-3/4 ">
                  <Link to=".\">Ram Jayakumar</Link>
                </div>
                <div className="navbar hidden md:flex bg-base-100 dark:bg-slate-700 rounded-3xl gap-3 justify-end w-fit px-4 drop-shadow-xl dark:text-cyan-300">
                  <Link to=".\">
                    <button className="btn btn-ghost text-xl">home</button>
                  </Link>
                  <Link to=".\projects">
                    <button className="btn btn-ghost  text-xl">projects</button>
                  </Link>
                  <Link to=".\experience">
                    <button className="btn btn-ghost text-xl">
                      experience
                    </button>
                  </Link>
                  {/* <Link to=".\contact">
                    <button className="btn btn-ghost text-xl">about</button>
                  </Link> */}
                </div>
                <div className="mt-2 ml-3 hidden md:block">
                  <IconButton
                    colorScheme="blue"
                    aria-label="Sidebar"
                    size="lg"
                    isRound={true}
                    onClick={() => {
                      applyPreferredColorScheme("light");
                    }}
                    icon={colorScheme == "dark" ? <SunIcon /> : <MoonIcon />}
                  ></IconButton>
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
                  <DrawerOverlay width="full" h="full" />
                  <DrawerContent>
                    <DrawerCloseButton size="lg" />
                    <div className="gap-1 mr-5 p-1 px-3 rounded-md flex-col justify-end text-cyan-600">
                      <div>
                        <Link to=".\" onClick={onClose}>
                          <Tab>home</Tab>
                        </Link>
                        <Link to=".\projects" onClick={onClose}>
                          <Tab>projects</Tab>
                        </Link>
                        <Link to=".\experience" onClick={onClose}>
                          <Tab>experience</Tab>
                        </Link>
                        {/* <Link to=".\contact" onClick={onClose}>
                          <Tab>About</Tab>
                        </Link> */}
                      </div>
                    </div>
                    <div className="mt-auto p-1 px-3 mb-8 flex flex-col gap-2">
                      <Divider />

                      <a
                        href="https://github.com/ramjayakumar21"
                        className="bg-slate-900 p-3 hover:bg-slate-600 rounded-md text-white flex flex-row items-center justify-center gap-1"
                      >
                        <i class="fa-brands fa-github fa-xl "></i> Github
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ram-jayakumar-2a096420b/"
                        className="bg-blue-600 p-3 hover:bg-blue-700 rounded-md flex flex-row text-white items-center justify-center gap-1"
                      >
                        <i class="fa-brands fa-linkedin fa-xl"></i> Linkedin
                      </a>
                      <IconButton
                        colorScheme="blue"
                        aria-label="Sidebar"
                        size="lg"
                        onClick={() => {
                          applyPreferredColorScheme("light");
                        }}
                        icon={
                          colorScheme == "dark" ? <SunIcon /> : <MoonIcon />
                        }
                      ></IconButton>
                    </div>
                  </DrawerContent>
                </Drawer>
              </TabList>
            </div>
          </Tabs>
          {/* Preloader */}
          <Sugar
            background={colorScheme == "dark" ? "#f2efef" : "#f2efef"}
            customLoading={loading}
            color={colorScheme == "dark" ? "#0891b2" : "#0891b2"}
          />

          <div className="dark:bg-[#1F2937] bg-[#f2efef] text-white font-sans">
            <Routes>
              <Route path="/projects/:id" element={<Article />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Main />} />
            </Routes>
            {/* <div className=" dark:bg-[#303f53] bg-[#d9d8d8] pt-1"></div> */}
            <footer className="footer footer-center mt-5 p-4 dark:bg-[#1F2937] bg-[#f2efef] dark:text-white text-cyan-600">
              Made by Ram Jayakumar
            </footer>
          </div>
        </ChakraProvider>
      </VisibleWindowContext.Provider>
    </BrowserRouter>
  );
}

export { App, VisibleWindowContext };
