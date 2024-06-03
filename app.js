const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const GitHubAdapter = require('./domain/adapters/GitHubAdapter');
const GitHubPort = require('./domain/ports/GitHubPort');
const GitHubRepository = require('./domain/repositories/GitHubRepository');
const GitHubService = require('./domain/services/GitHubService');
const GetPopularRepos = require('./domain/usecases/GetPopularRepos');
const GitHubPresenter = require('./domain/presenters/GitHubPresenter');
const GitHubController = require('./domain/controllers/GitHubController');

const OddNumbersController = require('./domain/controllers/OddNumbersController');
const GetOddNumbers = require('./domain/usecases/GetOddNumbers');


const app = express();

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'GitHub API',
      description: 'API para obtener los 10 repositorios más populares del usuario "google"',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./app.js'],
  
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));





// Configuración de la aplicación
const gitHubAdapter = new GitHubAdapter();
const gitHubPort = new GitHubPort(gitHubAdapter);
const gitHubRepository = new GitHubRepository(gitHubPort);
const gitHubService = new GitHubService(gitHubRepository);
const getPopularRepos = new GetPopularRepos(gitHubService);
const gitHubPresenter = new GitHubPresenter();
const gitHubController = new GitHubController(getPopularRepos, gitHubPresenter);

/**
 * @swagger
 * /api/repos:
 *   get:
 *     summary: Obtener los 10 repositorios más populares del usuario "google"
 *     description: Devuelve una lista de los 10 repositorios más populares del usuario "google"
 *     responses:
 *       200:
 *         description: Lista de repositorios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Repository'
 * components:
 *   schemas:
 *     Repository:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         stargazers_count:
 *           type: integer
 *         forks_count:
 *           type: integer
 */
app.get('/api/repos', (req, res) => gitHubController.getPopularRepositories(req, res));



// Configuración del endpoint de números impares

  /**
   * @swagger
   * /api/odd-numbers:
   *   get:
   *     summary: Obtener números impares
   *     description: Obtiene un array de números impares desde 1 hasta el número de entrada
   *     parameters:
   *       - in: query
   *         name: number
   *         description: El número de entrada
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: El array de números impares
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: integer
   *       500:
   *         description: Error al obtener los números impares
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                   description: Mensaje de error
   */
  app.get('/api/odd-numbers', (req, res) => {
    const oddNumbersController = new OddNumbersController();
    oddNumbersController.getOddNumbers(req, res);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});