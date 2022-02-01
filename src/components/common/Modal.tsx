import './Modal.css';

interface Props {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    children: React.ReactNode | React.ReactNode[];
  }

function Modal({ isOpen, setIsOpen, children }: Props) {
    const showHideClassName = isOpen ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
            {children}
            <button type="button" onClick={() => setIsOpen(false)} className="text-black">
                Close
            </button>
            </section>
        </div>
    );
}

export default Modal;
