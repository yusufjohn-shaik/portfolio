import axios from 'axios'

const LEETCODE_API = 'https://leetcode-stats-api.herokuapp.com'

export const leetcodeApi = {
  getStats: async (username) => {
    const res = await axios.get(`${LEETCODE_API}/${username}`)
    return res.data
  },

  // Unofficial GQL endpoint
  getProfile: async (username) => {
    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          username
          profile { realName ranking userAvatar }
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty count submissions
            }
          }
          badges { name }
        }
      }
    `
    const res = await axios.post(
      'https://leetcode.com/graphql',
      { query, variables: { username } },
      { headers: { 'Content-Type': 'application/json' } }
    )
    return res.data?.data?.matchedUser
  },
}
