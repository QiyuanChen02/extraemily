import type { NextApiRequest, NextApiResponse } from "next";

// Sends the data of the current hottest reddit post to /api/toppost
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const response = await fetch("https://www.reddit.com/r/ExtraEmily.json");
		const data = await response.json();
		let i = 0;

		// Find the first unstickied popular post
		while (data.data.children[i].data.stickied) {
			i += 1;
		}
		const post = data.data.children[i].data;

		res.status(200).json({
			title: post.title,
			thumbnail: post.thumbnail,
			url: "https://reddit.com" + post.permalink,
		});
	} catch (err: any) {
		console.log(err.message);
		res.status(err.code).send(err);
	}
}
