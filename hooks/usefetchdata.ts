import axios from "axios";
import { useEffect, useState } from "react";

// hook to calculate the current value of variable based on the current window width
const useFetchData = <T>(route: string) => {
	const [data, setData] = useState<null | T>(null);

	useEffect(() => {
		axios
			.get<T>(route)
			.then((res) => setData(res.data))
			.catch((e) => setData(null));
	}, [route]);

	return data;
};

export default useFetchData;
