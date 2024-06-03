class GetPopularRepos {
    constructor(gitHubService) {
      this.gitHubService = gitHubService;
    }
  
    async execute() {
      return await this.gitHubService.getPopularRepos();
    }
  }
  
  module.exports = GetPopularRepos;