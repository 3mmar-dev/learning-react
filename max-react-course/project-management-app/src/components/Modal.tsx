import { ReactNode, Ref, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
type ModalProps = {
  children: ReactNode;
  ref: Ref<HTMLDialogElement>;
  buttonCaption: string;
};

const Modal = ({ children, ref, buttonCaption }: ModalProps) => {
  const dialog = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current?.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="p-4 rounded-lg shadow-md backdrop:bg-stone-900/90"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default Modal;
