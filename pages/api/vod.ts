// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getTwitchApi } from "./apiKeys/twitch";

const channelId = "517475551";

// Sends the data of the most recent vod to /api/vod
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const api = getTwitchApi();
	try {
		const result = await api.get(`https://api.twitch.tv/helix/videos?user_id=${channelId}`);
		res.status(200).json(result.data.data[0]);
	} catch (err: any) {
		res.status(err.code).send(err);
	}
}
