import { resumeVerbose } from "../../state";

interface ExperienceProps {
    date: string;
    company: string;
    position: string;
    description: string;
    points?: string[];
}

export default function Experience({ date, company, position, description, points }: ExperienceProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between">
      <div className="p-[10px]">
        <b className="text-2xl">{company}</b> <span className="text-gray-600">| {position}</span>
      </div>
      <div className="text-right text-gray-600">
        {date}
      </div>
      </div>
      <div>
      {resumeVerbose.value === true && <p className="ml-8">{description}</p>}
      {resumeVerbose.value === false && points && (
        <ul className="list-disc list-inside ml-4">
          {points.map((point, index) => (
        <li key={index} className="pl-4">{point}</li>
          ))}
        </ul>
      )}
      </div>
      { /* horiztonal line */}
      {/* <div className="border-t border-gray-300 my-4"></div> */}
    </div>
  )
}