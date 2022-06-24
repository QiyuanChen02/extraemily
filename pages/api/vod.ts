import type { NextApiRequest, NextApiResponse } from "next";
import { getTwitchApi } from "../../helpers/apiKeys/twitch";

const channelId = "517475551";

// Sends the data of the most recent vod to /api/vod
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const api = getTwitchApi();
	try {
		const result = await api.get(`https://api.twitch.tv/helix/videos?user_id=${channelId}`);
		res.status(200).json(result.data.data[0]);
	} catch (err: any) {
		console.log(err.message);
		res.status(err.code).send(err);
	}
}
