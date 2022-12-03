import axios from "axios"
import type { NextApiRequest, NextApiResponse } from "next"

// Sends the data of the top clip of the past week to /api/topclip
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const oneWeekBefore = new Date(
			Date.now() - 1000 * 3600 * 24 * 7
		).toISOString()
		const result = await axios.get(
			`https://api.twitch.tv/helix/clips?broadcaster_id=517475551&started_at=${oneWeekBefore}&first=1`, // extraemily id: 517475551
			{
				headers: {
					"Client-ID": process.env.TWITCH_CLIENT_ID!,
					Authorization: process.env.TWITCH_AUTHORIZATION!
				}
			}
		)
		res.status(200).json(result.data.data[0])
	} catch (err: any) {
		console.log(err.message)
		res.status(err.code).send(err)
	}
}
