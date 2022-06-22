/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"static-cdn.jtvnw.net",
			"clips-media-assets2.twitch.tv",
			"vod-secure.twitch.tv",
			"b.thumbs.redditmedia.com",
			"i.ytimg.com",
		], //required for social media thumbnails
	},
};

module.exports = nextConfig;
