class GitHubRepository {
    constructor(gitHubPort) {
      this.gitHubPort = gitHubPort;
    }
  
    async getPopularRepos() {
      return await this.gitHubPort.getPopularRepos();
    }
  }
  
  module.exports = GitHubRepository;