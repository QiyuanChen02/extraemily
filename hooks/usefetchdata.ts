import axios from "axios";
import { useEffect, useState } from "react";

// hook to calculate the current value of variable based on the current window width
const useFetchData = <T>(route: string) => {
	const [data, setData] = useState<null | T>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get<T>(route);
				setData(response.data);
				console.log("Successfully fetched data from " + route);
			} catch (e: any) {
				setData(null);
				console.log(e);
			}
		};
		fetchData();
	}, [route]);

	return data;
};

export default useFetchData;
