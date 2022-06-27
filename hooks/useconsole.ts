import { useEffect } from "react";

// Helps log a usestate variable to the console
const useConsole = (variable: any, message = "") => {
	useEffect(() => {
		console.log("useConsole: " + message, variable);
	}, [variable, message]);
	return console;
};

export default useConsole;
