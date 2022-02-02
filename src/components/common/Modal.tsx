import './Modal.css';
import Wallet from "../Wallet";

interface Props {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    children: React.ReactNode | React.ReactNode[];
  }

function Modal({ isOpen, setIsOpen, children }: Props) {
    const showHideClassName = isOpen ? "modal display-block" : "modal display-none";

    // This might not be needed or work in all browsers
    // TODO: Do more thorough testing in different browsers
    const overflow = isOpen ? 'hidden' : 'scroll';
    document.documentElement.style.overflow = overflow;

    return (
        <div className={`${showHideClassName}`}>
            <div className="modal-main text-center bg-white p-6 rounded">
                <div className="p-6">{children}</div>
                <Wallet
                    className="mx-auto lg:mx-0 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out gradient text-white"
                />
            </div>
        </div>
    );
}

export default Modal;
