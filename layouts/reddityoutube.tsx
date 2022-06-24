import Image from "next/image"
import Card1 from "../components/card1"
import Card2, { Card2Button, Card2Image, Card2Text } from "../components/card2"
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
                <Card2Text>
                    <h2 className="text-lg text-youtube-colour">Youtube - Newest Video</h2>
                    <p className="text-md text-colour line-clamp-2 2xl:line-clamp-3">{videoData.title}</p>
                </Card2Text>
                <Card2Image>
                    <Image src={videoData.thumbnail} layout="fill" alt="newest youtube video thumbnail" />
                </Card2Image>
                <Card2Button>
                    <button onClick={() => document.location.href = videoData.url} className={`px-6 rounded bg-youtube-colour hover:brightness-125 h-4/5`}>
                        <p className="text-lg text-colour">Watch Video</p>
                    </button>
                </Card2Button>
            </Card2> : <Card2 height="h-48" />}
            {postData ? <Card2 height="h-48" width={isSmall ? 'w-full' : ''}>
                <Card2Text>
                    <h2 className="text-lg text-reddit-colour">Reddit - Hottest Post</h2>
                    <p className="text-md text-colour line-clamp-2 2xl:line-clamp-3">{postData.title}</p>
                </Card2Text>
                <Card2Image>
                    <Image src={postData.thumbnail === "self" ? "/reddit-thumbnail.png" : postData.thumbnail} layout="fill" alt="top reddit post thumbnail" />
                </Card2Image>
                <Card2Button>
                    <button onClick={() => document.location.href = postData.url} className={`px-6 rounded bg-reddit-colour hover:brightness-125 h-4/5`}>
                        <p className="text-lg text-colour">View Post</p>
                    </button>
                </Card2Button>
            </Card2> : <Card2 height="h-48" />}

            {/* {videoData && <Card1 imageSrc={videoData.thumbnail}
                upperText={"Youtube - Latest Video"}
                lowerText={videoData.title}
                buttonText={"Watch video"}
                handleClick={() => document.location.href = videoData.url}
                height={60}
                textColour={"text-youtube-colour"}
                buttonColour={"bg-youtube-colour"}
            />}

            {postData && <Card1 imageSrc={postData.thumbnail === "self" ? "/reddit-thumbnail.png" : postData.thumbnail}
                upperText={"Reddit - Hottest Post"}
                lowerText={postData.title}
                buttonText={"View post"}
                height={60}
                handleClick={() => document.location.href = postData.url}
                textColour={"text-reddit-colour"}
                buttonColour={"bg-reddit-colour"}
            />} */}
        </section>
    )
}

export default RedditYoutube