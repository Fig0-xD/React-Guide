import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogin: () => {},
	onLogout: (email, password) => {}
});

const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const userLoggedIn = localStorage.getItem("isLoggedIn");

		if (userLoggedIn === "1") {
			setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = () => {
		localStorage.setItem("isLoggedIn", "1");
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		localStorage.removeItem("isLoggedIn");
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogin: loginHandler,
				onLogout: logoutHandler
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export { AuthContext as default, AuthContextProvider };
