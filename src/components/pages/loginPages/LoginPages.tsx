import { FC, useState } from "react";
import Input from "../../Ul/input/Input";
import scss from "./LoginPages.module.scss";
import { useNavigate } from "react-router";
import { Button } from "../../Ul/button/Button";
import {
	useGetRegistrQuery,
	usePostLoginMutation,
} from "../../../store/api/tools";

export const LoginPages: FC<{
	email: string;
	password: string;
	userName: string;
}> = ({ email, password, userName }) => {
	const navigate = useNavigate();
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const [userNameValue, setUserNameValue] = useState("");
	const [postLogin] = usePostLoginMutation();
	const { data: dataResult = [] } = useGetRegistrQuery();
	console.log(dataResult);

	const inputsValueResults =
		email === emailValue &&
		password === passwordValue &&
		userName === userNameValue;

	const handlePostLogin = async () => {
		const newData = {
			email: emailValue,
			password: passwordValue,
			userName: userNameValue,
		};
		if (
			emailValue.trim() === "" &&
			passwordValue.trim() === "" &&
			userNameValue.trim() === ""
		) {
			alert("input ка бир нерсе жазыныз!");
			return;
		}
		if (inputsValueResults) {
			const response = await postLogin(newData);
			const responseData = await response.data;
			localStorage.setItem("token", responseData.token)
			localStorage.setItem("isAuthLogin", JSON.stringify(newData.email));
			
			navigate("/");
		} else {
			alert("Error");
		}
	};
	return (
		<div>
			<div className="container">
				<div className={scss.content}>
					<Input
						type="email"
						value={emailValue}
						setData={setEmailValue}
						placeholder="Email..."
					/>
					<Input
						type="password"
						value={passwordValue}
						setData={setPasswordValue}
						placeholder="Password..."
					/>
					<Input
						type="text"
						value={userNameValue}
						setData={setUserNameValue}
						placeholder="Photo..."
					/>
					<Button onClick={handlePostLogin}>Login</Button>
				</div>
			</div>
		</div>
	);
};
