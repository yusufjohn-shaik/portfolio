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
import Certifications from '../components/sections/Certifications'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shaik Yusuf John | Full Stack Developer & CSE Student</title>
        <meta
          name="description"
          content="CSE student focused on full stack development with React and Flask, DSA problem solving, and modern web engineering."
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
        <CodingProfiles />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
