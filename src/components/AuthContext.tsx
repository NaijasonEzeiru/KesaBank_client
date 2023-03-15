import { createContext, useState, useLayoutEffect } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext(null) as any;

export const AuthProvider = ({ children }: any) => {
	const [user, setUser] = useState(null);
	const [users, setUsers] = useState(null);
	const [error, setError] = useState(null) as any;
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	// useEffect(() => checkUserLoggedIn(), []);

	const login = async ({ email, password }: any) => {
		// if (navigator && navigator.onLine) {
		setLoading(true);
		const res = await fetch("http://localhost:4000/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			credentials: "include",
			body: JSON.stringify({
				email,
				password
			})
		});
		const data = await res.json();
		console.log(data);
		setLoading(false);
		if (res.ok) {
			setUser(data);
			console.log(data);
			// const { first_name, last_name, email, id } = user;
			data.account_no = 1002784563 + data.account_no;
			router.push("/");
		} else {
			setError(data.message);
			error ?? console.log(error);
		}
		// } else {
		// 	setError(
		// 		"You appear to be offline. Check your internet connection"
		// 	);
		// 	console.log("error");
		// }
	};

	const signout = async () => {
		const res = await fetch("http://localhost:4000/auth/logout", {
			method: "GET",
			credentials: "include"
		});
		if (res.ok) {
			setUser(null);
			router.push("/");
		}
		// } else {
		// 	setError(
		// 		"You appear to be offline. Check your internet connection"
		// 	);
		// 	console.log("error");
		// }
	};

	useLayoutEffect(() => {
		checkUserLoggedIn();
		console.log({ auth: user });
	}, []);

	const checkUserLoggedIn = async () => {
		console.log("effect");
		const res = await fetch("http://localhost:4000/auth/me", {
			method: "GET",
			credentials: "include"
		});
		const data = await res.json();
		console.log("🚀 ~ file: AuthContext.tsx:56 ~ data:", data);
		if (res.ok) {
			console.log({ acc_no: data.account_no });
			setUser(data);
		} else {
			console.log("failed");
			setUser(null);
		}
	};
	const getAllUsers = async () => {
		console.log("effect");
		const res = await fetch("http://localhost:4000/user", {
			method: "GET",
			credentials: "include"
		});
		const data = await res.json();
		console.log("🚀 ~ file: AuthContext.tsx:56 ~ data:", data);
		if (res.ok) {
			setUsers(data);
		} else {
			setUsers(null);
		}
	};
	return (
		<AuthContext.Provider
			value={{
				user,
				users,
				loading,
				error,
				login,
				signout,
				checkUserLoggedIn,
				getAllUsers
			}}
		>
			{" "}
			{children}{" "}
		</AuthContext.Provider>
	);
};

export default AuthContext;
