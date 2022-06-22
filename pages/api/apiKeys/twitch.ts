import axios from "axios";

// Returns the twitch authorised api
export function getTwitchApi() {
	return axios.create({
		headers: {
			"Client-ID": process.env.TWITCH_CLIENT_ID!,
			Authorization: process.env.TWITCH_AUTHORIZATION!,
		},
	});
}
