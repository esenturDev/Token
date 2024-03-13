import { useNavigate } from "react-router";
import scss from "./Header.module.scss";
import logo from "../../../assets/photos/Group 3702.png";

export const Header = () => {
	const navigate = useNavigate();
	const removeResult = () => {
		localStorage.removeItem("isAuthLogin");
		navigate("/registr");
	};
	return (
		<header>
			<div className="container">
				<div className={scss.content}>
					<img src={logo} alt="logo" />
					<nav>
						<ul>
							<li>Home</li>
							<li>How tere works</li>
							<li>Tere benefits</li>
							<button>Help Center</button>
							<button onClick={removeResult}>delete Users</button>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};
