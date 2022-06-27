import Image from "next/image"
import Button from "../components/button"
import Card from "../components/card"
import Section from "../components/section"

export interface PostData {
    title: string,
    thumbnail: string,
    url: string,
}

export interface VideoData {
    title: string,
    thumbnail: string,
    url: string,
}

export interface RedditYoutubeProps {
    postData: PostData | null,
    videoData: VideoData | null,
}

const RedditYoutube = ({ postData, videoData }: RedditYoutubeProps) => {

    return (
        <section className="flex flex-col w-full gap-5 mb-5 lg:gap-8 lg:mb-8 md:flex-row">
            {videoData ? <Card height="h-48 xl:h-60" width="w-full md:w-1/2">
                <Section type="CardText">
                    <h2 className="text-lg text-youtube-colour">Youtube - Newest Video</h2>
                    <p className="text-md text-colour line-clamp-2 2xl:line-clamp-3">{videoData.title}</p>
                </Section>
                <Section type="CardImage">
                    <Image src={videoData.thumbnail} layout="fill" alt="newest youtube video thumbnail" />
                </Section>
                <Section type="CardButton">
                    <Button url={videoData.url} colour="bg-youtube-colour">
                        <p className="text-lg text-colour">Watch Video</p>
                    </Button>
                </Section>
            </Card> : <Card height="h-48 xl:h-60" width="w-full md:w-1/2" />}
            {postData ? <Card height="h-48 xl:h-60" width="w-full md:w-1/2">
                <Section type="CardText">
                    <h2 className="text-lg text-reddit-colour">Reddit - Hottest Post</h2>
                    <p className="text-md text-colour line-clamp-2 2xl:line-clamp-3">{postData.title}</p>
                </Section>
                <Section type="CardImage">
                    <Image src={postData.thumbnail === "self" ? "/reddit-thumbnail.png" : postData.thumbnail} layout="fill" alt="top reddit post thumbnail" />
                </Section>
                <Section type="CardButton">
                    <Button url={postData.url} colour="bg-reddit-colour">
                        <p className="text-lg text-colour">Go To Post</p>
                    </Button>
                </Section>
            </Card> : <Card height="h-48 xl:h-60" width="w-full md:w-1/2" />}
        </section>
    )
}

export default RedditYoutube

