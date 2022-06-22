// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getTwitterApi } from "./apiKeys/twitter";

const twitterId = "1298873885958516736";
// Sends the data of the most recent tweet to /api/tweet
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const api = getTwitterApi();
	try {
		const result = await api.get(`https://api.twitter.com/2/tweets/search/recent?query=from:extraemilyy`);
		res.status(200).json(result.data.data[0]);
	} catch (err: any) {
		console.log(err);
		res.status(err.code).send(err);
	}
}
