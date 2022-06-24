import { useEffect } from "react";

const useConsole = (variable: any) => {
	useEffect(() => {
		console.log("useConsole: ", variable);
	}, [variable]);
	return console;
};

export default useConsole;
