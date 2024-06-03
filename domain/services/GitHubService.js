class GitHubService {
  constructor(gitHubRepository) {
    this.gitHubRepository = gitHubRepository;
  }

  async getPopularRepos() {
    return await this.gitHubRepository.getPopularRepos();
  }
}

module.exports = GitHubService;