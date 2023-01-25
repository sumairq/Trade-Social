import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
	namespaced: true,
	actions: {
		async register(_, { email, password }) {
			const auth = getAuth();

			try {
				const userCredentials = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
				alert("Success! User has been registered");

				debugger;

				return userCredentials.user;
			} catch (e) {
				console.error(e.message);
			}

			// Firebase functionality to register user
		},
	},
};
