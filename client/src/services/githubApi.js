import axios from 'axios'

const GITHUB_API = 'https://api.github.com'
const USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'yourusername'
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN

const headers = TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}

const githubClient = axios.create({
  baseURL: GITHUB_API,
  headers,
})

export const githubApi = {
  getProfile: () => githubClient.get(`/users/${USERNAME}`).then(r => r.data),

  getRepos: (sort = 'stars', per_page = 20) =>
    githubClient
      .get(`/users/${USERNAME}/repos`, { params: { sort, per_page, type: 'owner' } })
      .then(r => r.data),

  getPinnedRepos: async () => {
    // GitHub GraphQL for pinned repos
    if (!TOKEN) return []
    const query = `{
      user(login: "${USERNAME}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name description url stargazerCount forkCount
              primaryLanguage { name color }
              repositoryTopics(first: 5) {
                nodes { topic { name } }
              }
            }
          }
        }
      }
    }`
    const res = await axios.post(
      'https://api.github.com/graphql',
      { query },
      { headers: { Authorization: `Bearer ${TOKEN}` } }
    )
    return res.data.data.user.pinnedItems.nodes
  },

  getContributions: async () => {
    // Placeholder - use backend proxy for real data
    return null
  },

  getLanguageStats: async () => {
    const repos = await githubApi.getRepos('updated', 30)
    const langs = {}
    await Promise.all(
      repos.slice(0, 10).map(async (repo) => {
        try {
          const res = await githubClient.get(`/repos/${USERNAME}/${repo.name}/languages`)
          Object.entries(res.data).forEach(([lang, bytes]) => {
            langs[lang] = (langs[lang] || 0) + bytes
          })
        } catch {}
      })
    )
    const total = Object.values(langs).reduce((a, b) => a + b, 0)
    return Object.entries(langs)
      .map(([name, bytes]) => ({ name, bytes, pct: ((bytes / total) * 100).toFixed(1) }))
      .sort((a, b) => b.bytes - a.bytes)
      .slice(0, 8)
  },
}
