import { useState } from "react";
import Input from "../../Ul/input/Input";
import scss from "./LoginPages.module.scss";
import { useNavigate } from "react-router";
import { Button } from "../../Ul/button/Button";
import {
	useGetRegistrQuery,
	usePostLoginMutation,
} from "../../../store/api/tools";

export const LoginPages = () => {
	const navigate = useNavigate();
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const [userNameValue, setUserNameValue] = useState("");
	const [postLogin] = usePostLoginMutation();
	const { data } = useGetRegistrQuery();
	console.log(data);

	// const resultToken = data?.find((itemId1) => itemId1.email === emailValue);
	// const resultToken2 = data?.find(
	// 	(itemId2) => itemId2.password === passwordValue
	// );
	// const resultToken3 = data?.find(
	// 	(itemId3) => itemId3.userName === userNameValue
	// );

	// const result = data?.find((item) => item.email === emailValue && item.password === passwordValue && item.userName === userNameValue)

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
		)  {
			alert("input ка бир нерсе жазыныз!");
			return;
		}
		try {
			const result = data?.find((el) => el.email === emailValue && el.password === passwordValue && el.userName === userNameValue);
			if(result) {
				localStorage.setItem('isAuthLogin', JSON.stringify(result.id));
				await postLogin(newData)
				navigate('/');
			} else {
				alert('Error')
			}
		} catch (error) {
			console.log(error);
		}
		// localStorage.setItem("isAuthLogin", JSON.stringify(resultToken.id));
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
