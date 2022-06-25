import Image from "next/image"
import Button from "../components/button"
import Card2 from "../components/card2"
import Section from "../components/section"
import useBreakPoint from "../hooks/usebreakpoint"
import useConsole from "../hooks/useconsole"
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
    useConsole(isSmall)

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
                    <Button url={videoData.url} colour="bg-youtube-colour">
                        <p className="text-lg text-colour">Watch Video</p>
                    </Button>
                </Section>
            </Card2> : <Card2 height="h-48" width={isSmall ? 'w-full' : ''} />}
            {postData ? <Card2 height="h-48" width={isSmall ? 'w-full' : ''}>
                <Section type="Card2Text">
                    <h2 className="text-lg text-reddit-colour">Reddit - Hottest Post</h2>
                    <p className="text-md text-colour line-clamp-2 2xl:line-clamp-3">{postData.title}</p>
                </Section>
                <Section type="Card2Image">
                    <Image src={postData.thumbnail === "self" ? "/reddit-thumbnail.png" : postData.thumbnail} layout="fill" alt="top reddit post thumbnail" />
                </Section>
                <Section type="Card2Button">
                    <Button url={postData.url} colour="bg-reddit-colour">
                        <p className="text-lg text-colour">Go To Post</p>
                    </Button>
                </Section>
            </Card2> : <Card2 height="h-48" width={isSmall ? 'w-full' : ''} />}
        </section>
    )
}

export default RedditYoutube