import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  close?: Function;
}

const Modal = ({children, isOpen, close}: ModalProps) => {

  const [isBrowser, setIsBrowser] = useState(false);

  
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {

    return createPortal(
      <div className="absolute top-0 z-40 flex justify-center items-center w-full h-full">
        <div className="absolute w-full h-full opacity-50 bg-black" onMouseUp={() => close? close() : undefined}></div>
        <div className="z-50 w-96 h-48 bg-white-100">{children}</div>
      </div>,
      document.getElementById('modal-root')!
    )
  } else {
    return null;
  }    
  

}

export default Modal;