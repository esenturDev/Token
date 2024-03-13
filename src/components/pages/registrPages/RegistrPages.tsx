import { FC, useState } from "react";
import { usePostRegistrMutation } from "../../../store/api/tools";
import scss from "./RegistrPages.module.scss";
import Input from "../../Ul/input/Input";
import { Button } from "../../Ul/button/Button";
import { useNavigate } from "react-router";

const RegistrPages: FC<{
	email: string;
	setEmail: (value: string) => void;
	password: string;
	setPassword: (value: string) => void;
	userName: string;
	setUserName: (value: string) => void;
}> = ({email, setEmail, password, setPassword, userName, setUserName}) => {
	const [postRegistr] = usePostRegistrMutation();
	const navigate = useNavigate();

	const handleRegistr = async () => {
		// const newData = {
		// 	email: email,
		// 	password: password,
		// 	photo: photo,
		// }
		const newData = {
			email: email,
			password: password,
			userName: userName,
		};
		if (email.trim() === "" && password.trim() === "" && userName.trim() === "") {
			alert("input ка бир нерсе жазыныз!!!");
			return;
		} else {
			await postRegistr(newData);
			navigate('/login')
		}
	};

	return (
		<div className={scss.registr}>
			<div className="container">
				<div className={scss.content}>
					<Input
						type="email"
						value={email}
						setData={setEmail}
						placeholder="Email..."
					/>
					<Input
						type="password"
						value={password}
						setData={setPassword}
						placeholder="Password..."
					/>
					<Input
						type="text"
						value={userName}
						setData={setUserName}
						placeholder="Photo..."
					/>
					<Button onClick={handleRegistr}>Registr</Button>
				</div>
			</div>
		</div>
	);
};

export default RegistrPages;
