import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

// Fetches data from an API endpoint and returns the JSON data
const useFetchData = <T>(route: string) => {
	const { data } = useSWR<T>(route, fetcher);
	return data;
};

export default useFetchData;
