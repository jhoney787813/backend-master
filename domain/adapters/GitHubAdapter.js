const axios = require('axios');

class GitHubAdapter {
  async getPopularRepos(username) {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
      params: {
        sort: 'stars',
        direction: 'desc',
        per_page: 10,
      },
    });
    return response.data;
  }
}

module.exports = GitHubAdapter;