import { useMoralis } from "react-moralis";

const useLogin = () => {
	const { authenticate, isAuthenticated, logout } = useMoralis();

	const login = async () => {
		if (!isAuthenticated) {
			await authenticate({ signingMessage: "Log into Onboard" })
				.then(function (user) {
					console.log("logged in user:", user);
					console.log(user?.get("ethAddress"));
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	};

	return [login, logout];
};

export default useLogin;