class GitHubController {
    constructor(getPopularRepos, gitHubPresenter) {
      this.getPopularRepos = getPopularRepos;
      this.gitHubPresenter = gitHubPresenter;
    }
  
    async getPopularRepositories(req, res) {
      try {
        const popularRepos = await this.getPopularRepos.execute();
        const formattedRepos = this.gitHubPresenter.present(popularRepos);
        res.json(formattedRepos);
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener los repositorios' });
      }
    }
  }
  
  module.exports = GitHubController;