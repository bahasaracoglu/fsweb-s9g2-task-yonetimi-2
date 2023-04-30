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
    <div className="task  bg-red-400 ">
      <h3>{taskObj.title}</h3>

      <div className={days <= 3 ? "deadline w-fit bg-[#ffd9d4]" : "deadline"}>
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
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
