"use client"

type SecondaryButtonProps = {
  value: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  value,
  icon,
  onClick = () => "",
}) => {
  const handlerClick = () => {
    onClick();
  };
  return (
    <button
      onClick={handlerClick}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-primary hover:bg-gray-200 transition cursor-pointer border-1 border-primary"
    >
      {icon && <span className="icon">{icon}</span>}
      <span>{value}</span>
    </button>
  );
};

export default SecondaryButton;
