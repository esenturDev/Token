import { FC, ReactNode } from "react";
import scss from './Button.module.scss';
export const Button: FC<{
  children: ReactNode;
  onClick: () => void;
}> = ({children, onClick}) => {
	return <button className={scss.buttonsIsFunk} onClick={onClick}>{children}</button>;
};
