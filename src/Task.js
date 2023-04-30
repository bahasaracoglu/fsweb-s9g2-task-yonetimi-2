import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import React from "react";

const Task = ({ taskObj, onComplete }) => {
  const date = new Date(taskObj.deadline);
  const toNow = formatDistanceToNow(date, { addSuffix: true, locale: tr });
  const dayarr = toNow.split(" ");
  const days = dayarr[0];

  console.log(toNow);

  console.log(date);

  console.log(days);

  return (
    <div className="task rounded-2xl bg-[#fff]   ">
      <div className="border-b border-gray-300 border-solid">
        <h3 className="text-black font-semibold text-l">{taskObj.title}</h3>
      </div>
      <div className="bg-slate-50">
        <div
          className={
            days <= 3 ? "deadline w-fit bg-[#ffd9d4] mt-1 b" : "deadline"
          }
        >
          son teslim: <span>{toNow}</span>
        </div>
        <p>{taskObj.description}</p>
        <div>
          {taskObj.people.map((p) => (
            <span className="pill" key={p}>
              {p}
            </span>
          ))}
        </div>
        {onComplete && (
          <button
            className="bg-blue-100 rounded-lg"
            onClick={() => onComplete(taskObj.id)}
          >
            Tamamlandı
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
