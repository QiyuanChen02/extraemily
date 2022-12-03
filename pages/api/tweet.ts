import axios from "axios"
import type { NextApiRequest, NextApiResponse } from "next"

const twitterId = "1298873885958516736"

// Sends the data of the most recent tweet to /api/tweet
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const result = await axios.get(
			`https://api.twitter.com/2/users/${twitterId}/tweets`,
			{
				headers: {
					Authorization: process.env.TWITTER_BEARER_TOKEN!
				}
			}
		)
		res.status(200).json({
			tweet: result.data.data[0].text,
			url: `https://twitter.com/extraemilyy/status/${result.data.data[0].id}`
		})
	} catch (err: any) {
		console.log(err.message)
		res.status(err.code).send(err)
	}
}
