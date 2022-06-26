import Image from "next/image"
import Button from "../components/button"
import Card from "../components/card"
import Section from "../components/section"
import useFetchData from "../hooks/usefetchdata"

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

    const vodData = useFetchData<VodData>('api/vod')
    const clipData = useFetchData<ClipData>('api/topclip')

    const vodImageSrc = vodData && vodData['thumbnail_url'].replace("%{width}", "640").replace("%{height}", "360");

    return (
        <section className="flex flex-col mb-5 lg:mb-8 lg:flex-row">
            <iframe
                src="https://player.twitch.tv/?channel=extraemily&parent=extraemily.com&parent=extraemily.vercel.app&parent=localhost"
                className="w-full h-full aspect-video lg:w-3/5"
                allowFullScreen>
            </iframe>

            <div className="flex flex-col w-full gap-5 mt-5 md:flex-row lg:flex-col lg:gap-8 lg:mt-0 lg:ml-8 lg:w-2/5">

                {vodData ? <Card height="h-48 lg:h-1/2" width="w-full md:w-1/2 lg:w-full">
                    <Section type="CardText">
                        <h2 className="text-lg text-twitch-colour">Twitch - Latest VOD</h2>
                        <p className="text-md text-colour line-clamp-2 2xl:line-clamp-3">{vodData.title}</p>
                    </Section>
                    <Section type="CardImage">
                        <Image src={vodImageSrc ? vodImageSrc : 'https://vod-secure.twitch.tv/_404/404_processing_320x180.png'} layout="fill" alt="newest VOD thumbnail" />
                    </Section>
                    <Section type="CardButton">
                        <Button url={vodData.url} colour="bg-twitch-colour">
                            <p className="text-lg text-colour">Watch VOD</p>
                        </Button>
                    </Section>
                </Card> : <Card height="h-48 lg:h-1/2" width="w-full md:w-1/2 lg:w-full" />}

                {clipData ? <Card height="h-48 lg:h-1/2" width="w-full md:w-1/2 lg:w-full">
                    <Section type="CardText">
                        <h2 className="text-lg text-twitch-colour">Twitch - Top Clip</h2>
                        <p className="text-md text-colour line-clamp-2 2xl:line-clamp-3">{clipData.title}</p>
                    </Section>
                    <Section type="CardImage">
                        <Image src={clipData['thumbnail_url']} layout="fill" alt="top twitch clip thumbnail" />
                    </Section>
                    <Section type="CardButton">
                        <Button url={clipData.url} colour="bg-twitch-colour">
                            <p className="text-lg text-colour">Watch Clip</p>
                        </Button>
                    </Section>
                </Card> : <Card height="h-48 lg:h-1/2" width="w-full md:w-1/2 lg:w-full" />}

            </div>
        </section>
    )
}

export default Twitch