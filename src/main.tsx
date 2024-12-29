import { render } from "preact";
import { page } from "./state";
import "./style.css";

import Toolbar from "./components/toolbar";
import Home from "./components/home/home";
import AboutMe from "./components/aboutme/aboutme";
import Projects from "./components/projects/projects";

export default function App() {
  return (
    <div>
      <Toolbar />
      {page.value === "home" && <Home />}
      {page.value === "about" && <AboutMe />}
      {page.value === "projects" && <Projects />}
    </div>
  )
}

render(<App />, document.getElementById('app')!)
