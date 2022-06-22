// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const channelId = "UCN4PUx0xlsaGTNPxgQYPjKA";

// Sends the data of the most recent video to /api/video
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const result = await axios.get(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&type=video&key=${process
				.env.YOUTUBE_API_KEY!}`
		);
		res.status(200).json({
			title: result.data.items[0].snippet.title,
			thumbnail: result.data.items[0].snippet.thumbnails.high.url,
			url: `https://www.youtube.com/watch?v=${result.data.items[0].id.videoId}`,
		});
	} catch (err: any) {
		console.log(err);
		res.status(err.code).send(err);
	}
}
