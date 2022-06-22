import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import Card1 from "../components/card1"

interface PostData {
    title: string,
    thumbnail: string,
    url: string,
}

interface VideoData extends PostData { }

const RedditYoutube = () => {

    const [postData, setPostData] = useState<null | Readonly<PostData>>(null)
    const [videoData, setVideoData] = useState<null | Readonly<VideoData>>(null)

    // Fetches post data from the backend to store as state (needs fixing)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const topPost = await axios.get<PostData>('api/toppost')
                const newestVideo = await axios.get<PostData>('api/video')
                setPostData(topPost.data)
                setVideoData(newestVideo.data)
            } catch (e: any) {
                console.log(e)
            }
        }
        fetchData()
    }, [])

    return (
        <section className="flex flex-col w-full gap-5 lg:gap-10 md:flex-row">

            {videoData && <Card1 imageSrc={videoData.thumbnail}
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
            />}
        </section>
    )
}

export default RedditYoutube