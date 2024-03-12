import { useNavigate } from "react-router";
import scss from "./Header.module.scss";

export const Header = () => {
	const navigate =  useNavigate();
	const removeResult = () => {
		localStorage.removeItem('isAuthLogin');
		navigate('/registr')
	}
	return <header>
		<div className="container">
			<div className={scss.content}>
				<button onClick={removeResult}>delete Users</button>
			</div>
		</div>
	</header>;
};
