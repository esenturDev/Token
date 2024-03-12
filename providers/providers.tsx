/* eslint-disable react-hooks/rules-of-hooks */
import { FC, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const ProvidersResult: FC<{
	children: ReactNode;
}> = ({ children }) => {
	const {pathname} = useLocation();
	const navigate =  useNavigate();
	const isAuthLogin = localStorage.getItem('isAuthLogin');
	const isAuthLoginResult = !!isAuthLogin
	useEffect(() => {
		if(isAuthLoginResult && pathname === "/registr") {
			navigate('/')
		} else if(isAuthLoginResult && pathname === "/login") {
			navigate('/');
		} else if(!isAuthLoginResult && pathname === "/"){
			navigate('/registr')
		}
	}, [pathname]);
	return  children ;
};

export default ProvidersResult;
