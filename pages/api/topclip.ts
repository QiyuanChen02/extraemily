// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getTwitchApi } from "./apiKeys/twitch";

// Sends the data of the top clip of the past week to /api/topclip
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const api = getTwitchApi();
	try {
		const oneWeekBefore = new Date(Date.now() - 1000 * 3600 * 24 * 7).toISOString();
		const result = await api.get(
			`https://api.twitch.tv/helix/clips?broadcaster_id=517475551&started_at=${oneWeekBefore}&first=1` // extraemily id: 517475551
		);
		res.status(200).json(result.data.data[0]);
	} catch (err: any) {
		res.status(err.code).send(err);
	}
}
