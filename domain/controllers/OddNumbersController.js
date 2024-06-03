// OddNumbersController.js
class OddNumbersController {
    constructor() {}
  
    async getOddNumbers(req, res) {
      try {
        const number = parseInt(req.query.number);
        const oddNumbers = [];
        for (let i = 1; i <= number; i++) {
          if (i % 2 !== 0) {
            oddNumbers.push(i);
          }
        }
        res.json(oddNumbers);
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener los números impares' });
      }
    }
  }
  
  module.exports = OddNumbersController;