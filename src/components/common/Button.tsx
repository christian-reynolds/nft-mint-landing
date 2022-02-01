interface Props {
    label: string;
    onClick?: () => void;
    className?: string;
}

function Button({ label, onClick, className }: Props) {
    return (
        <button type="submit" className={className} onClick={onClick}>{label}</button>
    );
}

export default Button;
