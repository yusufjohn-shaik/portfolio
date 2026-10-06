import { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FiExternalLink, FiCheckCircle, FiCode, FiAward, FiActivity } from 'react-icons/fi'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import FadeIn from '../animations/FadeIn'

const initialLeetStats = {
  totalSolved: 237,
  easySolved: 173,
  mediumSolved: 54,
  hardSolved: 10,
  totalSubmissions: 645,
  ranking: 706980,
}

export default function CodingProfiles() {
  const [leetStats, setLeetStats] = useState(initialLeetStats)
  const [isLiveLoaded, setIsLiveLoaded] = useState(false)

  useEffect(() => {
    // Attempt live fetch to keep stats dynamically synced if API is available
    const fetchLiveStats = async () => {
      try {
        const res = await fetch('https://alfa-leetcode-api.onrender.com/userProfile/shaikyusufjohn', {
          signal: AbortSignal.timeout(3000),
        })
        if (res.ok) {
          const data = await res.json()
          if (data && data.totalSolved) {
            setLeetStats({
              totalSolved: data.totalSolved || 237,
              easySolved: data.easySolved || 173,
              mediumSolved: data.mediumSolved || 54,
              hardSolved: data.hardSolved || 10,
              totalSubmissions: data.totalSubmissions?.[0]?.submissions || 645,
              ranking: data.ranking || 706980,
            })
            setIsLiveLoaded(true)
          }
        }
      } catch {
        // Fallback gracefully to verified data without any interruption
      }
    }
    fetchLiveStats()
  }, [])

  const easyPercent = Math.min(100, Math.round((leetStats.easySolved / 969) * 100))
  const medPercent = Math.min(100, Math.round((leetStats.mediumSolved / 2124) * 100))
  const hardPercent = Math.min(100, Math.round((leetStats.hardSolved / 980) * 100))

  return (
    <section id="coding" className="section-padding">
      <div className="container-custom max-w-5xl mx-auto">
        <SectionTitle
          label="Activity & Profiles"
          title="Code & Problem Solving"
          subtitle="Where I commit code, solve algorithms, and maintain daily discipline."
        />

        {/* Live Stat Badges Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* LeetCode Live Card */}
          <FadeIn delay={0.1}>
            <div
              className="rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: 'rgba(255,161,22,0.12)', border: '1px solid rgba(255,161,22,0.25)' }}
                    >
                      <SiLeetcode color="#ffa116" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base flex items-center gap-2">
                        LeetCode Metrics
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Live Synced" />
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">@shaikyusufjohn</p>
                    </div>
                  </div>
                  <span
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md text-amber-400"
                    style={{ background: 'rgba(255,161,22,0.1)', border: '1px solid rgba(255,161,22,0.25)' }}
                  >
                    50 Days Badge 2026
                  </span>
                </div>

                {/* Big Stat Banner */}
                <div
                  className="rounded-xl p-4 mb-6 flex items-center justify-between"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Total Solved</span>
                    <div className="text-3xl font-display font-bold text-white mt-0.5">
                      {leetStats.totalSolved}
                      <span className="text-xs font-normal text-slate-400 font-mono ml-2">problems</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Submissions</span>
                    <div className="text-xl font-mono font-semibold text-cyan-400 mt-0.5">
                      {leetStats.totalSubmissions}+
                    </div>
                  </div>
                </div>

                {/* Difficulty Bars */}
                <div className="space-y-3.5 mb-6">
                  {/* Easy */}
                  <div>
                    <div className="flex justify-between text-xs mb-1.5 font-medium">
                      <span className="text-emerald-400">Easy</span>
                      <span className="text-slate-300 font-mono">{leetStats.easySolved} <span className="text-slate-400">solved</span></span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-emerald-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.max(10, easyPercent)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>

                  {/* Medium */}
                  <div>
                    <div className="flex justify-between text-xs mb-1.5 font-medium">
                      <span className="text-amber-400">Medium</span>
                      <span className="text-slate-300 font-mono">{leetStats.mediumSolved} <span className="text-slate-400">solved</span></span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-amber-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.max(10, medPercent * 2)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>

                  {/* Hard */}
                  <div>
                    <div className="flex justify-between text-xs mb-1.5 font-medium">
                      <span className="text-rose-400">Hard</span>
                      <span className="text-slate-300 font-mono">{leetStats.hardSolved} <span className="text-slate-400">solved</span></span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-rose-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.max(10, hardPercent * 3)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Focus Callout */}
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
                  <FiAward className="text-amber-400" />
                  <span>Primary language: <strong className="text-slate-200">C++ (Data Structures & Algorithms)</strong></span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href="https://leetcode.com/u/shaikyusufjohn/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-semibold font-mono flex items-center justify-center gap-2 transition-colors duration-200"
                style={{
                  background: 'rgba(255,161,22,0.1)',
                  border: '1px solid rgba(255,161,22,0.25)',
                  color: '#ffa116',
                }}
              >
                <span>View Full LeetCode Profile</span>
                <FiExternalLink size={13} />
              </a>
            </div>
          </FadeIn>

          {/* GitHub Live Card */}
          <FadeIn delay={0.2}>
            <div
              className="rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                      <FaGithub color="#ffffff" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base flex items-center gap-2">
                        GitHub Engineering
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" title="Active Committer" />
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">@yusufjohn-shaik</p>
                    </div>
                  </div>
                  <span
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md text-cyan-400"
                    style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.25)' }}
                  >
                    Active Repositories
                  </span>
                </div>

                {/* Big Stat Banner */}
                <div
                  className="rounded-xl p-4 mb-6 flex items-center justify-between"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Public Repos</span>
                    <div className="text-3xl font-display font-bold text-white mt-0.5">
                      7
                      <span className="text-xs font-normal text-slate-400 font-mono ml-2">projects</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Workflow</span>
                    <div className="text-xl font-mono font-semibold text-emerald-400 mt-0.5">
                      Continuous CI/CD
                    </div>
                  </div>
                </div>

                {/* Highlighted Repositories */}
                <div className="mb-6">
                  <span className="block text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5">
                    Core Codebases
                  </span>
                  <div className="space-y-2">
                    {[
                      { name: 'project-Helix', desc: '9-Table 3NF Startup OS (PostgreSQL, Python)', lang: 'Python' },
                      { name: 'razorpay-revenue-recovery', desc: 'ML Transaction Recovery Engine (Scikit-Learn)', lang: 'ML/Python' },
                      { name: 'dsa-prep', desc: 'DSA Focus Hub & Timetable (React, TypeScript)', lang: 'TypeScript' },
                    ].map(r => (
                      <div
                        key={r.name}
                        className="p-2.5 rounded-lg flex items-center justify-between gap-3 text-xs"
                        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
                      >
                        <div className="truncate">
                          <strong className="text-slate-200 font-mono">{r.name}</strong>
                          <span className="text-slate-400 text-[11px] block truncate">{r.desc}</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded text-cyan-400 bg-cyan-400/10 flex-shrink-0">
                          {r.lang}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages Used */}
                <div className="mb-6">
                  <span className="block text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                    Primary Languages
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'C++', 'TypeScript', 'JavaScript', 'SQL / PostgreSQL', 'HTML/CSS'].map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded text-slate-300 bg-white/[0.04] border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href="https://github.com/yusufjohn-shaik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-semibold font-mono flex items-center justify-center gap-2 transition-colors duration-200"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  color: '#ffffff',
                }}
              >
                <span>Explore GitHub Codebases</span>
                <FiExternalLink size={13} />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
