import { useState } from "react";

export default function NewTask() {
    const [entredTask, setEntredTask] = useState();
    function hand
  return (
    <div className="flex items-center gap-4">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={} />
      <button className="text-stone-700 hover:text-stone-500">Add Task</button>
    </div>
  );
}
