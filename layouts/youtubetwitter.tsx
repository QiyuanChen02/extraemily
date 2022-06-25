import Image from "next/image"
import Card2 from "../components/card2"
import Section from "../components/section"
import useBreakPoint from "../hooks/usebreakpoint"
import useFetchData from "../hooks/usefetchdata"

interface TweetData {
    tweet: string,
    url: string,
}

interface VideoData {
    title: string,
    thumbnail: string,
    url: string,
}

const YoutubeTwitter = () => {

    const tweetData = useFetchData<TweetData>('api/tweet')
    const videoData = useFetchData<VideoData>('api/youtubeclip')
    const isSmall = useBreakPoint({ base: true, md: false })

    return (
        <section className="flex flex-col w-full gap-5 mb-5 lg:gap-8 lg:mb-8 md:flex-row">

            {tweetData ? <Card2 height="h-48" width={isSmall ? 'w-full' : ''}>
                <Section type="Card2Text">
                    <h2 className="text-lg text-twitter-colour">Twitter - Most recent tweet</h2>
                    <p className="text-md text-colour line-clamp-2 2xl:line-clamp-3">{tweetData.tweet}</p>
                </Section>
                <Section type="Card2Image">
                    <Image src="/twitter-icon.png" layout="fill" alt="twitter logo" />
                </Section>
                <Section type="Card2Button">
                    <button onClick={() => document.location.href = tweetData.url} className={`px-6 rounded bg-twitter-colour hover:brightness-125 h-4/5`}>
                        <p className="text-lg text-colour">Go To Tweet</p>
                    </button>
                </Section>
            </Card2> : <Card2 height="h-48" />}

            {videoData ? <Card2 height="h-48" width={isSmall ? 'w-full' : ''}>
                <Section type="Card2Text">
                    <h2 className="text-lg text-youtube-colour">Youtube - Fresh clip</h2>
                    <p className="text-md text-colour line-clamp-2 2xl:line-clamp-3">{videoData.title}</p>
                </Section>
                <Section type="Card2Image">
                    <Image src={videoData.thumbnail} layout="fill" alt="youtube clip thumbnail" />
                </Section>
                <Section type="Card2Button">
                    <button onClick={() => document.location.href = videoData.url} className={`px-6 rounded bg-youtube-colour hover:brightness-125 h-4/5`}>
                        <p className="text-lg text-colour">Watch Video</p>
                    </button>
                </Section>
            </Card2> : <Card2 height="h-48" />}

        </section>
    )
}

export default YoutubeTwitter