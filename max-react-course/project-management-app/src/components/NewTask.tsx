import { ChangeEvent, useState } from "react";
import { TTask } from "../types/TTask";

type NewTaskProps = {
  onAdd: (task: TTask) => void;
};

const NewTask = ({ onAdd }: NewTaskProps) => {
  const [enteredTask, setEnteredTask] = useState({
    title: "",
    id: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEnteredTask((t) => {
      return {
        id: enteredTask.id,
        title: event.target.value,
      };
    });
  }

  console.log(enteredTask);

  function handleSubmit() {
    onAdd(enteredTask);
    setEnteredTask({ id: "", title: "" });
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTask.title}
        type="text"
        name=""
        id=""
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 "
      />
      <button
        onClick={handleSubmit}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
