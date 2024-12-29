import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { render } from "preact";
import { page } from "./state";
import "./style.css";
import Toolbar from "./components/toolbar";
import Home from "./components/home/home";
import AboutMe from "./components/aboutme/aboutme";
import Projects from "./components/projects/projects";
export default function App() {
    return (_jsxs("div", { children: [_jsx(Toolbar, {}), page.value === "home" && _jsx(Home, {}), page.value === "about" && _jsx(AboutMe, {}), page.value === "projects" && _jsx(Projects, {})] }));
}
render(_jsx(App, {}), document.getElementById('app'));
