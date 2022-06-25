import Image from "next/image"
import Card2 from "../components/card2"
import Section from "../components/section"
import useBreakPoint from "../hooks/usebreakpoint"
import useFetchData from "../hooks/usefetchdata"

interface PostData {
    title: string,
    thumbnail: string,
    url: string,
}

interface VideoData {
    title: string,
    thumbnail: string,
    url: string,
}

const RedditYoutube = () => {

    const postData = useFetchData<PostData>('api/toppost')
    const videoData = useFetchData<VideoData>('api/video')
    const isSmall = useBreakPoint({ base: true, md: false })

    return (
        <section className="flex flex-col w-full gap-5 mb-5 lg:gap-8 lg:mb-8 md:flex-row">

            {videoData ? <Card2 height="h-48" width={isSmall ? 'w-full' : ''}>
                <Section type="Card2Text">
                    <h2 className="text-lg text-youtube-colour">Youtube - Newest Video</h2>
                    <p className="text-md text-colour line-clamp-2 2xl:line-clamp-3">{videoData.title}</p>
                </Section>
                <Section type="Card2Image">
                    <Image src={videoData.thumbnail} layout="fill" alt="newest youtube video thumbnail" />
                </Section>
                <Section type="Card2Button">
                    <button onClick={() => document.location.href = videoData.url} className={`px-6 rounded bg-youtube-colour hover:brightness-125 h-4/5`}>
                        <p className="text-lg text-colour">Watch Video</p>
                    </button>
                </Section>
            </Card2> : <Card2 height="h-48" />}
            {postData ? <Card2 height="h-48" width={isSmall ? 'w-full' : ''}>
                <Section type="Card2Text">
                    <h2 className="text-lg text-reddit-colour">Reddit - Hottest Post</h2>
                    <p className="text-md text-colour line-clamp-2 2xl:line-clamp-3">{postData.title}</p>
                </Section>
                <Section type="Card2Image">
                    <Image src={postData.thumbnail === "self" ? "/reddit-thumbnail.png" : postData.thumbnail} layout="fill" alt="top reddit post thumbnail" />
                </Section>
                <Section type="Card2Button">
                    <button onClick={() => document.location.href = postData.url} className={`px-6 rounded bg-reddit-colour hover:brightness-125 h-4/5`}>
                        <p className="text-lg text-colour">View Post</p>
                    </button>
                </Section>
            </Card2> : <Card2 height="h-48" />}
        </section>
    )
}

export default RedditYoutube