import { FC, ReactNode } from "react";
import scss from "./Modal.module.scss";

interface ModalChildrenProps {
	children: ReactNode;
}

const Modal: FC<ModalChildrenProps> = ({ children }) => {
	return (
		<div>
			<div>{children}</div>
		</div>
	);
};

export default Modal;
