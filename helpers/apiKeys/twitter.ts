import axios from "axios";

export function getTwitterApi() {
	return axios.create({
		headers: {
			Authorization: process.env.TWITTER_BEARER_TOKEN!,
		},
	});
}
