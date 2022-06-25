import Image from "next/image"
import Button from "../components/button"
import Card2 from "../components/card2"
import Section from "../components/section"
import useBreakPoint from "../hooks/usebreakpoint"
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
    const isMedium = useBreakPoint({ base: true, lg: false })
    const isSmall = useBreakPoint({ base: true, md: false })

    const vodImageSrc = vodData && vodData['thumbnail_url'].replace("%{width}", "640").replace("%{height}", "360");

    return (
        <section className="flex flex-col items-stretch mb-5 lg:mb-8 lg:flex-row">
            <div className="w-full lg:w-3/5 aspect-video">
                <iframe
                    src="https://player.twitch.tv/?channel=extraemily&parent=extraemily.com&parent=extraemily.vercel.app&parent=localhost"
                    height="100%"
                    width="100%"
                    allowFullScreen>
                </iframe>
            </div>

            <div className="flex flex-col w-full gap-5 mt-5 md:flex-row lg:flex-col lg:gap-8 lg:mt-0 lg:ml-8 lg:w-2/5">

                {vodData ? <Card2 height={isMedium ? "h-48" : null} width={isSmall || !isMedium ? 'w-full' : null}>
                    <Section type="Card2Text">
                        <h2 className="text-lg text-twitch-colour">Twitch - Latest VOD</h2>
                        <p className="text-md text-colour line-clamp-2 2xl:line-clamp-3">{vodData.title}</p>
                    </Section>
                    <Section type="Card2Image">
                        <Image src={vodImageSrc ? vodImageSrc : 'https://vod-secure.twitch.tv/_404/404_processing_320x180.png'} layout="fill" alt="newest VOD thumbnail" />
                    </Section>
                    <Section type="Card2Button">
                        <Button url={vodData.url} colour="bg-twitch-colour">
                            <p className="text-lg text-colour">Watch VOD</p>
                        </Button>
                    </Section>
                </Card2> : <Card2 height="h-56" width={isSmall || !isMedium ? 'w-full' : null} />}

                {clipData ? <Card2 height={isSmall ? "h-48" : null} width={isSmall || !isMedium ? 'w-full' : null}>
                    <Section type="Card2Text">
                        <h2 className="text-lg text-twitch-colour">Twitch - Top Clip</h2>
                        <p className="text-md text-colour line-clamp-2 2xl:line-clamp-3">{clipData.title}</p>
                    </Section>
                    <Section type="Card2Image">
                        <Image src={clipData['thumbnail_url']} layout="fill" alt="top twitch clip thumbnail" />
                    </Section>
                    <Section type="Card2Button">
                        <Button url={clipData.url} colour="bg-twitch-colour">
                            <p className="text-lg text-colour">Watch Clip</p>
                        </Button>
                    </Section>
                </Card2> : <Card2 height="h-56" width={isSmall || !isMedium ? 'w-full' : null} />}

            </div>
        </section >
    )
}

export default Twitch