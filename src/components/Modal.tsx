import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import BtnCustom from './BtnCustom';

import '../App.css';

interface Props {
  handleClose: () => void,
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  children: JSX.Element | string
}

const Modal = ({ handleClose, open, setOpen, children }: Props) => {
  const ref: any = useRef();

  useEffect(() => {
    const handleOutsideClick = (e: { target: any; }) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        handleClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open, handleClose]);
  return (
    <div className={`${open ? "modal-container" : "close"}`}>
      <div ref={ref} className="modal">
        {children}
        <BtnCustom onClick={handleClose} position={{left: 50, top: 90}} height={40}>
          Close
        </BtnCustom>
      </div>
    </div>
  );
};

export default Modal;