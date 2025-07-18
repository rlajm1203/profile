import { cloneElement, createContext, useContext, useReducer, useState } from "react";
import { createPortal } from "react-dom";

export const ModalContext = createContext();

// 함수형 컴포넌트
export const Modal = ({ children }) => {

    const [isOpen, open] = useState(false);
    const close = () => open(false);

    return (
        <ModalContext.Provider value={{ isOpen, open, close }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext);

export const Button = ({ children }) => {
    const { isOpen, open, close } = useContext(ModalContext);

    return (
        cloneElement(children, { onClick: isOpen ? () => close() : () => open(true) })
    )
}

export const Content = ({ children }) => {
    const { isOpen, open, close } = useContext(ModalContext);

    const contentWithClose = cloneElement(children, { onClick: () => close() })

    return (
        isOpen && createPortal(
            <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-20'> {/**  */}
                <div className='bg-white p-6 rounded shadow-lg'>
                    {contentWithClose}
                </div>
            </div>
            , document.body)
    )
}

Modal.Button = Button;
Modal.Content = Content;