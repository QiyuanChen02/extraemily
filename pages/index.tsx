import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import ActionIcon from '../components/actionicon'
import Drawer from '../components/drawer'
import Footer from '../components/footer'
import Logo from '../components/logo'
import Navbar from '../components/navbar'
import Section from '../components/section'
import SocialIcon, { Socials } from '../components/socialicon'
import useBreakPoint from '../hooks/usebreakpoint'
import RedditYoutube, { PostData, RedditYoutubeProps, VideoData } from '../layouts/reddityoutube'
import Twitch, { ClipData, TwitchProps, VodData } from '../layouts/twitch'
import YoutubeTwitter, { TweetData, YoutubeclipData, YoutubeTwitterProps } from '../layouts/youtubetwitter'

const socials: Socials[] = ["twitch", "youtube", "discord", "tiktok", "twitter", "reddit", "instagram"]

interface IndexProps extends RedditYoutubeProps, TwitchProps, YoutubeTwitterProps { }
const Home: NextPage<IndexProps> = ({ postData, videoData, vodData, clipData, tweetData, youtubeclipData }) => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const openModal = () => setDrawerOpen(true)
  const closeModal = () => setDrawerOpen(false)

  const [isSmall, loading] = useBreakPoint({ base: true, sm: false })

  return (
    <div className={`absolute min-w-full min-h-screen pb-16 bg-colour`}>
      <Head>
        <title>ExtraEmily</title>
        <link rel="icon" type="image/png" href="/logo.png" />
        <meta name="description" content="A website for the Twitch streamer ExtraEmily" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ExtraEmily" />
        <meta property="og:description" content="A website for the Twitch streamer ExtraEmily" />
        <meta property="og:url" content="https://extraemily.vercel.app" />
        <meta property="og:image" content="http://extraemily.vercel.app/_next/image?url=%2Flogo.png&w=2048&q=75" />
      </Head>

      <Navbar>
        <Section type="NavbarLogo" display={!loading}>
          <Logo name="ExtraEmily" location="logo.png" hasText={!isSmall} />
        </Section>

        <Section type="NavbarLinks" display={!loading}>
          {isSmall
            ? <ActionIcon icon="charm:menu-hamburger" action={openModal} ariaLabel={"Open Drawer"} />
            : <>
              {socials.map(social => <SocialIcon media={social} key={social} />)}
            </>}
        </Section>
      </Navbar>

      {drawerOpen && <Drawer closeModal={closeModal}>
        {socials.map((social) => <SocialIcon media={social} key={social} hasText />)}
      </Drawer>}

      <main className='flex flex-col w-full p-5 lg:p-8 bg-colour'>
        <Twitch vodData={vodData} clipData={clipData} />
        <RedditYoutube postData={postData} videoData={videoData} />
        <YoutubeTwitter tweetData={tweetData} youtubeclipData={youtubeclipData} />
      </main>

      <Footer />
    </div>
  )
}

export default Home

// Fetching data serverside
export async function getStaticProps() {

  const fetchData = async <T,>(url: string) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data as T
    } catch (e) {
      console.error(e)
      return null
    }
  }

  const server = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://extraemily.vercel.app'
  const postData = await fetchData<PostData>(`${server}/api/toppost`)
  const videoData = await fetchData<VideoData>(`${server}/api/video`)
  const vodData = await fetchData<VodData>(`${server}/api/vod`)
  const clipData = await fetchData<ClipData>(`${server}/api/topclip`)
  const tweetData = await fetchData<TweetData>(`${server}/api/tweet`)
  const youtubeclipData = await fetchData<YoutubeclipData>(`${server}/api/youtubeclip`)

  return { props: { postData, videoData, vodData, clipData, tweetData, youtubeclipData }, revalidate: 60 }
}
