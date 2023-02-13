import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
	namespaced: true,
	state(){
		return {
			register: {
				isProcessing: false,
				error: ""
			}
		}
	},
	actions: {
		async register({commit}, { email, password }) {
			commit("setRegisterIsProcessing", true);
			commit("setRegisterError", "")
			const auth = getAuth();

			try {
				const userCredentials = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
				alert("Success! User has been registered");

				return userCredentials.user;
			} catch (e) {
				commit("setRegisterError", e.message)
			} finally {
               commit("setRegisterIsProcessing", false);
			}

			// Firebase functionality to register user
		},
	},

	mutations: {
		setRegisterIsProcessing(state, isProcessing){
           state.register.isProcessing = isProcessing
		},
		setRegisterError(state, error){
			state.register.error = error;
		}
	}
};
