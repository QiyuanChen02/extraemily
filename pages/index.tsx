import { Icon } from '@iconify/react'
import type { NextPage } from 'next'
import { useState } from 'react'
import ActionIcon from '../components/actionicon'
import Drawer from '../components/drawer'
import Logo from '../components/logo'
import Navbar from '../components/navbar'
import SocialIcon from '../components/socialicon'
import RedditYoutube from '../layouts/reddityoutube'
import Twitch from '../layouts/twitch'

const SocialLinks = () => {
  return (
    <>
      <SocialIcon media="twitch" />
      <SocialIcon media="youtube" />
      <SocialIcon media="discord" />
      <SocialIcon media="tiktok" />
      <SocialIcon media="twitter" />
      <SocialIcon media="reddit" />
      <SocialIcon media="instagram" />
    </>
  )
}

const Home: NextPage = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const openModal = () => setDrawerOpen(true)
  const closeModal = () => setDrawerOpen(false)

  return (
    <>
      <Navbar
        logo={<Logo name="ExtraEmily" location="logo.png" hasText={true} />}
        links={<SocialLinks />}
        logosmall={<Logo name="ExtraEmily" location="logo.png" hasText={false} />}
        linkssmall={<ActionIcon icon="charm:menu-hamburger" action={openModal} />}
      />

      {drawerOpen && <Drawer closeModal={closeModal} />}

      <main className='flex flex-col w-full p-5 lg:p-8 bg-colour'>
        <Twitch />
        <RedditYoutube />
        <blockquote className="twitter-tweet"><a href="https://twitter.com/extraemilyy/status/1538907561843429379"></a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
      </main>
    </>
  )
}

export default Home
