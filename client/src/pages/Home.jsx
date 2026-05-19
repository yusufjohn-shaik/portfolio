import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Journey from '../components/sections/Journey'
import Experience from '../components/sections/Experience'
import CodingProfiles from '../components/sections/CodingProfiles'
import GitHubStats from '../components/sections/GitHubStats'
import LeetCodeStats from '../components/sections/LeetCodeStats'
import Certifications from '../components/sections/Certifications'
import Blogs from '../components/sections/Blogs'
import Contact from '../components/sections/Contact'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shaik Yusuf John | Frontend Developer & CSE Student</title>
        <meta
          name="description"
          content="CSE student focused on frontend development, DSA, Flask and AI exploration. Building real-world projects."
        />
        <meta name="author" content="Shaik Yusuf John" />
      </Helmet>

      <Navbar />
      <Sidebar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Experience />
        <CodingProfiles />
        <Certifications />
        <Blogs />
        <GitHubStats />
        <LeetCodeStats />
        <Contact />
        <CTA />
      </main>

      <Footer />
    </>
  )
}
