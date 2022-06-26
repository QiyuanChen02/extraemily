import { useEffect } from "react";

const useConsole = (variable: any, message = "") => {
	useEffect(() => {
		console.log("useConsole: " + message, variable);
	}, [variable, message]);
	return console;
};

export default useConsole;
