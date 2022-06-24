import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const channelId = "UCgCtbaY8AM72JJJJRHh3zzA";

// Sends the data of the most recent video to /api/video
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		// Hacky solution to get most recent youtube video with only 2 quota points
		const contentDetails = await axios.get(
			`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${process.env
				.YOUTUBE_API_KEY!}`
		);
		const uploadPlaylistId = contentDetails.data.items[0].contentDetails.relatedPlaylists.uploads;
		const result = await axios.get(
			`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${uploadPlaylistId}&key=${process
				.env.YOUTUBE_API_KEY!}`
		);
		res.status(200).json({
			title: result.data.items[0].snippet.title,
			thumbnail: result.data.items[0].snippet.thumbnails.high.url,
			url: `https://www.youtube.com/watch?v=${result.data.items[0].contentDetails.videoId}`,
		});
	} catch (err: any) {
		console.log(err.message);
		res.status(err.code).send(err);
	}
}
