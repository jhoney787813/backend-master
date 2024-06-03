class GitHubPort {
    constructor(gitHubAdapter) {
      this.gitHubAdapter = gitHubAdapter;
    }
  
    async getPopularRepos() {
      return await this.gitHubAdapter.getPopularRepos('google');
    }
  }
  
  module.exports = GitHubPort;