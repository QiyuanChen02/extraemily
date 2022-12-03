import axios from "axios"
import type { NextApiRequest, NextApiResponse } from "next"

const channelId = "517475551"

// Sends the data of the most recent vod to /api/vod
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log(process.env)

	try {
		const result = await axios.get(
			`https://api.twitch.tv/helix/videos?user_id=${channelId}`,
			{
				headers: {
					"Client-ID": process.env.TWITCH_CLIENT_ID!,
					Authorization: process.env.TWITCH_AUTHORIZATION!
				}
			}
		)

		res.status(200).json(result.data.data[0])
	} catch (err: any) {
		console.log("error: ", err)
		res.status(err.code).send(err)
	}
}
