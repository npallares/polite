
type TertiaryButtonProps = {
  value: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const TertiaryButton: React.FC<TertiaryButtonProps> = ({
  value,
  icon,
  onClick = () => "",
  className,
}) => {
  const handlerClick = () => {
    onClick();
  };
  return (
    <button
      onClick={handlerClick}
      className={`flex justify-center border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition cursor-pointer ${className}`}
    >
      {icon && <span className="icon mr-5">{icon}</span>}
      <span>{value}</span>s
    </button>
  );
};

export default TertiaryButton;
