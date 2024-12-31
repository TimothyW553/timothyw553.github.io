import { page } from "../state";

export default function Toolbar() {
  function handleClick(buttonValue: "home" | "about" | "projects") {
    page.value = buttonValue;
  }

  return (
    <div className="w-full bg-black bg-opacity-85 p-[15px] px-[20%] m-0 flex-auto flex flex-row sm:flex-row justify-center shadow-xl text-[14pt] monkey">
      <button className="whitespace-nowrap mr-[1%] m-0" onClick={() => handleClick("home")}>Timothy Wang</button>
      <div className="w-full whitespace-nowrap mr-[1%]"></div>
      <button className="whitespace-nowrap mr-[1%] m-0" onClick={() => handleClick("projects")}>Experience</button>
      <button className="whitespace-nowrap mr-[1%] m-0" onClick={() => handleClick("about")}>About Me</button>
    </div>
  );
}
