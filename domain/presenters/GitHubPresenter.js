class GitHubPresenter {
    present(repos) {
      return repos.map((repo) => ({
        name: repo.name,
        description: repo.description,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
      }));
    }
  }
  
  module.exports = GitHubPresenter;