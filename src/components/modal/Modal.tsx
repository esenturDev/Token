import { FC, ReactNode } from "react";
import scss from "./Modal.module.scss";

interface ModalChildrenProps {
	children: ReactNode;
}

const Modal: FC<ModalChildrenProps> = ({ children }) => {
	return (
		<div className={scss.modalContainer}>
			<div className={scss.modalContent}>{children}</div>
		</div>
	);
};

export default Modal;
