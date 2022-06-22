import axios from "axios";

// Returns the twitch authorised api
export function getTwitterApi() {
	return axios.create({
		headers: {
			Authorization: process.env.TWITTER_BEARER_TOKEN!,
		},
	});
}
