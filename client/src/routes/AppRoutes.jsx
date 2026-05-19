import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Loader from '../components/ui/Loader'

const Home = lazy(() => import('../pages/Home'))
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'))
const BlogPage = lazy(() => import('../pages/BlogPage'))
const NotesPage = lazy(() => import('../pages/NotesPage'))
const ResumePage = lazy(() => import('../pages/ResumePage'))
const NotFound = lazy(() => import('../pages/NotFound'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
