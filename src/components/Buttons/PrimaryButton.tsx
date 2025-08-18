"use client";

type PrimaryButtonProps = {
  value: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  value,
  icon,
  onClick = () => "",
  className,
  disabled = false,
  type = "button",
}) => {
  const handlerClick = () => {
    if (disabled) return;
    onClick();
  };
  return (
    <button
      type={type}
      onClick={handlerClick}
      className={`flex justify-center items-center gap-2 border-primary  text-white px-4 py-2 rounded-lg transition ${
        disabled ? "bg-brand-400" : "bg-primary hover:bg-brand-700 cursor-pointer"
      } text-m ${className} `}
    >
      {icon && <span className="icon">{icon}</span>}
      <span className="truncate whitespace-nowrap overflow-hidden text-ellipsis">
        {value}
      </span>
    </button>
  );
};

export default PrimaryButton;
