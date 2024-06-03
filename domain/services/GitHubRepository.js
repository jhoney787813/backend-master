// domain/services/GitHubRepository.js
const axios = require('axios');

class GitHubRepository {
  async getPopularRepos() {
    const response = await axios.get('https://api.github.com/users/google/repos', {
      params: {
        sort: 'stars',
        direction: 'desc',
        per_page: 10,
      },
    });
    return response.data;
  }
}

module.exports = GitHubRepository;