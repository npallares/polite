
import Caret from "./caret.svg";

const Icons = {
  Caret,
} as const;

export type IconName = keyof typeof Icons;
export default Icons;
