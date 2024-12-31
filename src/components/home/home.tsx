import profilepicture from '../../assets/headshot.png';

export default function Home() {
  return (
    <div className="px-[25%] py-[50px]">
      <div className="flex items-start">
        <div className="mr-4 flex flex-col justify-center flex-grow min-w-0">
          <p className="py-[10px]">
            Hi, I'm Timothy.
          </p>
          <p className="py-[10px]">
            I am a fourth-year student at the University of Waterloo studying Computer Science (BCS). I am passionate about systems and creating valuable products.
          </p>
          <p className="py-[10px]">The coop program at the University of Waterloo has given me the opportunity to work at a number of companies and gain a significant amount of experience.</p>
          
          <div className="py-[5px]"></div>

          <h1 className="monkey"><b><span style={{ color: 'rgb(0, 174, 243)' }}>~$</span> ls work_experience/</b></h1>
          <hr className="border-t-1 border-gray-300" />
          <ul className="list-disc pl-7 py-[10px]">
            <li className="whitespace-nowrap">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"> 𝕏</a>, Product Recommendations: January 2025 — April 2025
            </li>
            <li className="whitespace-nowrap">
              <a href="https://databricks.com/" target="_blank" rel="noopener noreferrer"> Databricks</a>, Default Storage: May 2024 — August 2024
            </li>
            <li className="whitespace-nowrap">
              <a href="https://snowflake.com/" target="_blank" rel="noopener noreferrer"> Snowflake</a>, Engineering Systems: September 2023 — December 2023
            </li>
            <li className="whitespace-nowrap">
              <a href="https://www.ford.ca/" target="_blank" rel="noopener noreferrer"> Ford Motors</a>, Connected Vehicle Platform: January 2023 — April 2023
            </li>
            <li className="whitespace-nowrap">
              <a href="https://www.uncaught.app/" target="_blank" rel="noopener noreferrer"> Uncaught Exception</a>, Mobile Development: May 2022 — August 2022
            </li>
          </ul>
          <div className="py-[5px]"></div>
          
          <h1 className="monkey"><b><span style={{ color: 'rgb(0, 174, 243)' }}>~$</span> ls courses/</b></h1>
          <hr className="border-t-1 border-gray-300" />
          <ul className="pl-3 py-[10px]">
            <li>
            <details>
            <summary>Fall 2021 (1A)</summary>
            <ul className="list-disc pl-8">
            <li>CS 145 — Designing Functional Programs</li>
            <li>MATH 135 — Algebra</li>
            <li>MATH 137 — Calculus 1</li>
            <li>PHYS 111 — Physics 1</li>
            <li>SPCOM 223 — Public Speaking</li>
            </ul>
            </details>
            </li>

            <li>
            <details>
            <summary>Winter 2022 (1B)</summary>
            <ul className="list-disc pl-8">
            <li>CS 146 — Algorithm Design and Data Abstraction</li>
            <li>MATH 136 — Linear Algebra 1</li>
            <li>MATH 138 — Calculus 2</li>
            <li>CLAS 104 — Classical Mythology</li>
            <li>ENGL 119 — Communications in Math & CS</li>
            </ul>
            </details>
            </li>

            <li>
            <details>
            <summary>Fall 2022 (2A)</summary>
            <ul className="list-disc pl-8">
            <li>CS 246 — Object-Oriented Software Development (C++)</li>
            <li>CS 245E — Logic and Computation</li>
            <li>STAT 230 — Probability</li>
            <li>PSYCH 101 — Introductory Psychology</li>
            <li>BET 100 — Foundations of Entrepreneurial Practice</li>
            </ul>
            </details>
            </li>

            <li>
            <details>
            <summary>Spring 2023 (2B)</summary>
            <ul className="list-disc pl-8">
            <li>CS 240 — Data Structures and Data Management</li>
            <li>CS 241 — Compilers</li>
            <li>CS 251 — Computer Hardware and Design</li>
            <li>MATH 239 — Introduction to Combinatorics</li>
            <li>STAT 231 — Statistics</li>
            <li>BET 350 — Customer Experience Design</li>
            </ul>
            </details>
            </li>

            <li>
            <details>
            <summary>Winter 2024 (3A)</summary>
            <ul className="list-disc pl-8">
            <li>CS 341 — Algorithms</li>
            <li>CS 350 — Operating Systems</li>
            <li>CS 370 — Numerical Computation</li>
            <li>MATH 237 — Calculus 3 for Honours Mathematics</li>
            <li>BET 210 — Business Technology and Infrastructure</li>
            </ul>
            </details>
            </li>

            <li>
            <details>
            <summary>Fall 2024 (3B)</summary>
            <ul className="list-disc pl-8">
            <li>CS 456 — Computer Networking</li>
            <li>CS 454 — Distributed Systems</li>
            <li>CS 349 — User Interfaces</li>
            <li>SCI 206 — Physics of Everyday Life</li>
            <li>ECON 101 — Microeconomics</li>
            </ul>
            </details>
            </li>
          </ul>
        </div>
        <img
          src={profilepicture}
          alt="Profile Picture"
          className="w-[250px] h-[250px] rounded-full flex-shrink-0"
        />
      </div>
    </div>
  );
}
