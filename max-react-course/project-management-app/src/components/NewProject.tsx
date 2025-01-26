import { useRef } from "react";
import Input from "./Input";
import { TNewProject } from "../types/TNewProject";
import Modal from "./Modal";

type NewProjectProps = {
  onAdd: (projectData: TNewProject) => void;
  onCancel: () => void;
};

const NewProject = ({ onAdd, onCancel }: NewProjectProps) => {
  const modal = useRef<HTMLDialogElement>(null);

  const title = useRef<HTMLInputElement | null>(null);
  const description = useRef<HTMLTextAreaElement | null>(null);
  const dueDate = useRef<HTMLInputElement | null>(null);

  function handleSave() {
    const enteredTitle = title.current?.value;
    const enteredDescription = description.current?.value;
    const enteredDueDate = dueDate.current?.value;

    if (
      enteredTitle?.trim() === "" ||
      enteredDescription?.trim() === "" ||
      enteredDueDate?.trim() === ""
    ) {
      modal.current?.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="my-4 text-xl font-bold text-stone-600">Invalid Input</h2>
        <p className="mb-4 text-stone-600">
          Oops ... looks like you forgot to enter a value
        </p>
        <p className="mb-4 text-stone-600">
          Please make sure you provided valid values for each input
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4 ">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input
            inputProps={{
              type: "text",
            }}
            label="Title"
            ref={title}
          />
          <Input label="Description" isTextArea ref={description} />
          <Input inputProps={{ type: "date" }} label="Due Date" ref={dueDate} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
