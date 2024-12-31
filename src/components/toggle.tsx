import { resumeVerbose } from "../state";

export default function Toggle() {
  return (
    <div>
      <label className="flex items-center space-x-3">
      <span>Less</span>
      <div className="relative">
        <input 
        type="checkbox" 
        checked={!resumeVerbose.value} 
        onChange={() => {
          resumeVerbose.value = !resumeVerbose.value;
          console.log(resumeVerbose.value);
        }} 
        className="sr-only"
        />
        <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
        <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${resumeVerbose.value ? 'transform translate-x-full' : ''}`}></div>
      </div>
      <span>More</span>
      </label>
      <style jsx>{`
      .dot {
        transition: transform 0.3s ease-in-out;
      }
      input:checked + .block {
        background-color: #4b5563; /* Tailwind gray-600 */
      }
      input:checked + .block .dot {
        transform: translateX(100%);
      }
      `}</style>
    </div>
  )
}