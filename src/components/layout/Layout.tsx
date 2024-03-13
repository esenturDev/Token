import { Route, Routes, useLocation } from "react-router";
import scss from "./Layout.module.scss";
import { LoginPages } from "../pages/loginPages/LoginPages";
import RegistrPages from "../pages/registrPages/RegistrPages";
import UserPages from "../pages/userPages/UserPages";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { useState } from "react";

export const Layout = () => {
	const [email, setEmail] = useState(''); 
	const [password, setPassword] = useState(''); 
	const [userName, setUserName] = useState(''); 
	const { pathname } = useLocation();
	if (pathname === "/login") {
		return (
			<Routes>
				<Route path="/login" element={<LoginPages email={email} password={password} userName={userName}/>} />
			</Routes>
		);
	} else if (pathname === "/registr") {
		return (
			<Routes>
				<Route path="/registr" element={<RegistrPages email={email} password={password} userName={userName} setEmail={setEmail} setPassword={setPassword} setUserName={setUserName}/>} />
			</Routes>
		);
	}
	return (
		<div className={scss.layout}>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<UserPages />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};
