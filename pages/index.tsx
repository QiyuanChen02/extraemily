import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import ActionIcon from '../components/actionicon'
import Drawer from '../components/drawer'
import Footer from '../components/footer'
import Logo from '../components/logo'
import Navbar from '../components/navbar'
import Section from '../components/section'
import SocialIcon from '../components/socialicon'
import { Socials } from '../helpers/socialmedialinks'
import useBreakPoint from '../hooks/usebreakpoint'
import RedditYoutube from '../layouts/reddityoutube'
import Twitch from '../layouts/twitch'
import YoutubeTwitter from '../layouts/youtubetwitter'

const socials: Socials[] = ["twitch", "youtube", "discord", "tiktok", "twitter", "reddit", "instagram"]

const Home: NextPage = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const openModal = () => setDrawerOpen(true)
  const closeModal = () => setDrawerOpen(false)

  const { value: isSmall, loading } = useBreakPoint({ base: true, sm: false })

  return (
    <div className={`absolute min-w-full min-h-screen pb-16 bg-colour`}>
      <Head>
        <title>ExtraEmily</title>
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <Navbar>
        {!loading ? <Section type="NavbarLogo">
          <Logo name="ExtraEmily" location="logo.png" hasText={!isSmall} />
        </Section> : <></>}
        {!loading ?
          <Section type="NavbarLinks">
            {isSmall
              ? <ActionIcon icon="charm:menu-hamburger" action={openModal} />
              : <>
                {socials.map(social => <SocialIcon media={social} key={social} />)}
              </>}
          </Section> : <></>}
      </Navbar>

      {drawerOpen && <Drawer closeModal={closeModal}>
        {socials.map((social) => <SocialIcon media={social} key={social} hasText />)}
      </Drawer>}

      <main className='flex flex-col w-full p-5 lg:p-8 bg-colour'>
        <Twitch />
        <RedditYoutube />
        <YoutubeTwitter />
      </main>
      <Footer />
    </div>
  )
}

export default Home
