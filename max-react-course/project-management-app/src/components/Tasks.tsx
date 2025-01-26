import { TTask } from "../types/TTask";
import NewTask from "./NewTask";

type TasksProps = {
  onAdd: (task: TTask) => void;
  onDelete: () => void;
  tasks: TTask[];
};

const Tasks = ({ tasks, onAdd, onDelete }: TasksProps) => {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-stone-700">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="my-4 text-stone-800">
          this project doesn't have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.title}</span>
                <button
                  onClick={onDelete}
                  className="text-stone-700 hover:text-red-500"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
