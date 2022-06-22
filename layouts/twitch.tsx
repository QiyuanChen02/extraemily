import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import Card1 from "../components/card1"

interface VodData {
    "id": string,
    "stream_id": string,
    "user_id": string,
    "user_login": string,
    "user_name": string,
    "title": string,
    "description": string,
    "created_at": string,
    "published_at": string,
    "url": string,
    "thumbnail_url": string,
    "viewable": string,
    "view_count": number,
    "language": string,
    "type": string,
    "duration": string,
    "muted_segments": null
}
interface ClipData {

    "id": string,
    "url": string,
    "embed_url": string,
    "broadcaster_id": string,
    "broadcaster_name": string,
    "creator_id": string,
    "creator_name": string,
    "video_id": string,
    "game_id": string,
    "language": string,
    "title": string,
    "view_count": number,
    "created_at": string,
    "thumbnail_url": string,
    "duration": number
}

const Twitch = () => {

    const [vodData, setVodData] = useState<null | Readonly<VodData>>(null)
    const [clipData, setClipData] = useState<null | Readonly<ClipData>>(null)

    // Fetches clip and vod data from the backend to store as state
    useEffect(() => {
        const fetchData = async () => {
            try {
                const topclip = await axios.get<ClipData>('api/topclip')
                const vod = await axios.get<VodData>('api/vod')
                setClipData(topclip.data)
                setVodData(vod.data)
            } catch (e: any) {
                console.log(e)
            }
        }
        fetchData()
    }, [])

    const vodImageSrc = vodData && vodData['thumbnail_url'].replace("%{width}", "640").replace("%{height}", "360")

    return (
        <section className="flex flex-col items-stretch mb-5 lg:mb-8 lg:flex-row">
            <div className="w-full lg:w-3/5 aspect-video">
                <iframe
                    src="https://player.twitch.tv/?channel=extraemily&parent=localhost&extraemily.com&extraemily.vercel.app"
                    height="100%"
                    width="100%"
                    allowFullScreen>
                </iframe>
            </div>

            <div className="flex flex-col w-full gap-5 mt-5 md:flex-row lg:flex-col lg:gap-8 lg:mt-0 lg:ml-8 lg:w-2/5">

                {vodData && <Card1 imageSrc={vodImageSrc!}
                    upperText={"Twitch - Latest VOD"}
                    lowerText={vodData.title}
                    buttonText={"Watch VOD"}
                    handleClick={() => document.location.href = vodData.url}
                />}

                {clipData && <Card1 imageSrc={clipData['thumbnail_url']}
                    upperText={"Twitch - Top Clip"}
                    lowerText={clipData.title}
                    buttonText={"Watch Clip"}
                    handleClick={() => document.location.href = clipData.url}
                />}
            </div>
        </section>
    )
}

export default Twitch