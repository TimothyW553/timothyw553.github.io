import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { page } from "../state";
export default function Toolbar() {
    function handleClick(buttonValue) {
        page.value = buttonValue;
    }
    return (_jsxs("div", { className: "w-full bg-black bg-opacity-85 p-[15px] px-[20%] m-0 flex-auto flex flex-row sm:flex-row justify-center shadow-xl text-[14pt] monkey", children: [_jsx("button", { className: "whitespace-nowrap mr-[1%] m-0", onClick: () => handleClick("home"), children: "Timothy Wang" }), _jsx("div", { className: "w-full whitespace-nowrap mr-[1%]" }), _jsx("button", { className: "whitespace-nowrap mr-[1%] m-0", onClick: () => handleClick("projects"), children: "Projects" }), _jsx("button", { className: "whitespace-nowrap mr-[1%] m-0", onClick: () => handleClick("about"), children: "About Me" })] }));
}
